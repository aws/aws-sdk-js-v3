// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateApplicationInstanceCommandInput,
  CreateApplicationInstanceCommandOutput,
} from "../commands/CreateApplicationInstanceCommand";
import {
  CreateJobForDevicesCommandInput,
  CreateJobForDevicesCommandOutput,
} from "../commands/CreateJobForDevicesCommand";
import {
  CreateNodeFromTemplateJobCommandInput,
  CreateNodeFromTemplateJobCommandOutput,
} from "../commands/CreateNodeFromTemplateJobCommand";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "../commands/CreatePackageCommand";
import {
  CreatePackageImportJobCommandInput,
  CreatePackageImportJobCommandOutput,
} from "../commands/CreatePackageImportJobCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "../commands/DeleteDeviceCommand";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "../commands/DeletePackageCommand";
import {
  DeregisterPackageVersionCommandInput,
  DeregisterPackageVersionCommandOutput,
} from "../commands/DeregisterPackageVersionCommand";
import {
  DescribeApplicationInstanceCommandInput,
  DescribeApplicationInstanceCommandOutput,
} from "../commands/DescribeApplicationInstanceCommand";
import {
  DescribeApplicationInstanceDetailsCommandInput,
  DescribeApplicationInstanceDetailsCommandOutput,
} from "../commands/DescribeApplicationInstanceDetailsCommand";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "../commands/DescribeDeviceCommand";
import { DescribeDeviceJobCommandInput, DescribeDeviceJobCommandOutput } from "../commands/DescribeDeviceJobCommand";
import { DescribeNodeCommandInput, DescribeNodeCommandOutput } from "../commands/DescribeNodeCommand";
import {
  DescribeNodeFromTemplateJobCommandInput,
  DescribeNodeFromTemplateJobCommandOutput,
} from "../commands/DescribeNodeFromTemplateJobCommand";
import { DescribePackageCommandInput, DescribePackageCommandOutput } from "../commands/DescribePackageCommand";
import {
  DescribePackageImportJobCommandInput,
  DescribePackageImportJobCommandOutput,
} from "../commands/DescribePackageImportJobCommand";
import {
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
} from "../commands/DescribePackageVersionCommand";
import {
  ListApplicationInstanceDependenciesCommandInput,
  ListApplicationInstanceDependenciesCommandOutput,
} from "../commands/ListApplicationInstanceDependenciesCommand";
import {
  ListApplicationInstanceNodeInstancesCommandInput,
  ListApplicationInstanceNodeInstancesCommandOutput,
} from "../commands/ListApplicationInstanceNodeInstancesCommand";
import {
  ListApplicationInstancesCommandInput,
  ListApplicationInstancesCommandOutput,
} from "../commands/ListApplicationInstancesCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { ListDevicesJobsCommandInput, ListDevicesJobsCommandOutput } from "../commands/ListDevicesJobsCommand";
import {
  ListNodeFromTemplateJobsCommandInput,
  ListNodeFromTemplateJobsCommandOutput,
} from "../commands/ListNodeFromTemplateJobsCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import {
  ListPackageImportJobsCommandInput,
  ListPackageImportJobsCommandOutput,
} from "../commands/ListPackageImportJobsCommand";
import { ListPackagesCommandInput, ListPackagesCommandOutput } from "../commands/ListPackagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ProvisionDeviceCommandInput, ProvisionDeviceCommandOutput } from "../commands/ProvisionDeviceCommand";
import {
  RegisterPackageVersionCommandInput,
  RegisterPackageVersionCommandOutput,
} from "../commands/RegisterPackageVersionCommand";
import {
  RemoveApplicationInstanceCommandInput,
  RemoveApplicationInstanceCommandOutput,
} from "../commands/RemoveApplicationInstanceCommand";
import {
  SignalApplicationInstanceNodeInstancesCommandInput,
  SignalApplicationInstanceNodeInstancesCommandOutput,
} from "../commands/SignalApplicationInstanceNodeInstancesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDeviceMetadataCommandInput,
  UpdateDeviceMetadataCommandOutput,
} from "../commands/UpdateDeviceMetadataCommand";
import {
  AccessDeniedException,
  AlternateSoftwareMetadata,
  ApplicationInstance,
  ConflictException,
  ConflictExceptionErrorArgument,
  Device,
  DeviceJob,
  DeviceJobConfig,
  EthernetPayload,
  EthernetStatus,
  InternalServerException,
  Job,
  JobResourceTags,
  LatestDeviceJob,
  ManifestOverridesPayload,
  ManifestPayload,
  NetworkPayload,
  NetworkStatus,
  Node,
  NodeFromTemplateJob,
  NodeInputPort,
  NodeInstance,
  NodeInterface,
  NodeOutputPort,
  NodeSignal,
  NtpPayload,
  NtpStatus,
  OTAJobConfig,
  OutPutS3Location,
  PackageImportJob,
  PackageImportJobInputConfig,
  PackageImportJobOutput,
  PackageImportJobOutputConfig,
  PackageListItem,
  PackageObject,
  PackageVersionInputConfig,
  PackageVersionOutputConfig,
  ReportedRuntimeContextState,
  ResourceNotFoundException,
  S3Location,
  ServiceQuotaExceededException,
  StaticIpConnectionInfo,
  StorageLocation,
  ValidationException,
  ValidationExceptionErrorArgument,
  ValidationExceptionField,
} from "../models/models_0";
import { PanoramaServiceException as __BaseException } from "../models/PanoramaServiceException";

/**
 * serializeAws_restJson1CreateApplicationInstanceCommand
 */
export const se_CreateApplicationInstanceCommand = async (
  input: CreateApplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/application-instances";
  let body: any;
  body = JSON.stringify({
    ...(input.ApplicationInstanceIdToReplace != null && {
      ApplicationInstanceIdToReplace: input.ApplicationInstanceIdToReplace,
    }),
    ...(input.DefaultRuntimeContextDevice != null && {
      DefaultRuntimeContextDevice: input.DefaultRuntimeContextDevice,
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ManifestOverridesPayload != null && {
      ManifestOverridesPayload: se_ManifestOverridesPayload(input.ManifestOverridesPayload, context),
    }),
    ...(input.ManifestPayload != null && { ManifestPayload: se_ManifestPayload(input.ManifestPayload, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RuntimeRoleArn != null && { RuntimeRoleArn: input.RuntimeRoleArn }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1CreateJobForDevicesCommand
 */
export const se_CreateJobForDevicesCommand = async (
  input: CreateJobForDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceIds != null && { DeviceIds: se_DeviceIdList(input.DeviceIds, context) }),
    ...(input.DeviceJobConfig != null && { DeviceJobConfig: se_DeviceJobConfig(input.DeviceJobConfig, context) }),
    ...(input.JobType != null && { JobType: input.JobType }),
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
 * serializeAws_restJson1CreateNodeFromTemplateJobCommand
 */
export const se_CreateNodeFromTemplateJobCommand = async (
  input: CreateNodeFromTemplateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/template-job";
  let body: any;
  body = JSON.stringify({
    ...(input.JobTags != null && { JobTags: se_JobTagsList(input.JobTags, context) }),
    ...(input.NodeDescription != null && { NodeDescription: input.NodeDescription }),
    ...(input.NodeName != null && { NodeName: input.NodeName }),
    ...(input.OutputPackageName != null && { OutputPackageName: input.OutputPackageName }),
    ...(input.OutputPackageVersion != null && { OutputPackageVersion: input.OutputPackageVersion }),
    ...(input.TemplateParameters != null && {
      TemplateParameters: se_TemplateParametersMap(input.TemplateParameters, context),
    }),
    ...(input.TemplateType != null && { TemplateType: input.TemplateType }),
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
 * serializeAws_restJson1CreatePackageCommand
 */
export const se_CreatePackageCommand = async (
  input: CreatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages";
  let body: any;
  body = JSON.stringify({
    ...(input.PackageName != null && { PackageName: input.PackageName }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1CreatePackageImportJobCommand
 */
export const se_CreatePackageImportJobCommand = async (
  input: CreatePackageImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/import-jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.InputConfig != null && { InputConfig: se_PackageImportJobInputConfig(input.InputConfig, context) }),
    ...(input.JobTags != null && { JobTags: se_JobTagsList(input.JobTags, context) }),
    ...(input.JobType != null && { JobType: input.JobType }),
    ...(input.OutputConfig != null && { OutputConfig: se_PackageImportJobOutputConfig(input.OutputConfig, context) }),
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
 * serializeAws_restJson1DeleteDeviceCommand
 */
export const se_DeleteDeviceCommand = async (
  input: DeleteDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/devices/{DeviceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeletePackageCommand
 */
export const se_DeletePackageCommand = async (
  input: DeletePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/{PackageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PackageId", () => input.PackageId!, "{PackageId}", false);
  const query: any = map({
    ForceDelete: [() => input.ForceDelete !== void 0, () => input.ForceDelete!.toString()],
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
 * serializeAws_restJson1DeregisterPackageVersionCommand
 */
export const se_DeregisterPackageVersionCommand = async (
  input: DeregisterPackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PackageId", () => input.PackageId!, "{PackageId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PackageVersion",
    () => input.PackageVersion!,
    "{PackageVersion}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PatchVersion",
    () => input.PatchVersion!,
    "{PatchVersion}",
    false
  );
  const query: any = map({
    OwnerAccount: [, input.OwnerAccount!],
    UpdatedLatestPatchVersion: [, input.UpdatedLatestPatchVersion!],
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
 * serializeAws_restJson1DescribeApplicationInstanceCommand
 */
export const se_DescribeApplicationInstanceCommand = async (
  input: DescribeApplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/application-instances/{ApplicationInstanceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationInstanceId",
    () => input.ApplicationInstanceId!,
    "{ApplicationInstanceId}",
    false
  );
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
 * serializeAws_restJson1DescribeApplicationInstanceDetailsCommand
 */
export const se_DescribeApplicationInstanceDetailsCommand = async (
  input: DescribeApplicationInstanceDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/application-instances/{ApplicationInstanceId}/details";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationInstanceId",
    () => input.ApplicationInstanceId!,
    "{ApplicationInstanceId}",
    false
  );
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
 * serializeAws_restJson1DescribeDeviceCommand
 */
export const se_DescribeDeviceCommand = async (
  input: DescribeDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/devices/{DeviceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DeviceId", () => input.DeviceId!, "{DeviceId}", false);
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
 * serializeAws_restJson1DescribeDeviceJobCommand
 */
export const se_DescribeDeviceJobCommand = async (
  input: DescribeDeviceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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
 * serializeAws_restJson1DescribeNodeCommand
 */
export const se_DescribeNodeCommand = async (
  input: DescribeNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/nodes/{NodeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "NodeId", () => input.NodeId!, "{NodeId}", false);
  const query: any = map({
    OwnerAccount: [, input.OwnerAccount!],
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
 * serializeAws_restJson1DescribeNodeFromTemplateJobCommand
 */
export const se_DescribeNodeFromTemplateJobCommand = async (
  input: DescribeNodeFromTemplateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/template-job/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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
 * serializeAws_restJson1DescribePackageCommand
 */
export const se_DescribePackageCommand = async (
  input: DescribePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/metadata/{PackageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PackageId", () => input.PackageId!, "{PackageId}", false);
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
 * serializeAws_restJson1DescribePackageImportJobCommand
 */
export const se_DescribePackageImportJobCommand = async (
  input: DescribePackageImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/import-jobs/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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
 * serializeAws_restJson1DescribePackageVersionCommand
 */
export const se_DescribePackageVersionCommand = async (
  input: DescribePackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/packages/metadata/{PackageId}/versions/{PackageVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PackageId", () => input.PackageId!, "{PackageId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PackageVersion",
    () => input.PackageVersion!,
    "{PackageVersion}",
    false
  );
  const query: any = map({
    OwnerAccount: [, input.OwnerAccount!],
    PatchVersion: [, input.PatchVersion!],
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
 * serializeAws_restJson1ListApplicationInstanceDependenciesCommand
 */
export const se_ListApplicationInstanceDependenciesCommand = async (
  input: ListApplicationInstanceDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/application-instances/{ApplicationInstanceId}/package-dependencies";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationInstanceId",
    () => input.ApplicationInstanceId!,
    "{ApplicationInstanceId}",
    false
  );
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListApplicationInstanceNodeInstancesCommand
 */
export const se_ListApplicationInstanceNodeInstancesCommand = async (
  input: ListApplicationInstanceNodeInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/application-instances/{ApplicationInstanceId}/node-instances";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationInstanceId",
    () => input.ApplicationInstanceId!,
    "{ApplicationInstanceId}",
    false
  );
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListApplicationInstancesCommand
 */
export const se_ListApplicationInstancesCommand = async (
  input: ListApplicationInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/application-instances";
  const query: any = map({
    deviceId: [, input.DeviceId!],
    statusFilter: [, input.StatusFilter!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListDevicesCommand
 */
export const se_ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/devices";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    SortBy: [, input.SortBy!],
    SortOrder: [, input.SortOrder!],
    NameFilter: [, input.NameFilter!],
    DeviceAggregatedStatusFilter: [, input.DeviceAggregatedStatusFilter!],
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
 * serializeAws_restJson1ListDevicesJobsCommand
 */
export const se_ListDevicesJobsCommand = async (
  input: ListDevicesJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs";
  const query: any = map({
    DeviceId: [, input.DeviceId!],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListNodeFromTemplateJobsCommand
 */
export const se_ListNodeFromTemplateJobsCommand = async (
  input: ListNodeFromTemplateJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/template-job";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListNodesCommand
 */
export const se_ListNodesCommand = async (
  input: ListNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/nodes";
  const query: any = map({
    category: [, input.Category!],
    ownerAccount: [, input.OwnerAccount!],
    packageName: [, input.PackageName!],
    packageVersion: [, input.PackageVersion!],
    patchVersion: [, input.PatchVersion!],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListPackageImportJobsCommand
 */
export const se_ListPackageImportJobsCommand = async (
  input: ListPackageImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/import-jobs";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListPackagesCommand
 */
export const se_ListPackagesCommand = async (
  input: ListPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
 * serializeAws_restJson1ProvisionDeviceCommand
 */
export const se_ProvisionDeviceCommand = async (
  input: ProvisionDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/devices";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NetworkingConfiguration != null && {
      NetworkingConfiguration: se_NetworkPayload(input.NetworkingConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1RegisterPackageVersionCommand
 */
export const se_RegisterPackageVersionCommand = async (
  input: RegisterPackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PackageId", () => input.PackageId!, "{PackageId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PackageVersion",
    () => input.PackageVersion!,
    "{PackageVersion}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PatchVersion",
    () => input.PatchVersion!,
    "{PatchVersion}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.MarkLatest != null && { MarkLatest: input.MarkLatest }),
    ...(input.OwnerAccount != null && { OwnerAccount: input.OwnerAccount }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RemoveApplicationInstanceCommand
 */
export const se_RemoveApplicationInstanceCommand = async (
  input: RemoveApplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/application-instances/{ApplicationInstanceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationInstanceId",
    () => input.ApplicationInstanceId!,
    "{ApplicationInstanceId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SignalApplicationInstanceNodeInstancesCommand
 */
export const se_SignalApplicationInstanceNodeInstancesCommand = async (
  input: SignalApplicationInstanceNodeInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/application-instances/{ApplicationInstanceId}/node-signals";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationInstanceId",
    () => input.ApplicationInstanceId!,
    "{ApplicationInstanceId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.NodeSignals != null && { NodeSignals: se_NodeSignalList(input.NodeSignals, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
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
 * serializeAws_restJson1UpdateDeviceMetadataCommand
 */
export const se_UpdateDeviceMetadataCommand = async (
  input: UpdateDeviceMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/devices/{DeviceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateApplicationInstanceCommand
 */
export const de_CreateApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateApplicationInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationInstanceId != null) {
    contents.ApplicationInstanceId = __expectString(data.ApplicationInstanceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateApplicationInstanceCommandError
 */
const de_CreateApplicationInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.panorama#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1CreateJobForDevicesCommand
 */
export const de_CreateJobForDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobForDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateJobForDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs != null) {
    contents.Jobs = de_JobList(data.Jobs, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobForDevicesCommandError
 */
const de_CreateJobForDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobForDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1CreateNodeFromTemplateJobCommand
 */
export const de_CreateNodeFromTemplateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeFromTemplateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateNodeFromTemplateJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JobId != null) {
    contents.JobId = __expectString(data.JobId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateNodeFromTemplateJobCommandError
 */
const de_CreateNodeFromTemplateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeFromTemplateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1CreatePackageCommand
 */
export const de_CreatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.PackageId != null) {
    contents.PackageId = __expectString(data.PackageId);
  }
  if (data.StorageLocation != null) {
    contents.StorageLocation = de_StorageLocation(data.StorageLocation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePackageCommandError
 */
const de_CreatePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1CreatePackageImportJobCommand
 */
export const de_CreatePackageImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePackageImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JobId != null) {
    contents.JobId = __expectString(data.JobId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePackageImportJobCommandError
 */
const de_CreatePackageImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DeleteDeviceCommand
 */
export const de_DeleteDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeviceId != null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeviceCommandError
 */
const de_DeleteDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DeletePackageCommand
 */
export const de_DeletePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeletePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackageCommandError
 */
const de_DeletePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DeregisterPackageVersionCommand
 */
export const de_DeregisterPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterPackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeregisterPackageVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterPackageVersionCommandError
 */
const de_DeregisterPackageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterPackageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DescribeApplicationInstanceCommand
 */
export const de_DescribeApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeApplicationInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationInstanceId != null) {
    contents.ApplicationInstanceId = __expectString(data.ApplicationInstanceId);
  }
  if (data.ApplicationInstanceIdToReplace != null) {
    contents.ApplicationInstanceIdToReplace = __expectString(data.ApplicationInstanceIdToReplace);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.DefaultRuntimeContextDevice != null) {
    contents.DefaultRuntimeContextDevice = __expectString(data.DefaultRuntimeContextDevice);
  }
  if (data.DefaultRuntimeContextDeviceName != null) {
    contents.DefaultRuntimeContextDeviceName = __expectString(data.DefaultRuntimeContextDeviceName);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.HealthStatus != null) {
    contents.HealthStatus = __expectString(data.HealthStatus);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RuntimeContextStates != null) {
    contents.RuntimeContextStates = de_ReportedRuntimeContextStates(data.RuntimeContextStates, context);
  }
  if (data.RuntimeRoleArn != null) {
    contents.RuntimeRoleArn = __expectString(data.RuntimeRoleArn);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusDescription != null) {
    contents.StatusDescription = __expectString(data.StatusDescription);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeApplicationInstanceCommandError
 */
const de_DescribeApplicationInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DescribeApplicationInstanceDetailsCommand
 */
export const de_DescribeApplicationInstanceDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeApplicationInstanceDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationInstanceId != null) {
    contents.ApplicationInstanceId = __expectString(data.ApplicationInstanceId);
  }
  if (data.ApplicationInstanceIdToReplace != null) {
    contents.ApplicationInstanceIdToReplace = __expectString(data.ApplicationInstanceIdToReplace);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.DefaultRuntimeContextDevice != null) {
    contents.DefaultRuntimeContextDevice = __expectString(data.DefaultRuntimeContextDevice);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.ManifestOverridesPayload != null) {
    contents.ManifestOverridesPayload = de_ManifestOverridesPayload(
      __expectUnion(data.ManifestOverridesPayload),
      context
    );
  }
  if (data.ManifestPayload != null) {
    contents.ManifestPayload = de_ManifestPayload(__expectUnion(data.ManifestPayload), context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeApplicationInstanceDetailsCommandError
 */
const de_DescribeApplicationInstanceDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DescribeDeviceCommand
 */
export const de_DescribeDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AlternateSoftwares != null) {
    contents.AlternateSoftwares = de_AlternateSoftwares(data.AlternateSoftwares, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Brand != null) {
    contents.Brand = __expectString(data.Brand);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.CurrentNetworkingStatus != null) {
    contents.CurrentNetworkingStatus = de_NetworkStatus(data.CurrentNetworkingStatus, context);
  }
  if (data.CurrentSoftware != null) {
    contents.CurrentSoftware = __expectString(data.CurrentSoftware);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.DeviceAggregatedStatus != null) {
    contents.DeviceAggregatedStatus = __expectString(data.DeviceAggregatedStatus);
  }
  if (data.DeviceConnectionStatus != null) {
    contents.DeviceConnectionStatus = __expectString(data.DeviceConnectionStatus);
  }
  if (data.DeviceId != null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  if (data.LatestAlternateSoftware != null) {
    contents.LatestAlternateSoftware = __expectString(data.LatestAlternateSoftware);
  }
  if (data.LatestDeviceJob != null) {
    contents.LatestDeviceJob = de_LatestDeviceJob(data.LatestDeviceJob, context);
  }
  if (data.LatestSoftware != null) {
    contents.LatestSoftware = __expectString(data.LatestSoftware);
  }
  if (data.LeaseExpirationTime != null) {
    contents.LeaseExpirationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LeaseExpirationTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.NetworkingConfiguration != null) {
    contents.NetworkingConfiguration = de_NetworkPayload(data.NetworkingConfiguration, context);
  }
  if (data.ProvisioningStatus != null) {
    contents.ProvisioningStatus = __expectString(data.ProvisioningStatus);
  }
  if (data.SerialNumber != null) {
    contents.SerialNumber = __expectString(data.SerialNumber);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDeviceCommandError
 */
const de_DescribeDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DescribeDeviceJobCommand
 */
export const de_DescribeDeviceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDeviceJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.DeviceArn != null) {
    contents.DeviceArn = __expectString(data.DeviceArn);
  }
  if (data.DeviceId != null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  if (data.DeviceName != null) {
    contents.DeviceName = __expectString(data.DeviceName);
  }
  if (data.DeviceType != null) {
    contents.DeviceType = __expectString(data.DeviceType);
  }
  if (data.ImageVersion != null) {
    contents.ImageVersion = __expectString(data.ImageVersion);
  }
  if (data.JobId != null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.JobType != null) {
    contents.JobType = __expectString(data.JobType);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDeviceJobCommandError
 */
const de_DescribeDeviceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DescribeNodeCommand
 */
export const de_DescribeNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssetName != null) {
    contents.AssetName = __expectString(data.AssetName);
  }
  if (data.Category != null) {
    contents.Category = __expectString(data.Category);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.NodeId != null) {
    contents.NodeId = __expectString(data.NodeId);
  }
  if (data.NodeInterface != null) {
    contents.NodeInterface = de_NodeInterface(data.NodeInterface, context);
  }
  if (data.OwnerAccount != null) {
    contents.OwnerAccount = __expectString(data.OwnerAccount);
  }
  if (data.PackageArn != null) {
    contents.PackageArn = __expectString(data.PackageArn);
  }
  if (data.PackageId != null) {
    contents.PackageId = __expectString(data.PackageId);
  }
  if (data.PackageName != null) {
    contents.PackageName = __expectString(data.PackageName);
  }
  if (data.PackageVersion != null) {
    contents.PackageVersion = __expectString(data.PackageVersion);
  }
  if (data.PatchVersion != null) {
    contents.PatchVersion = __expectString(data.PatchVersion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeNodeCommandError
 */
const de_DescribeNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DescribeNodeFromTemplateJobCommand
 */
export const de_DescribeNodeFromTemplateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeFromTemplateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeNodeFromTemplateJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.JobId != null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.JobTags != null) {
    contents.JobTags = de_JobTagsList(data.JobTags, context);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.NodeDescription != null) {
    contents.NodeDescription = __expectString(data.NodeDescription);
  }
  if (data.NodeName != null) {
    contents.NodeName = __expectString(data.NodeName);
  }
  if (data.OutputPackageName != null) {
    contents.OutputPackageName = __expectString(data.OutputPackageName);
  }
  if (data.OutputPackageVersion != null) {
    contents.OutputPackageVersion = __expectString(data.OutputPackageVersion);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusMessage != null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
  if (data.TemplateParameters != null) {
    contents.TemplateParameters = de_TemplateParametersMap(data.TemplateParameters, context);
  }
  if (data.TemplateType != null) {
    contents.TemplateType = __expectString(data.TemplateType);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeNodeFromTemplateJobCommandError
 */
const de_DescribeNodeFromTemplateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeFromTemplateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DescribePackageCommand
 */
export const de_DescribePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.PackageId != null) {
    contents.PackageId = __expectString(data.PackageId);
  }
  if (data.PackageName != null) {
    contents.PackageName = __expectString(data.PackageName);
  }
  if (data.ReadAccessPrincipalArns != null) {
    contents.ReadAccessPrincipalArns = de_PrincipalArnsList(data.ReadAccessPrincipalArns, context);
  }
  if (data.StorageLocation != null) {
    contents.StorageLocation = de_StorageLocation(data.StorageLocation, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.WriteAccessPrincipalArns != null) {
    contents.WriteAccessPrincipalArns = de_PrincipalArnsList(data.WriteAccessPrincipalArns, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackageCommandError
 */
const de_DescribePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DescribePackageImportJobCommand
 */
export const de_DescribePackageImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePackageImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ClientToken != null) {
    contents.ClientToken = __expectString(data.ClientToken);
  }
  if (data.CreatedTime != null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.InputConfig != null) {
    contents.InputConfig = de_PackageImportJobInputConfig(data.InputConfig, context);
  }
  if (data.JobId != null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.JobTags != null) {
    contents.JobTags = de_JobTagsList(data.JobTags, context);
  }
  if (data.JobType != null) {
    contents.JobType = __expectString(data.JobType);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Output != null) {
    contents.Output = de_PackageImportJobOutput(data.Output, context);
  }
  if (data.OutputConfig != null) {
    contents.OutputConfig = de_PackageImportJobOutputConfig(data.OutputConfig, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusMessage != null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackageImportJobCommandError
 */
const de_DescribePackageImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1DescribePackageVersionCommand
 */
export const de_DescribePackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePackageVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IsLatestPatch != null) {
    contents.IsLatestPatch = __expectBoolean(data.IsLatestPatch);
  }
  if (data.OwnerAccount != null) {
    contents.OwnerAccount = __expectString(data.OwnerAccount);
  }
  if (data.PackageArn != null) {
    contents.PackageArn = __expectString(data.PackageArn);
  }
  if (data.PackageId != null) {
    contents.PackageId = __expectString(data.PackageId);
  }
  if (data.PackageName != null) {
    contents.PackageName = __expectString(data.PackageName);
  }
  if (data.PackageVersion != null) {
    contents.PackageVersion = __expectString(data.PackageVersion);
  }
  if (data.PatchVersion != null) {
    contents.PatchVersion = __expectString(data.PatchVersion);
  }
  if (data.RegisteredTime != null) {
    contents.RegisteredTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.RegisteredTime)));
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusDescription != null) {
    contents.StatusDescription = __expectString(data.StatusDescription);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackageVersionCommandError
 */
const de_DescribePackageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1ListApplicationInstanceDependenciesCommand
 */
export const de_ListApplicationInstanceDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListApplicationInstanceDependenciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PackageObjects != null) {
    contents.PackageObjects = de_PackageObjects(data.PackageObjects, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationInstanceDependenciesCommandError
 */
const de_ListApplicationInstanceDependenciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceDependenciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListApplicationInstanceNodeInstancesCommand
 */
export const de_ListApplicationInstanceNodeInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceNodeInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListApplicationInstanceNodeInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.NodeInstances != null) {
    contents.NodeInstances = de_NodeInstances(data.NodeInstances, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationInstanceNodeInstancesCommandError
 */
const de_ListApplicationInstanceNodeInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceNodeInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListApplicationInstancesCommand
 */
export const de_ListApplicationInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListApplicationInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationInstances != null) {
    contents.ApplicationInstances = de_ApplicationInstances(data.ApplicationInstances, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationInstancesCommandError
 */
const de_ListApplicationInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListDevicesCommand
 */
export const de_ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Devices != null) {
    contents.Devices = de_DeviceList(data.Devices, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDevicesCommandError
 */
const de_ListDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1ListDevicesJobsCommand
 */
export const de_ListDevicesJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDevicesJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeviceJobs != null) {
    contents.DeviceJobs = de_DeviceJobList(data.DeviceJobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDevicesJobsCommandError
 */
const de_ListDevicesJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1ListNodeFromTemplateJobsCommand
 */
export const de_ListNodeFromTemplateJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodeFromTemplateJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListNodeFromTemplateJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.NodeFromTemplateJobs != null) {
    contents.NodeFromTemplateJobs = de_NodeFromTemplateJobList(data.NodeFromTemplateJobs, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListNodeFromTemplateJobsCommandError
 */
const de_ListNodeFromTemplateJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodeFromTemplateJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1ListNodesCommand
 */
export const de_ListNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListNodesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Nodes != null) {
    contents.Nodes = de_NodesList(data.Nodes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListNodesCommandError
 */
const de_ListNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1ListPackageImportJobsCommand
 */
export const de_ListPackageImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPackageImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PackageImportJobs != null) {
    contents.PackageImportJobs = de_PackageImportJobList(data.PackageImportJobs, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPackageImportJobsCommandError
 */
const de_ListPackageImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1ListPackagesCommand
 */
export const de_ListPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPackagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Packages != null) {
    contents.Packages = de_PackageList(data.Packages, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPackagesCommandError
 */
const de_ListPackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
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
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1ProvisionDeviceCommand
 */
export const de_ProvisionDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ProvisionDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Certificates != null) {
    contents.Certificates = context.base64Decoder(data.Certificates);
  }
  if (data.DeviceId != null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  if (data.IotThingName != null) {
    contents.IotThingName = __expectString(data.IotThingName);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ProvisionDeviceCommandError
 */
const de_ProvisionDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.panorama#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1RegisterPackageVersionCommand
 */
export const de_RegisterPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterPackageVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterPackageVersionCommandError
 */
const de_RegisterPackageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPackageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1RemoveApplicationInstanceCommand
 */
export const de_RemoveApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveApplicationInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveApplicationInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveApplicationInstanceCommandError
 */
const de_RemoveApplicationInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveApplicationInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1SignalApplicationInstanceNodeInstancesCommand
 */
export const de_SignalApplicationInstanceNodeInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalApplicationInstanceNodeInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SignalApplicationInstanceNodeInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationInstanceId != null) {
    contents.ApplicationInstanceId = __expectString(data.ApplicationInstanceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SignalApplicationInstanceNodeInstancesCommandError
 */
const de_SignalApplicationInstanceNodeInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalApplicationInstanceNodeInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.panorama#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
 * deserializeAws_restJson1UpdateDeviceMetadataCommand
 */
export const de_UpdateDeviceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDeviceMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeviceId != null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDeviceMetadataCommandError
 */
const de_UpdateDeviceMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  if (data.ErrorArguments != null) {
    contents.ErrorArguments = de_ConflictExceptionErrorArgumentList(data.ErrorArguments, context);
  }
  if (data.ErrorId != null) {
    contents.ErrorId = __expectString(data.ErrorId);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
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
    RetryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode != null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.ServiceCode != null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
  }
  const exception = new ServiceQuotaExceededException({
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
  if (data.ErrorArguments != null) {
    contents.ErrorArguments = de_ValidationExceptionErrorArgumentList(data.ErrorArguments, context);
  }
  if (data.ErrorId != null) {
    contents.ErrorId = __expectString(data.ErrorId);
  }
  if (data.Fields != null) {
    contents.Fields = de_ValidationExceptionFieldList(data.Fields, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1DeviceIdList
 */
const se_DeviceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DeviceJobConfig
 */
const se_DeviceJobConfig = (input: DeviceJobConfig, context: __SerdeContext): any => {
  return {
    ...(input.OTAJobConfig != null && { OTAJobConfig: se_OTAJobConfig(input.OTAJobConfig, context) }),
  };
};

/**
 * serializeAws_restJson1DnsList
 */
const se_DnsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1EthernetPayload
 */
const se_EthernetPayload = (input: EthernetPayload, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionType != null && { ConnectionType: input.ConnectionType }),
    ...(input.StaticIpConnectionInfo != null && {
      StaticIpConnectionInfo: se_StaticIpConnectionInfo(input.StaticIpConnectionInfo, context),
    }),
  };
};

/**
 * serializeAws_restJson1JobResourceTags
 */
const se_JobResourceTags = (input: JobResourceTags, context: __SerdeContext): any => {
  return {
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  };
};

/**
 * serializeAws_restJson1JobTagsList
 */
const se_JobTagsList = (input: JobResourceTags[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_JobResourceTags(entry, context);
    });
};

/**
 * serializeAws_restJson1ManifestOverridesPayload
 */
const se_ManifestOverridesPayload = (input: ManifestOverridesPayload, context: __SerdeContext): any => {
  return ManifestOverridesPayload.visit(input, {
    PayloadData: (value) => ({ PayloadData: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ManifestPayload
 */
const se_ManifestPayload = (input: ManifestPayload, context: __SerdeContext): any => {
  return ManifestPayload.visit(input, {
    PayloadData: (value) => ({ PayloadData: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1NetworkPayload
 */
const se_NetworkPayload = (input: NetworkPayload, context: __SerdeContext): any => {
  return {
    ...(input.Ethernet0 != null && { Ethernet0: se_EthernetPayload(input.Ethernet0, context) }),
    ...(input.Ethernet1 != null && { Ethernet1: se_EthernetPayload(input.Ethernet1, context) }),
    ...(input.Ntp != null && { Ntp: se_NtpPayload(input.Ntp, context) }),
  };
};

/**
 * serializeAws_restJson1NodeSignal
 */
const se_NodeSignal = (input: NodeSignal, context: __SerdeContext): any => {
  return {
    ...(input.NodeInstanceId != null && { NodeInstanceId: input.NodeInstanceId }),
    ...(input.Signal != null && { Signal: input.Signal }),
  };
};

/**
 * serializeAws_restJson1NodeSignalList
 */
const se_NodeSignalList = (input: NodeSignal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NodeSignal(entry, context);
    });
};

/**
 * serializeAws_restJson1NtpPayload
 */
const se_NtpPayload = (input: NtpPayload, context: __SerdeContext): any => {
  return {
    ...(input.NtpServers != null && { NtpServers: se_NtpServerList(input.NtpServers, context) }),
  };
};

/**
 * serializeAws_restJson1NtpServerList
 */
const se_NtpServerList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1OTAJobConfig
 */
const se_OTAJobConfig = (input: OTAJobConfig, context: __SerdeContext): any => {
  return {
    ...(input.AllowMajorVersionUpdate != null && { AllowMajorVersionUpdate: input.AllowMajorVersionUpdate }),
    ...(input.ImageVersion != null && { ImageVersion: input.ImageVersion }),
  };
};

/**
 * serializeAws_restJson1PackageImportJobInputConfig
 */
const se_PackageImportJobInputConfig = (input: PackageImportJobInputConfig, context: __SerdeContext): any => {
  return {
    ...(input.PackageVersionInputConfig != null && {
      PackageVersionInputConfig: se_PackageVersionInputConfig(input.PackageVersionInputConfig, context),
    }),
  };
};

/**
 * serializeAws_restJson1PackageImportJobOutputConfig
 */
const se_PackageImportJobOutputConfig = (input: PackageImportJobOutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.PackageVersionOutputConfig != null && {
      PackageVersionOutputConfig: se_PackageVersionOutputConfig(input.PackageVersionOutputConfig, context),
    }),
  };
};

/**
 * serializeAws_restJson1PackageVersionInputConfig
 */
const se_PackageVersionInputConfig = (input: PackageVersionInputConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Location != null && { S3Location: se_S3Location(input.S3Location, context) }),
  };
};

/**
 * serializeAws_restJson1PackageVersionOutputConfig
 */
const se_PackageVersionOutputConfig = (input: PackageVersionOutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.MarkLatest != null && { MarkLatest: input.MarkLatest }),
    ...(input.PackageName != null && { PackageName: input.PackageName }),
    ...(input.PackageVersion != null && { PackageVersion: input.PackageVersion }),
  };
};

/**
 * serializeAws_restJson1S3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.ObjectKey != null && { ObjectKey: input.ObjectKey }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

/**
 * serializeAws_restJson1StaticIpConnectionInfo
 */
const se_StaticIpConnectionInfo = (input: StaticIpConnectionInfo, context: __SerdeContext): any => {
  return {
    ...(input.DefaultGateway != null && { DefaultGateway: input.DefaultGateway }),
    ...(input.Dns != null && { Dns: se_DnsList(input.Dns, context) }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
    ...(input.Mask != null && { Mask: input.Mask }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TemplateParametersMap
 */
const se_TemplateParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AlternateSoftwareMetadata
 */
const de_AlternateSoftwareMetadata = (output: any, context: __SerdeContext): AlternateSoftwareMetadata => {
  return {
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1AlternateSoftwares
 */
const de_AlternateSoftwares = (output: any, context: __SerdeContext): AlternateSoftwareMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AlternateSoftwareMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ApplicationInstance
 */
const de_ApplicationInstance = (output: any, context: __SerdeContext): ApplicationInstance => {
  return {
    ApplicationInstanceId: __expectString(output.ApplicationInstanceId),
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DefaultRuntimeContextDevice: __expectString(output.DefaultRuntimeContextDevice),
    DefaultRuntimeContextDeviceName: __expectString(output.DefaultRuntimeContextDeviceName),
    Description: __expectString(output.Description),
    HealthStatus: __expectString(output.HealthStatus),
    Name: __expectString(output.Name),
    RuntimeContextStates:
      output.RuntimeContextStates != null
        ? de_ReportedRuntimeContextStates(output.RuntimeContextStates, context)
        : undefined,
    Status: __expectString(output.Status),
    StatusDescription: __expectString(output.StatusDescription),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationInstances
 */
const de_ApplicationInstances = (output: any, context: __SerdeContext): ApplicationInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConflictExceptionErrorArgument
 */
const de_ConflictExceptionErrorArgument = (output: any, context: __SerdeContext): ConflictExceptionErrorArgument => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1ConflictExceptionErrorArgumentList
 */
const de_ConflictExceptionErrorArgumentList = (
  output: any,
  context: __SerdeContext
): ConflictExceptionErrorArgument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConflictExceptionErrorArgument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return {
    Brand: __expectString(output.Brand),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    CurrentSoftware: __expectString(output.CurrentSoftware),
    Description: __expectString(output.Description),
    DeviceAggregatedStatus: __expectString(output.DeviceAggregatedStatus),
    DeviceId: __expectString(output.DeviceId),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    LatestDeviceJob: output.LatestDeviceJob != null ? de_LatestDeviceJob(output.LatestDeviceJob, context) : undefined,
    LeaseExpirationTime:
      output.LeaseExpirationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LeaseExpirationTime)))
        : undefined,
    Name: __expectString(output.Name),
    ProvisioningStatus: __expectString(output.ProvisioningStatus),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceJob
 */
const de_DeviceJob = (output: any, context: __SerdeContext): DeviceJob => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DeviceId: __expectString(output.DeviceId),
    DeviceName: __expectString(output.DeviceName),
    JobId: __expectString(output.JobId),
    JobType: __expectString(output.JobType),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceJobList
 */
const de_DeviceJobList = (output: any, context: __SerdeContext): DeviceJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeviceJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeviceList
 */
const de_DeviceList = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Device(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DnsList
 */
const de_DnsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1EthernetPayload
 */
const de_EthernetPayload = (output: any, context: __SerdeContext): EthernetPayload => {
  return {
    ConnectionType: __expectString(output.ConnectionType),
    StaticIpConnectionInfo:
      output.StaticIpConnectionInfo != null
        ? de_StaticIpConnectionInfo(output.StaticIpConnectionInfo, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EthernetStatus
 */
const de_EthernetStatus = (output: any, context: __SerdeContext): EthernetStatus => {
  return {
    ConnectionStatus: __expectString(output.ConnectionStatus),
    HwAddress: __expectString(output.HwAddress),
    IpAddress: __expectString(output.IpAddress),
  } as any;
};

/**
 * deserializeAws_restJson1InputPortList
 */
const de_InputPortList = (output: any, context: __SerdeContext): NodeInputPort[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NodeInputPort(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Job
 */
const de_Job = (output: any, context: __SerdeContext): Job => {
  return {
    DeviceId: __expectString(output.DeviceId),
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_restJson1JobList
 */
const de_JobList = (output: any, context: __SerdeContext): Job[] => {
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
 * deserializeAws_restJson1JobResourceTags
 */
const de_JobResourceTags = (output: any, context: __SerdeContext): JobResourceTags => {
  return {
    ResourceType: __expectString(output.ResourceType),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobTagsList
 */
const de_JobTagsList = (output: any, context: __SerdeContext): JobResourceTags[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobResourceTags(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LatestDeviceJob
 */
const de_LatestDeviceJob = (output: any, context: __SerdeContext): LatestDeviceJob => {
  return {
    ImageVersion: __expectString(output.ImageVersion),
    JobType: __expectString(output.JobType),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1ManifestOverridesPayload
 */
const de_ManifestOverridesPayload = (output: any, context: __SerdeContext): ManifestOverridesPayload => {
  if (__expectString(output.PayloadData) !== undefined) {
    return { PayloadData: __expectString(output.PayloadData) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ManifestPayload
 */
const de_ManifestPayload = (output: any, context: __SerdeContext): ManifestPayload => {
  if (__expectString(output.PayloadData) !== undefined) {
    return { PayloadData: __expectString(output.PayloadData) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1NetworkPayload
 */
const de_NetworkPayload = (output: any, context: __SerdeContext): NetworkPayload => {
  return {
    Ethernet0: output.Ethernet0 != null ? de_EthernetPayload(output.Ethernet0, context) : undefined,
    Ethernet1: output.Ethernet1 != null ? de_EthernetPayload(output.Ethernet1, context) : undefined,
    Ntp: output.Ntp != null ? de_NtpPayload(output.Ntp, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NetworkStatus
 */
const de_NetworkStatus = (output: any, context: __SerdeContext): NetworkStatus => {
  return {
    Ethernet0Status: output.Ethernet0Status != null ? de_EthernetStatus(output.Ethernet0Status, context) : undefined,
    Ethernet1Status: output.Ethernet1Status != null ? de_EthernetStatus(output.Ethernet1Status, context) : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    NtpStatus: output.NtpStatus != null ? de_NtpStatus(output.NtpStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Node
 */
const de_Node = (output: any, context: __SerdeContext): Node => {
  return {
    Category: __expectString(output.Category),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    NodeId: __expectString(output.NodeId),
    OwnerAccount: __expectString(output.OwnerAccount),
    PackageArn: __expectString(output.PackageArn),
    PackageId: __expectString(output.PackageId),
    PackageName: __expectString(output.PackageName),
    PackageVersion: __expectString(output.PackageVersion),
    PatchVersion: __expectString(output.PatchVersion),
  } as any;
};

/**
 * deserializeAws_restJson1NodeFromTemplateJob
 */
const de_NodeFromTemplateJob = (output: any, context: __SerdeContext): NodeFromTemplateJob => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    JobId: __expectString(output.JobId),
    NodeName: __expectString(output.NodeName),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    TemplateType: __expectString(output.TemplateType),
  } as any;
};

/**
 * deserializeAws_restJson1NodeFromTemplateJobList
 */
const de_NodeFromTemplateJobList = (output: any, context: __SerdeContext): NodeFromTemplateJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NodeFromTemplateJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NodeInputPort
 */
const de_NodeInputPort = (output: any, context: __SerdeContext): NodeInputPort => {
  return {
    DefaultValue: __expectString(output.DefaultValue),
    Description: __expectString(output.Description),
    MaxConnections: __expectInt32(output.MaxConnections),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1NodeInstance
 */
const de_NodeInstance = (output: any, context: __SerdeContext): NodeInstance => {
  return {
    CurrentStatus: __expectString(output.CurrentStatus),
    NodeId: __expectString(output.NodeId),
    NodeInstanceId: __expectString(output.NodeInstanceId),
    NodeName: __expectString(output.NodeName),
    PackageName: __expectString(output.PackageName),
    PackagePatchVersion: __expectString(output.PackagePatchVersion),
    PackageVersion: __expectString(output.PackageVersion),
  } as any;
};

/**
 * deserializeAws_restJson1NodeInstances
 */
const de_NodeInstances = (output: any, context: __SerdeContext): NodeInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NodeInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NodeInterface
 */
const de_NodeInterface = (output: any, context: __SerdeContext): NodeInterface => {
  return {
    Inputs: output.Inputs != null ? de_InputPortList(output.Inputs, context) : undefined,
    Outputs: output.Outputs != null ? de_OutputPortList(output.Outputs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NodeOutputPort
 */
const de_NodeOutputPort = (output: any, context: __SerdeContext): NodeOutputPort => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1NodesList
 */
const de_NodesList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Node(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NtpPayload
 */
const de_NtpPayload = (output: any, context: __SerdeContext): NtpPayload => {
  return {
    NtpServers: output.NtpServers != null ? de_NtpServerList(output.NtpServers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NtpServerList
 */
const de_NtpServerList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1NtpStatus
 */
const de_NtpStatus = (output: any, context: __SerdeContext): NtpStatus => {
  return {
    ConnectionStatus: __expectString(output.ConnectionStatus),
    IpAddress: __expectString(output.IpAddress),
    NtpServerName: __expectString(output.NtpServerName),
  } as any;
};

/**
 * deserializeAws_restJson1OutputPortList
 */
const de_OutputPortList = (output: any, context: __SerdeContext): NodeOutputPort[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NodeOutputPort(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OutPutS3Location
 */
const de_OutPutS3Location = (output: any, context: __SerdeContext): OutPutS3Location => {
  return {
    BucketName: __expectString(output.BucketName),
    ObjectKey: __expectString(output.ObjectKey),
  } as any;
};

/**
 * deserializeAws_restJson1PackageImportJob
 */
const de_PackageImportJob = (output: any, context: __SerdeContext): PackageImportJob => {
  return {
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    JobId: __expectString(output.JobId),
    JobType: __expectString(output.JobType),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1PackageImportJobInputConfig
 */
const de_PackageImportJobInputConfig = (output: any, context: __SerdeContext): PackageImportJobInputConfig => {
  return {
    PackageVersionInputConfig:
      output.PackageVersionInputConfig != null
        ? de_PackageVersionInputConfig(output.PackageVersionInputConfig, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PackageImportJobList
 */
const de_PackageImportJobList = (output: any, context: __SerdeContext): PackageImportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PackageImportJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PackageImportJobOutput
 */
const de_PackageImportJobOutput = (output: any, context: __SerdeContext): PackageImportJobOutput => {
  return {
    OutputS3Location:
      output.OutputS3Location != null ? de_OutPutS3Location(output.OutputS3Location, context) : undefined,
    PackageId: __expectString(output.PackageId),
    PackageVersion: __expectString(output.PackageVersion),
    PatchVersion: __expectString(output.PatchVersion),
  } as any;
};

/**
 * deserializeAws_restJson1PackageImportJobOutputConfig
 */
const de_PackageImportJobOutputConfig = (output: any, context: __SerdeContext): PackageImportJobOutputConfig => {
  return {
    PackageVersionOutputConfig:
      output.PackageVersionOutputConfig != null
        ? de_PackageVersionOutputConfig(output.PackageVersionOutputConfig, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PackageList
 */
const de_PackageList = (output: any, context: __SerdeContext): PackageListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PackageListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PackageListItem
 */
const de_PackageListItem = (output: any, context: __SerdeContext): PackageListItem => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    PackageId: __expectString(output.PackageId),
    PackageName: __expectString(output.PackageName),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PackageObject
 */
const de_PackageObject = (output: any, context: __SerdeContext): PackageObject => {
  return {
    Name: __expectString(output.Name),
    PackageVersion: __expectString(output.PackageVersion),
    PatchVersion: __expectString(output.PatchVersion),
  } as any;
};

/**
 * deserializeAws_restJson1PackageObjects
 */
const de_PackageObjects = (output: any, context: __SerdeContext): PackageObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PackageObject(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PackageVersionInputConfig
 */
const de_PackageVersionInputConfig = (output: any, context: __SerdeContext): PackageVersionInputConfig => {
  return {
    S3Location: output.S3Location != null ? de_S3Location(output.S3Location, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PackageVersionOutputConfig
 */
const de_PackageVersionOutputConfig = (output: any, context: __SerdeContext): PackageVersionOutputConfig => {
  return {
    MarkLatest: __expectBoolean(output.MarkLatest),
    PackageName: __expectString(output.PackageName),
    PackageVersion: __expectString(output.PackageVersion),
  } as any;
};

/**
 * deserializeAws_restJson1PrincipalArnsList
 */
const de_PrincipalArnsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ReportedRuntimeContextState
 */
const de_ReportedRuntimeContextState = (output: any, context: __SerdeContext): ReportedRuntimeContextState => {
  return {
    DesiredState: __expectString(output.DesiredState),
    DeviceReportedStatus: __expectString(output.DeviceReportedStatus),
    DeviceReportedTime:
      output.DeviceReportedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeviceReportedTime)))
        : undefined,
    RuntimeContextName: __expectString(output.RuntimeContextName),
  } as any;
};

/**
 * deserializeAws_restJson1ReportedRuntimeContextStates
 */
const de_ReportedRuntimeContextStates = (output: any, context: __SerdeContext): ReportedRuntimeContextState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReportedRuntimeContextState(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    BucketName: __expectString(output.BucketName),
    ObjectKey: __expectString(output.ObjectKey),
    Region: __expectString(output.Region),
  } as any;
};

/**
 * deserializeAws_restJson1StaticIpConnectionInfo
 */
const de_StaticIpConnectionInfo = (output: any, context: __SerdeContext): StaticIpConnectionInfo => {
  return {
    DefaultGateway: __expectString(output.DefaultGateway),
    Dns: output.Dns != null ? de_DnsList(output.Dns, context) : undefined,
    IpAddress: __expectString(output.IpAddress),
    Mask: __expectString(output.Mask),
  } as any;
};

/**
 * deserializeAws_restJson1StorageLocation
 */
const de_StorageLocation = (output: any, context: __SerdeContext): StorageLocation => {
  return {
    BinaryPrefixLocation: __expectString(output.BinaryPrefixLocation),
    Bucket: __expectString(output.Bucket),
    GeneratedPrefixLocation: __expectString(output.GeneratedPrefixLocation),
    ManifestPrefixLocation: __expectString(output.ManifestPrefixLocation),
    RepoPrefixLocation: __expectString(output.RepoPrefixLocation),
  } as any;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TemplateParametersMap
 */
const de_TemplateParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ValidationExceptionErrorArgument
 */
const de_ValidationExceptionErrorArgument = (
  output: any,
  context: __SerdeContext
): ValidationExceptionErrorArgument => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionErrorArgumentList
 */
const de_ValidationExceptionErrorArgumentList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionErrorArgument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionErrorArgument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
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
