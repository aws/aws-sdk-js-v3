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
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
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
  IdentificationHints,
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
  ServiceQuotaExceededException,
  SourceProperties,
  SourceServer,
  SourceServerActionDocument,
  SourceServerActionsRequestFilters,
  SsmDocument,
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

export const serializeAws_restJson1ArchiveApplicationCommand = async (
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

export const serializeAws_restJson1ArchiveWaveCommand = async (
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

export const serializeAws_restJson1AssociateApplicationsCommand = async (
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
    ...(input.applicationIDs != null && {
      applicationIDs: serializeAws_restJson1ApplicationIDs(input.applicationIDs, context),
    }),
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

export const serializeAws_restJson1AssociateSourceServersCommand = async (
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
      sourceServerIDs: serializeAws_restJson1AssociateSourceServersRequestSourceServerIDs(
        input.sourceServerIDs,
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

export const serializeAws_restJson1ChangeServerLifeCycleStateCommand = async (
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
      lifeCycle: serializeAws_restJson1ChangeServerLifeCycleStateSourceServerLifecycle(input.lifeCycle, context),
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

export const serializeAws_restJson1CreateApplicationCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateLaunchConfigurationTemplateCommand = async (
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
      largeVolumeConf: serializeAws_restJson1LaunchTemplateDiskConf(input.largeVolumeConf, context),
    }),
    ...(input.launchDisposition != null && { launchDisposition: input.launchDisposition }),
    ...(input.licensing != null && { licensing: serializeAws_restJson1Licensing(input.licensing, context) }),
    ...(input.mapAutoTaggingMpeID != null && { mapAutoTaggingMpeID: input.mapAutoTaggingMpeID }),
    ...(input.postLaunchActions != null && {
      postLaunchActions: serializeAws_restJson1PostLaunchActions(input.postLaunchActions, context),
    }),
    ...(input.smallVolumeConf != null && {
      smallVolumeConf: serializeAws_restJson1LaunchTemplateDiskConf(input.smallVolumeConf, context),
    }),
    ...(input.smallVolumeMaxSize != null && { smallVolumeMaxSize: input.smallVolumeMaxSize }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateReplicationConfigurationTemplateCommand = async (
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
      replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(
        input.replicationServersSecurityGroupsIDs,
        context
      ),
    }),
    ...(input.stagingAreaSubnetId != null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
    ...(input.stagingAreaTags != null && {
      stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateWaveCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1DeleteApplicationCommand = async (
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

export const serializeAws_restJson1DeleteJobCommand = async (
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

export const serializeAws_restJson1DeleteLaunchConfigurationTemplateCommand = async (
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

export const serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = async (
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

export const serializeAws_restJson1DeleteSourceServerCommand = async (
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

export const serializeAws_restJson1DeleteVcenterClientCommand = async (
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

export const serializeAws_restJson1DeleteWaveCommand = async (
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

export const serializeAws_restJson1DescribeJobLogItemsCommand = async (
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

export const serializeAws_restJson1DescribeJobsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1DescribeJobsRequestFilters(input.filters, context) }),
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

export const serializeAws_restJson1DescribeLaunchConfigurationTemplatesCommand = async (
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
      launchConfigurationTemplateIDs: serializeAws_restJson1LaunchConfigurationTemplateIDs(
        input.launchConfigurationTemplateIDs,
        context
      ),
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

export const serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = async (
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
      replicationConfigurationTemplateIDs: serializeAws_restJson1ReplicationConfigurationTemplateIDs(
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

export const serializeAws_restJson1DescribeSourceServersCommand = async (
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
    ...(input.filters != null && {
      filters: serializeAws_restJson1DescribeSourceServersRequestFilters(input.filters, context),
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

export const serializeAws_restJson1DescribeVcenterClientsCommand = async (
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

export const serializeAws_restJson1DisassociateApplicationsCommand = async (
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
    ...(input.applicationIDs != null && {
      applicationIDs: serializeAws_restJson1ApplicationIDs(input.applicationIDs, context),
    }),
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

export const serializeAws_restJson1DisassociateSourceServersCommand = async (
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
      sourceServerIDs: serializeAws_restJson1DisassociateSourceServersRequestSourceServerIDs(
        input.sourceServerIDs,
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

export const serializeAws_restJson1DisconnectFromServiceCommand = async (
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

export const serializeAws_restJson1FinalizeCutoverCommand = async (
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

export const serializeAws_restJson1GetLaunchConfigurationCommand = async (
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

export const serializeAws_restJson1GetReplicationConfigurationCommand = async (
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

export const serializeAws_restJson1InitializeServiceCommand = async (
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

export const serializeAws_restJson1ListApplicationsCommand = async (
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
    ...(input.filters != null && {
      filters: serializeAws_restJson1ListApplicationsRequestFilters(input.filters, context),
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

export const serializeAws_restJson1ListSourceServerActionsCommand = async (
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
    ...(input.filters != null && {
      filters: serializeAws_restJson1SourceServerActionsRequestFilters(input.filters, context),
    }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListTemplateActionsCommand = async (
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
    ...(input.filters != null && {
      filters: serializeAws_restJson1TemplateActionsRequestFilters(input.filters, context),
    }),
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

export const serializeAws_restJson1ListWavesCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1ListWavesRequestFilters(input.filters, context) }),
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

export const serializeAws_restJson1MarkAsArchivedCommand = async (
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

export const serializeAws_restJson1PutSourceServerActionCommand = async (
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
    ...(input.documentIdentifier != null && { documentIdentifier: input.documentIdentifier }),
    ...(input.documentVersion != null && { documentVersion: input.documentVersion }),
    ...(input.mustSucceedForCutover != null && { mustSucceedForCutover: input.mustSucceedForCutover }),
    ...(input.order != null && { order: input.order }),
    ...(input.parameters != null && {
      parameters: serializeAws_restJson1SsmDocumentParameters(input.parameters, context),
    }),
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

export const serializeAws_restJson1PutTemplateActionCommand = async (
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
    ...(input.documentIdentifier != null && { documentIdentifier: input.documentIdentifier }),
    ...(input.documentVersion != null && { documentVersion: input.documentVersion }),
    ...(input.launchConfigurationTemplateID != null && {
      launchConfigurationTemplateID: input.launchConfigurationTemplateID,
    }),
    ...(input.mustSucceedForCutover != null && { mustSucceedForCutover: input.mustSucceedForCutover }),
    ...(input.operatingSystem != null && { operatingSystem: input.operatingSystem }),
    ...(input.order != null && { order: input.order }),
    ...(input.parameters != null && {
      parameters: serializeAws_restJson1SsmDocumentParameters(input.parameters, context),
    }),
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

export const serializeAws_restJson1RemoveSourceServerActionCommand = async (
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

export const serializeAws_restJson1RemoveTemplateActionCommand = async (
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

export const serializeAws_restJson1RetryDataReplicationCommand = async (
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

export const serializeAws_restJson1StartCutoverCommand = async (
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
      sourceServerIDs: serializeAws_restJson1StartCutoverRequestSourceServerIDs(input.sourceServerIDs, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1StartReplicationCommand = async (
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

export const serializeAws_restJson1StartTestCommand = async (
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
      sourceServerIDs: serializeAws_restJson1StartTestRequestSourceServerIDs(input.sourceServerIDs, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1TerminateTargetInstancesCommand = async (
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
      sourceServerIDs: serializeAws_restJson1TerminateTargetInstancesRequestSourceServerIDs(
        input.sourceServerIDs,
        context
      ),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1UnarchiveApplicationCommand = async (
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

export const serializeAws_restJson1UnarchiveWaveCommand = async (
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateApplicationCommand = async (
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

export const serializeAws_restJson1UpdateLaunchConfigurationCommand = async (
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
    ...(input.licensing != null && { licensing: serializeAws_restJson1Licensing(input.licensing, context) }),
    ...(input.mapAutoTaggingMpeID != null && { mapAutoTaggingMpeID: input.mapAutoTaggingMpeID }),
    ...(input.name != null && { name: input.name }),
    ...(input.postLaunchActions != null && {
      postLaunchActions: serializeAws_restJson1PostLaunchActions(input.postLaunchActions, context),
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

export const serializeAws_restJson1UpdateLaunchConfigurationTemplateCommand = async (
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
      largeVolumeConf: serializeAws_restJson1LaunchTemplateDiskConf(input.largeVolumeConf, context),
    }),
    ...(input.launchConfigurationTemplateID != null && {
      launchConfigurationTemplateID: input.launchConfigurationTemplateID,
    }),
    ...(input.launchDisposition != null && { launchDisposition: input.launchDisposition }),
    ...(input.licensing != null && { licensing: serializeAws_restJson1Licensing(input.licensing, context) }),
    ...(input.mapAutoTaggingMpeID != null && { mapAutoTaggingMpeID: input.mapAutoTaggingMpeID }),
    ...(input.postLaunchActions != null && {
      postLaunchActions: serializeAws_restJson1PostLaunchActions(input.postLaunchActions, context),
    }),
    ...(input.smallVolumeConf != null && {
      smallVolumeConf: serializeAws_restJson1LaunchTemplateDiskConf(input.smallVolumeConf, context),
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

export const serializeAws_restJson1UpdateReplicationConfigurationCommand = async (
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
      replicatedDisks: serializeAws_restJson1ReplicationConfigurationReplicatedDisks(input.replicatedDisks, context),
    }),
    ...(input.replicationServerInstanceType != null && {
      replicationServerInstanceType: input.replicationServerInstanceType,
    }),
    ...(input.replicationServersSecurityGroupsIDs != null && {
      replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(
        input.replicationServersSecurityGroupsIDs,
        context
      ),
    }),
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
    ...(input.stagingAreaSubnetId != null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
    ...(input.stagingAreaTags != null && {
      stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
    }),
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

export const serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = async (
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
      replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(
        input.replicationServersSecurityGroupsIDs,
        context
      ),
    }),
    ...(input.stagingAreaSubnetId != null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
    ...(input.stagingAreaTags != null && {
      stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
    }),
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

export const serializeAws_restJson1UpdateSourceServerReplicationTypeCommand = async (
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

export const serializeAws_restJson1UpdateWaveCommand = async (
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

export const deserializeAws_restJson1ArchiveApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ArchiveApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationAggregatedStatus != null) {
    contents.applicationAggregatedStatus = deserializeAws_restJson1ApplicationAggregatedStatus(
      data.applicationAggregatedStatus,
      context
    );
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

const deserializeAws_restJson1ArchiveApplicationCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ArchiveWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ArchiveWaveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ArchiveWaveCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.waveAggregatedStatus != null) {
    contents.waveAggregatedStatus = deserializeAws_restJson1WaveAggregatedStatus(data.waveAggregatedStatus, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

const deserializeAws_restJson1ArchiveWaveCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateApplicationsCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSourceServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateSourceServersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateSourceServersCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ChangeServerLifeCycleStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeServerLifeCycleStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ChangeServerLifeCycleStateCommandError(output, context);
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
    contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

const deserializeAws_restJson1ChangeServerLifeCycleStateCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationAggregatedStatus != null) {
    contents.applicationAggregatedStatus = deserializeAws_restJson1ApplicationAggregatedStatus(
      data.applicationAggregatedStatus,
      context
    );
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

const deserializeAws_restJson1CreateApplicationCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateLaunchConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLaunchConfigurationTemplateCommandError(output, context);
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
    contents.largeVolumeConf = deserializeAws_restJson1LaunchTemplateDiskConf(data.largeVolumeConf, context);
  }
  if (data.launchConfigurationTemplateID != null) {
    contents.launchConfigurationTemplateID = __expectString(data.launchConfigurationTemplateID);
  }
  if (data.launchDisposition != null) {
    contents.launchDisposition = __expectString(data.launchDisposition);
  }
  if (data.licensing != null) {
    contents.licensing = deserializeAws_restJson1Licensing(data.licensing, context);
  }
  if (data.mapAutoTaggingMpeID != null) {
    contents.mapAutoTaggingMpeID = __expectString(data.mapAutoTaggingMpeID);
  }
  if (data.postLaunchActions != null) {
    contents.postLaunchActions = deserializeAws_restJson1PostLaunchActions(data.postLaunchActions, context);
  }
  if (data.smallVolumeConf != null) {
    contents.smallVolumeConf = deserializeAws_restJson1LaunchTemplateDiskConf(data.smallVolumeConf, context);
  }
  if (data.smallVolumeMaxSize != null) {
    contents.smallVolumeMaxSize = __expectLong(data.smallVolumeMaxSize);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.targetInstanceTypeRightSizingMethod != null) {
    contents.targetInstanceTypeRightSizingMethod = __expectString(data.targetInstanceTypeRightSizingMethod);
  }
  return contents;
};

const deserializeAws_restJson1CreateLaunchConfigurationTemplateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateReplicationConfigurationTemplateCommandError(output, context);
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
    contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(
      data.replicationServersSecurityGroupsIDs,
      context
    );
  }
  if (data.stagingAreaSubnetId != null) {
    contents.stagingAreaSubnetId = __expectString(data.stagingAreaSubnetId);
  }
  if (data.stagingAreaTags != null) {
    contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.useDedicatedReplicationServer != null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return contents;
};

const deserializeAws_restJson1CreateReplicationConfigurationTemplateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWaveCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWaveCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.waveAggregatedStatus != null) {
    contents.waveAggregatedStatus = deserializeAws_restJson1WaveAggregatedStatus(data.waveAggregatedStatus, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

const deserializeAws_restJson1CreateWaveCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteApplicationCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteJobCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteLaunchConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLaunchConfigurationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteLaunchConfigurationTemplateCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteSourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceServerCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSourceServerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSourceServerCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteVcenterClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVcenterClientCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVcenterClientCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVcenterClientCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWaveCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWaveCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteWaveCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeJobLogItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobLogItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobLogItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1JobLogs(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeJobLogItemsCommandError = async (
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
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1JobsList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeJobsCommandError = async (
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
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeLaunchConfigurationTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLaunchConfigurationTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeLaunchConfigurationTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1LaunchConfigurationTemplates(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeLaunchConfigurationTemplatesCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1ReplicationConfigurationTemplates(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSourceServersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1SourceServersList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeSourceServersCommandError = async (
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
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeVcenterClientsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVcenterClientsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVcenterClientsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1VcenterClientList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeVcenterClientsCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateApplicationsCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSourceServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateSourceServersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateSourceServersCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisconnectFromServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectFromServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisconnectFromServiceCommandError(output, context);
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
    contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

const deserializeAws_restJson1DisconnectFromServiceCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1FinalizeCutoverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FinalizeCutoverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1FinalizeCutoverCommandError(output, context);
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
    contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

const deserializeAws_restJson1FinalizeCutoverCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchConfigurationCommandError(output, context);
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
    contents.licensing = deserializeAws_restJson1Licensing(data.licensing, context);
  }
  if (data.mapAutoTaggingMpeID != null) {
    contents.mapAutoTaggingMpeID = __expectString(data.mapAutoTaggingMpeID);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.postLaunchActions != null) {
    contents.postLaunchActions = deserializeAws_restJson1PostLaunchActions(data.postLaunchActions, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.targetInstanceTypeRightSizingMethod != null) {
    contents.targetInstanceTypeRightSizingMethod = __expectString(data.targetInstanceTypeRightSizingMethod);
  }
  return contents;
};

const deserializeAws_restJson1GetLaunchConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetReplicationConfigurationCommandError(output, context);
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
    contents.replicatedDisks = deserializeAws_restJson1ReplicationConfigurationReplicatedDisks(
      data.replicatedDisks,
      context
    );
  }
  if (data.replicationServerInstanceType != null) {
    contents.replicationServerInstanceType = __expectString(data.replicationServerInstanceType);
  }
  if (data.replicationServersSecurityGroupsIDs != null) {
    contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(
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
    contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
  }
  if (data.useDedicatedReplicationServer != null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return contents;
};

const deserializeAws_restJson1GetReplicationConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1InitializeServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeServiceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1InitializeServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1InitializeServiceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1ApplicationsList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListApplicationsCommandError = async (
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
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSourceServerActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceServerActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSourceServerActionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1SourceServerActionDocuments(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSourceServerActionsCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.mgn#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.mgn#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTemplateActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplateActionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1TemplateActionDocuments(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListTemplateActionsCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListWavesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWavesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWavesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = deserializeAws_restJson1WavesList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListWavesCommandError = async (
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
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1MarkAsArchivedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MarkAsArchivedCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1MarkAsArchivedCommandError(output, context);
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
    contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

const deserializeAws_restJson1MarkAsArchivedCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutSourceServerActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSourceServerActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSourceServerActionCommandError(output, context);
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
  if (data.documentIdentifier != null) {
    contents.documentIdentifier = __expectString(data.documentIdentifier);
  }
  if (data.documentVersion != null) {
    contents.documentVersion = __expectString(data.documentVersion);
  }
  if (data.mustSucceedForCutover != null) {
    contents.mustSucceedForCutover = __expectBoolean(data.mustSucceedForCutover);
  }
  if (data.order != null) {
    contents.order = __expectInt32(data.order);
  }
  if (data.parameters != null) {
    contents.parameters = deserializeAws_restJson1SsmDocumentParameters(data.parameters, context);
  }
  if (data.timeoutSeconds != null) {
    contents.timeoutSeconds = __expectInt32(data.timeoutSeconds);
  }
  return contents;
};

const deserializeAws_restJson1PutSourceServerActionCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutTemplateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTemplateActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutTemplateActionCommandError(output, context);
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
  if (data.documentIdentifier != null) {
    contents.documentIdentifier = __expectString(data.documentIdentifier);
  }
  if (data.documentVersion != null) {
    contents.documentVersion = __expectString(data.documentVersion);
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
    contents.parameters = deserializeAws_restJson1SsmDocumentParameters(data.parameters, context);
  }
  if (data.timeoutSeconds != null) {
    contents.timeoutSeconds = __expectInt32(data.timeoutSeconds);
  }
  return contents;
};

const deserializeAws_restJson1PutTemplateActionCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RemoveSourceServerActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSourceServerActionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveSourceServerActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RemoveSourceServerActionCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RemoveTemplateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTemplateActionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveTemplateActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RemoveTemplateActionCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RetryDataReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryDataReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RetryDataReplicationCommandError(output, context);
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
    contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

const deserializeAws_restJson1RetryDataReplicationCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartCutoverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCutoverCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartCutoverCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job != null) {
    contents.job = deserializeAws_restJson1Job(data.job, context);
  }
  return contents;
};

const deserializeAws_restJson1StartCutoverCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartReplicationCommandError(output, context);
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
    contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

const deserializeAws_restJson1StartReplicationCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTestCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartTestCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job != null) {
    contents.job = deserializeAws_restJson1Job(data.job, context);
  }
  return contents;
};

const deserializeAws_restJson1StartTestCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.mgn#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.mgn#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TerminateTargetInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateTargetInstancesCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1TerminateTargetInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job != null) {
    contents.job = deserializeAws_restJson1Job(data.job, context);
  }
  return contents;
};

const deserializeAws_restJson1TerminateTargetInstancesCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UnarchiveApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UnarchiveApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationAggregatedStatus != null) {
    contents.applicationAggregatedStatus = deserializeAws_restJson1ApplicationAggregatedStatus(
      data.applicationAggregatedStatus,
      context
    );
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

const deserializeAws_restJson1UnarchiveApplicationCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UnarchiveWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnarchiveWaveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UnarchiveWaveCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.waveAggregatedStatus != null) {
    contents.waveAggregatedStatus = deserializeAws_restJson1WaveAggregatedStatus(data.waveAggregatedStatus, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

const deserializeAws_restJson1UnarchiveWaveCommandError = async (
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
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mgn#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.mgn#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.mgn#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.applicationAggregatedStatus != null) {
    contents.applicationAggregatedStatus = deserializeAws_restJson1ApplicationAggregatedStatus(
      data.applicationAggregatedStatus,
      context
    );
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

const deserializeAws_restJson1UpdateApplicationCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLaunchConfigurationCommandError(output, context);
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
    contents.licensing = deserializeAws_restJson1Licensing(data.licensing, context);
  }
  if (data.mapAutoTaggingMpeID != null) {
    contents.mapAutoTaggingMpeID = __expectString(data.mapAutoTaggingMpeID);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.postLaunchActions != null) {
    contents.postLaunchActions = deserializeAws_restJson1PostLaunchActions(data.postLaunchActions, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.targetInstanceTypeRightSizingMethod != null) {
    contents.targetInstanceTypeRightSizingMethod = __expectString(data.targetInstanceTypeRightSizingMethod);
  }
  return contents;
};

const deserializeAws_restJson1UpdateLaunchConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateLaunchConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLaunchConfigurationTemplateCommandError(output, context);
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
    contents.largeVolumeConf = deserializeAws_restJson1LaunchTemplateDiskConf(data.largeVolumeConf, context);
  }
  if (data.launchConfigurationTemplateID != null) {
    contents.launchConfigurationTemplateID = __expectString(data.launchConfigurationTemplateID);
  }
  if (data.launchDisposition != null) {
    contents.launchDisposition = __expectString(data.launchDisposition);
  }
  if (data.licensing != null) {
    contents.licensing = deserializeAws_restJson1Licensing(data.licensing, context);
  }
  if (data.mapAutoTaggingMpeID != null) {
    contents.mapAutoTaggingMpeID = __expectString(data.mapAutoTaggingMpeID);
  }
  if (data.postLaunchActions != null) {
    contents.postLaunchActions = deserializeAws_restJson1PostLaunchActions(data.postLaunchActions, context);
  }
  if (data.smallVolumeConf != null) {
    contents.smallVolumeConf = deserializeAws_restJson1LaunchTemplateDiskConf(data.smallVolumeConf, context);
  }
  if (data.smallVolumeMaxSize != null) {
    contents.smallVolumeMaxSize = __expectLong(data.smallVolumeMaxSize);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.targetInstanceTypeRightSizingMethod != null) {
    contents.targetInstanceTypeRightSizingMethod = __expectString(data.targetInstanceTypeRightSizingMethod);
  }
  return contents;
};

const deserializeAws_restJson1UpdateLaunchConfigurationTemplateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateReplicationConfigurationCommandError(output, context);
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
    contents.replicatedDisks = deserializeAws_restJson1ReplicationConfigurationReplicatedDisks(
      data.replicatedDisks,
      context
    );
  }
  if (data.replicationServerInstanceType != null) {
    contents.replicationServerInstanceType = __expectString(data.replicationServerInstanceType);
  }
  if (data.replicationServersSecurityGroupsIDs != null) {
    contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(
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
    contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
  }
  if (data.useDedicatedReplicationServer != null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return contents;
};

const deserializeAws_restJson1UpdateReplicationConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mgn#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationConfigurationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommandError(output, context);
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
    contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(
      data.replicationServersSecurityGroupsIDs,
      context
    );
  }
  if (data.stagingAreaSubnetId != null) {
    contents.stagingAreaSubnetId = __expectString(data.stagingAreaSubnetId);
  }
  if (data.stagingAreaTags != null) {
    contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.useDedicatedReplicationServer != null) {
    contents.useDedicatedReplicationServer = __expectBoolean(data.useDedicatedReplicationServer);
  }
  return contents;
};

const deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateSourceServerReplicationTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceServerReplicationTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSourceServerReplicationTypeCommandError(output, context);
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
    contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.isArchived != null) {
    contents.isArchived = __expectBoolean(data.isArchived);
  }
  if (data.launchedInstance != null) {
    contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
  }
  if (data.replicationType != null) {
    contents.replicationType = __expectString(data.replicationType);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.vcenterClientID != null) {
    contents.vcenterClientID = __expectString(data.vcenterClientID);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSourceServerReplicationTypeCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mgn#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateWaveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWaveCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWaveCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.waveAggregatedStatus != null) {
    contents.waveAggregatedStatus = deserializeAws_restJson1WaveAggregatedStatus(data.waveAggregatedStatus, context);
  }
  if (data.waveID != null) {
    contents.waveID = __expectString(data.waveID);
  }
  return contents;
};

const deserializeAws_restJson1UpdateWaveCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mgn#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.mgn#UninitializedAccountException":
      throw await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context);
    default:
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.errors != null) {
    contents.errors = deserializeAws_restJson1ConflictExceptionErrors(data.errors, context);
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1UninitializedAccountExceptionResponse = async (
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.fieldList != null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
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

const serializeAws_restJson1ActionIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ApplicationIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ApplicationIDsFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AssociateSourceServersRequestSourceServerIDs = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ChangeServerLifeCycleStateSourceServerLifecycle = (
  input: ChangeServerLifeCycleStateSourceServerLifecycle,
  context: __SerdeContext
): any => {
  return {
    ...(input.state != null && { state: input.state }),
  };
};

const serializeAws_restJson1DescribeJobsRequestFilters = (
  input: DescribeJobsRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.fromDate != null && { fromDate: input.fromDate }),
    ...(input.jobIDs != null && {
      jobIDs: serializeAws_restJson1DescribeJobsRequestFiltersJobIDs(input.jobIDs, context),
    }),
    ...(input.toDate != null && { toDate: input.toDate }),
  };
};

const serializeAws_restJson1DescribeJobsRequestFiltersJobIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DescribeSourceServersRequestApplicationIDs = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DescribeSourceServersRequestFilters = (
  input: DescribeSourceServersRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationIDs != null && {
      applicationIDs: serializeAws_restJson1DescribeSourceServersRequestApplicationIDs(input.applicationIDs, context),
    }),
    ...(input.isArchived != null && { isArchived: input.isArchived }),
    ...(input.lifeCycleStates != null && {
      lifeCycleStates: serializeAws_restJson1LifeCycleStates(input.lifeCycleStates, context),
    }),
    ...(input.replicationTypes != null && {
      replicationTypes: serializeAws_restJson1ReplicationTypes(input.replicationTypes, context),
    }),
    ...(input.sourceServerIDs != null && {
      sourceServerIDs: serializeAws_restJson1DescribeSourceServersRequestFiltersIDs(input.sourceServerIDs, context),
    }),
  };
};

const serializeAws_restJson1DescribeSourceServersRequestFiltersIDs = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DisassociateSourceServersRequestSourceServerIDs = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1LaunchConfigurationTemplateIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1LaunchTemplateDiskConf = (input: LaunchTemplateDiskConf, context: __SerdeContext): any => {
  return {
    ...(input.iops != null && { iops: input.iops }),
    ...(input.throughput != null && { throughput: input.throughput }),
    ...(input.volumeType != null && { volumeType: input.volumeType }),
  };
};

const serializeAws_restJson1Licensing = (input: Licensing, context: __SerdeContext): any => {
  return {
    ...(input.osByol != null && { osByol: input.osByol }),
  };
};

const serializeAws_restJson1LifeCycleStates = (input: (LifeCycleState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ListApplicationsRequestFilters = (
  input: ListApplicationsRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationIDs != null && {
      applicationIDs: serializeAws_restJson1ApplicationIDsFilter(input.applicationIDs, context),
    }),
    ...(input.isArchived != null && { isArchived: input.isArchived }),
    ...(input.waveIDs != null && { waveIDs: serializeAws_restJson1WaveIDsFilter(input.waveIDs, context) }),
  };
};

const serializeAws_restJson1ListWavesRequestFilters = (
  input: ListWavesRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.isArchived != null && { isArchived: input.isArchived }),
    ...(input.waveIDs != null && { waveIDs: serializeAws_restJson1WaveIDsFilter(input.waveIDs, context) }),
  };
};

const serializeAws_restJson1PostLaunchActions = (input: PostLaunchActions, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogGroupName != null && { cloudWatchLogGroupName: input.cloudWatchLogGroupName }),
    ...(input.deployment != null && { deployment: input.deployment }),
    ...(input.s3LogBucket != null && { s3LogBucket: input.s3LogBucket }),
    ...(input.s3OutputKeyPrefix != null && { s3OutputKeyPrefix: input.s3OutputKeyPrefix }),
    ...(input.ssmDocuments != null && {
      ssmDocuments: serializeAws_restJson1SsmDocuments(input.ssmDocuments, context),
    }),
  };
};

const serializeAws_restJson1ReplicationConfigurationReplicatedDisk = (
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

const serializeAws_restJson1ReplicationConfigurationReplicatedDisks = (
  input: ReplicationConfigurationReplicatedDisk[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ReplicationConfigurationReplicatedDisk(entry, context);
    });
};

const serializeAws_restJson1ReplicationConfigurationTemplateIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ReplicationServersSecurityGroupsIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ReplicationTypes = (input: (ReplicationType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SourceServerActionsRequestFilters = (
  input: SourceServerActionsRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionIDs != null && { actionIDs: serializeAws_restJson1ActionIDs(input.actionIDs, context) }),
  };
};

const serializeAws_restJson1SsmDocument = (input: SsmDocument, context: __SerdeContext): any => {
  return {
    ...(input.actionName != null && { actionName: input.actionName }),
    ...(input.mustSucceedForCutover != null && { mustSucceedForCutover: input.mustSucceedForCutover }),
    ...(input.parameters != null && {
      parameters: serializeAws_restJson1SsmDocumentParameters(input.parameters, context),
    }),
    ...(input.ssmDocumentName != null && { ssmDocumentName: input.ssmDocumentName }),
    ...(input.timeoutSeconds != null && { timeoutSeconds: input.timeoutSeconds }),
  };
};

const serializeAws_restJson1SsmDocumentParameters = (
  input: Record<string, SsmParameterStoreParameter[]>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1SsmParameterStoreParameters(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1SsmDocuments = (input: SsmDocument[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SsmDocument(entry, context);
    });
};

const serializeAws_restJson1SsmParameterStoreParameter = (
  input: SsmParameterStoreParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.parameterName != null && { parameterName: input.parameterName }),
    ...(input.parameterType != null && { parameterType: input.parameterType }),
  };
};

const serializeAws_restJson1SsmParameterStoreParameters = (
  input: SsmParameterStoreParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SsmParameterStoreParameter(entry, context);
    });
};

const serializeAws_restJson1StartCutoverRequestSourceServerIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StartTestRequestSourceServerIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TemplateActionsRequestFilters = (
  input: TemplateActionsRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionIDs != null && { actionIDs: serializeAws_restJson1ActionIDs(input.actionIDs, context) }),
  };
};

const serializeAws_restJson1TerminateTargetInstancesRequestSourceServerIDs = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1WaveIDsFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1Application = (output: any, context: __SerdeContext): Application => {
  return {
    applicationAggregatedStatus:
      output.applicationAggregatedStatus != null
        ? deserializeAws_restJson1ApplicationAggregatedStatus(output.applicationAggregatedStatus, context)
        : undefined,
    applicationID: __expectString(output.applicationID),
    arn: __expectString(output.arn),
    creationDateTime: __expectString(output.creationDateTime),
    description: __expectString(output.description),
    isArchived: __expectBoolean(output.isArchived),
    lastModifiedDateTime: __expectString(output.lastModifiedDateTime),
    name: __expectString(output.name),
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
    waveID: __expectString(output.waveID),
  } as any;
};

const deserializeAws_restJson1ApplicationAggregatedStatus = (
  output: any,
  context: __SerdeContext
): ApplicationAggregatedStatus => {
  return {
    healthStatus: __expectString(output.healthStatus),
    lastUpdateDateTime: __expectString(output.lastUpdateDateTime),
    progressStatus: __expectString(output.progressStatus),
    totalSourceServers: __expectLong(output.totalSourceServers),
  } as any;
};

const deserializeAws_restJson1ApplicationsList = (output: any, context: __SerdeContext): Application[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Application(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConflictExceptionErrors = (output: any, context: __SerdeContext): ErrorDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ErrorDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CPU = (output: any, context: __SerdeContext): CPU => {
  return {
    cores: __expectLong(output.cores),
    modelName: __expectString(output.modelName),
  } as any;
};

const deserializeAws_restJson1Cpus = (output: any, context: __SerdeContext): CPU[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CPU(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataReplicationError = (output: any, context: __SerdeContext): DataReplicationError => {
  return {
    error: __expectString(output.error),
    rawError: __expectString(output.rawError),
  } as any;
};

const deserializeAws_restJson1DataReplicationInfo = (output: any, context: __SerdeContext): DataReplicationInfo => {
  return {
    dataReplicationError:
      output.dataReplicationError != null
        ? deserializeAws_restJson1DataReplicationError(output.dataReplicationError, context)
        : undefined,
    dataReplicationInitiation:
      output.dataReplicationInitiation != null
        ? deserializeAws_restJson1DataReplicationInitiation(output.dataReplicationInitiation, context)
        : undefined,
    dataReplicationState: __expectString(output.dataReplicationState),
    etaDateTime: __expectString(output.etaDateTime),
    lagDuration: __expectString(output.lagDuration),
    lastSnapshotDateTime: __expectString(output.lastSnapshotDateTime),
    replicatedDisks:
      output.replicatedDisks != null
        ? deserializeAws_restJson1DataReplicationInfoReplicatedDisks(output.replicatedDisks, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataReplicationInfoReplicatedDisk = (
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

const deserializeAws_restJson1DataReplicationInfoReplicatedDisks = (
  output: any,
  context: __SerdeContext
): DataReplicationInfoReplicatedDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataReplicationInfoReplicatedDisk(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataReplicationInitiation = (
  output: any,
  context: __SerdeContext
): DataReplicationInitiation => {
  return {
    nextAttemptDateTime: __expectString(output.nextAttemptDateTime),
    startDateTime: __expectString(output.startDateTime),
    steps:
      output.steps != null ? deserializeAws_restJson1DataReplicationInitiationSteps(output.steps, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DataReplicationInitiationStep = (
  output: any,
  context: __SerdeContext
): DataReplicationInitiationStep => {
  return {
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1DataReplicationInitiationSteps = (
  output: any,
  context: __SerdeContext
): DataReplicationInitiationStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataReplicationInitiationStep(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Disk = (output: any, context: __SerdeContext): Disk => {
  return {
    bytes: __expectLong(output.bytes),
    deviceName: __expectString(output.deviceName),
  } as any;
};

const deserializeAws_restJson1Disks = (output: any, context: __SerdeContext): Disk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Disk(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_restJson1IdentificationHints = (output: any, context: __SerdeContext): IdentificationHints => {
  return {
    awsInstanceID: __expectString(output.awsInstanceID),
    fqdn: __expectString(output.fqdn),
    hostname: __expectString(output.hostname),
    vmPath: __expectString(output.vmPath),
    vmWareUuid: __expectString(output.vmWareUuid),
  } as any;
};

const deserializeAws_restJson1IPsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Job = (output: any, context: __SerdeContext): Job => {
  return {
    arn: __expectString(output.arn),
    creationDateTime: __expectString(output.creationDateTime),
    endDateTime: __expectString(output.endDateTime),
    initiatedBy: __expectString(output.initiatedBy),
    jobID: __expectString(output.jobID),
    participatingServers:
      output.participatingServers != null
        ? deserializeAws_restJson1ParticipatingServers(output.participatingServers, context)
        : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1JobLog = (output: any, context: __SerdeContext): JobLog => {
  return {
    event: __expectString(output.event),
    eventData:
      output.eventData != null ? deserializeAws_restJson1JobLogEventData(output.eventData, context) : undefined,
    logDateTime: __expectString(output.logDateTime),
  } as any;
};

const deserializeAws_restJson1JobLogEventData = (output: any, context: __SerdeContext): JobLogEventData => {
  return {
    conversionServerID: __expectString(output.conversionServerID),
    rawError: __expectString(output.rawError),
    sourceServerID: __expectString(output.sourceServerID),
    targetInstanceID: __expectString(output.targetInstanceID),
  } as any;
};

const deserializeAws_restJson1JobLogs = (output: any, context: __SerdeContext): JobLog[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobLog(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobPostLaunchActionsLaunchStatus = (
  output: any,
  context: __SerdeContext
): JobPostLaunchActionsLaunchStatus => {
  return {
    executionID: __expectString(output.executionID),
    executionStatus: __expectString(output.executionStatus),
    failureReason: __expectString(output.failureReason),
    ssmDocument:
      output.ssmDocument != null ? deserializeAws_restJson1SsmDocument(output.ssmDocument, context) : undefined,
    ssmDocumentType: __expectString(output.ssmDocumentType),
  } as any;
};

const deserializeAws_restJson1JobsList = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Job(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LaunchConfigurationTemplate = (
  output: any,
  context: __SerdeContext
): LaunchConfigurationTemplate => {
  return {
    arn: __expectString(output.arn),
    associatePublicIpAddress: __expectBoolean(output.associatePublicIpAddress),
    bootMode: __expectString(output.bootMode),
    copyPrivateIp: __expectBoolean(output.copyPrivateIp),
    copyTags: __expectBoolean(output.copyTags),
    ec2LaunchTemplateID: __expectString(output.ec2LaunchTemplateID),
    enableMapAutoTagging: __expectBoolean(output.enableMapAutoTagging),
    largeVolumeConf:
      output.largeVolumeConf != null
        ? deserializeAws_restJson1LaunchTemplateDiskConf(output.largeVolumeConf, context)
        : undefined,
    launchConfigurationTemplateID: __expectString(output.launchConfigurationTemplateID),
    launchDisposition: __expectString(output.launchDisposition),
    licensing: output.licensing != null ? deserializeAws_restJson1Licensing(output.licensing, context) : undefined,
    mapAutoTaggingMpeID: __expectString(output.mapAutoTaggingMpeID),
    postLaunchActions:
      output.postLaunchActions != null
        ? deserializeAws_restJson1PostLaunchActions(output.postLaunchActions, context)
        : undefined,
    smallVolumeConf:
      output.smallVolumeConf != null
        ? deserializeAws_restJson1LaunchTemplateDiskConf(output.smallVolumeConf, context)
        : undefined,
    smallVolumeMaxSize: __expectLong(output.smallVolumeMaxSize),
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
    targetInstanceTypeRightSizingMethod: __expectString(output.targetInstanceTypeRightSizingMethod),
  } as any;
};

const deserializeAws_restJson1LaunchConfigurationTemplates = (
  output: any,
  context: __SerdeContext
): LaunchConfigurationTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LaunchConfigurationTemplate(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LaunchedInstance = (output: any, context: __SerdeContext): LaunchedInstance => {
  return {
    ec2InstanceID: __expectString(output.ec2InstanceID),
    firstBoot: __expectString(output.firstBoot),
    jobID: __expectString(output.jobID),
  } as any;
};

const deserializeAws_restJson1LaunchTemplateDiskConf = (
  output: any,
  context: __SerdeContext
): LaunchTemplateDiskConf => {
  return {
    iops: __expectLong(output.iops),
    throughput: __expectLong(output.throughput),
    volumeType: __expectString(output.volumeType),
  } as any;
};

const deserializeAws_restJson1Licensing = (output: any, context: __SerdeContext): Licensing => {
  return {
    osByol: __expectBoolean(output.osByol),
  } as any;
};

const deserializeAws_restJson1LifeCycle = (output: any, context: __SerdeContext): LifeCycle => {
  return {
    addedToServiceDateTime: __expectString(output.addedToServiceDateTime),
    elapsedReplicationDuration: __expectString(output.elapsedReplicationDuration),
    firstByteDateTime: __expectString(output.firstByteDateTime),
    lastCutover:
      output.lastCutover != null
        ? deserializeAws_restJson1LifeCycleLastCutover(output.lastCutover, context)
        : undefined,
    lastSeenByServiceDateTime: __expectString(output.lastSeenByServiceDateTime),
    lastTest: output.lastTest != null ? deserializeAws_restJson1LifeCycleLastTest(output.lastTest, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1LifeCycleLastCutover = (output: any, context: __SerdeContext): LifeCycleLastCutover => {
  return {
    finalized:
      output.finalized != null
        ? deserializeAws_restJson1LifeCycleLastCutoverFinalized(output.finalized, context)
        : undefined,
    initiated:
      output.initiated != null
        ? deserializeAws_restJson1LifeCycleLastCutoverInitiated(output.initiated, context)
        : undefined,
    reverted:
      output.reverted != null
        ? deserializeAws_restJson1LifeCycleLastCutoverReverted(output.reverted, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LifeCycleLastCutoverFinalized = (
  output: any,
  context: __SerdeContext
): LifeCycleLastCutoverFinalized => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
  } as any;
};

const deserializeAws_restJson1LifeCycleLastCutoverInitiated = (
  output: any,
  context: __SerdeContext
): LifeCycleLastCutoverInitiated => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
    jobID: __expectString(output.jobID),
  } as any;
};

const deserializeAws_restJson1LifeCycleLastCutoverReverted = (
  output: any,
  context: __SerdeContext
): LifeCycleLastCutoverReverted => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
  } as any;
};

const deserializeAws_restJson1LifeCycleLastTest = (output: any, context: __SerdeContext): LifeCycleLastTest => {
  return {
    finalized:
      output.finalized != null
        ? deserializeAws_restJson1LifeCycleLastTestFinalized(output.finalized, context)
        : undefined,
    initiated:
      output.initiated != null
        ? deserializeAws_restJson1LifeCycleLastTestInitiated(output.initiated, context)
        : undefined,
    reverted:
      output.reverted != null ? deserializeAws_restJson1LifeCycleLastTestReverted(output.reverted, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LifeCycleLastTestFinalized = (
  output: any,
  context: __SerdeContext
): LifeCycleLastTestFinalized => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
  } as any;
};

const deserializeAws_restJson1LifeCycleLastTestInitiated = (
  output: any,
  context: __SerdeContext
): LifeCycleLastTestInitiated => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
    jobID: __expectString(output.jobID),
  } as any;
};

const deserializeAws_restJson1LifeCycleLastTestReverted = (
  output: any,
  context: __SerdeContext
): LifeCycleLastTestReverted => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
  } as any;
};

const deserializeAws_restJson1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    ips: output.ips != null ? deserializeAws_restJson1IPsList(output.ips, context) : undefined,
    isPrimary: __expectBoolean(output.isPrimary),
    macAddress: __expectString(output.macAddress),
  } as any;
};

const deserializeAws_restJson1NetworkInterfaces = (output: any, context: __SerdeContext): NetworkInterface[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkInterface(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OS = (output: any, context: __SerdeContext): OS => {
  return {
    fullString: __expectString(output.fullString),
  } as any;
};

const deserializeAws_restJson1ParticipatingServer = (output: any, context: __SerdeContext): ParticipatingServer => {
  return {
    launchStatus: __expectString(output.launchStatus),
    launchedEc2InstanceID: __expectString(output.launchedEc2InstanceID),
    postLaunchActionsStatus:
      output.postLaunchActionsStatus != null
        ? deserializeAws_restJson1PostLaunchActionsStatus(output.postLaunchActionsStatus, context)
        : undefined,
    sourceServerID: __expectString(output.sourceServerID),
  } as any;
};

const deserializeAws_restJson1ParticipatingServers = (output: any, context: __SerdeContext): ParticipatingServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ParticipatingServer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PostLaunchActions = (output: any, context: __SerdeContext): PostLaunchActions => {
  return {
    cloudWatchLogGroupName: __expectString(output.cloudWatchLogGroupName),
    deployment: __expectString(output.deployment),
    s3LogBucket: __expectString(output.s3LogBucket),
    s3OutputKeyPrefix: __expectString(output.s3OutputKeyPrefix),
    ssmDocuments:
      output.ssmDocuments != null ? deserializeAws_restJson1SsmDocuments(output.ssmDocuments, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PostLaunchActionsLaunchStatusList = (
  output: any,
  context: __SerdeContext
): JobPostLaunchActionsLaunchStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobPostLaunchActionsLaunchStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PostLaunchActionsStatus = (
  output: any,
  context: __SerdeContext
): PostLaunchActionsStatus => {
  return {
    postLaunchActionsLaunchStatusList:
      output.postLaunchActionsLaunchStatusList != null
        ? deserializeAws_restJson1PostLaunchActionsLaunchStatusList(output.postLaunchActionsLaunchStatusList, context)
        : undefined,
    ssmAgentDiscoveryDatetime: __expectString(output.ssmAgentDiscoveryDatetime),
  } as any;
};

const deserializeAws_restJson1ReplicationConfigurationReplicatedDisk = (
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

const deserializeAws_restJson1ReplicationConfigurationReplicatedDisks = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationReplicatedDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReplicationConfigurationReplicatedDisk(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReplicationConfigurationTemplate = (
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
        ? deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(
            output.replicationServersSecurityGroupsIDs,
            context
          )
        : undefined,
    stagingAreaSubnetId: __expectString(output.stagingAreaSubnetId),
    stagingAreaTags:
      output.stagingAreaTags != null ? deserializeAws_restJson1TagsMap(output.stagingAreaTags, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
    useDedicatedReplicationServer: __expectBoolean(output.useDedicatedReplicationServer),
  } as any;
};

const deserializeAws_restJson1ReplicationConfigurationTemplates = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReplicationConfigurationTemplate(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReplicationServersSecurityGroupsIDs = (
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

const deserializeAws_restJson1SourceProperties = (output: any, context: __SerdeContext): SourceProperties => {
  return {
    cpus: output.cpus != null ? deserializeAws_restJson1Cpus(output.cpus, context) : undefined,
    disks: output.disks != null ? deserializeAws_restJson1Disks(output.disks, context) : undefined,
    identificationHints:
      output.identificationHints != null
        ? deserializeAws_restJson1IdentificationHints(output.identificationHints, context)
        : undefined,
    lastUpdatedDateTime: __expectString(output.lastUpdatedDateTime),
    networkInterfaces:
      output.networkInterfaces != null
        ? deserializeAws_restJson1NetworkInterfaces(output.networkInterfaces, context)
        : undefined,
    os: output.os != null ? deserializeAws_restJson1OS(output.os, context) : undefined,
    ramBytes: __expectLong(output.ramBytes),
    recommendedInstanceType: __expectString(output.recommendedInstanceType),
  } as any;
};

const deserializeAws_restJson1SourceServer = (output: any, context: __SerdeContext): SourceServer => {
  return {
    applicationID: __expectString(output.applicationID),
    arn: __expectString(output.arn),
    dataReplicationInfo:
      output.dataReplicationInfo != null
        ? deserializeAws_restJson1DataReplicationInfo(output.dataReplicationInfo, context)
        : undefined,
    isArchived: __expectBoolean(output.isArchived),
    launchedInstance:
      output.launchedInstance != null
        ? deserializeAws_restJson1LaunchedInstance(output.launchedInstance, context)
        : undefined,
    lifeCycle: output.lifeCycle != null ? deserializeAws_restJson1LifeCycle(output.lifeCycle, context) : undefined,
    replicationType: __expectString(output.replicationType),
    sourceProperties:
      output.sourceProperties != null
        ? deserializeAws_restJson1SourceProperties(output.sourceProperties, context)
        : undefined,
    sourceServerID: __expectString(output.sourceServerID),
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
    vcenterClientID: __expectString(output.vcenterClientID),
  } as any;
};

const deserializeAws_restJson1SourceServerActionDocument = (
  output: any,
  context: __SerdeContext
): SourceServerActionDocument => {
  return {
    actionID: __expectString(output.actionID),
    actionName: __expectString(output.actionName),
    active: __expectBoolean(output.active),
    documentIdentifier: __expectString(output.documentIdentifier),
    documentVersion: __expectString(output.documentVersion),
    mustSucceedForCutover: __expectBoolean(output.mustSucceedForCutover),
    order: __expectInt32(output.order),
    parameters:
      output.parameters != null ? deserializeAws_restJson1SsmDocumentParameters(output.parameters, context) : undefined,
    timeoutSeconds: __expectInt32(output.timeoutSeconds),
  } as any;
};

const deserializeAws_restJson1SourceServerActionDocuments = (
  output: any,
  context: __SerdeContext
): SourceServerActionDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SourceServerActionDocument(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SourceServersList = (output: any, context: __SerdeContext): SourceServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SourceServer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SsmDocument = (output: any, context: __SerdeContext): SsmDocument => {
  return {
    actionName: __expectString(output.actionName),
    mustSucceedForCutover: __expectBoolean(output.mustSucceedForCutover),
    parameters:
      output.parameters != null ? deserializeAws_restJson1SsmDocumentParameters(output.parameters, context) : undefined,
    ssmDocumentName: __expectString(output.ssmDocumentName),
    timeoutSeconds: __expectInt32(output.timeoutSeconds),
  } as any;
};

const deserializeAws_restJson1SsmDocumentParameters = (
  output: any,
  context: __SerdeContext
): Record<string, SsmParameterStoreParameter[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, SsmParameterStoreParameter[]>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1SsmParameterStoreParameters(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1SsmDocuments = (output: any, context: __SerdeContext): SsmDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SsmDocument(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SsmParameterStoreParameter = (
  output: any,
  context: __SerdeContext
): SsmParameterStoreParameter => {
  return {
    parameterName: __expectString(output.parameterName),
    parameterType: __expectString(output.parameterType),
  } as any;
};

const deserializeAws_restJson1SsmParameterStoreParameters = (
  output: any,
  context: __SerdeContext
): SsmParameterStoreParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SsmParameterStoreParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TemplateActionDocument = (
  output: any,
  context: __SerdeContext
): TemplateActionDocument => {
  return {
    actionID: __expectString(output.actionID),
    actionName: __expectString(output.actionName),
    active: __expectBoolean(output.active),
    documentIdentifier: __expectString(output.documentIdentifier),
    documentVersion: __expectString(output.documentVersion),
    mustSucceedForCutover: __expectBoolean(output.mustSucceedForCutover),
    operatingSystem: __expectString(output.operatingSystem),
    order: __expectInt32(output.order),
    parameters:
      output.parameters != null ? deserializeAws_restJson1SsmDocumentParameters(output.parameters, context) : undefined,
    timeoutSeconds: __expectInt32(output.timeoutSeconds),
  } as any;
};

const deserializeAws_restJson1TemplateActionDocuments = (
  output: any,
  context: __SerdeContext
): TemplateActionDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateActionDocument(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VcenterClient = (output: any, context: __SerdeContext): VcenterClient => {
  return {
    arn: __expectString(output.arn),
    datacenterName: __expectString(output.datacenterName),
    hostname: __expectString(output.hostname),
    lastSeenDatetime: __expectString(output.lastSeenDatetime),
    sourceServerTags:
      output.sourceServerTags != null ? deserializeAws_restJson1TagsMap(output.sourceServerTags, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
    vcenterClientID: __expectString(output.vcenterClientID),
    vcenterUUID: __expectString(output.vcenterUUID),
  } as any;
};

const deserializeAws_restJson1VcenterClientList = (output: any, context: __SerdeContext): VcenterClient[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VcenterClient(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Wave = (output: any, context: __SerdeContext): Wave => {
  return {
    arn: __expectString(output.arn),
    creationDateTime: __expectString(output.creationDateTime),
    description: __expectString(output.description),
    isArchived: __expectBoolean(output.isArchived),
    lastModifiedDateTime: __expectString(output.lastModifiedDateTime),
    name: __expectString(output.name),
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
    waveAggregatedStatus:
      output.waveAggregatedStatus != null
        ? deserializeAws_restJson1WaveAggregatedStatus(output.waveAggregatedStatus, context)
        : undefined,
    waveID: __expectString(output.waveID),
  } as any;
};

const deserializeAws_restJson1WaveAggregatedStatus = (output: any, context: __SerdeContext): WaveAggregatedStatus => {
  return {
    healthStatus: __expectString(output.healthStatus),
    lastUpdateDateTime: __expectString(output.lastUpdateDateTime),
    progressStatus: __expectString(output.progressStatus),
    replicationStartedDateTime: __expectString(output.replicationStartedDateTime),
    totalApplications: __expectLong(output.totalApplications),
  } as any;
};

const deserializeAws_restJson1WavesList = (output: any, context: __SerdeContext): Wave[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Wave(entry, context);
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
