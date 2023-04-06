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

import {
  CreateExtendedSourceServerCommandInput,
  CreateExtendedSourceServerCommandOutput,
} from "../commands/CreateExtendedSourceServerCommand";
import {
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "../commands/CreateReplicationConfigurationTemplateCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import {
  DeleteRecoveryInstanceCommandInput,
  DeleteRecoveryInstanceCommandOutput,
} from "../commands/DeleteRecoveryInstanceCommand";
import {
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "../commands/DeleteReplicationConfigurationTemplateCommand";
import { DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput } from "../commands/DeleteSourceServerCommand";
import {
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "../commands/DescribeJobLogItemsCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "../commands/DescribeJobsCommand";
import {
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput,
} from "../commands/DescribeRecoveryInstancesCommand";
import {
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput,
} from "../commands/DescribeRecoverySnapshotsCommand";
import {
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "../commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "../commands/DescribeSourceServersCommand";
import {
  DisconnectRecoveryInstanceCommandInput,
  DisconnectRecoveryInstanceCommandOutput,
} from "../commands/DisconnectRecoveryInstanceCommand";
import {
  DisconnectSourceServerCommandInput,
  DisconnectSourceServerCommandOutput,
} from "../commands/DisconnectSourceServerCommand";
import {
  GetFailbackReplicationConfigurationCommandInput,
  GetFailbackReplicationConfigurationCommandOutput,
} from "../commands/GetFailbackReplicationConfigurationCommand";
import {
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "../commands/GetLaunchConfigurationCommand";
import {
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "../commands/GetReplicationConfigurationCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "../commands/InitializeServiceCommand";
import {
  ListExtensibleSourceServersCommandInput,
  ListExtensibleSourceServersCommandOutput,
} from "../commands/ListExtensibleSourceServersCommand";
import {
  ListStagingAccountsCommandInput,
  ListStagingAccountsCommandOutput,
} from "../commands/ListStagingAccountsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "../commands/RetryDataReplicationCommand";
import { ReverseReplicationCommandInput, ReverseReplicationCommandOutput } from "../commands/ReverseReplicationCommand";
import {
  StartFailbackLaunchCommandInput,
  StartFailbackLaunchCommandOutput,
} from "../commands/StartFailbackLaunchCommand";
import { StartRecoveryCommandInput, StartRecoveryCommandOutput } from "../commands/StartRecoveryCommand";
import { StartReplicationCommandInput, StartReplicationCommandOutput } from "../commands/StartReplicationCommand";
import { StopFailbackCommandInput, StopFailbackCommandOutput } from "../commands/StopFailbackCommand";
import { StopReplicationCommandInput, StopReplicationCommandOutput } from "../commands/StopReplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TerminateRecoveryInstancesCommandInput,
  TerminateRecoveryInstancesCommandOutput,
} from "../commands/TerminateRecoveryInstancesCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateFailbackReplicationConfigurationCommandInput,
  UpdateFailbackReplicationConfigurationCommandOutput,
} from "../commands/UpdateFailbackReplicationConfigurationCommand";
import {
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "../commands/UpdateLaunchConfigurationCommand";
import {
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
} from "../commands/UpdateReplicationConfigurationCommand";
import {
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
} from "../commands/UpdateReplicationConfigurationTemplateCommand";
import { DrsServiceException as __BaseException } from "../models/DrsServiceException";
import {
  AccessDeniedException,
  Account,
  ConflictException,
  ConversionProperties,
  CPU,
  DataReplicationError,
  DataReplicationInfo,
  DataReplicationInfoReplicatedDisk,
  DataReplicationInitiation,
  DataReplicationInitiationStep,
  DescribeJobsRequestFilters,
  DescribeRecoveryInstancesRequestFilters,
  DescribeRecoverySnapshotsRequestFilters,
  DescribeSourceServersRequestFilters,
  Disk,
  IdentificationHints,
  InternalServerException,
  Job,
  JobLog,
  JobLogEventData,
  Licensing,
  LifeCycle,
  LifeCycleLastLaunch,
  LifeCycleLastLaunchInitiated,
  NetworkInterface,
  OS,
  ParticipatingServer,
  PITPolicyRule,
  RecoveryInstance,
  RecoveryInstanceDataReplicationError,
  RecoveryInstanceDataReplicationInfo,
  RecoveryInstanceDataReplicationInfoReplicatedDisk,
  RecoveryInstanceDataReplicationInitiation,
  RecoveryInstanceDataReplicationInitiationStep,
  RecoveryInstanceDisk,
  RecoveryInstanceFailback,
  RecoveryInstanceProperties,
  RecoverySnapshot,
  ReplicationConfigurationReplicatedDisk,
  ReplicationConfigurationTemplate,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SourceCloudProperties,
  SourceProperties,
  SourceServer,
  StagingArea,
  StagingSourceServer,
  StartRecoveryRequestSourceServer,
  ThrottlingException,
  UninitializedAccountException,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateExtendedSourceServerCommand
 */
export const se_CreateExtendedSourceServerCommand = async (
  input: CreateExtendedSourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateExtendedSourceServer";
  let body: any;
  body = JSON.stringify({
    ...(input.sourceServerArn != null && { sourceServerArn: input.sourceServerArn }),
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
    ...(input.autoReplicateNewDisks != null && { autoReplicateNewDisks: input.autoReplicateNewDisks }),
    ...(input.bandwidthThrottling != null && { bandwidthThrottling: input.bandwidthThrottling }),
    ...(input.createPublicIP != null && { createPublicIP: input.createPublicIP }),
    ...(input.dataPlaneRouting != null && { dataPlaneRouting: input.dataPlaneRouting }),
    ...(input.defaultLargeStagingDiskType != null && {
      defaultLargeStagingDiskType: input.defaultLargeStagingDiskType,
    }),
    ...(input.ebsEncryption != null && { ebsEncryption: input.ebsEncryption }),
    ...(input.ebsEncryptionKeyArn != null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
    ...(input.pitPolicy != null && { pitPolicy: se_PITPolicy(input.pitPolicy, context) }),
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
 * serializeAws_restJson1DeleteRecoveryInstanceCommand
 */
export const se_DeleteRecoveryInstanceCommand = async (
  input: DeleteRecoveryInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteRecoveryInstance";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceID != null && { recoveryInstanceID: input.recoveryInstanceID }),
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
 * serializeAws_restJson1DescribeRecoveryInstancesCommand
 */
export const se_DescribeRecoveryInstancesCommand = async (
  input: DescribeRecoveryInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeRecoveryInstances";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_DescribeRecoveryInstancesRequestFilters(input.filters, context) }),
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
 * serializeAws_restJson1DescribeRecoverySnapshotsCommand
 */
export const se_DescribeRecoverySnapshotsCommand = async (
  input: DescribeRecoverySnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeRecoverySnapshots";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_DescribeRecoverySnapshotsRequestFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.order != null && { order: input.order }),
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
 * serializeAws_restJson1DisconnectRecoveryInstanceCommand
 */
export const se_DisconnectRecoveryInstanceCommand = async (
  input: DisconnectRecoveryInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DisconnectRecoveryInstance";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceID != null && { recoveryInstanceID: input.recoveryInstanceID }),
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
 * serializeAws_restJson1DisconnectSourceServerCommand
 */
export const se_DisconnectSourceServerCommand = async (
  input: DisconnectSourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DisconnectSourceServer";
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
 * serializeAws_restJson1GetFailbackReplicationConfigurationCommand
 */
export const se_GetFailbackReplicationConfigurationCommand = async (
  input: GetFailbackReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetFailbackReplicationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceID != null && { recoveryInstanceID: input.recoveryInstanceID }),
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
 * serializeAws_restJson1ListExtensibleSourceServersCommand
 */
export const se_ListExtensibleSourceServersCommand = async (
  input: ListExtensibleSourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListExtensibleSourceServers";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.stagingAccountID != null && { stagingAccountID: input.stagingAccountID }),
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
 * serializeAws_restJson1ListStagingAccountsCommand
 */
export const se_ListStagingAccountsCommand = async (
  input: ListStagingAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListStagingAccounts";
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
 * serializeAws_restJson1ReverseReplicationCommand
 */
export const se_ReverseReplicationCommand = async (
  input: ReverseReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ReverseReplication";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceID != null && { recoveryInstanceID: input.recoveryInstanceID }),
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
 * serializeAws_restJson1StartFailbackLaunchCommand
 */
export const se_StartFailbackLaunchCommand = async (
  input: StartFailbackLaunchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartFailbackLaunch";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceIDs != null && {
      recoveryInstanceIDs: se_StartFailbackRequestRecoveryInstanceIDs(input.recoveryInstanceIDs, context),
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
 * serializeAws_restJson1StartRecoveryCommand
 */
export const se_StartRecoveryCommand = async (
  input: StartRecoveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartRecovery";
  let body: any;
  body = JSON.stringify({
    ...(input.isDrill != null && { isDrill: input.isDrill }),
    ...(input.sourceServers != null && {
      sourceServers: se_StartRecoveryRequestSourceServers(input.sourceServers, context),
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
 * serializeAws_restJson1StopFailbackCommand
 */
export const se_StopFailbackCommand = async (
  input: StopFailbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StopFailback";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceID != null && { recoveryInstanceID: input.recoveryInstanceID }),
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
 * serializeAws_restJson1StopReplicationCommand
 */
export const se_StopReplicationCommand = async (
  input: StopReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StopReplication";
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
 * serializeAws_restJson1TerminateRecoveryInstancesCommand
 */
export const se_TerminateRecoveryInstancesCommand = async (
  input: TerminateRecoveryInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TerminateRecoveryInstances";
  let body: any;
  body = JSON.stringify({
    ...(input.recoveryInstanceIDs != null && {
      recoveryInstanceIDs: se_RecoveryInstancesForTerminationRequest(input.recoveryInstanceIDs, context),
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
 * serializeAws_restJson1UpdateFailbackReplicationConfigurationCommand
 */
export const se_UpdateFailbackReplicationConfigurationCommand = async (
  input: UpdateFailbackReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateFailbackReplicationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.bandwidthThrottling != null && { bandwidthThrottling: input.bandwidthThrottling }),
    ...(input.name != null && { name: input.name }),
    ...(input.recoveryInstanceID != null && { recoveryInstanceID: input.recoveryInstanceID }),
    ...(input.usePrivateIP != null && { usePrivateIP: input.usePrivateIP }),
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
    ...(input.copyPrivateIp != null && { copyPrivateIp: input.copyPrivateIp }),
    ...(input.copyTags != null && { copyTags: input.copyTags }),
    ...(input.launchDisposition != null && { launchDisposition: input.launchDisposition }),
    ...(input.licensing != null && { licensing: se_Licensing(input.licensing, context) }),
    ...(input.name != null && { name: input.name }),
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
    ...(input.autoReplicateNewDisks != null && { autoReplicateNewDisks: input.autoReplicateNewDisks }),
    ...(input.bandwidthThrottling != null && { bandwidthThrottling: input.bandwidthThrottling }),
    ...(input.createPublicIP != null && { createPublicIP: input.createPublicIP }),
    ...(input.dataPlaneRouting != null && { dataPlaneRouting: input.dataPlaneRouting }),
    ...(input.defaultLargeStagingDiskType != null && {
      defaultLargeStagingDiskType: input.defaultLargeStagingDiskType,
    }),
    ...(input.ebsEncryption != null && { ebsEncryption: input.ebsEncryption }),
    ...(input.ebsEncryptionKeyArn != null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.pitPolicy != null && { pitPolicy: se_PITPolicy(input.pitPolicy, context) }),
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
    ...(input.autoReplicateNewDisks != null && { autoReplicateNewDisks: input.autoReplicateNewDisks }),
    ...(input.bandwidthThrottling != null && { bandwidthThrottling: input.bandwidthThrottling }),
    ...(input.createPublicIP != null && { createPublicIP: input.createPublicIP }),
    ...(input.dataPlaneRouting != null && { dataPlaneRouting: input.dataPlaneRouting }),
    ...(input.defaultLargeStagingDiskType != null && {
      defaultLargeStagingDiskType: input.defaultLargeStagingDiskType,
    }),
    ...(input.ebsEncryption != null && { ebsEncryption: input.ebsEncryption }),
    ...(input.ebsEncryptionKeyArn != null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
    ...(input.pitPolicy != null && { pitPolicy: se_PITPolicy(input.pitPolicy, context) }),
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
 * deserializeAws_restJson1CreateExtendedSourceServerCommand
 */
export const de_CreateExtendedSourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtendedSourceServerCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateExtendedSourceServerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.sourceServer != null) {
    contents.sourceServer = de_SourceServer(data.sourceServer, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateExtendedSourceServerCommandError
 */
const de_CreateExtendedSourceServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExtendedSourceServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.drs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
  if (data.autoReplicateNewDisks != null) {
    contents.autoReplicateNewDisks = __expectBoolean(data.autoReplicateNewDisks);
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
  if (data.pitPolicy != null) {
    contents.pitPolicy = de_PITPolicy(data.pitPolicy, context);
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
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.drs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
 * deserializeAws_restJson1DeleteRecoveryInstanceCommand
 */
export const de_DeleteRecoveryInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRecoveryInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRecoveryInstanceCommandError
 */
const de_DeleteRecoveryInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
 * deserializeAws_restJson1DescribeRecoveryInstancesCommand
 */
export const de_DescribeRecoveryInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRecoveryInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_DescribeRecoveryInstancesItems(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRecoveryInstancesCommandError
 */
const de_DescribeRecoveryInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
 * deserializeAws_restJson1DescribeRecoverySnapshotsCommand
 */
export const de_DescribeRecoverySnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoverySnapshotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRecoverySnapshotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_RecoverySnapshotsList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRecoverySnapshotsCommandError
 */
const de_DescribeRecoverySnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoverySnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
 * deserializeAws_restJson1DisconnectRecoveryInstanceCommand
 */
export const de_DisconnectRecoveryInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectRecoveryInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisconnectRecoveryInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisconnectRecoveryInstanceCommandError
 */
const de_DisconnectRecoveryInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectRecoveryInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
 * deserializeAws_restJson1DisconnectSourceServerCommand
 */
export const de_DisconnectSourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectSourceServerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisconnectSourceServerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.dataReplicationInfo != null) {
    contents.dataReplicationInfo = de_DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.lastLaunchResult != null) {
    contents.lastLaunchResult = __expectString(data.lastLaunchResult);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = de_LifeCycle(data.lifeCycle, context);
  }
  if (data.recoveryInstanceId != null) {
    contents.recoveryInstanceId = __expectString(data.recoveryInstanceId);
  }
  if (data.replicationDirection != null) {
    contents.replicationDirection = __expectString(data.replicationDirection);
  }
  if (data.reversedDirectionSourceServerArn != null) {
    contents.reversedDirectionSourceServerArn = __expectString(data.reversedDirectionSourceServerArn);
  }
  if (data.sourceCloudProperties != null) {
    contents.sourceCloudProperties = de_SourceCloudProperties(data.sourceCloudProperties, context);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = de_SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.stagingArea != null) {
    contents.stagingArea = de_StagingArea(data.stagingArea, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisconnectSourceServerCommandError
 */
const de_DisconnectSourceServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectSourceServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
 * deserializeAws_restJson1GetFailbackReplicationConfigurationCommand
 */
export const de_GetFailbackReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFailbackReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFailbackReplicationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bandwidthThrottling != null) {
    contents.bandwidthThrottling = __expectLong(data.bandwidthThrottling);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.recoveryInstanceID != null) {
    contents.recoveryInstanceID = __expectString(data.recoveryInstanceID);
  }
  if (data.usePrivateIP != null) {
    contents.usePrivateIP = __expectBoolean(data.usePrivateIP);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFailbackReplicationConfigurationCommandError
 */
const de_GetFailbackReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFailbackReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
  if (data.copyPrivateIp != null) {
    contents.copyPrivateIp = __expectBoolean(data.copyPrivateIp);
  }
  if (data.copyTags != null) {
    contents.copyTags = __expectBoolean(data.copyTags);
  }
  if (data.ec2LaunchTemplateID != null) {
    contents.ec2LaunchTemplateID = __expectString(data.ec2LaunchTemplateID);
  }
  if (data.launchDisposition != null) {
    contents.launchDisposition = __expectString(data.launchDisposition);
  }
  if (data.licensing != null) {
    contents.licensing = de_Licensing(data.licensing, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
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
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
  if (data.autoReplicateNewDisks != null) {
    contents.autoReplicateNewDisks = __expectBoolean(data.autoReplicateNewDisks);
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
  if (data.pitPolicy != null) {
    contents.pitPolicy = de_PITPolicy(data.pitPolicy, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
 * deserializeAws_restJson1ListExtensibleSourceServersCommand
 */
export const de_ListExtensibleSourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensibleSourceServersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListExtensibleSourceServersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_StagingSourceServersList(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListExtensibleSourceServersCommandError
 */
const de_ListExtensibleSourceServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensibleSourceServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
 * deserializeAws_restJson1ListStagingAccountsCommand
 */
export const de_ListStagingAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStagingAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStagingAccountsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accounts != null) {
    contents.accounts = de_Accounts(data.accounts, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListStagingAccountsCommandError
 */
const de_ListStagingAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStagingAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.dataReplicationInfo != null) {
    contents.dataReplicationInfo = de_DataReplicationInfo(data.dataReplicationInfo, context);
  }
  if (data.lastLaunchResult != null) {
    contents.lastLaunchResult = __expectString(data.lastLaunchResult);
  }
  if (data.lifeCycle != null) {
    contents.lifeCycle = de_LifeCycle(data.lifeCycle, context);
  }
  if (data.recoveryInstanceId != null) {
    contents.recoveryInstanceId = __expectString(data.recoveryInstanceId);
  }
  if (data.replicationDirection != null) {
    contents.replicationDirection = __expectString(data.replicationDirection);
  }
  if (data.reversedDirectionSourceServerArn != null) {
    contents.reversedDirectionSourceServerArn = __expectString(data.reversedDirectionSourceServerArn);
  }
  if (data.sourceCloudProperties != null) {
    contents.sourceCloudProperties = de_SourceCloudProperties(data.sourceCloudProperties, context);
  }
  if (data.sourceProperties != null) {
    contents.sourceProperties = de_SourceProperties(data.sourceProperties, context);
  }
  if (data.sourceServerID != null) {
    contents.sourceServerID = __expectString(data.sourceServerID);
  }
  if (data.stagingArea != null) {
    contents.stagingArea = de_StagingArea(data.stagingArea, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
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
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
 * deserializeAws_restJson1ReverseReplicationCommand
 */
export const de_ReverseReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReverseReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ReverseReplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.reversedDirectionSourceServerArn != null) {
    contents.reversedDirectionSourceServerArn = __expectString(data.reversedDirectionSourceServerArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ReverseReplicationCommandError
 */
const de_ReverseReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReverseReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
 * deserializeAws_restJson1StartFailbackLaunchCommand
 */
export const de_StartFailbackLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFailbackLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartFailbackLaunchCommandError(output, context);
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
 * deserializeAws_restJson1StartFailbackLaunchCommandError
 */
const de_StartFailbackLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFailbackLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.drs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
 * deserializeAws_restJson1StartRecoveryCommand
 */
export const de_StartRecoveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecoveryCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartRecoveryCommandError(output, context);
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
 * deserializeAws_restJson1StartRecoveryCommandError
 */
const de_StartRecoveryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecoveryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.drs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
  if (data.sourceServer != null) {
    contents.sourceServer = de_SourceServer(data.sourceServer, context);
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
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
 * deserializeAws_restJson1StopFailbackCommand
 */
export const de_StopFailbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFailbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopFailbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopFailbackCommandError
 */
const de_StopFailbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFailbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
 * deserializeAws_restJson1StopReplicationCommand
 */
export const de_StopReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopReplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.sourceServer != null) {
    contents.sourceServer = de_SourceServer(data.sourceServer, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopReplicationCommandError
 */
const de_StopReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
 * deserializeAws_restJson1TerminateRecoveryInstancesCommand
 */
export const de_TerminateRecoveryInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateRecoveryInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TerminateRecoveryInstancesCommandError(output, context);
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
 * deserializeAws_restJson1TerminateRecoveryInstancesCommandError
 */
const de_TerminateRecoveryInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateRecoveryInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.drs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
 * deserializeAws_restJson1UpdateFailbackReplicationConfigurationCommand
 */
export const de_UpdateFailbackReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFailbackReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFailbackReplicationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFailbackReplicationConfigurationCommandError
 */
const de_UpdateFailbackReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFailbackReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
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
  if (data.copyPrivateIp != null) {
    contents.copyPrivateIp = __expectBoolean(data.copyPrivateIp);
  }
  if (data.copyTags != null) {
    contents.copyTags = __expectBoolean(data.copyTags);
  }
  if (data.ec2LaunchTemplateID != null) {
    contents.ec2LaunchTemplateID = __expectString(data.ec2LaunchTemplateID);
  }
  if (data.launchDisposition != null) {
    contents.launchDisposition = __expectString(data.launchDisposition);
  }
  if (data.licensing != null) {
    contents.licensing = de_Licensing(data.licensing, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
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
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
  if (data.autoReplicateNewDisks != null) {
    contents.autoReplicateNewDisks = __expectBoolean(data.autoReplicateNewDisks);
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
  if (data.pitPolicy != null) {
    contents.pitPolicy = de_PITPolicy(data.pitPolicy, context);
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
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.drs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
  if (data.autoReplicateNewDisks != null) {
    contents.autoReplicateNewDisks = __expectBoolean(data.autoReplicateNewDisks);
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
  if (data.pitPolicy != null) {
    contents.pitPolicy = de_PITPolicy(data.pitPolicy, context);
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
    case "com.amazonaws.drs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.drs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.drs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.drs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UninitializedAccountException":
    case "com.amazonaws.drs#UninitializedAccountException":
      throw await de_UninitializedAccountExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.drs#ValidationException":
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
 * serializeAws_restJson1AccountIDs
 */
const se_AccountIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
 * serializeAws_restJson1DescribeRecoveryInstancesRequestFilters
 */
const se_DescribeRecoveryInstancesRequestFilters = (
  input: DescribeRecoveryInstancesRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.recoveryInstanceIDs != null && {
      recoveryInstanceIDs: se_RecoveryInstanceIDs(input.recoveryInstanceIDs, context),
    }),
    ...(input.sourceServerIDs != null && { sourceServerIDs: se_SourceServerIDs(input.sourceServerIDs, context) }),
  };
};

/**
 * serializeAws_restJson1DescribeRecoverySnapshotsRequestFilters
 */
const se_DescribeRecoverySnapshotsRequestFilters = (
  input: DescribeRecoverySnapshotsRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.fromDateTime != null && { fromDateTime: input.fromDateTime }),
    ...(input.toDateTime != null && { toDateTime: input.toDateTime }),
  };
};

/**
 * serializeAws_restJson1DescribeSourceServersRequestFilters
 */
const se_DescribeSourceServersRequestFilters = (
  input: DescribeSourceServersRequestFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.hardwareId != null && { hardwareId: input.hardwareId }),
    ...(input.sourceServerIDs != null && {
      sourceServerIDs: se_DescribeSourceServersRequestFiltersIDs(input.sourceServerIDs, context),
    }),
    ...(input.stagingAccountIDs != null && { stagingAccountIDs: se_AccountIDs(input.stagingAccountIDs, context) }),
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
 * serializeAws_restJson1Licensing
 */
const se_Licensing = (input: Licensing, context: __SerdeContext): any => {
  return {
    ...(input.osByol != null && { osByol: input.osByol }),
  };
};

/**
 * serializeAws_restJson1PITPolicy
 */
const se_PITPolicy = (input: PITPolicyRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PITPolicyRule(entry, context);
    });
};

/**
 * serializeAws_restJson1PITPolicyRule
 */
const se_PITPolicyRule = (input: PITPolicyRule, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.interval != null && { interval: input.interval }),
    ...(input.retentionDuration != null && { retentionDuration: input.retentionDuration }),
    ...(input.ruleID != null && { ruleID: input.ruleID }),
    ...(input.units != null && { units: input.units }),
  };
};

/**
 * serializeAws_restJson1RecoveryInstanceIDs
 */
const se_RecoveryInstanceIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1RecoveryInstancesForTerminationRequest
 */
const se_RecoveryInstancesForTerminationRequest = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
    ...(input.optimizedStagingDiskType != null && { optimizedStagingDiskType: input.optimizedStagingDiskType }),
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
 * serializeAws_restJson1SourceServerIDs
 */
const se_SourceServerIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1StartFailbackRequestRecoveryInstanceIDs
 */
const se_StartFailbackRequestRecoveryInstanceIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1StartRecoveryRequestSourceServer
 */
const se_StartRecoveryRequestSourceServer = (input: StartRecoveryRequestSourceServer, context: __SerdeContext): any => {
  return {
    ...(input.recoverySnapshotID != null && { recoverySnapshotID: input.recoverySnapshotID }),
    ...(input.sourceServerID != null && { sourceServerID: input.sourceServerID }),
  };
};

/**
 * serializeAws_restJson1StartRecoveryRequestSourceServers
 */
const se_StartRecoveryRequestSourceServers = (
  input: StartRecoveryRequestSourceServer[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StartRecoveryRequestSourceServer(entry, context);
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
 * deserializeAws_restJson1Account
 */
const de_Account = (output: any, context: __SerdeContext): Account => {
  return {
    accountID: __expectString(output.accountID),
  } as any;
};

/**
 * deserializeAws_restJson1Accounts
 */
const de_Accounts = (output: any, context: __SerdeContext): Account[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Account(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConversionMap
 */
const de_ConversionMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ConversionProperties
 */
const de_ConversionProperties = (output: any, context: __SerdeContext): ConversionProperties => {
  return {
    dataTimestamp: __expectString(output.dataTimestamp),
    forceUefi: __expectBoolean(output.forceUefi),
    rootVolumeName: __expectString(output.rootVolumeName),
    volumeToConversionMap:
      output.volumeToConversionMap != null
        ? de_VolumeToConversionMap(output.volumeToConversionMap, context)
        : undefined,
    volumeToVolumeSize:
      output.volumeToVolumeSize != null ? de_VolumeToSizeMap(output.volumeToVolumeSize, context) : undefined,
  } as any;
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
    replicatedDisks:
      output.replicatedDisks != null
        ? de_DataReplicationInfoReplicatedDisks(output.replicatedDisks, context)
        : undefined,
    stagingAvailabilityZone: __expectString(output.stagingAvailabilityZone),
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
 * deserializeAws_restJson1DescribeRecoveryInstancesItems
 */
const de_DescribeRecoveryInstancesItems = (output: any, context: __SerdeContext): RecoveryInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecoveryInstance(entry, context);
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
 * deserializeAws_restJson1EbsSnapshotsList
 */
const de_EbsSnapshotsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1IdentificationHints
 */
const de_IdentificationHints = (output: any, context: __SerdeContext): IdentificationHints => {
  return {
    awsInstanceID: __expectString(output.awsInstanceID),
    fqdn: __expectString(output.fqdn),
    hostname: __expectString(output.hostname),
    vmWareUuid: __expectString(output.vmWareUuid),
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
    conversionProperties:
      output.conversionProperties != null ? de_ConversionProperties(output.conversionProperties, context) : undefined,
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
    lastLaunch: output.lastLaunch != null ? de_LifeCycleLastLaunch(output.lastLaunch, context) : undefined,
    lastSeenByServiceDateTime: __expectString(output.lastSeenByServiceDateTime),
  } as any;
};

/**
 * deserializeAws_restJson1LifeCycleLastLaunch
 */
const de_LifeCycleLastLaunch = (output: any, context: __SerdeContext): LifeCycleLastLaunch => {
  return {
    initiated: output.initiated != null ? de_LifeCycleLastLaunchInitiated(output.initiated, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1LifeCycleLastLaunchInitiated
 */
const de_LifeCycleLastLaunchInitiated = (output: any, context: __SerdeContext): LifeCycleLastLaunchInitiated => {
  return {
    apiCallDateTime: __expectString(output.apiCallDateTime),
    jobID: __expectString(output.jobID),
    type: __expectString(output.type),
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
    recoveryInstanceID: __expectString(output.recoveryInstanceID),
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
 * deserializeAws_restJson1PITPolicy
 */
const de_PITPolicy = (output: any, context: __SerdeContext): PITPolicyRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PITPolicyRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PITPolicyRule
 */
const de_PITPolicyRule = (output: any, context: __SerdeContext): PITPolicyRule => {
  return {
    enabled: __expectBoolean(output.enabled),
    interval: __expectInt32(output.interval),
    retentionDuration: __expectInt32(output.retentionDuration),
    ruleID: __expectLong(output.ruleID),
    units: __expectString(output.units),
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryInstance
 */
const de_RecoveryInstance = (output: any, context: __SerdeContext): RecoveryInstance => {
  return {
    arn: __expectString(output.arn),
    dataReplicationInfo:
      output.dataReplicationInfo != null
        ? de_RecoveryInstanceDataReplicationInfo(output.dataReplicationInfo, context)
        : undefined,
    ec2InstanceID: __expectString(output.ec2InstanceID),
    ec2InstanceState: __expectString(output.ec2InstanceState),
    failback: output.failback != null ? de_RecoveryInstanceFailback(output.failback, context) : undefined,
    isDrill: __expectBoolean(output.isDrill),
    jobID: __expectString(output.jobID),
    originAvailabilityZone: __expectString(output.originAvailabilityZone),
    originEnvironment: __expectString(output.originEnvironment),
    pointInTimeSnapshotDateTime: __expectString(output.pointInTimeSnapshotDateTime),
    recoveryInstanceID: __expectString(output.recoveryInstanceID),
    recoveryInstanceProperties:
      output.recoveryInstanceProperties != null
        ? de_RecoveryInstanceProperties(output.recoveryInstanceProperties, context)
        : undefined,
    sourceServerID: __expectString(output.sourceServerID),
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryInstanceDataReplicationError
 */
const de_RecoveryInstanceDataReplicationError = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationError => {
  return {
    error: __expectString(output.error),
    rawError: __expectString(output.rawError),
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryInstanceDataReplicationInfo
 */
const de_RecoveryInstanceDataReplicationInfo = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInfo => {
  return {
    dataReplicationError:
      output.dataReplicationError != null
        ? de_RecoveryInstanceDataReplicationError(output.dataReplicationError, context)
        : undefined,
    dataReplicationInitiation:
      output.dataReplicationInitiation != null
        ? de_RecoveryInstanceDataReplicationInitiation(output.dataReplicationInitiation, context)
        : undefined,
    dataReplicationState: __expectString(output.dataReplicationState),
    etaDateTime: __expectString(output.etaDateTime),
    lagDuration: __expectString(output.lagDuration),
    replicatedDisks:
      output.replicatedDisks != null
        ? de_RecoveryInstanceDataReplicationInfoReplicatedDisks(output.replicatedDisks, context)
        : undefined,
    stagingAvailabilityZone: __expectString(output.stagingAvailabilityZone),
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryInstanceDataReplicationInfoReplicatedDisk
 */
const de_RecoveryInstanceDataReplicationInfoReplicatedDisk = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInfoReplicatedDisk => {
  return {
    backloggedStorageBytes: __expectLong(output.backloggedStorageBytes),
    deviceName: __expectString(output.deviceName),
    replicatedStorageBytes: __expectLong(output.replicatedStorageBytes),
    rescannedStorageBytes: __expectLong(output.rescannedStorageBytes),
    totalStorageBytes: __expectLong(output.totalStorageBytes),
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryInstanceDataReplicationInfoReplicatedDisks
 */
const de_RecoveryInstanceDataReplicationInfoReplicatedDisks = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInfoReplicatedDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecoveryInstanceDataReplicationInfoReplicatedDisk(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecoveryInstanceDataReplicationInitiation
 */
const de_RecoveryInstanceDataReplicationInitiation = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInitiation => {
  return {
    startDateTime: __expectString(output.startDateTime),
    steps: output.steps != null ? de_RecoveryInstanceDataReplicationInitiationSteps(output.steps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryInstanceDataReplicationInitiationStep
 */
const de_RecoveryInstanceDataReplicationInitiationStep = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInitiationStep => {
  return {
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryInstanceDataReplicationInitiationSteps
 */
const de_RecoveryInstanceDataReplicationInitiationSteps = (
  output: any,
  context: __SerdeContext
): RecoveryInstanceDataReplicationInitiationStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecoveryInstanceDataReplicationInitiationStep(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecoveryInstanceDisk
 */
const de_RecoveryInstanceDisk = (output: any, context: __SerdeContext): RecoveryInstanceDisk => {
  return {
    bytes: __expectLong(output.bytes),
    ebsVolumeID: __expectString(output.ebsVolumeID),
    internalDeviceName: __expectString(output.internalDeviceName),
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryInstanceDisks
 */
const de_RecoveryInstanceDisks = (output: any, context: __SerdeContext): RecoveryInstanceDisk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecoveryInstanceDisk(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecoveryInstanceFailback
 */
const de_RecoveryInstanceFailback = (output: any, context: __SerdeContext): RecoveryInstanceFailback => {
  return {
    agentLastSeenByServiceDateTime: __expectString(output.agentLastSeenByServiceDateTime),
    elapsedReplicationDuration: __expectString(output.elapsedReplicationDuration),
    failbackClientID: __expectString(output.failbackClientID),
    failbackClientLastSeenByServiceDateTime: __expectString(output.failbackClientLastSeenByServiceDateTime),
    failbackInitiationTime: __expectString(output.failbackInitiationTime),
    failbackJobID: __expectString(output.failbackJobID),
    failbackLaunchType: __expectString(output.failbackLaunchType),
    failbackToOriginalServer: __expectBoolean(output.failbackToOriginalServer),
    firstByteDateTime: __expectString(output.firstByteDateTime),
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryInstanceProperties
 */
const de_RecoveryInstanceProperties = (output: any, context: __SerdeContext): RecoveryInstanceProperties => {
  return {
    cpus: output.cpus != null ? de_Cpus(output.cpus, context) : undefined,
    disks: output.disks != null ? de_RecoveryInstanceDisks(output.disks, context) : undefined,
    identificationHints:
      output.identificationHints != null ? de_IdentificationHints(output.identificationHints, context) : undefined,
    lastUpdatedDateTime: __expectString(output.lastUpdatedDateTime),
    networkInterfaces:
      output.networkInterfaces != null ? de_NetworkInterfaces(output.networkInterfaces, context) : undefined,
    os: output.os != null ? de_OS(output.os, context) : undefined,
    ramBytes: __expectLong(output.ramBytes),
  } as any;
};

/**
 * deserializeAws_restJson1RecoverySnapshot
 */
const de_RecoverySnapshot = (output: any, context: __SerdeContext): RecoverySnapshot => {
  return {
    ebsSnapshots: output.ebsSnapshots != null ? de_EbsSnapshotsList(output.ebsSnapshots, context) : undefined,
    expectedTimestamp: __expectString(output.expectedTimestamp),
    snapshotID: __expectString(output.snapshotID),
    sourceServerID: __expectString(output.sourceServerID),
    timestamp: __expectString(output.timestamp),
  } as any;
};

/**
 * deserializeAws_restJson1RecoverySnapshotsList
 */
const de_RecoverySnapshotsList = (output: any, context: __SerdeContext): RecoverySnapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecoverySnapshot(entry, context);
    });
  return retVal;
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
    optimizedStagingDiskType: __expectString(output.optimizedStagingDiskType),
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
    autoReplicateNewDisks: __expectBoolean(output.autoReplicateNewDisks),
    bandwidthThrottling: __expectLong(output.bandwidthThrottling),
    createPublicIP: __expectBoolean(output.createPublicIP),
    dataPlaneRouting: __expectString(output.dataPlaneRouting),
    defaultLargeStagingDiskType: __expectString(output.defaultLargeStagingDiskType),
    ebsEncryption: __expectString(output.ebsEncryption),
    ebsEncryptionKeyArn: __expectString(output.ebsEncryptionKeyArn),
    pitPolicy: output.pitPolicy != null ? de_PITPolicy(output.pitPolicy, context) : undefined,
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
 * deserializeAws_restJson1SourceCloudProperties
 */
const de_SourceCloudProperties = (output: any, context: __SerdeContext): SourceCloudProperties => {
  return {
    originAccountID: __expectString(output.originAccountID),
    originAvailabilityZone: __expectString(output.originAvailabilityZone),
    originRegion: __expectString(output.originRegion),
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
    arn: __expectString(output.arn),
    dataReplicationInfo:
      output.dataReplicationInfo != null ? de_DataReplicationInfo(output.dataReplicationInfo, context) : undefined,
    lastLaunchResult: __expectString(output.lastLaunchResult),
    lifeCycle: output.lifeCycle != null ? de_LifeCycle(output.lifeCycle, context) : undefined,
    recoveryInstanceId: __expectString(output.recoveryInstanceId),
    replicationDirection: __expectString(output.replicationDirection),
    reversedDirectionSourceServerArn: __expectString(output.reversedDirectionSourceServerArn),
    sourceCloudProperties:
      output.sourceCloudProperties != null
        ? de_SourceCloudProperties(output.sourceCloudProperties, context)
        : undefined,
    sourceProperties:
      output.sourceProperties != null ? de_SourceProperties(output.sourceProperties, context) : undefined,
    sourceServerID: __expectString(output.sourceServerID),
    stagingArea: output.stagingArea != null ? de_StagingArea(output.stagingArea, context) : undefined,
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
  } as any;
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
 * deserializeAws_restJson1StagingArea
 */
const de_StagingArea = (output: any, context: __SerdeContext): StagingArea => {
  return {
    errorMessage: __expectString(output.errorMessage),
    stagingAccountID: __expectString(output.stagingAccountID),
    stagingSourceServerArn: __expectString(output.stagingSourceServerArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1StagingSourceServer
 */
const de_StagingSourceServer = (output: any, context: __SerdeContext): StagingSourceServer => {
  return {
    arn: __expectString(output.arn),
    hostname: __expectString(output.hostname),
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1StagingSourceServersList
 */
const de_StagingSourceServersList = (output: any, context: __SerdeContext): StagingSourceServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StagingSourceServer(entry, context);
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
 * deserializeAws_restJson1VolumeToConversionMap
 */
const de_VolumeToConversionMap = (output: any, context: __SerdeContext): Record<string, Record<string, string>> => {
  return Object.entries(output).reduce((acc: Record<string, Record<string, string>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ConversionMap(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1VolumeToSizeMap
 */
const de_VolumeToSizeMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectLong(value) as any;
    return acc;
  }, {});
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
