// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ConfigureLogsCommandInput, ConfigureLogsCommandOutput } from "../commands/ConfigureLogsCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
import { CreateHarvestJobCommandInput, CreateHarvestJobCommandOutput } from "../commands/CreateHarvestJobCommand";
import {
  CreateOriginEndpointCommandInput,
  CreateOriginEndpointCommandOutput,
} from "../commands/CreateOriginEndpointCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "../commands/DeleteChannelCommand";
import {
  DeleteOriginEndpointCommandInput,
  DeleteOriginEndpointCommandOutput,
} from "../commands/DeleteOriginEndpointCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "../commands/DescribeChannelCommand";
import { DescribeHarvestJobCommandInput, DescribeHarvestJobCommandOutput } from "../commands/DescribeHarvestJobCommand";
import {
  DescribeOriginEndpointCommandInput,
  DescribeOriginEndpointCommandOutput,
} from "../commands/DescribeOriginEndpointCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import { ListHarvestJobsCommandInput, ListHarvestJobsCommandOutput } from "../commands/ListHarvestJobsCommand";
import {
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
} from "../commands/ListOriginEndpointsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RotateChannelCredentialsCommandInput,
  RotateChannelCredentialsCommandOutput,
} from "../commands/RotateChannelCredentialsCommand";
import {
  RotateIngestEndpointCredentialsCommandInput,
  RotateIngestEndpointCredentialsCommandOutput,
} from "../commands/RotateIngestEndpointCredentialsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import {
  UpdateOriginEndpointCommandInput,
  UpdateOriginEndpointCommandOutput,
} from "../commands/UpdateOriginEndpointCommand";
import { MediaPackageServiceException as __BaseException } from "../models/MediaPackageServiceException";
import {
  __AdTriggersElement,
  __PeriodTriggersElement,
  Authorization,
  Channel,
  CmafEncryption,
  CmafPackage,
  CmafPackageCreateOrUpdateParameters,
  DashEncryption,
  DashPackage,
  EgressAccessLogs,
  EncryptionContractConfiguration,
  ForbiddenException,
  HarvestJob,
  HlsEncryption,
  HlsIngest,
  HlsManifest,
  HlsManifestCreateOrUpdateParameters,
  HlsPackage,
  IngestEndpoint,
  IngressAccessLogs,
  InternalServerErrorException,
  MssEncryption,
  MssPackage,
  NotFoundException,
  OriginEndpoint,
  S3Destination,
  ServiceUnavailableException,
  SpekeKeyProvider,
  StreamSelection,
  TooManyRequestsException,
  UnprocessableEntityException,
} from "../models/models_0";

/**
 * serializeAws_restJson1ConfigureLogsCommand
 */
export const se_ConfigureLogsCommand = async (
  input: ConfigureLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{Id}/configure_logs";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.EgressAccessLogs != null && { egressAccessLogs: se_EgressAccessLogs(input.EgressAccessLogs, context) }),
    ...(input.IngressAccessLogs != null && {
      ingressAccessLogs: se_IngressAccessLogs(input.IngressAccessLogs, context),
    }),
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
 * serializeAws_restJson1CreateChannelCommand
 */
export const se_CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { description: input.Description }),
    ...(input.Id != null && { id: input.Id }),
    ...(input.Tags != null && { tags: se_Tags(input.Tags, context) }),
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
 * serializeAws_restJson1CreateHarvestJobCommand
 */
export const se_CreateHarvestJobCommand = async (
  input: CreateHarvestJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/harvest_jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime != null && { endTime: input.EndTime }),
    ...(input.Id != null && { id: input.Id }),
    ...(input.OriginEndpointId != null && { originEndpointId: input.OriginEndpointId }),
    ...(input.S3Destination != null && { s3Destination: se_S3Destination(input.S3Destination, context) }),
    ...(input.StartTime != null && { startTime: input.StartTime }),
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
 * serializeAws_restJson1CreateOriginEndpointCommand
 */
export const se_CreateOriginEndpointCommand = async (
  input: CreateOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/origin_endpoints";
  let body: any;
  body = JSON.stringify({
    ...(input.Authorization != null && { authorization: se_Authorization(input.Authorization, context) }),
    ...(input.ChannelId != null && { channelId: input.ChannelId }),
    ...(input.CmafPackage != null && {
      cmafPackage: se_CmafPackageCreateOrUpdateParameters(input.CmafPackage, context),
    }),
    ...(input.DashPackage != null && { dashPackage: se_DashPackage(input.DashPackage, context) }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.HlsPackage != null && { hlsPackage: se_HlsPackage(input.HlsPackage, context) }),
    ...(input.Id != null && { id: input.Id }),
    ...(input.ManifestName != null && { manifestName: input.ManifestName }),
    ...(input.MssPackage != null && { mssPackage: se_MssPackage(input.MssPackage, context) }),
    ...(input.Origination != null && { origination: input.Origination }),
    ...(input.StartoverWindowSeconds != null && { startoverWindowSeconds: input.StartoverWindowSeconds }),
    ...(input.Tags != null && { tags: se_Tags(input.Tags, context) }),
    ...(input.TimeDelaySeconds != null && { timeDelaySeconds: input.TimeDelaySeconds }),
    ...(input.Whitelist != null && { whitelist: se___listOf__string(input.Whitelist, context) }),
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
 * serializeAws_restJson1DeleteChannelCommand
 */
export const se_DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
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
 * serializeAws_restJson1DeleteOriginEndpointCommand
 */
export const se_DeleteOriginEndpointCommand = async (
  input: DeleteOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/origin_endpoints/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
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
 * serializeAws_restJson1DescribeChannelCommand
 */
export const se_DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
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
 * serializeAws_restJson1DescribeHarvestJobCommand
 */
export const se_DescribeHarvestJobCommand = async (
  input: DescribeHarvestJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/harvest_jobs/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
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
 * serializeAws_restJson1DescribeOriginEndpointCommand
 */
export const se_DescribeOriginEndpointCommand = async (
  input: DescribeOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/origin_endpoints/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
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
 * serializeAws_restJson1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
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
 * serializeAws_restJson1ListHarvestJobsCommand
 */
export const se_ListHarvestJobsCommand = async (
  input: ListHarvestJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/harvest_jobs";
  const query: any = map({
    includeChannelId: [, input.IncludeChannelId!],
    includeStatus: [, input.IncludeStatus!],
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
 * serializeAws_restJson1ListOriginEndpointsCommand
 */
export const se_ListOriginEndpointsCommand = async (
  input: ListOriginEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/origin_endpoints";
  const query: any = map({
    channelId: [, input.ChannelId!],
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
 * serializeAws_restJson1RotateChannelCredentialsCommand
 */
export const se_RotateChannelCredentialsCommand = async (
  input: RotateChannelCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{Id}/credentials";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
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
 * serializeAws_restJson1RotateIngestEndpointCredentialsCommand
 */
export const se_RotateIngestEndpointCredentialsCommand = async (
  input: RotateIngestEndpointCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{Id}/ingest_endpoints/{IngestEndpointId}/credentials";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IngestEndpointId",
    () => input.IngestEndpointId!,
    "{IngestEndpointId}",
    false
  );
  let body: any;
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
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
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
 * serializeAws_restJson1UpdateChannelCommand
 */
export const se_UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { description: input.Description }),
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
 * serializeAws_restJson1UpdateOriginEndpointCommand
 */
export const se_UpdateOriginEndpointCommand = async (
  input: UpdateOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/origin_endpoints/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Authorization != null && { authorization: se_Authorization(input.Authorization, context) }),
    ...(input.CmafPackage != null && {
      cmafPackage: se_CmafPackageCreateOrUpdateParameters(input.CmafPackage, context),
    }),
    ...(input.DashPackage != null && { dashPackage: se_DashPackage(input.DashPackage, context) }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.HlsPackage != null && { hlsPackage: se_HlsPackage(input.HlsPackage, context) }),
    ...(input.ManifestName != null && { manifestName: input.ManifestName }),
    ...(input.MssPackage != null && { mssPackage: se_MssPackage(input.MssPackage, context) }),
    ...(input.Origination != null && { origination: input.Origination }),
    ...(input.StartoverWindowSeconds != null && { startoverWindowSeconds: input.StartoverWindowSeconds }),
    ...(input.TimeDelaySeconds != null && { timeDelaySeconds: input.TimeDelaySeconds }),
    ...(input.Whitelist != null && { whitelist: se___listOf__string(input.Whitelist, context) }),
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
 * deserializeAws_restJson1ConfigureLogsCommand
 */
export const de_ConfigureLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ConfigureLogsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = de_EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = de_HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = de_IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ConfigureLogsCommandError
 */
const de_ConfigureLogsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateChannelCommand
 */
export const de_CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = de_EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = de_HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = de_IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelCommandError
 */
const de_CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateHarvestJobCommand
 */
export const de_CreateHarvestJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHarvestJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateHarvestJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.channelId != null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.endTime != null) {
    contents.EndTime = __expectString(data.endTime);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.originEndpointId != null) {
    contents.OriginEndpointId = __expectString(data.originEndpointId);
  }
  if (data.s3Destination != null) {
    contents.S3Destination = de_S3Destination(data.s3Destination, context);
  }
  if (data.startTime != null) {
    contents.StartTime = __expectString(data.startTime);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateHarvestJobCommandError
 */
const de_CreateHarvestJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHarvestJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateOriginEndpointCommand
 */
export const de_CreateOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateOriginEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authorization != null) {
    contents.Authorization = de_Authorization(data.authorization, context);
  }
  if (data.channelId != null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.cmafPackage != null) {
    contents.CmafPackage = de_CmafPackage(data.cmafPackage, context);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.dashPackage != null) {
    contents.DashPackage = de_DashPackage(data.dashPackage, context);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.hlsPackage != null) {
    contents.HlsPackage = de_HlsPackage(data.hlsPackage, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.manifestName != null) {
    contents.ManifestName = __expectString(data.manifestName);
  }
  if (data.mssPackage != null) {
    contents.MssPackage = de_MssPackage(data.mssPackage, context);
  }
  if (data.origination != null) {
    contents.Origination = __expectString(data.origination);
  }
  if (data.startoverWindowSeconds != null) {
    contents.StartoverWindowSeconds = __expectInt32(data.startoverWindowSeconds);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.timeDelaySeconds != null) {
    contents.TimeDelaySeconds = __expectInt32(data.timeDelaySeconds);
  }
  if (data.url != null) {
    contents.Url = __expectString(data.url);
  }
  if (data.whitelist != null) {
    contents.Whitelist = de___listOf__string(data.whitelist, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateOriginEndpointCommandError
 */
const de_CreateOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteChannelCommand
 */
export const de_DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelCommandError
 */
const de_DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteOriginEndpointCommand
 */
export const de_DeleteOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteOriginEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteOriginEndpointCommandError
 */
const de_DeleteOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeChannelCommand
 */
export const de_DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = de_EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = de_HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = de_IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelCommandError
 */
const de_DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeHarvestJobCommand
 */
export const de_DescribeHarvestJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHarvestJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeHarvestJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.channelId != null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.endTime != null) {
    contents.EndTime = __expectString(data.endTime);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.originEndpointId != null) {
    contents.OriginEndpointId = __expectString(data.originEndpointId);
  }
  if (data.s3Destination != null) {
    contents.S3Destination = de_S3Destination(data.s3Destination, context);
  }
  if (data.startTime != null) {
    contents.StartTime = __expectString(data.startTime);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeHarvestJobCommandError
 */
const de_DescribeHarvestJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHarvestJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeOriginEndpointCommand
 */
export const de_DescribeOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeOriginEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authorization != null) {
    contents.Authorization = de_Authorization(data.authorization, context);
  }
  if (data.channelId != null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.cmafPackage != null) {
    contents.CmafPackage = de_CmafPackage(data.cmafPackage, context);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.dashPackage != null) {
    contents.DashPackage = de_DashPackage(data.dashPackage, context);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.hlsPackage != null) {
    contents.HlsPackage = de_HlsPackage(data.hlsPackage, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.manifestName != null) {
    contents.ManifestName = __expectString(data.manifestName);
  }
  if (data.mssPackage != null) {
    contents.MssPackage = de_MssPackage(data.mssPackage, context);
  }
  if (data.origination != null) {
    contents.Origination = __expectString(data.origination);
  }
  if (data.startoverWindowSeconds != null) {
    contents.StartoverWindowSeconds = __expectInt32(data.startoverWindowSeconds);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.timeDelaySeconds != null) {
    contents.TimeDelaySeconds = __expectInt32(data.timeDelaySeconds);
  }
  if (data.url != null) {
    contents.Url = __expectString(data.url);
  }
  if (data.whitelist != null) {
    contents.Whitelist = de___listOf__string(data.whitelist, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOriginEndpointCommandError
 */
const de_DescribeOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListChannelsCommand
 */
export const de_ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channels != null) {
    contents.Channels = de___listOfChannel(data.channels, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsCommandError
 */
const de_ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListHarvestJobsCommand
 */
export const de_ListHarvestJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHarvestJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListHarvestJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.harvestJobs != null) {
    contents.HarvestJobs = de___listOfHarvestJob(data.harvestJobs, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListHarvestJobsCommandError
 */
const de_ListHarvestJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHarvestJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListOriginEndpointsCommand
 */
export const de_ListOriginEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListOriginEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.originEndpoints != null) {
    contents.OriginEndpoints = de___listOfOriginEndpoint(data.originEndpoints, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListOriginEndpointsCommandError
 */
const de_ListOriginEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
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
    contents.Tags = de___mapOf__string(data.tags, context);
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1RotateChannelCredentialsCommand
 */
export const de_RotateChannelCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateChannelCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RotateChannelCredentialsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = de_EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = de_HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = de_IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RotateChannelCredentialsCommandError
 */
const de_RotateChannelCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateChannelCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RotateIngestEndpointCredentialsCommand
 */
export const de_RotateIngestEndpointCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateIngestEndpointCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RotateIngestEndpointCredentialsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = de_EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = de_HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = de_IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RotateIngestEndpointCredentialsCommandError
 */
const de_RotateIngestEndpointCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateIngestEndpointCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1UpdateChannelCommand
 */
export const de_UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = de_EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = de_HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = de_IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelCommandError
 */
const de_UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateOriginEndpointCommand
 */
export const de_UpdateOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateOriginEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authorization != null) {
    contents.Authorization = de_Authorization(data.authorization, context);
  }
  if (data.channelId != null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.cmafPackage != null) {
    contents.CmafPackage = de_CmafPackage(data.cmafPackage, context);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.dashPackage != null) {
    contents.DashPackage = de_DashPackage(data.dashPackage, context);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.hlsPackage != null) {
    contents.HlsPackage = de_HlsPackage(data.hlsPackage, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.manifestName != null) {
    contents.ManifestName = __expectString(data.manifestName);
  }
  if (data.mssPackage != null) {
    contents.MssPackage = de_MssPackage(data.mssPackage, context);
  }
  if (data.origination != null) {
    contents.Origination = __expectString(data.origination);
  }
  if (data.startoverWindowSeconds != null) {
    contents.StartoverWindowSeconds = __expectInt32(data.startoverWindowSeconds);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.timeDelaySeconds != null) {
    contents.TimeDelaySeconds = __expectInt32(data.timeDelaySeconds);
  }
  if (data.url != null) {
    contents.Url = __expectString(data.url);
  }
  if (data.whitelist != null) {
    contents.Whitelist = de___listOf__string(data.whitelist, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateOriginEndpointCommandError
 */
const de_UpdateOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnprocessableEntityExceptionRes
 */
const de_UnprocessableEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new UnprocessableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1__listOf__PeriodTriggersElement
 */
const se___listOf__PeriodTriggersElement = (
  input: (__PeriodTriggersElement | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOf__string
 */
const se___listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOfHlsManifestCreateOrUpdateParameters
 */
const se___listOfHlsManifestCreateOrUpdateParameters = (
  input: HlsManifestCreateOrUpdateParameters[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HlsManifestCreateOrUpdateParameters(entry, context);
    });
};

/**
 * serializeAws_restJson1__mapOf__string
 */
const se___mapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AdTriggers
 */
const se_AdTriggers = (input: (__AdTriggersElement | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Authorization
 */
const se_Authorization = (input: Authorization, context: __SerdeContext): any => {
  return {
    ...(input.CdnIdentifierSecret != null && { cdnIdentifierSecret: input.CdnIdentifierSecret }),
    ...(input.SecretsRoleArn != null && { secretsRoleArn: input.SecretsRoleArn }),
  };
};

/**
 * serializeAws_restJson1CmafEncryption
 */
const se_CmafEncryption = (input: CmafEncryption, context: __SerdeContext): any => {
  return {
    ...(input.ConstantInitializationVector != null && {
      constantInitializationVector: input.ConstantInitializationVector,
    }),
    ...(input.EncryptionMethod != null && { encryptionMethod: input.EncryptionMethod }),
    ...(input.KeyRotationIntervalSeconds != null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds }),
    ...(input.SpekeKeyProvider != null && { spekeKeyProvider: se_SpekeKeyProvider(input.SpekeKeyProvider, context) }),
  };
};

/**
 * serializeAws_restJson1CmafPackageCreateOrUpdateParameters
 */
const se_CmafPackageCreateOrUpdateParameters = (
  input: CmafPackageCreateOrUpdateParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Encryption != null && { encryption: se_CmafEncryption(input.Encryption, context) }),
    ...(input.HlsManifests != null && {
      hlsManifests: se___listOfHlsManifestCreateOrUpdateParameters(input.HlsManifests, context),
    }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.SegmentPrefix != null && { segmentPrefix: input.SegmentPrefix }),
    ...(input.StreamSelection != null && { streamSelection: se_StreamSelection(input.StreamSelection, context) }),
  };
};

/**
 * serializeAws_restJson1DashEncryption
 */
const se_DashEncryption = (input: DashEncryption, context: __SerdeContext): any => {
  return {
    ...(input.KeyRotationIntervalSeconds != null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds }),
    ...(input.SpekeKeyProvider != null && { spekeKeyProvider: se_SpekeKeyProvider(input.SpekeKeyProvider, context) }),
  };
};

/**
 * serializeAws_restJson1DashPackage
 */
const se_DashPackage = (input: DashPackage, context: __SerdeContext): any => {
  return {
    ...(input.AdTriggers != null && { adTriggers: se_AdTriggers(input.AdTriggers, context) }),
    ...(input.AdsOnDeliveryRestrictions != null && { adsOnDeliveryRestrictions: input.AdsOnDeliveryRestrictions }),
    ...(input.Encryption != null && { encryption: se_DashEncryption(input.Encryption, context) }),
    ...(input.IncludeIframeOnlyStream != null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
    ...(input.ManifestLayout != null && { manifestLayout: input.ManifestLayout }),
    ...(input.ManifestWindowSeconds != null && { manifestWindowSeconds: input.ManifestWindowSeconds }),
    ...(input.MinBufferTimeSeconds != null && { minBufferTimeSeconds: input.MinBufferTimeSeconds }),
    ...(input.MinUpdatePeriodSeconds != null && { minUpdatePeriodSeconds: input.MinUpdatePeriodSeconds }),
    ...(input.PeriodTriggers != null && {
      periodTriggers: se___listOf__PeriodTriggersElement(input.PeriodTriggers, context),
    }),
    ...(input.Profile != null && { profile: input.Profile }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.SegmentTemplateFormat != null && { segmentTemplateFormat: input.SegmentTemplateFormat }),
    ...(input.StreamSelection != null && { streamSelection: se_StreamSelection(input.StreamSelection, context) }),
    ...(input.SuggestedPresentationDelaySeconds != null && {
      suggestedPresentationDelaySeconds: input.SuggestedPresentationDelaySeconds,
    }),
    ...(input.UtcTiming != null && { utcTiming: input.UtcTiming }),
    ...(input.UtcTimingUri != null && { utcTimingUri: input.UtcTimingUri }),
  };
};

/**
 * serializeAws_restJson1EgressAccessLogs
 */
const se_EgressAccessLogs = (input: EgressAccessLogs, context: __SerdeContext): any => {
  return {
    ...(input.LogGroupName != null && { logGroupName: input.LogGroupName }),
  };
};

/**
 * serializeAws_restJson1EncryptionContractConfiguration
 */
const se_EncryptionContractConfiguration = (input: EncryptionContractConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.PresetSpeke20Audio != null && { presetSpeke20Audio: input.PresetSpeke20Audio }),
    ...(input.PresetSpeke20Video != null && { presetSpeke20Video: input.PresetSpeke20Video }),
  };
};

/**
 * serializeAws_restJson1HlsEncryption
 */
const se_HlsEncryption = (input: HlsEncryption, context: __SerdeContext): any => {
  return {
    ...(input.ConstantInitializationVector != null && {
      constantInitializationVector: input.ConstantInitializationVector,
    }),
    ...(input.EncryptionMethod != null && { encryptionMethod: input.EncryptionMethod }),
    ...(input.KeyRotationIntervalSeconds != null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds }),
    ...(input.RepeatExtXKey != null && { repeatExtXKey: input.RepeatExtXKey }),
    ...(input.SpekeKeyProvider != null && { spekeKeyProvider: se_SpekeKeyProvider(input.SpekeKeyProvider, context) }),
  };
};

/**
 * serializeAws_restJson1HlsManifestCreateOrUpdateParameters
 */
const se_HlsManifestCreateOrUpdateParameters = (
  input: HlsManifestCreateOrUpdateParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdMarkers != null && { adMarkers: input.AdMarkers }),
    ...(input.AdTriggers != null && { adTriggers: se_AdTriggers(input.AdTriggers, context) }),
    ...(input.AdsOnDeliveryRestrictions != null && { adsOnDeliveryRestrictions: input.AdsOnDeliveryRestrictions }),
    ...(input.Id != null && { id: input.Id }),
    ...(input.IncludeIframeOnlyStream != null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
    ...(input.ManifestName != null && { manifestName: input.ManifestName }),
    ...(input.PlaylistType != null && { playlistType: input.PlaylistType }),
    ...(input.PlaylistWindowSeconds != null && { playlistWindowSeconds: input.PlaylistWindowSeconds }),
    ...(input.ProgramDateTimeIntervalSeconds != null && {
      programDateTimeIntervalSeconds: input.ProgramDateTimeIntervalSeconds,
    }),
  };
};

/**
 * serializeAws_restJson1HlsPackage
 */
const se_HlsPackage = (input: HlsPackage, context: __SerdeContext): any => {
  return {
    ...(input.AdMarkers != null && { adMarkers: input.AdMarkers }),
    ...(input.AdTriggers != null && { adTriggers: se_AdTriggers(input.AdTriggers, context) }),
    ...(input.AdsOnDeliveryRestrictions != null && { adsOnDeliveryRestrictions: input.AdsOnDeliveryRestrictions }),
    ...(input.Encryption != null && { encryption: se_HlsEncryption(input.Encryption, context) }),
    ...(input.IncludeDvbSubtitles != null && { includeDvbSubtitles: input.IncludeDvbSubtitles }),
    ...(input.IncludeIframeOnlyStream != null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
    ...(input.PlaylistType != null && { playlistType: input.PlaylistType }),
    ...(input.PlaylistWindowSeconds != null && { playlistWindowSeconds: input.PlaylistWindowSeconds }),
    ...(input.ProgramDateTimeIntervalSeconds != null && {
      programDateTimeIntervalSeconds: input.ProgramDateTimeIntervalSeconds,
    }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.StreamSelection != null && { streamSelection: se_StreamSelection(input.StreamSelection, context) }),
    ...(input.UseAudioRenditionGroup != null && { useAudioRenditionGroup: input.UseAudioRenditionGroup }),
  };
};

/**
 * serializeAws_restJson1IngressAccessLogs
 */
const se_IngressAccessLogs = (input: IngressAccessLogs, context: __SerdeContext): any => {
  return {
    ...(input.LogGroupName != null && { logGroupName: input.LogGroupName }),
  };
};

/**
 * serializeAws_restJson1MssEncryption
 */
const se_MssEncryption = (input: MssEncryption, context: __SerdeContext): any => {
  return {
    ...(input.SpekeKeyProvider != null && { spekeKeyProvider: se_SpekeKeyProvider(input.SpekeKeyProvider, context) }),
  };
};

/**
 * serializeAws_restJson1MssPackage
 */
const se_MssPackage = (input: MssPackage, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { encryption: se_MssEncryption(input.Encryption, context) }),
    ...(input.ManifestWindowSeconds != null && { manifestWindowSeconds: input.ManifestWindowSeconds }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.StreamSelection != null && { streamSelection: se_StreamSelection(input.StreamSelection, context) }),
  };
};

/**
 * serializeAws_restJson1S3Destination
 */
const se_S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { bucketName: input.BucketName }),
    ...(input.ManifestKey != null && { manifestKey: input.ManifestKey }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_restJson1SpekeKeyProvider
 */
const se_SpekeKeyProvider = (input: SpekeKeyProvider, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { certificateArn: input.CertificateArn }),
    ...(input.EncryptionContractConfiguration != null && {
      encryptionContractConfiguration: se_EncryptionContractConfiguration(
        input.EncryptionContractConfiguration,
        context
      ),
    }),
    ...(input.ResourceId != null && { resourceId: input.ResourceId }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
    ...(input.SystemIds != null && { systemIds: se___listOf__string(input.SystemIds, context) }),
    ...(input.Url != null && { url: input.Url }),
  };
};

/**
 * serializeAws_restJson1StreamSelection
 */
const se_StreamSelection = (input: StreamSelection, context: __SerdeContext): any => {
  return {
    ...(input.MaxVideoBitsPerSecond != null && { maxVideoBitsPerSecond: input.MaxVideoBitsPerSecond }),
    ...(input.MinVideoBitsPerSecond != null && { minVideoBitsPerSecond: input.MinVideoBitsPerSecond }),
    ...(input.StreamOrder != null && { streamOrder: input.StreamOrder }),
  };
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1__listOf__PeriodTriggersElement
 */
const de___listOf__PeriodTriggersElement = (
  output: any,
  context: __SerdeContext
): (__PeriodTriggersElement | string)[] => {
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
 * deserializeAws_restJson1__listOf__string
 */
const de___listOf__string = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1__listOfChannel
 */
const de___listOfChannel = (output: any, context: __SerdeContext): Channel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Channel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfHarvestJob
 */
const de___listOfHarvestJob = (output: any, context: __SerdeContext): HarvestJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HarvestJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfHlsManifest
 */
const de___listOfHlsManifest = (output: any, context: __SerdeContext): HlsManifest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HlsManifest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfIngestEndpoint
 */
const de___listOfIngestEndpoint = (output: any, context: __SerdeContext): IngestEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IngestEndpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfOriginEndpoint
 */
const de___listOfOriginEndpoint = (output: any, context: __SerdeContext): OriginEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OriginEndpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__mapOf__string
 */
const de___mapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AdTriggers
 */
const de_AdTriggers = (output: any, context: __SerdeContext): (__AdTriggersElement | string)[] => {
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
 * deserializeAws_restJson1Authorization
 */
const de_Authorization = (output: any, context: __SerdeContext): Authorization => {
  return {
    CdnIdentifierSecret: __expectString(output.cdnIdentifierSecret),
    SecretsRoleArn: __expectString(output.secretsRoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    Arn: __expectString(output.arn),
    CreatedAt: __expectString(output.createdAt),
    Description: __expectString(output.description),
    EgressAccessLogs:
      output.egressAccessLogs != null ? de_EgressAccessLogs(output.egressAccessLogs, context) : undefined,
    HlsIngest: output.hlsIngest != null ? de_HlsIngest(output.hlsIngest, context) : undefined,
    Id: __expectString(output.id),
    IngressAccessLogs:
      output.ingressAccessLogs != null ? de_IngressAccessLogs(output.ingressAccessLogs, context) : undefined,
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CmafEncryption
 */
const de_CmafEncryption = (output: any, context: __SerdeContext): CmafEncryption => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    EncryptionMethod: __expectString(output.encryptionMethod),
    KeyRotationIntervalSeconds: __expectInt32(output.keyRotationIntervalSeconds),
    SpekeKeyProvider:
      output.spekeKeyProvider != null ? de_SpekeKeyProvider(output.spekeKeyProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CmafPackage
 */
const de_CmafPackage = (output: any, context: __SerdeContext): CmafPackage => {
  return {
    Encryption: output.encryption != null ? de_CmafEncryption(output.encryption, context) : undefined,
    HlsManifests: output.hlsManifests != null ? de___listOfHlsManifest(output.hlsManifests, context) : undefined,
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    SegmentPrefix: __expectString(output.segmentPrefix),
    StreamSelection: output.streamSelection != null ? de_StreamSelection(output.streamSelection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DashEncryption
 */
const de_DashEncryption = (output: any, context: __SerdeContext): DashEncryption => {
  return {
    KeyRotationIntervalSeconds: __expectInt32(output.keyRotationIntervalSeconds),
    SpekeKeyProvider:
      output.spekeKeyProvider != null ? de_SpekeKeyProvider(output.spekeKeyProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DashPackage
 */
const de_DashPackage = (output: any, context: __SerdeContext): DashPackage => {
  return {
    AdTriggers: output.adTriggers != null ? de_AdTriggers(output.adTriggers, context) : undefined,
    AdsOnDeliveryRestrictions: __expectString(output.adsOnDeliveryRestrictions),
    Encryption: output.encryption != null ? de_DashEncryption(output.encryption, context) : undefined,
    IncludeIframeOnlyStream: __expectBoolean(output.includeIframeOnlyStream),
    ManifestLayout: __expectString(output.manifestLayout),
    ManifestWindowSeconds: __expectInt32(output.manifestWindowSeconds),
    MinBufferTimeSeconds: __expectInt32(output.minBufferTimeSeconds),
    MinUpdatePeriodSeconds: __expectInt32(output.minUpdatePeriodSeconds),
    PeriodTriggers:
      output.periodTriggers != null ? de___listOf__PeriodTriggersElement(output.periodTriggers, context) : undefined,
    Profile: __expectString(output.profile),
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    SegmentTemplateFormat: __expectString(output.segmentTemplateFormat),
    StreamSelection: output.streamSelection != null ? de_StreamSelection(output.streamSelection, context) : undefined,
    SuggestedPresentationDelaySeconds: __expectInt32(output.suggestedPresentationDelaySeconds),
    UtcTiming: __expectString(output.utcTiming),
    UtcTimingUri: __expectString(output.utcTimingUri),
  } as any;
};

/**
 * deserializeAws_restJson1EgressAccessLogs
 */
const de_EgressAccessLogs = (output: any, context: __SerdeContext): EgressAccessLogs => {
  return {
    LogGroupName: __expectString(output.logGroupName),
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionContractConfiguration
 */
const de_EncryptionContractConfiguration = (output: any, context: __SerdeContext): EncryptionContractConfiguration => {
  return {
    PresetSpeke20Audio: __expectString(output.presetSpeke20Audio),
    PresetSpeke20Video: __expectString(output.presetSpeke20Video),
  } as any;
};

/**
 * deserializeAws_restJson1HarvestJob
 */
const de_HarvestJob = (output: any, context: __SerdeContext): HarvestJob => {
  return {
    Arn: __expectString(output.arn),
    ChannelId: __expectString(output.channelId),
    CreatedAt: __expectString(output.createdAt),
    EndTime: __expectString(output.endTime),
    Id: __expectString(output.id),
    OriginEndpointId: __expectString(output.originEndpointId),
    S3Destination: output.s3Destination != null ? de_S3Destination(output.s3Destination, context) : undefined,
    StartTime: __expectString(output.startTime),
    Status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1HlsEncryption
 */
const de_HlsEncryption = (output: any, context: __SerdeContext): HlsEncryption => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    EncryptionMethod: __expectString(output.encryptionMethod),
    KeyRotationIntervalSeconds: __expectInt32(output.keyRotationIntervalSeconds),
    RepeatExtXKey: __expectBoolean(output.repeatExtXKey),
    SpekeKeyProvider:
      output.spekeKeyProvider != null ? de_SpekeKeyProvider(output.spekeKeyProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HlsIngest
 */
const de_HlsIngest = (output: any, context: __SerdeContext): HlsIngest => {
  return {
    IngestEndpoints:
      output.ingestEndpoints != null ? de___listOfIngestEndpoint(output.ingestEndpoints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HlsManifest
 */
const de_HlsManifest = (output: any, context: __SerdeContext): HlsManifest => {
  return {
    AdMarkers: __expectString(output.adMarkers),
    AdTriggers: output.adTriggers != null ? de_AdTriggers(output.adTriggers, context) : undefined,
    AdsOnDeliveryRestrictions: __expectString(output.adsOnDeliveryRestrictions),
    Id: __expectString(output.id),
    IncludeIframeOnlyStream: __expectBoolean(output.includeIframeOnlyStream),
    ManifestName: __expectString(output.manifestName),
    PlaylistType: __expectString(output.playlistType),
    PlaylistWindowSeconds: __expectInt32(output.playlistWindowSeconds),
    ProgramDateTimeIntervalSeconds: __expectInt32(output.programDateTimeIntervalSeconds),
    Url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_restJson1HlsPackage
 */
const de_HlsPackage = (output: any, context: __SerdeContext): HlsPackage => {
  return {
    AdMarkers: __expectString(output.adMarkers),
    AdTriggers: output.adTriggers != null ? de_AdTriggers(output.adTriggers, context) : undefined,
    AdsOnDeliveryRestrictions: __expectString(output.adsOnDeliveryRestrictions),
    Encryption: output.encryption != null ? de_HlsEncryption(output.encryption, context) : undefined,
    IncludeDvbSubtitles: __expectBoolean(output.includeDvbSubtitles),
    IncludeIframeOnlyStream: __expectBoolean(output.includeIframeOnlyStream),
    PlaylistType: __expectString(output.playlistType),
    PlaylistWindowSeconds: __expectInt32(output.playlistWindowSeconds),
    ProgramDateTimeIntervalSeconds: __expectInt32(output.programDateTimeIntervalSeconds),
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    StreamSelection: output.streamSelection != null ? de_StreamSelection(output.streamSelection, context) : undefined,
    UseAudioRenditionGroup: __expectBoolean(output.useAudioRenditionGroup),
  } as any;
};

/**
 * deserializeAws_restJson1IngestEndpoint
 */
const de_IngestEndpoint = (output: any, context: __SerdeContext): IngestEndpoint => {
  return {
    Id: __expectString(output.id),
    Password: __expectString(output.password),
    Url: __expectString(output.url),
    Username: __expectString(output.username),
  } as any;
};

/**
 * deserializeAws_restJson1IngressAccessLogs
 */
const de_IngressAccessLogs = (output: any, context: __SerdeContext): IngressAccessLogs => {
  return {
    LogGroupName: __expectString(output.logGroupName),
  } as any;
};

/**
 * deserializeAws_restJson1MssEncryption
 */
const de_MssEncryption = (output: any, context: __SerdeContext): MssEncryption => {
  return {
    SpekeKeyProvider:
      output.spekeKeyProvider != null ? de_SpekeKeyProvider(output.spekeKeyProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MssPackage
 */
const de_MssPackage = (output: any, context: __SerdeContext): MssPackage => {
  return {
    Encryption: output.encryption != null ? de_MssEncryption(output.encryption, context) : undefined,
    ManifestWindowSeconds: __expectInt32(output.manifestWindowSeconds),
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    StreamSelection: output.streamSelection != null ? de_StreamSelection(output.streamSelection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OriginEndpoint
 */
const de_OriginEndpoint = (output: any, context: __SerdeContext): OriginEndpoint => {
  return {
    Arn: __expectString(output.arn),
    Authorization: output.authorization != null ? de_Authorization(output.authorization, context) : undefined,
    ChannelId: __expectString(output.channelId),
    CmafPackage: output.cmafPackage != null ? de_CmafPackage(output.cmafPackage, context) : undefined,
    CreatedAt: __expectString(output.createdAt),
    DashPackage: output.dashPackage != null ? de_DashPackage(output.dashPackage, context) : undefined,
    Description: __expectString(output.description),
    HlsPackage: output.hlsPackage != null ? de_HlsPackage(output.hlsPackage, context) : undefined,
    Id: __expectString(output.id),
    ManifestName: __expectString(output.manifestName),
    MssPackage: output.mssPackage != null ? de_MssPackage(output.mssPackage, context) : undefined,
    Origination: __expectString(output.origination),
    StartoverWindowSeconds: __expectInt32(output.startoverWindowSeconds),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    TimeDelaySeconds: __expectInt32(output.timeDelaySeconds),
    Url: __expectString(output.url),
    Whitelist: output.whitelist != null ? de___listOf__string(output.whitelist, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3Destination
 */
const de_S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return {
    BucketName: __expectString(output.bucketName),
    ManifestKey: __expectString(output.manifestKey),
    RoleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_restJson1SpekeKeyProvider
 */
const de_SpekeKeyProvider = (output: any, context: __SerdeContext): SpekeKeyProvider => {
  return {
    CertificateArn: __expectString(output.certificateArn),
    EncryptionContractConfiguration:
      output.encryptionContractConfiguration != null
        ? de_EncryptionContractConfiguration(output.encryptionContractConfiguration, context)
        : undefined,
    ResourceId: __expectString(output.resourceId),
    RoleArn: __expectString(output.roleArn),
    SystemIds: output.systemIds != null ? de___listOf__string(output.systemIds, context) : undefined,
    Url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_restJson1StreamSelection
 */
const de_StreamSelection = (output: any, context: __SerdeContext): StreamSelection => {
  return {
    MaxVideoBitsPerSecond: __expectInt32(output.maxVideoBitsPerSecond),
    MinVideoBitsPerSecond: __expectInt32(output.minVideoBitsPerSecond),
    StreamOrder: __expectString(output.streamOrder),
  } as any;
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
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
