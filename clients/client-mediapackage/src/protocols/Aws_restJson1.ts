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

export const serializeAws_restJson1ConfigureLogsCommand = async (
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
    ...(input.EgressAccessLogs != null && {
      egressAccessLogs: serializeAws_restJson1EgressAccessLogs(input.EgressAccessLogs, context),
    }),
    ...(input.IngressAccessLogs != null && {
      ingressAccessLogs: serializeAws_restJson1IngressAccessLogs(input.IngressAccessLogs, context),
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

export const serializeAws_restJson1CreateChannelCommand = async (
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
    ...(input.Tags != null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1CreateHarvestJobCommand = async (
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
    ...(input.S3Destination != null && {
      s3Destination: serializeAws_restJson1S3Destination(input.S3Destination, context),
    }),
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

export const serializeAws_restJson1CreateOriginEndpointCommand = async (
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
    ...(input.Authorization != null && {
      authorization: serializeAws_restJson1Authorization(input.Authorization, context),
    }),
    ...(input.ChannelId != null && { channelId: input.ChannelId }),
    ...(input.CmafPackage != null && {
      cmafPackage: serializeAws_restJson1CmafPackageCreateOrUpdateParameters(input.CmafPackage, context),
    }),
    ...(input.DashPackage != null && { dashPackage: serializeAws_restJson1DashPackage(input.DashPackage, context) }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.HlsPackage != null && { hlsPackage: serializeAws_restJson1HlsPackage(input.HlsPackage, context) }),
    ...(input.Id != null && { id: input.Id }),
    ...(input.ManifestName != null && { manifestName: input.ManifestName }),
    ...(input.MssPackage != null && { mssPackage: serializeAws_restJson1MssPackage(input.MssPackage, context) }),
    ...(input.Origination != null && { origination: input.Origination }),
    ...(input.StartoverWindowSeconds != null && { startoverWindowSeconds: input.StartoverWindowSeconds }),
    ...(input.Tags != null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
    ...(input.TimeDelaySeconds != null && { timeDelaySeconds: input.TimeDelaySeconds }),
    ...(input.Whitelist != null && { whitelist: serializeAws_restJson1__listOf__string(input.Whitelist, context) }),
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

export const serializeAws_restJson1DeleteChannelCommand = async (
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

export const serializeAws_restJson1DeleteOriginEndpointCommand = async (
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

export const serializeAws_restJson1DescribeChannelCommand = async (
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

export const serializeAws_restJson1DescribeHarvestJobCommand = async (
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

export const serializeAws_restJson1DescribeOriginEndpointCommand = async (
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

export const serializeAws_restJson1ListChannelsCommand = async (
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

export const serializeAws_restJson1ListHarvestJobsCommand = async (
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

export const serializeAws_restJson1ListOriginEndpointsCommand = async (
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

export const serializeAws_restJson1RotateChannelCredentialsCommand = async (
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

export const serializeAws_restJson1RotateIngestEndpointCredentialsCommand = async (
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
    ...(input.Tags != null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1UpdateChannelCommand = async (
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

export const serializeAws_restJson1UpdateOriginEndpointCommand = async (
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
    ...(input.Authorization != null && {
      authorization: serializeAws_restJson1Authorization(input.Authorization, context),
    }),
    ...(input.CmafPackage != null && {
      cmafPackage: serializeAws_restJson1CmafPackageCreateOrUpdateParameters(input.CmafPackage, context),
    }),
    ...(input.DashPackage != null && { dashPackage: serializeAws_restJson1DashPackage(input.DashPackage, context) }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.HlsPackage != null && { hlsPackage: serializeAws_restJson1HlsPackage(input.HlsPackage, context) }),
    ...(input.ManifestName != null && { manifestName: input.ManifestName }),
    ...(input.MssPackage != null && { mssPackage: serializeAws_restJson1MssPackage(input.MssPackage, context) }),
    ...(input.Origination != null && { origination: input.Origination }),
    ...(input.StartoverWindowSeconds != null && { startoverWindowSeconds: input.StartoverWindowSeconds }),
    ...(input.TimeDelaySeconds != null && { timeDelaySeconds: input.TimeDelaySeconds }),
    ...(input.Whitelist != null && { whitelist: serializeAws_restJson1__listOf__string(input.Whitelist, context) }),
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

export const deserializeAws_restJson1ConfigureLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ConfigureLogsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ConfigureLogsCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateChannelCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateHarvestJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHarvestJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateHarvestJobCommandError(output, context);
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
    contents.S3Destination = deserializeAws_restJson1S3Destination(data.s3Destination, context);
  }
  if (data.startTime != null) {
    contents.StartTime = __expectString(data.startTime);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1CreateHarvestJobCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateOriginEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authorization != null) {
    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
  }
  if (data.channelId != null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.cmafPackage != null) {
    contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
  }
  if (data.dashPackage != null) {
    contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.hlsPackage != null) {
    contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.manifestName != null) {
    contents.ManifestName = __expectString(data.manifestName);
  }
  if (data.mssPackage != null) {
    contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
  }
  if (data.origination != null) {
    contents.Origination = __expectString(data.origination);
  }
  if (data.startoverWindowSeconds != null) {
    contents.StartoverWindowSeconds = __expectInt32(data.startoverWindowSeconds);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds != null) {
    contents.TimeDelaySeconds = __expectInt32(data.timeDelaySeconds);
  }
  if (data.url != null) {
    contents.Url = __expectString(data.url);
  }
  if (data.whitelist != null) {
    contents.Whitelist = deserializeAws_restJson1__listOf__string(data.whitelist, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateOriginEndpointCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteChannelCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteOriginEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteOriginEndpointCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeChannelCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeHarvestJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHarvestJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeHarvestJobCommandError(output, context);
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
    contents.S3Destination = deserializeAws_restJson1S3Destination(data.s3Destination, context);
  }
  if (data.startTime != null) {
    contents.StartTime = __expectString(data.startTime);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1DescribeHarvestJobCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOriginEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authorization != null) {
    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
  }
  if (data.channelId != null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.cmafPackage != null) {
    contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
  }
  if (data.dashPackage != null) {
    contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.hlsPackage != null) {
    contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.manifestName != null) {
    contents.ManifestName = __expectString(data.manifestName);
  }
  if (data.mssPackage != null) {
    contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
  }
  if (data.origination != null) {
    contents.Origination = __expectString(data.origination);
  }
  if (data.startoverWindowSeconds != null) {
    contents.StartoverWindowSeconds = __expectInt32(data.startoverWindowSeconds);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds != null) {
    contents.TimeDelaySeconds = __expectInt32(data.timeDelaySeconds);
  }
  if (data.url != null) {
    contents.Url = __expectString(data.url);
  }
  if (data.whitelist != null) {
    contents.Whitelist = deserializeAws_restJson1__listOf__string(data.whitelist, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeOriginEndpointCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channels != null) {
    contents.Channels = deserializeAws_restJson1__listOfChannel(data.channels, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListChannelsCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListHarvestJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHarvestJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListHarvestJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.harvestJobs != null) {
    contents.HarvestJobs = deserializeAws_restJson1__listOfHarvestJob(data.harvestJobs, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListHarvestJobsCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListOriginEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOriginEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.originEndpoints != null) {
    contents.OriginEndpoints = deserializeAws_restJson1__listOfOriginEndpoint(data.originEndpoints, context);
  }
  return contents;
};

const deserializeAws_restJson1ListOriginEndpointsCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
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
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1RotateChannelCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateChannelCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RotateChannelCredentialsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1RotateChannelCredentialsCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RotateIngestEndpointCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateIngestEndpointCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RotateIngestEndpointCredentialsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1RotateIngestEndpointCredentialsCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest != null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs != null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateChannelCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateOriginEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authorization != null) {
    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
  }
  if (data.channelId != null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.cmafPackage != null) {
    contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
  }
  if (data.dashPackage != null) {
    contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.hlsPackage != null) {
    contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.manifestName != null) {
    contents.ManifestName = __expectString(data.manifestName);
  }
  if (data.mssPackage != null) {
    contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
  }
  if (data.origination != null) {
    contents.Origination = __expectString(data.origination);
  }
  if (data.startoverWindowSeconds != null) {
    contents.StartoverWindowSeconds = __expectInt32(data.startoverWindowSeconds);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds != null) {
    contents.TimeDelaySeconds = __expectInt32(data.timeDelaySeconds);
  }
  if (data.url != null) {
    contents.Url = __expectString(data.url);
  }
  if (data.whitelist != null) {
    contents.Whitelist = deserializeAws_restJson1__listOf__string(data.whitelist, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateOriginEndpointCommandError = async (
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
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
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
const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
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

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
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

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
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

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
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

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
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

const deserializeAws_restJson1UnprocessableEntityExceptionResponse = async (
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

const serializeAws_restJson1__listOf__PeriodTriggersElement = (
  input: (__PeriodTriggersElement | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1__listOfHlsManifestCreateOrUpdateParameters = (
  input: HlsManifestCreateOrUpdateParameters[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1HlsManifestCreateOrUpdateParameters(entry, context);
    });
};

const serializeAws_restJson1__mapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1AdTriggers = (input: (__AdTriggersElement | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Authorization = (input: Authorization, context: __SerdeContext): any => {
  return {
    ...(input.CdnIdentifierSecret != null && { cdnIdentifierSecret: input.CdnIdentifierSecret }),
    ...(input.SecretsRoleArn != null && { secretsRoleArn: input.SecretsRoleArn }),
  };
};

const serializeAws_restJson1CmafEncryption = (input: CmafEncryption, context: __SerdeContext): any => {
  return {
    ...(input.ConstantInitializationVector != null && {
      constantInitializationVector: input.ConstantInitializationVector,
    }),
    ...(input.EncryptionMethod != null && { encryptionMethod: input.EncryptionMethod }),
    ...(input.KeyRotationIntervalSeconds != null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds }),
    ...(input.SpekeKeyProvider != null && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }),
  };
};

const serializeAws_restJson1CmafPackageCreateOrUpdateParameters = (
  input: CmafPackageCreateOrUpdateParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Encryption != null && { encryption: serializeAws_restJson1CmafEncryption(input.Encryption, context) }),
    ...(input.HlsManifests != null && {
      hlsManifests: serializeAws_restJson1__listOfHlsManifestCreateOrUpdateParameters(input.HlsManifests, context),
    }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.SegmentPrefix != null && { segmentPrefix: input.SegmentPrefix }),
    ...(input.StreamSelection != null && {
      streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
    }),
  };
};

const serializeAws_restJson1DashEncryption = (input: DashEncryption, context: __SerdeContext): any => {
  return {
    ...(input.KeyRotationIntervalSeconds != null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds }),
    ...(input.SpekeKeyProvider != null && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }),
  };
};

const serializeAws_restJson1DashPackage = (input: DashPackage, context: __SerdeContext): any => {
  return {
    ...(input.AdTriggers != null && { adTriggers: serializeAws_restJson1AdTriggers(input.AdTriggers, context) }),
    ...(input.AdsOnDeliveryRestrictions != null && { adsOnDeliveryRestrictions: input.AdsOnDeliveryRestrictions }),
    ...(input.Encryption != null && { encryption: serializeAws_restJson1DashEncryption(input.Encryption, context) }),
    ...(input.IncludeIframeOnlyStream != null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
    ...(input.ManifestLayout != null && { manifestLayout: input.ManifestLayout }),
    ...(input.ManifestWindowSeconds != null && { manifestWindowSeconds: input.ManifestWindowSeconds }),
    ...(input.MinBufferTimeSeconds != null && { minBufferTimeSeconds: input.MinBufferTimeSeconds }),
    ...(input.MinUpdatePeriodSeconds != null && { minUpdatePeriodSeconds: input.MinUpdatePeriodSeconds }),
    ...(input.PeriodTriggers != null && {
      periodTriggers: serializeAws_restJson1__listOf__PeriodTriggersElement(input.PeriodTriggers, context),
    }),
    ...(input.Profile != null && { profile: input.Profile }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.SegmentTemplateFormat != null && { segmentTemplateFormat: input.SegmentTemplateFormat }),
    ...(input.StreamSelection != null && {
      streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
    }),
    ...(input.SuggestedPresentationDelaySeconds != null && {
      suggestedPresentationDelaySeconds: input.SuggestedPresentationDelaySeconds,
    }),
    ...(input.UtcTiming != null && { utcTiming: input.UtcTiming }),
    ...(input.UtcTimingUri != null && { utcTimingUri: input.UtcTimingUri }),
  };
};

const serializeAws_restJson1EgressAccessLogs = (input: EgressAccessLogs, context: __SerdeContext): any => {
  return {
    ...(input.LogGroupName != null && { logGroupName: input.LogGroupName }),
  };
};

const serializeAws_restJson1EncryptionContractConfiguration = (
  input: EncryptionContractConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.PresetSpeke20Audio != null && { presetSpeke20Audio: input.PresetSpeke20Audio }),
    ...(input.PresetSpeke20Video != null && { presetSpeke20Video: input.PresetSpeke20Video }),
  };
};

const serializeAws_restJson1HlsEncryption = (input: HlsEncryption, context: __SerdeContext): any => {
  return {
    ...(input.ConstantInitializationVector != null && {
      constantInitializationVector: input.ConstantInitializationVector,
    }),
    ...(input.EncryptionMethod != null && { encryptionMethod: input.EncryptionMethod }),
    ...(input.KeyRotationIntervalSeconds != null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds }),
    ...(input.RepeatExtXKey != null && { repeatExtXKey: input.RepeatExtXKey }),
    ...(input.SpekeKeyProvider != null && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }),
  };
};

const serializeAws_restJson1HlsManifestCreateOrUpdateParameters = (
  input: HlsManifestCreateOrUpdateParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdMarkers != null && { adMarkers: input.AdMarkers }),
    ...(input.AdTriggers != null && { adTriggers: serializeAws_restJson1AdTriggers(input.AdTriggers, context) }),
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

const serializeAws_restJson1HlsPackage = (input: HlsPackage, context: __SerdeContext): any => {
  return {
    ...(input.AdMarkers != null && { adMarkers: input.AdMarkers }),
    ...(input.AdTriggers != null && { adTriggers: serializeAws_restJson1AdTriggers(input.AdTriggers, context) }),
    ...(input.AdsOnDeliveryRestrictions != null && { adsOnDeliveryRestrictions: input.AdsOnDeliveryRestrictions }),
    ...(input.Encryption != null && { encryption: serializeAws_restJson1HlsEncryption(input.Encryption, context) }),
    ...(input.IncludeDvbSubtitles != null && { includeDvbSubtitles: input.IncludeDvbSubtitles }),
    ...(input.IncludeIframeOnlyStream != null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
    ...(input.PlaylistType != null && { playlistType: input.PlaylistType }),
    ...(input.PlaylistWindowSeconds != null && { playlistWindowSeconds: input.PlaylistWindowSeconds }),
    ...(input.ProgramDateTimeIntervalSeconds != null && {
      programDateTimeIntervalSeconds: input.ProgramDateTimeIntervalSeconds,
    }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.StreamSelection != null && {
      streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
    }),
    ...(input.UseAudioRenditionGroup != null && { useAudioRenditionGroup: input.UseAudioRenditionGroup }),
  };
};

const serializeAws_restJson1IngressAccessLogs = (input: IngressAccessLogs, context: __SerdeContext): any => {
  return {
    ...(input.LogGroupName != null && { logGroupName: input.LogGroupName }),
  };
};

const serializeAws_restJson1MssEncryption = (input: MssEncryption, context: __SerdeContext): any => {
  return {
    ...(input.SpekeKeyProvider != null && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }),
  };
};

const serializeAws_restJson1MssPackage = (input: MssPackage, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { encryption: serializeAws_restJson1MssEncryption(input.Encryption, context) }),
    ...(input.ManifestWindowSeconds != null && { manifestWindowSeconds: input.ManifestWindowSeconds }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.StreamSelection != null && {
      streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
    }),
  };
};

const serializeAws_restJson1S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { bucketName: input.BucketName }),
    ...(input.ManifestKey != null && { manifestKey: input.ManifestKey }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1SpekeKeyProvider = (input: SpekeKeyProvider, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { certificateArn: input.CertificateArn }),
    ...(input.EncryptionContractConfiguration != null && {
      encryptionContractConfiguration: serializeAws_restJson1EncryptionContractConfiguration(
        input.EncryptionContractConfiguration,
        context
      ),
    }),
    ...(input.ResourceId != null && { resourceId: input.ResourceId }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
    ...(input.SystemIds != null && { systemIds: serializeAws_restJson1__listOf__string(input.SystemIds, context) }),
    ...(input.Url != null && { url: input.Url }),
  };
};

const serializeAws_restJson1StreamSelection = (input: StreamSelection, context: __SerdeContext): any => {
  return {
    ...(input.MaxVideoBitsPerSecond != null && { maxVideoBitsPerSecond: input.MaxVideoBitsPerSecond }),
    ...(input.MinVideoBitsPerSecond != null && { minVideoBitsPerSecond: input.MinVideoBitsPerSecond }),
    ...(input.StreamOrder != null && { streamOrder: input.StreamOrder }),
  };
};

const serializeAws_restJson1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_restJson1__listOf__PeriodTriggersElement = (
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

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1__listOfChannel = (output: any, context: __SerdeContext): Channel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Channel(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfHarvestJob = (output: any, context: __SerdeContext): HarvestJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HarvestJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfHlsManifest = (output: any, context: __SerdeContext): HlsManifest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HlsManifest(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfIngestEndpoint = (output: any, context: __SerdeContext): IngestEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IngestEndpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfOriginEndpoint = (output: any, context: __SerdeContext): OriginEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OriginEndpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1AdTriggers = (output: any, context: __SerdeContext): (__AdTriggersElement | string)[] => {
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

const deserializeAws_restJson1Authorization = (output: any, context: __SerdeContext): Authorization => {
  return {
    CdnIdentifierSecret: __expectString(output.cdnIdentifierSecret),
    SecretsRoleArn: __expectString(output.secretsRoleArn),
  } as any;
};

const deserializeAws_restJson1Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    Arn: __expectString(output.arn),
    Description: __expectString(output.description),
    EgressAccessLogs:
      output.egressAccessLogs != null
        ? deserializeAws_restJson1EgressAccessLogs(output.egressAccessLogs, context)
        : undefined,
    HlsIngest: output.hlsIngest != null ? deserializeAws_restJson1HlsIngest(output.hlsIngest, context) : undefined,
    Id: __expectString(output.id),
    IngressAccessLogs:
      output.ingressAccessLogs != null
        ? deserializeAws_restJson1IngressAccessLogs(output.ingressAccessLogs, context)
        : undefined,
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CmafEncryption = (output: any, context: __SerdeContext): CmafEncryption => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    EncryptionMethod: __expectString(output.encryptionMethod),
    KeyRotationIntervalSeconds: __expectInt32(output.keyRotationIntervalSeconds),
    SpekeKeyProvider:
      output.spekeKeyProvider != null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CmafPackage = (output: any, context: __SerdeContext): CmafPackage => {
  return {
    Encryption:
      output.encryption != null ? deserializeAws_restJson1CmafEncryption(output.encryption, context) : undefined,
    HlsManifests:
      output.hlsManifests != null
        ? deserializeAws_restJson1__listOfHlsManifest(output.hlsManifests, context)
        : undefined,
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    SegmentPrefix: __expectString(output.segmentPrefix),
    StreamSelection:
      output.streamSelection != null
        ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashEncryption = (output: any, context: __SerdeContext): DashEncryption => {
  return {
    KeyRotationIntervalSeconds: __expectInt32(output.keyRotationIntervalSeconds),
    SpekeKeyProvider:
      output.spekeKeyProvider != null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashPackage = (output: any, context: __SerdeContext): DashPackage => {
  return {
    AdTriggers: output.adTriggers != null ? deserializeAws_restJson1AdTriggers(output.adTriggers, context) : undefined,
    AdsOnDeliveryRestrictions: __expectString(output.adsOnDeliveryRestrictions),
    Encryption:
      output.encryption != null ? deserializeAws_restJson1DashEncryption(output.encryption, context) : undefined,
    IncludeIframeOnlyStream: __expectBoolean(output.includeIframeOnlyStream),
    ManifestLayout: __expectString(output.manifestLayout),
    ManifestWindowSeconds: __expectInt32(output.manifestWindowSeconds),
    MinBufferTimeSeconds: __expectInt32(output.minBufferTimeSeconds),
    MinUpdatePeriodSeconds: __expectInt32(output.minUpdatePeriodSeconds),
    PeriodTriggers:
      output.periodTriggers != null
        ? deserializeAws_restJson1__listOf__PeriodTriggersElement(output.periodTriggers, context)
        : undefined,
    Profile: __expectString(output.profile),
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    SegmentTemplateFormat: __expectString(output.segmentTemplateFormat),
    StreamSelection:
      output.streamSelection != null
        ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
        : undefined,
    SuggestedPresentationDelaySeconds: __expectInt32(output.suggestedPresentationDelaySeconds),
    UtcTiming: __expectString(output.utcTiming),
    UtcTimingUri: __expectString(output.utcTimingUri),
  } as any;
};

const deserializeAws_restJson1EgressAccessLogs = (output: any, context: __SerdeContext): EgressAccessLogs => {
  return {
    LogGroupName: __expectString(output.logGroupName),
  } as any;
};

const deserializeAws_restJson1EncryptionContractConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionContractConfiguration => {
  return {
    PresetSpeke20Audio: __expectString(output.presetSpeke20Audio),
    PresetSpeke20Video: __expectString(output.presetSpeke20Video),
  } as any;
};

const deserializeAws_restJson1HarvestJob = (output: any, context: __SerdeContext): HarvestJob => {
  return {
    Arn: __expectString(output.arn),
    ChannelId: __expectString(output.channelId),
    CreatedAt: __expectString(output.createdAt),
    EndTime: __expectString(output.endTime),
    Id: __expectString(output.id),
    OriginEndpointId: __expectString(output.originEndpointId),
    S3Destination:
      output.s3Destination != null ? deserializeAws_restJson1S3Destination(output.s3Destination, context) : undefined,
    StartTime: __expectString(output.startTime),
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1HlsEncryption = (output: any, context: __SerdeContext): HlsEncryption => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    EncryptionMethod: __expectString(output.encryptionMethod),
    KeyRotationIntervalSeconds: __expectInt32(output.keyRotationIntervalSeconds),
    RepeatExtXKey: __expectBoolean(output.repeatExtXKey),
    SpekeKeyProvider:
      output.spekeKeyProvider != null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HlsIngest = (output: any, context: __SerdeContext): HlsIngest => {
  return {
    IngestEndpoints:
      output.ingestEndpoints != null
        ? deserializeAws_restJson1__listOfIngestEndpoint(output.ingestEndpoints, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HlsManifest = (output: any, context: __SerdeContext): HlsManifest => {
  return {
    AdMarkers: __expectString(output.adMarkers),
    AdTriggers: output.adTriggers != null ? deserializeAws_restJson1AdTriggers(output.adTriggers, context) : undefined,
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

const deserializeAws_restJson1HlsPackage = (output: any, context: __SerdeContext): HlsPackage => {
  return {
    AdMarkers: __expectString(output.adMarkers),
    AdTriggers: output.adTriggers != null ? deserializeAws_restJson1AdTriggers(output.adTriggers, context) : undefined,
    AdsOnDeliveryRestrictions: __expectString(output.adsOnDeliveryRestrictions),
    Encryption:
      output.encryption != null ? deserializeAws_restJson1HlsEncryption(output.encryption, context) : undefined,
    IncludeDvbSubtitles: __expectBoolean(output.includeDvbSubtitles),
    IncludeIframeOnlyStream: __expectBoolean(output.includeIframeOnlyStream),
    PlaylistType: __expectString(output.playlistType),
    PlaylistWindowSeconds: __expectInt32(output.playlistWindowSeconds),
    ProgramDateTimeIntervalSeconds: __expectInt32(output.programDateTimeIntervalSeconds),
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    StreamSelection:
      output.streamSelection != null
        ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
        : undefined,
    UseAudioRenditionGroup: __expectBoolean(output.useAudioRenditionGroup),
  } as any;
};

const deserializeAws_restJson1IngestEndpoint = (output: any, context: __SerdeContext): IngestEndpoint => {
  return {
    Id: __expectString(output.id),
    Password: __expectString(output.password),
    Url: __expectString(output.url),
    Username: __expectString(output.username),
  } as any;
};

const deserializeAws_restJson1IngressAccessLogs = (output: any, context: __SerdeContext): IngressAccessLogs => {
  return {
    LogGroupName: __expectString(output.logGroupName),
  } as any;
};

const deserializeAws_restJson1MssEncryption = (output: any, context: __SerdeContext): MssEncryption => {
  return {
    SpekeKeyProvider:
      output.spekeKeyProvider != null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MssPackage = (output: any, context: __SerdeContext): MssPackage => {
  return {
    Encryption:
      output.encryption != null ? deserializeAws_restJson1MssEncryption(output.encryption, context) : undefined,
    ManifestWindowSeconds: __expectInt32(output.manifestWindowSeconds),
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    StreamSelection:
      output.streamSelection != null
        ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OriginEndpoint = (output: any, context: __SerdeContext): OriginEndpoint => {
  return {
    Arn: __expectString(output.arn),
    Authorization:
      output.authorization != null ? deserializeAws_restJson1Authorization(output.authorization, context) : undefined,
    ChannelId: __expectString(output.channelId),
    CmafPackage:
      output.cmafPackage != null ? deserializeAws_restJson1CmafPackage(output.cmafPackage, context) : undefined,
    DashPackage:
      output.dashPackage != null ? deserializeAws_restJson1DashPackage(output.dashPackage, context) : undefined,
    Description: __expectString(output.description),
    HlsPackage: output.hlsPackage != null ? deserializeAws_restJson1HlsPackage(output.hlsPackage, context) : undefined,
    Id: __expectString(output.id),
    ManifestName: __expectString(output.manifestName),
    MssPackage: output.mssPackage != null ? deserializeAws_restJson1MssPackage(output.mssPackage, context) : undefined,
    Origination: __expectString(output.origination),
    StartoverWindowSeconds: __expectInt32(output.startoverWindowSeconds),
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    TimeDelaySeconds: __expectInt32(output.timeDelaySeconds),
    Url: __expectString(output.url),
    Whitelist:
      output.whitelist != null ? deserializeAws_restJson1__listOf__string(output.whitelist, context) : undefined,
  } as any;
};

const deserializeAws_restJson1S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return {
    BucketName: __expectString(output.bucketName),
    ManifestKey: __expectString(output.manifestKey),
    RoleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1SpekeKeyProvider = (output: any, context: __SerdeContext): SpekeKeyProvider => {
  return {
    CertificateArn: __expectString(output.certificateArn),
    EncryptionContractConfiguration:
      output.encryptionContractConfiguration != null
        ? deserializeAws_restJson1EncryptionContractConfiguration(output.encryptionContractConfiguration, context)
        : undefined,
    ResourceId: __expectString(output.resourceId),
    RoleArn: __expectString(output.roleArn),
    SystemIds:
      output.systemIds != null ? deserializeAws_restJson1__listOf__string(output.systemIds, context) : undefined,
    Url: __expectString(output.url),
  } as any;
};

const deserializeAws_restJson1StreamSelection = (output: any, context: __SerdeContext): StreamSelection => {
  return {
    MaxVideoBitsPerSecond: __expectInt32(output.maxVideoBitsPerSecond),
    MinVideoBitsPerSecond: __expectInt32(output.minVideoBitsPerSecond),
    StreamOrder: __expectString(output.streamOrder),
  } as any;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
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
