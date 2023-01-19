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

export const serializeAws_restJson1CreateApplicationInstanceCommand = async (
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
      ManifestOverridesPayload: serializeAws_restJson1ManifestOverridesPayload(input.ManifestOverridesPayload, context),
    }),
    ...(input.ManifestPayload != null && {
      ManifestPayload: serializeAws_restJson1ManifestPayload(input.ManifestPayload, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RuntimeRoleArn != null && { RuntimeRoleArn: input.RuntimeRoleArn }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateJobForDevicesCommand = async (
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
    ...(input.DeviceIds != null && { DeviceIds: serializeAws_restJson1DeviceIdList(input.DeviceIds, context) }),
    ...(input.DeviceJobConfig != null && {
      DeviceJobConfig: serializeAws_restJson1DeviceJobConfig(input.DeviceJobConfig, context),
    }),
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

export const serializeAws_restJson1CreateNodeFromTemplateJobCommand = async (
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
    ...(input.JobTags != null && { JobTags: serializeAws_restJson1JobTagsList(input.JobTags, context) }),
    ...(input.NodeDescription != null && { NodeDescription: input.NodeDescription }),
    ...(input.NodeName != null && { NodeName: input.NodeName }),
    ...(input.OutputPackageName != null && { OutputPackageName: input.OutputPackageName }),
    ...(input.OutputPackageVersion != null && { OutputPackageVersion: input.OutputPackageVersion }),
    ...(input.TemplateParameters != null && {
      TemplateParameters: serializeAws_restJson1TemplateParametersMap(input.TemplateParameters, context),
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

export const serializeAws_restJson1CreatePackageCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreatePackageImportJobCommand = async (
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
    ...(input.InputConfig != null && {
      InputConfig: serializeAws_restJson1PackageImportJobInputConfig(input.InputConfig, context),
    }),
    ...(input.JobTags != null && { JobTags: serializeAws_restJson1JobTagsList(input.JobTags, context) }),
    ...(input.JobType != null && { JobType: input.JobType }),
    ...(input.OutputConfig != null && {
      OutputConfig: serializeAws_restJson1PackageImportJobOutputConfig(input.OutputConfig, context),
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

export const serializeAws_restJson1DeleteDeviceCommand = async (
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

export const serializeAws_restJson1DeletePackageCommand = async (
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

export const serializeAws_restJson1DeregisterPackageVersionCommand = async (
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

export const serializeAws_restJson1DescribeApplicationInstanceCommand = async (
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

export const serializeAws_restJson1DescribeApplicationInstanceDetailsCommand = async (
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

export const serializeAws_restJson1DescribeDeviceCommand = async (
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

export const serializeAws_restJson1DescribeDeviceJobCommand = async (
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

export const serializeAws_restJson1DescribeNodeCommand = async (
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

export const serializeAws_restJson1DescribeNodeFromTemplateJobCommand = async (
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

export const serializeAws_restJson1DescribePackageCommand = async (
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

export const serializeAws_restJson1DescribePackageImportJobCommand = async (
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

export const serializeAws_restJson1DescribePackageVersionCommand = async (
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

export const serializeAws_restJson1ListApplicationInstanceDependenciesCommand = async (
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

export const serializeAws_restJson1ListApplicationInstanceNodeInstancesCommand = async (
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

export const serializeAws_restJson1ListApplicationInstancesCommand = async (
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

export const serializeAws_restJson1ListDevicesCommand = async (
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

export const serializeAws_restJson1ListDevicesJobsCommand = async (
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

export const serializeAws_restJson1ListNodeFromTemplateJobsCommand = async (
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

export const serializeAws_restJson1ListNodesCommand = async (
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

export const serializeAws_restJson1ListPackageImportJobsCommand = async (
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

export const serializeAws_restJson1ListPackagesCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ProvisionDeviceCommand = async (
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
      NetworkingConfiguration: serializeAws_restJson1NetworkPayload(input.NetworkingConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1RegisterPackageVersionCommand = async (
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

export const serializeAws_restJson1RemoveApplicationInstanceCommand = async (
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

export const serializeAws_restJson1SignalApplicationInstanceNodeInstancesCommand = async (
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
    ...(input.NodeSignals != null && { NodeSignals: serializeAws_restJson1NodeSignalList(input.NodeSignals, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1UpdateDeviceMetadataCommand = async (
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

export const deserializeAws_restJson1CreateApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApplicationInstanceCommandError(output, context);
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

const deserializeAws_restJson1CreateApplicationInstanceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.panorama#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1CreateJobForDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobForDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobForDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs != null) {
    contents.Jobs = deserializeAws_restJson1JobList(data.Jobs, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateJobForDevicesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1CreateNodeFromTemplateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeFromTemplateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNodeFromTemplateJobCommandError(output, context);
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

const deserializeAws_restJson1CreateNodeFromTemplateJobCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1CreatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePackageCommandError(output, context);
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
    contents.StorageLocation = deserializeAws_restJson1StorageLocation(data.StorageLocation, context);
  }
  return contents;
};

const deserializeAws_restJson1CreatePackageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1CreatePackageImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePackageImportJobCommandError(output, context);
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

const deserializeAws_restJson1CreatePackageImportJobCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DeleteDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDeviceCommandError(output, context);
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

const deserializeAws_restJson1DeleteDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DeletePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePackageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DeregisterPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterPackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterPackageVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeregisterPackageVersionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DescribeApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeApplicationInstanceCommandError(output, context);
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
    contents.RuntimeContextStates = deserializeAws_restJson1ReportedRuntimeContextStates(
      data.RuntimeContextStates,
      context
    );
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
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeApplicationInstanceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DescribeApplicationInstanceDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeApplicationInstanceDetailsCommandError(output, context);
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
    contents.ManifestOverridesPayload = deserializeAws_restJson1ManifestOverridesPayload(
      __expectUnion(data.ManifestOverridesPayload),
      context
    );
  }
  if (data.ManifestPayload != null) {
    contents.ManifestPayload = deserializeAws_restJson1ManifestPayload(__expectUnion(data.ManifestPayload), context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1DescribeApplicationInstanceDetailsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DescribeDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AlternateSoftwares != null) {
    contents.AlternateSoftwares = deserializeAws_restJson1AlternateSoftwares(data.AlternateSoftwares, context);
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
    contents.CurrentNetworkingStatus = deserializeAws_restJson1NetworkStatus(data.CurrentNetworkingStatus, context);
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
    contents.LatestDeviceJob = deserializeAws_restJson1LatestDeviceJob(data.LatestDeviceJob, context);
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
    contents.NetworkingConfiguration = deserializeAws_restJson1NetworkPayload(data.NetworkingConfiguration, context);
  }
  if (data.ProvisioningStatus != null) {
    contents.ProvisioningStatus = __expectString(data.ProvisioningStatus);
  }
  if (data.SerialNumber != null) {
    contents.SerialNumber = __expectString(data.SerialNumber);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DescribeDeviceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDeviceJobCommandError(output, context);
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

const deserializeAws_restJson1DescribeDeviceJobCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DescribeNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeNodeCommandError(output, context);
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
    contents.NodeInterface = deserializeAws_restJson1NodeInterface(data.NodeInterface, context);
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

const deserializeAws_restJson1DescribeNodeCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DescribeNodeFromTemplateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeFromTemplateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeNodeFromTemplateJobCommandError(output, context);
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
    contents.JobTags = deserializeAws_restJson1JobTagsList(data.JobTags, context);
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
    contents.TemplateParameters = deserializeAws_restJson1TemplateParametersMap(data.TemplateParameters, context);
  }
  if (data.TemplateType != null) {
    contents.TemplateType = __expectString(data.TemplateType);
  }
  return contents;
};

const deserializeAws_restJson1DescribeNodeFromTemplateJobCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DescribePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePackageCommandError(output, context);
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
    contents.ReadAccessPrincipalArns = deserializeAws_restJson1PrincipalArnsList(data.ReadAccessPrincipalArns, context);
  }
  if (data.StorageLocation != null) {
    contents.StorageLocation = deserializeAws_restJson1StorageLocation(data.StorageLocation, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.WriteAccessPrincipalArns != null) {
    contents.WriteAccessPrincipalArns = deserializeAws_restJson1PrincipalArnsList(
      data.WriteAccessPrincipalArns,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribePackageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DescribePackageImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePackageImportJobCommandError(output, context);
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
    contents.InputConfig = deserializeAws_restJson1PackageImportJobInputConfig(data.InputConfig, context);
  }
  if (data.JobId != null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.JobTags != null) {
    contents.JobTags = deserializeAws_restJson1JobTagsList(data.JobTags, context);
  }
  if (data.JobType != null) {
    contents.JobType = __expectString(data.JobType);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Output != null) {
    contents.Output = deserializeAws_restJson1PackageImportJobOutput(data.Output, context);
  }
  if (data.OutputConfig != null) {
    contents.OutputConfig = deserializeAws_restJson1PackageImportJobOutputConfig(data.OutputConfig, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusMessage != null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
  return contents;
};

const deserializeAws_restJson1DescribePackageImportJobCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1DescribePackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePackageVersionCommandError(output, context);
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

const deserializeAws_restJson1DescribePackageVersionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1ListApplicationInstanceDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationInstanceDependenciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PackageObjects != null) {
    contents.PackageObjects = deserializeAws_restJson1PackageObjects(data.PackageObjects, context);
  }
  return contents;
};

const deserializeAws_restJson1ListApplicationInstanceDependenciesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListApplicationInstanceNodeInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceNodeInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationInstanceNodeInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.NodeInstances != null) {
    contents.NodeInstances = deserializeAws_restJson1NodeInstances(data.NodeInstances, context);
  }
  return contents;
};

const deserializeAws_restJson1ListApplicationInstanceNodeInstancesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListApplicationInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationInstances != null) {
    contents.ApplicationInstances = deserializeAws_restJson1ApplicationInstances(data.ApplicationInstances, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListApplicationInstancesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Devices != null) {
    contents.Devices = deserializeAws_restJson1DeviceList(data.Devices, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDevicesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1ListDevicesJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDevicesJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeviceJobs != null) {
    contents.DeviceJobs = deserializeAws_restJson1DeviceJobList(data.DeviceJobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDevicesJobsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1ListNodeFromTemplateJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodeFromTemplateJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNodeFromTemplateJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.NodeFromTemplateJobs != null) {
    contents.NodeFromTemplateJobs = deserializeAws_restJson1NodeFromTemplateJobList(data.NodeFromTemplateJobs, context);
  }
  return contents;
};

const deserializeAws_restJson1ListNodeFromTemplateJobsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1ListNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNodesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Nodes != null) {
    contents.Nodes = deserializeAws_restJson1NodesList(data.Nodes, context);
  }
  return contents;
};

const deserializeAws_restJson1ListNodesCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1ListPackageImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPackageImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PackageImportJobs != null) {
    contents.PackageImportJobs = deserializeAws_restJson1PackageImportJobList(data.PackageImportJobs, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPackageImportJobsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1ListPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPackagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Packages != null) {
    contents.Packages = deserializeAws_restJson1PackageList(data.Packages, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPackagesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1ProvisionDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ProvisionDeviceCommandError(output, context);
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

const deserializeAws_restJson1ProvisionDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.panorama#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1RegisterPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterPackageVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RegisterPackageVersionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1RemoveApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveApplicationInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveApplicationInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RemoveApplicationInstanceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1SignalApplicationInstanceNodeInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalApplicationInstanceNodeInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SignalApplicationInstanceNodeInstancesCommandError(output, context);
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

const deserializeAws_restJson1SignalApplicationInstanceNodeInstancesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.panorama#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

export const deserializeAws_restJson1UpdateDeviceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDeviceMetadataCommandError(output, context);
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

const deserializeAws_restJson1UpdateDeviceMetadataCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
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

const map = __map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorArguments != null) {
    contents.ErrorArguments = deserializeAws_restJson1ConflictExceptionErrorArgumentList(data.ErrorArguments, context);
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorArguments != null) {
    contents.ErrorArguments = deserializeAws_restJson1ValidationExceptionErrorArgumentList(
      data.ErrorArguments,
      context
    );
  }
  if (data.ErrorId != null) {
    contents.ErrorId = __expectString(data.ErrorId);
  }
  if (data.Fields != null) {
    contents.Fields = deserializeAws_restJson1ValidationExceptionFieldList(data.Fields, context);
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

const serializeAws_restJson1DeviceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DeviceJobConfig = (input: DeviceJobConfig, context: __SerdeContext): any => {
  return {
    ...(input.OTAJobConfig != null && {
      OTAJobConfig: serializeAws_restJson1OTAJobConfig(input.OTAJobConfig, context),
    }),
  };
};

const serializeAws_restJson1DnsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1EthernetPayload = (input: EthernetPayload, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionType != null && { ConnectionType: input.ConnectionType }),
    ...(input.StaticIpConnectionInfo != null && {
      StaticIpConnectionInfo: serializeAws_restJson1StaticIpConnectionInfo(input.StaticIpConnectionInfo, context),
    }),
  };
};

const serializeAws_restJson1JobResourceTags = (input: JobResourceTags, context: __SerdeContext): any => {
  return {
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  };
};

const serializeAws_restJson1JobTagsList = (input: JobResourceTags[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1JobResourceTags(entry, context);
    });
};

const serializeAws_restJson1ManifestOverridesPayload = (
  input: ManifestOverridesPayload,
  context: __SerdeContext
): any => {
  return ManifestOverridesPayload.visit(input, {
    PayloadData: (value) => ({ PayloadData: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ManifestPayload = (input: ManifestPayload, context: __SerdeContext): any => {
  return ManifestPayload.visit(input, {
    PayloadData: (value) => ({ PayloadData: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1NetworkPayload = (input: NetworkPayload, context: __SerdeContext): any => {
  return {
    ...(input.Ethernet0 != null && { Ethernet0: serializeAws_restJson1EthernetPayload(input.Ethernet0, context) }),
    ...(input.Ethernet1 != null && { Ethernet1: serializeAws_restJson1EthernetPayload(input.Ethernet1, context) }),
    ...(input.Ntp != null && { Ntp: serializeAws_restJson1NtpPayload(input.Ntp, context) }),
  };
};

const serializeAws_restJson1NodeSignal = (input: NodeSignal, context: __SerdeContext): any => {
  return {
    ...(input.NodeInstanceId != null && { NodeInstanceId: input.NodeInstanceId }),
    ...(input.Signal != null && { Signal: input.Signal }),
  };
};

const serializeAws_restJson1NodeSignalList = (input: NodeSignal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NodeSignal(entry, context);
    });
};

const serializeAws_restJson1NtpPayload = (input: NtpPayload, context: __SerdeContext): any => {
  return {
    ...(input.NtpServers != null && { NtpServers: serializeAws_restJson1NtpServerList(input.NtpServers, context) }),
  };
};

const serializeAws_restJson1NtpServerList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1OTAJobConfig = (input: OTAJobConfig, context: __SerdeContext): any => {
  return {
    ...(input.AllowMajorVersionUpdate != null && { AllowMajorVersionUpdate: input.AllowMajorVersionUpdate }),
    ...(input.ImageVersion != null && { ImageVersion: input.ImageVersion }),
  };
};

const serializeAws_restJson1PackageImportJobInputConfig = (
  input: PackageImportJobInputConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.PackageVersionInputConfig != null && {
      PackageVersionInputConfig: serializeAws_restJson1PackageVersionInputConfig(
        input.PackageVersionInputConfig,
        context
      ),
    }),
  };
};

const serializeAws_restJson1PackageImportJobOutputConfig = (
  input: PackageImportJobOutputConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.PackageVersionOutputConfig != null && {
      PackageVersionOutputConfig: serializeAws_restJson1PackageVersionOutputConfig(
        input.PackageVersionOutputConfig,
        context
      ),
    }),
  };
};

const serializeAws_restJson1PackageVersionInputConfig = (
  input: PackageVersionInputConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Location != null && { S3Location: serializeAws_restJson1S3Location(input.S3Location, context) }),
  };
};

const serializeAws_restJson1PackageVersionOutputConfig = (
  input: PackageVersionOutputConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.MarkLatest != null && { MarkLatest: input.MarkLatest }),
    ...(input.PackageName != null && { PackageName: input.PackageName }),
    ...(input.PackageVersion != null && { PackageVersion: input.PackageVersion }),
  };
};

const serializeAws_restJson1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.ObjectKey != null && { ObjectKey: input.ObjectKey }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

const serializeAws_restJson1StaticIpConnectionInfo = (input: StaticIpConnectionInfo, context: __SerdeContext): any => {
  return {
    ...(input.DefaultGateway != null && { DefaultGateway: input.DefaultGateway }),
    ...(input.Dns != null && { Dns: serializeAws_restJson1DnsList(input.Dns, context) }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
    ...(input.Mask != null && { Mask: input.Mask }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TemplateParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_restJson1AlternateSoftwareMetadata = (
  output: any,
  context: __SerdeContext
): AlternateSoftwareMetadata => {
  return {
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1AlternateSoftwares = (
  output: any,
  context: __SerdeContext
): AlternateSoftwareMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AlternateSoftwareMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ApplicationInstance = (output: any, context: __SerdeContext): ApplicationInstance => {
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
        ? deserializeAws_restJson1ReportedRuntimeContextStates(output.RuntimeContextStates, context)
        : undefined,
    Status: __expectString(output.Status),
    StatusDescription: __expectString(output.StatusDescription),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationInstances = (output: any, context: __SerdeContext): ApplicationInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConflictExceptionErrorArgument = (
  output: any,
  context: __SerdeContext
): ConflictExceptionErrorArgument => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1ConflictExceptionErrorArgumentList = (
  output: any,
  context: __SerdeContext
): ConflictExceptionErrorArgument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConflictExceptionErrorArgument(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Device = (output: any, context: __SerdeContext): Device => {
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
    LatestDeviceJob:
      output.LatestDeviceJob != null
        ? deserializeAws_restJson1LatestDeviceJob(output.LatestDeviceJob, context)
        : undefined,
    LeaseExpirationTime:
      output.LeaseExpirationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LeaseExpirationTime)))
        : undefined,
    Name: __expectString(output.Name),
    ProvisioningStatus: __expectString(output.ProvisioningStatus),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1DeviceJob = (output: any, context: __SerdeContext): DeviceJob => {
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

const deserializeAws_restJson1DeviceJobList = (output: any, context: __SerdeContext): DeviceJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeviceJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeviceList = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Device(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DnsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1EthernetPayload = (output: any, context: __SerdeContext): EthernetPayload => {
  return {
    ConnectionType: __expectString(output.ConnectionType),
    StaticIpConnectionInfo:
      output.StaticIpConnectionInfo != null
        ? deserializeAws_restJson1StaticIpConnectionInfo(output.StaticIpConnectionInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EthernetStatus = (output: any, context: __SerdeContext): EthernetStatus => {
  return {
    ConnectionStatus: __expectString(output.ConnectionStatus),
    HwAddress: __expectString(output.HwAddress),
    IpAddress: __expectString(output.IpAddress),
  } as any;
};

const deserializeAws_restJson1InputPortList = (output: any, context: __SerdeContext): NodeInputPort[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeInputPort(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Job = (output: any, context: __SerdeContext): Job => {
  return {
    DeviceId: __expectString(output.DeviceId),
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_restJson1JobList = (output: any, context: __SerdeContext): Job[] => {
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

const deserializeAws_restJson1JobResourceTags = (output: any, context: __SerdeContext): JobResourceTags => {
  return {
    ResourceType: __expectString(output.ResourceType),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JobTagsList = (output: any, context: __SerdeContext): JobResourceTags[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobResourceTags(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LatestDeviceJob = (output: any, context: __SerdeContext): LatestDeviceJob => {
  return {
    ImageVersion: __expectString(output.ImageVersion),
    JobType: __expectString(output.JobType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1ManifestOverridesPayload = (
  output: any,
  context: __SerdeContext
): ManifestOverridesPayload => {
  if (__expectString(output.PayloadData) !== undefined) {
    return { PayloadData: __expectString(output.PayloadData) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ManifestPayload = (output: any, context: __SerdeContext): ManifestPayload => {
  if (__expectString(output.PayloadData) !== undefined) {
    return { PayloadData: __expectString(output.PayloadData) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1NetworkPayload = (output: any, context: __SerdeContext): NetworkPayload => {
  return {
    Ethernet0:
      output.Ethernet0 != null ? deserializeAws_restJson1EthernetPayload(output.Ethernet0, context) : undefined,
    Ethernet1:
      output.Ethernet1 != null ? deserializeAws_restJson1EthernetPayload(output.Ethernet1, context) : undefined,
    Ntp: output.Ntp != null ? deserializeAws_restJson1NtpPayload(output.Ntp, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkStatus = (output: any, context: __SerdeContext): NetworkStatus => {
  return {
    Ethernet0Status:
      output.Ethernet0Status != null
        ? deserializeAws_restJson1EthernetStatus(output.Ethernet0Status, context)
        : undefined,
    Ethernet1Status:
      output.Ethernet1Status != null
        ? deserializeAws_restJson1EthernetStatus(output.Ethernet1Status, context)
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    NtpStatus: output.NtpStatus != null ? deserializeAws_restJson1NtpStatus(output.NtpStatus, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Node = (output: any, context: __SerdeContext): Node => {
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

const deserializeAws_restJson1NodeFromTemplateJob = (output: any, context: __SerdeContext): NodeFromTemplateJob => {
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

const deserializeAws_restJson1NodeFromTemplateJobList = (
  output: any,
  context: __SerdeContext
): NodeFromTemplateJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeFromTemplateJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NodeInputPort = (output: any, context: __SerdeContext): NodeInputPort => {
  return {
    DefaultValue: __expectString(output.DefaultValue),
    Description: __expectString(output.Description),
    MaxConnections: __expectInt32(output.MaxConnections),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1NodeInstance = (output: any, context: __SerdeContext): NodeInstance => {
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

const deserializeAws_restJson1NodeInstances = (output: any, context: __SerdeContext): NodeInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NodeInterface = (output: any, context: __SerdeContext): NodeInterface => {
  return {
    Inputs: output.Inputs != null ? deserializeAws_restJson1InputPortList(output.Inputs, context) : undefined,
    Outputs: output.Outputs != null ? deserializeAws_restJson1OutputPortList(output.Outputs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NodeOutputPort = (output: any, context: __SerdeContext): NodeOutputPort => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1NodesList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Node(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NtpPayload = (output: any, context: __SerdeContext): NtpPayload => {
  return {
    NtpServers:
      output.NtpServers != null ? deserializeAws_restJson1NtpServerList(output.NtpServers, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NtpServerList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1NtpStatus = (output: any, context: __SerdeContext): NtpStatus => {
  return {
    ConnectionStatus: __expectString(output.ConnectionStatus),
    IpAddress: __expectString(output.IpAddress),
    NtpServerName: __expectString(output.NtpServerName),
  } as any;
};

const deserializeAws_restJson1OutputPortList = (output: any, context: __SerdeContext): NodeOutputPort[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeOutputPort(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OutPutS3Location = (output: any, context: __SerdeContext): OutPutS3Location => {
  return {
    BucketName: __expectString(output.BucketName),
    ObjectKey: __expectString(output.ObjectKey),
  } as any;
};

const deserializeAws_restJson1PackageImportJob = (output: any, context: __SerdeContext): PackageImportJob => {
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

const deserializeAws_restJson1PackageImportJobInputConfig = (
  output: any,
  context: __SerdeContext
): PackageImportJobInputConfig => {
  return {
    PackageVersionInputConfig:
      output.PackageVersionInputConfig != null
        ? deserializeAws_restJson1PackageVersionInputConfig(output.PackageVersionInputConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PackageImportJobList = (output: any, context: __SerdeContext): PackageImportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackageImportJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PackageImportJobOutput = (
  output: any,
  context: __SerdeContext
): PackageImportJobOutput => {
  return {
    OutputS3Location:
      output.OutputS3Location != null
        ? deserializeAws_restJson1OutPutS3Location(output.OutputS3Location, context)
        : undefined,
    PackageId: __expectString(output.PackageId),
    PackageVersion: __expectString(output.PackageVersion),
    PatchVersion: __expectString(output.PatchVersion),
  } as any;
};

const deserializeAws_restJson1PackageImportJobOutputConfig = (
  output: any,
  context: __SerdeContext
): PackageImportJobOutputConfig => {
  return {
    PackageVersionOutputConfig:
      output.PackageVersionOutputConfig != null
        ? deserializeAws_restJson1PackageVersionOutputConfig(output.PackageVersionOutputConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PackageList = (output: any, context: __SerdeContext): PackageListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackageListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PackageListItem = (output: any, context: __SerdeContext): PackageListItem => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    PackageId: __expectString(output.PackageId),
    PackageName: __expectString(output.PackageName),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PackageObject = (output: any, context: __SerdeContext): PackageObject => {
  return {
    Name: __expectString(output.Name),
    PackageVersion: __expectString(output.PackageVersion),
    PatchVersion: __expectString(output.PatchVersion),
  } as any;
};

const deserializeAws_restJson1PackageObjects = (output: any, context: __SerdeContext): PackageObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackageObject(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PackageVersionInputConfig = (
  output: any,
  context: __SerdeContext
): PackageVersionInputConfig => {
  return {
    S3Location: output.S3Location != null ? deserializeAws_restJson1S3Location(output.S3Location, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PackageVersionOutputConfig = (
  output: any,
  context: __SerdeContext
): PackageVersionOutputConfig => {
  return {
    MarkLatest: __expectBoolean(output.MarkLatest),
    PackageName: __expectString(output.PackageName),
    PackageVersion: __expectString(output.PackageVersion),
  } as any;
};

const deserializeAws_restJson1PrincipalArnsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ReportedRuntimeContextState = (
  output: any,
  context: __SerdeContext
): ReportedRuntimeContextState => {
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

const deserializeAws_restJson1ReportedRuntimeContextStates = (
  output: any,
  context: __SerdeContext
): ReportedRuntimeContextState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReportedRuntimeContextState(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    BucketName: __expectString(output.BucketName),
    ObjectKey: __expectString(output.ObjectKey),
    Region: __expectString(output.Region),
  } as any;
};

const deserializeAws_restJson1StaticIpConnectionInfo = (
  output: any,
  context: __SerdeContext
): StaticIpConnectionInfo => {
  return {
    DefaultGateway: __expectString(output.DefaultGateway),
    Dns: output.Dns != null ? deserializeAws_restJson1DnsList(output.Dns, context) : undefined,
    IpAddress: __expectString(output.IpAddress),
    Mask: __expectString(output.Mask),
  } as any;
};

const deserializeAws_restJson1StorageLocation = (output: any, context: __SerdeContext): StorageLocation => {
  return {
    BinaryPrefixLocation: __expectString(output.BinaryPrefixLocation),
    Bucket: __expectString(output.Bucket),
    GeneratedPrefixLocation: __expectString(output.GeneratedPrefixLocation),
    ManifestPrefixLocation: __expectString(output.ManifestPrefixLocation),
    RepoPrefixLocation: __expectString(output.RepoPrefixLocation),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TemplateParametersMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ValidationExceptionErrorArgument = (
  output: any,
  context: __SerdeContext
): ValidationExceptionErrorArgument => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionErrorArgumentList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionErrorArgument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionErrorArgument(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
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
