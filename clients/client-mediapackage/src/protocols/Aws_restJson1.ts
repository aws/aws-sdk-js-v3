// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  body = JSON.stringify(
    take(input, {
      egressAccessLogs: [, (_) => se_EgressAccessLogs(_, context), `EgressAccessLogs`],
      ingressAccessLogs: [, (_) => se_IngressAccessLogs(_, context), `IngressAccessLogs`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [, , `Description`],
      id: [, , `Id`],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      endTime: [, , `EndTime`],
      id: [, , `Id`],
      originEndpointId: [, , `OriginEndpointId`],
      s3Destination: [, (_) => se_S3Destination(_, context), `S3Destination`],
      startTime: [, , `StartTime`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      authorization: [, (_) => se_Authorization(_, context), `Authorization`],
      channelId: [, , `ChannelId`],
      cmafPackage: [, (_) => se_CmafPackageCreateOrUpdateParameters(_, context), `CmafPackage`],
      dashPackage: [, (_) => se_DashPackage(_, context), `DashPackage`],
      description: [, , `Description`],
      hlsPackage: [, (_) => se_HlsPackage(_, context), `HlsPackage`],
      id: [, , `Id`],
      manifestName: [, , `ManifestName`],
      mssPackage: [, (_) => se_MssPackage(_, context), `MssPackage`],
      origination: [, , `Origination`],
      startoverWindowSeconds: [, , `StartoverWindowSeconds`],
      tags: [, (_) => _json(_), `Tags`],
      timeDelaySeconds: [, , `TimeDelaySeconds`],
      whitelist: [, (_) => _json(_), `Whitelist`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `Tags`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [, , `Description`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      authorization: [, (_) => se_Authorization(_, context), `Authorization`],
      cmafPackage: [, (_) => se_CmafPackageCreateOrUpdateParameters(_, context), `CmafPackage`],
      dashPackage: [, (_) => se_DashPackage(_, context), `DashPackage`],
      description: [, , `Description`],
      hlsPackage: [, (_) => se_HlsPackage(_, context), `HlsPackage`],
      manifestName: [, , `ManifestName`],
      mssPackage: [, (_) => se_MssPackage(_, context), `MssPackage`],
      origination: [, , `Origination`],
      startoverWindowSeconds: [, , `StartoverWindowSeconds`],
      timeDelaySeconds: [, , `TimeDelaySeconds`],
      whitelist: [, (_) => _json(_), `Whitelist`],
    })
  );
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, __expectString, `createdAt`],
    Description: [, __expectString, `description`],
    EgressAccessLogs: [, (_) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    HlsIngest: [, (_) => de_HlsIngest(_, context), `hlsIngest`],
    Id: [, __expectString, `id`],
    IngressAccessLogs: [, (_) => de_IngressAccessLogs(_, context), `ingressAccessLogs`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, __expectString, `createdAt`],
    Description: [, __expectString, `description`],
    EgressAccessLogs: [, (_) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    HlsIngest: [, (_) => de_HlsIngest(_, context), `hlsIngest`],
    Id: [, __expectString, `id`],
    IngressAccessLogs: [, (_) => de_IngressAccessLogs(_, context), `ingressAccessLogs`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    ChannelId: [, __expectString, `channelId`],
    CreatedAt: [, __expectString, `createdAt`],
    EndTime: [, __expectString, `endTime`],
    Id: [, __expectString, `id`],
    OriginEndpointId: [, __expectString, `originEndpointId`],
    S3Destination: [, (_) => de_S3Destination(_, context), `s3Destination`],
    StartTime: [, __expectString, `startTime`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    Authorization: [, (_) => de_Authorization(_, context), `authorization`],
    ChannelId: [, __expectString, `channelId`],
    CmafPackage: [, (_) => de_CmafPackage(_, context), `cmafPackage`],
    CreatedAt: [, __expectString, `createdAt`],
    DashPackage: [, (_) => de_DashPackage(_, context), `dashPackage`],
    Description: [, __expectString, `description`],
    HlsPackage: [, (_) => de_HlsPackage(_, context), `hlsPackage`],
    Id: [, __expectString, `id`],
    ManifestName: [, __expectString, `manifestName`],
    MssPackage: [, (_) => de_MssPackage(_, context), `mssPackage`],
    Origination: [, __expectString, `origination`],
    StartoverWindowSeconds: [, __expectInt32, `startoverWindowSeconds`],
    Tags: [, _json, `tags`],
    TimeDelaySeconds: [, __expectInt32, `timeDelaySeconds`],
    Url: [, __expectString, `url`],
    Whitelist: [, _json, `whitelist`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, __expectString, `createdAt`],
    Description: [, __expectString, `description`],
    EgressAccessLogs: [, (_) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    HlsIngest: [, (_) => de_HlsIngest(_, context), `hlsIngest`],
    Id: [, __expectString, `id`],
    IngressAccessLogs: [, (_) => de_IngressAccessLogs(_, context), `ingressAccessLogs`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    ChannelId: [, __expectString, `channelId`],
    CreatedAt: [, __expectString, `createdAt`],
    EndTime: [, __expectString, `endTime`],
    Id: [, __expectString, `id`],
    OriginEndpointId: [, __expectString, `originEndpointId`],
    S3Destination: [, (_) => de_S3Destination(_, context), `s3Destination`],
    StartTime: [, __expectString, `startTime`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    Authorization: [, (_) => de_Authorization(_, context), `authorization`],
    ChannelId: [, __expectString, `channelId`],
    CmafPackage: [, (_) => de_CmafPackage(_, context), `cmafPackage`],
    CreatedAt: [, __expectString, `createdAt`],
    DashPackage: [, (_) => de_DashPackage(_, context), `dashPackage`],
    Description: [, __expectString, `description`],
    HlsPackage: [, (_) => de_HlsPackage(_, context), `hlsPackage`],
    Id: [, __expectString, `id`],
    ManifestName: [, __expectString, `manifestName`],
    MssPackage: [, (_) => de_MssPackage(_, context), `mssPackage`],
    Origination: [, __expectString, `origination`],
    StartoverWindowSeconds: [, __expectInt32, `startoverWindowSeconds`],
    Tags: [, _json, `tags`],
    TimeDelaySeconds: [, __expectInt32, `timeDelaySeconds`],
    Url: [, __expectString, `url`],
    Whitelist: [, _json, `whitelist`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Channels: [, (_) => de___listOfChannel(_, context), `channels`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    HarvestJobs: [, (_) => de___listOfHarvestJob(_, context), `harvestJobs`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    OriginEndpoints: [, (_) => de___listOfOriginEndpoint(_, context), `originEndpoints`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
  return throwDefaultError({
    output,
    parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, __expectString, `createdAt`],
    Description: [, __expectString, `description`],
    EgressAccessLogs: [, (_) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    HlsIngest: [, (_) => de_HlsIngest(_, context), `hlsIngest`],
    Id: [, __expectString, `id`],
    IngressAccessLogs: [, (_) => de_IngressAccessLogs(_, context), `ingressAccessLogs`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, __expectString, `createdAt`],
    Description: [, __expectString, `description`],
    EgressAccessLogs: [, (_) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    HlsIngest: [, (_) => de_HlsIngest(_, context), `hlsIngest`],
    Id: [, __expectString, `id`],
    IngressAccessLogs: [, (_) => de_IngressAccessLogs(_, context), `ingressAccessLogs`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return throwDefaultError({
    output,
    parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, __expectString, `createdAt`],
    Description: [, __expectString, `description`],
    EgressAccessLogs: [, (_) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    HlsIngest: [, (_) => de_HlsIngest(_, context), `hlsIngest`],
    Id: [, __expectString, `id`],
    IngressAccessLogs: [, (_) => de_IngressAccessLogs(_, context), `ingressAccessLogs`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    Authorization: [, (_) => de_Authorization(_, context), `authorization`],
    ChannelId: [, __expectString, `channelId`],
    CmafPackage: [, (_) => de_CmafPackage(_, context), `cmafPackage`],
    CreatedAt: [, __expectString, `createdAt`],
    DashPackage: [, (_) => de_DashPackage(_, context), `dashPackage`],
    Description: [, __expectString, `description`],
    HlsPackage: [, (_) => de_HlsPackage(_, context), `hlsPackage`],
    Id: [, __expectString, `id`],
    ManifestName: [, __expectString, `manifestName`],
    MssPackage: [, (_) => de_MssPackage(_, context), `mssPackage`],
    Origination: [, __expectString, `origination`],
    StartoverWindowSeconds: [, __expectInt32, `startoverWindowSeconds`],
    Tags: [, _json, `tags`],
    TimeDelaySeconds: [, __expectInt32, `timeDelaySeconds`],
    Url: [, __expectString, `url`],
    Whitelist: [, _json, `whitelist`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new UnprocessableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOf__PeriodTriggersElement omitted.

// se___listOf__string omitted.

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

// se___mapOf__string omitted.

// se_AdTriggers omitted.

/**
 * serializeAws_restJson1Authorization
 */
const se_Authorization = (input: Authorization, context: __SerdeContext): any => {
  return take(input, {
    cdnIdentifierSecret: [, , `CdnIdentifierSecret`],
    secretsRoleArn: [, , `SecretsRoleArn`],
  });
};

/**
 * serializeAws_restJson1CmafEncryption
 */
const se_CmafEncryption = (input: CmafEncryption, context: __SerdeContext): any => {
  return take(input, {
    constantInitializationVector: [, , `ConstantInitializationVector`],
    encryptionMethod: [, , `EncryptionMethod`],
    keyRotationIntervalSeconds: [, , `KeyRotationIntervalSeconds`],
    spekeKeyProvider: [, (_) => se_SpekeKeyProvider(_, context), `SpekeKeyProvider`],
  });
};

/**
 * serializeAws_restJson1CmafPackageCreateOrUpdateParameters
 */
const se_CmafPackageCreateOrUpdateParameters = (
  input: CmafPackageCreateOrUpdateParameters,
  context: __SerdeContext
): any => {
  return take(input, {
    encryption: [, (_) => se_CmafEncryption(_, context), `Encryption`],
    hlsManifests: [, (_) => se___listOfHlsManifestCreateOrUpdateParameters(_, context), `HlsManifests`],
    segmentDurationSeconds: [, , `SegmentDurationSeconds`],
    segmentPrefix: [, , `SegmentPrefix`],
    streamSelection: [, (_) => se_StreamSelection(_, context), `StreamSelection`],
  });
};

/**
 * serializeAws_restJson1DashEncryption
 */
const se_DashEncryption = (input: DashEncryption, context: __SerdeContext): any => {
  return take(input, {
    keyRotationIntervalSeconds: [, , `KeyRotationIntervalSeconds`],
    spekeKeyProvider: [, (_) => se_SpekeKeyProvider(_, context), `SpekeKeyProvider`],
  });
};

/**
 * serializeAws_restJson1DashPackage
 */
const se_DashPackage = (input: DashPackage, context: __SerdeContext): any => {
  return take(input, {
    adTriggers: [, _json, `AdTriggers`],
    adsOnDeliveryRestrictions: [, , `AdsOnDeliveryRestrictions`],
    encryption: [, (_) => se_DashEncryption(_, context), `Encryption`],
    includeIframeOnlyStream: [, , `IncludeIframeOnlyStream`],
    manifestLayout: [, , `ManifestLayout`],
    manifestWindowSeconds: [, , `ManifestWindowSeconds`],
    minBufferTimeSeconds: [, , `MinBufferTimeSeconds`],
    minUpdatePeriodSeconds: [, , `MinUpdatePeriodSeconds`],
    periodTriggers: [, _json, `PeriodTriggers`],
    profile: [, , `Profile`],
    segmentDurationSeconds: [, , `SegmentDurationSeconds`],
    segmentTemplateFormat: [, , `SegmentTemplateFormat`],
    streamSelection: [, (_) => se_StreamSelection(_, context), `StreamSelection`],
    suggestedPresentationDelaySeconds: [, , `SuggestedPresentationDelaySeconds`],
    utcTiming: [, , `UtcTiming`],
    utcTimingUri: [, , `UtcTimingUri`],
  });
};

/**
 * serializeAws_restJson1EgressAccessLogs
 */
const se_EgressAccessLogs = (input: EgressAccessLogs, context: __SerdeContext): any => {
  return take(input, {
    logGroupName: [, , `LogGroupName`],
  });
};

/**
 * serializeAws_restJson1EncryptionContractConfiguration
 */
const se_EncryptionContractConfiguration = (input: EncryptionContractConfiguration, context: __SerdeContext): any => {
  return take(input, {
    presetSpeke20Audio: [, , `PresetSpeke20Audio`],
    presetSpeke20Video: [, , `PresetSpeke20Video`],
  });
};

/**
 * serializeAws_restJson1HlsEncryption
 */
const se_HlsEncryption = (input: HlsEncryption, context: __SerdeContext): any => {
  return take(input, {
    constantInitializationVector: [, , `ConstantInitializationVector`],
    encryptionMethod: [, , `EncryptionMethod`],
    keyRotationIntervalSeconds: [, , `KeyRotationIntervalSeconds`],
    repeatExtXKey: [, , `RepeatExtXKey`],
    spekeKeyProvider: [, (_) => se_SpekeKeyProvider(_, context), `SpekeKeyProvider`],
  });
};

/**
 * serializeAws_restJson1HlsManifestCreateOrUpdateParameters
 */
const se_HlsManifestCreateOrUpdateParameters = (
  input: HlsManifestCreateOrUpdateParameters,
  context: __SerdeContext
): any => {
  return take(input, {
    adMarkers: [, , `AdMarkers`],
    adTriggers: [, _json, `AdTriggers`],
    adsOnDeliveryRestrictions: [, , `AdsOnDeliveryRestrictions`],
    id: [, , `Id`],
    includeIframeOnlyStream: [, , `IncludeIframeOnlyStream`],
    manifestName: [, , `ManifestName`],
    playlistType: [, , `PlaylistType`],
    playlistWindowSeconds: [, , `PlaylistWindowSeconds`],
    programDateTimeIntervalSeconds: [, , `ProgramDateTimeIntervalSeconds`],
  });
};

/**
 * serializeAws_restJson1HlsPackage
 */
const se_HlsPackage = (input: HlsPackage, context: __SerdeContext): any => {
  return take(input, {
    adMarkers: [, , `AdMarkers`],
    adTriggers: [, _json, `AdTriggers`],
    adsOnDeliveryRestrictions: [, , `AdsOnDeliveryRestrictions`],
    encryption: [, (_) => se_HlsEncryption(_, context), `Encryption`],
    includeDvbSubtitles: [, , `IncludeDvbSubtitles`],
    includeIframeOnlyStream: [, , `IncludeIframeOnlyStream`],
    playlistType: [, , `PlaylistType`],
    playlistWindowSeconds: [, , `PlaylistWindowSeconds`],
    programDateTimeIntervalSeconds: [, , `ProgramDateTimeIntervalSeconds`],
    segmentDurationSeconds: [, , `SegmentDurationSeconds`],
    streamSelection: [, (_) => se_StreamSelection(_, context), `StreamSelection`],
    useAudioRenditionGroup: [, , `UseAudioRenditionGroup`],
  });
};

/**
 * serializeAws_restJson1IngressAccessLogs
 */
const se_IngressAccessLogs = (input: IngressAccessLogs, context: __SerdeContext): any => {
  return take(input, {
    logGroupName: [, , `LogGroupName`],
  });
};

/**
 * serializeAws_restJson1MssEncryption
 */
const se_MssEncryption = (input: MssEncryption, context: __SerdeContext): any => {
  return take(input, {
    spekeKeyProvider: [, (_) => se_SpekeKeyProvider(_, context), `SpekeKeyProvider`],
  });
};

/**
 * serializeAws_restJson1MssPackage
 */
const se_MssPackage = (input: MssPackage, context: __SerdeContext): any => {
  return take(input, {
    encryption: [, (_) => se_MssEncryption(_, context), `Encryption`],
    manifestWindowSeconds: [, , `ManifestWindowSeconds`],
    segmentDurationSeconds: [, , `SegmentDurationSeconds`],
    streamSelection: [, (_) => se_StreamSelection(_, context), `StreamSelection`],
  });
};

/**
 * serializeAws_restJson1S3Destination
 */
const se_S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return take(input, {
    bucketName: [, , `BucketName`],
    manifestKey: [, , `ManifestKey`],
    roleArn: [, , `RoleArn`],
  });
};

/**
 * serializeAws_restJson1SpekeKeyProvider
 */
const se_SpekeKeyProvider = (input: SpekeKeyProvider, context: __SerdeContext): any => {
  return take(input, {
    certificateArn: [, , `CertificateArn`],
    encryptionContractConfiguration: [
      ,
      (_) => se_EncryptionContractConfiguration(_, context),
      `EncryptionContractConfiguration`,
    ],
    resourceId: [, , `ResourceId`],
    roleArn: [, , `RoleArn`],
    systemIds: [, _json, `SystemIds`],
    url: [, , `Url`],
  });
};

/**
 * serializeAws_restJson1StreamSelection
 */
const se_StreamSelection = (input: StreamSelection, context: __SerdeContext): any => {
  return take(input, {
    maxVideoBitsPerSecond: [, , `MaxVideoBitsPerSecond`],
    minVideoBitsPerSecond: [, , `MinVideoBitsPerSecond`],
    streamOrder: [, , `StreamOrder`],
  });
};

// se_Tags omitted.

// de___listOf__PeriodTriggersElement omitted.

// de___listOf__string omitted.

/**
 * deserializeAws_restJson1__listOfChannel
 */
const de___listOfChannel = (output: any, context: __SerdeContext): Channel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_OriginEndpoint(entry, context);
    });
  return retVal;
};

// de___mapOf__string omitted.

// de_AdTriggers omitted.

/**
 * deserializeAws_restJson1Authorization
 */
const de_Authorization = (output: any, context: __SerdeContext): Authorization => {
  return take(output, {
    CdnIdentifierSecret: [, __expectString, `cdnIdentifierSecret`],
    SecretsRoleArn: [, __expectString, `secretsRoleArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, __expectString, `createdAt`],
    Description: [, __expectString, `description`],
    EgressAccessLogs: [, (_: any) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    HlsIngest: [, (_: any) => de_HlsIngest(_, context), `hlsIngest`],
    Id: [, __expectString, `id`],
    IngressAccessLogs: [, (_: any) => de_IngressAccessLogs(_, context), `ingressAccessLogs`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1CmafEncryption
 */
const de_CmafEncryption = (output: any, context: __SerdeContext): CmafEncryption => {
  return take(output, {
    ConstantInitializationVector: [, __expectString, `constantInitializationVector`],
    EncryptionMethod: [, __expectString, `encryptionMethod`],
    KeyRotationIntervalSeconds: [, __expectInt32, `keyRotationIntervalSeconds`],
    SpekeKeyProvider: [, (_: any) => de_SpekeKeyProvider(_, context), `spekeKeyProvider`],
  }) as any;
};

/**
 * deserializeAws_restJson1CmafPackage
 */
const de_CmafPackage = (output: any, context: __SerdeContext): CmafPackage => {
  return take(output, {
    Encryption: [, (_: any) => de_CmafEncryption(_, context), `encryption`],
    HlsManifests: [, (_: any) => de___listOfHlsManifest(_, context), `hlsManifests`],
    SegmentDurationSeconds: [, __expectInt32, `segmentDurationSeconds`],
    SegmentPrefix: [, __expectString, `segmentPrefix`],
    StreamSelection: [, (_: any) => de_StreamSelection(_, context), `streamSelection`],
  }) as any;
};

/**
 * deserializeAws_restJson1DashEncryption
 */
const de_DashEncryption = (output: any, context: __SerdeContext): DashEncryption => {
  return take(output, {
    KeyRotationIntervalSeconds: [, __expectInt32, `keyRotationIntervalSeconds`],
    SpekeKeyProvider: [, (_: any) => de_SpekeKeyProvider(_, context), `spekeKeyProvider`],
  }) as any;
};

/**
 * deserializeAws_restJson1DashPackage
 */
const de_DashPackage = (output: any, context: __SerdeContext): DashPackage => {
  return take(output, {
    AdTriggers: [, _json, `adTriggers`],
    AdsOnDeliveryRestrictions: [, __expectString, `adsOnDeliveryRestrictions`],
    Encryption: [, (_: any) => de_DashEncryption(_, context), `encryption`],
    IncludeIframeOnlyStream: [, __expectBoolean, `includeIframeOnlyStream`],
    ManifestLayout: [, __expectString, `manifestLayout`],
    ManifestWindowSeconds: [, __expectInt32, `manifestWindowSeconds`],
    MinBufferTimeSeconds: [, __expectInt32, `minBufferTimeSeconds`],
    MinUpdatePeriodSeconds: [, __expectInt32, `minUpdatePeriodSeconds`],
    PeriodTriggers: [, _json, `periodTriggers`],
    Profile: [, __expectString, `profile`],
    SegmentDurationSeconds: [, __expectInt32, `segmentDurationSeconds`],
    SegmentTemplateFormat: [, __expectString, `segmentTemplateFormat`],
    StreamSelection: [, (_: any) => de_StreamSelection(_, context), `streamSelection`],
    SuggestedPresentationDelaySeconds: [, __expectInt32, `suggestedPresentationDelaySeconds`],
    UtcTiming: [, __expectString, `utcTiming`],
    UtcTimingUri: [, __expectString, `utcTimingUri`],
  }) as any;
};

/**
 * deserializeAws_restJson1EgressAccessLogs
 */
const de_EgressAccessLogs = (output: any, context: __SerdeContext): EgressAccessLogs => {
  return take(output, {
    LogGroupName: [, __expectString, `logGroupName`],
  }) as any;
};

/**
 * deserializeAws_restJson1EncryptionContractConfiguration
 */
const de_EncryptionContractConfiguration = (output: any, context: __SerdeContext): EncryptionContractConfiguration => {
  return take(output, {
    PresetSpeke20Audio: [, __expectString, `presetSpeke20Audio`],
    PresetSpeke20Video: [, __expectString, `presetSpeke20Video`],
  }) as any;
};

/**
 * deserializeAws_restJson1HarvestJob
 */
const de_HarvestJob = (output: any, context: __SerdeContext): HarvestJob => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    ChannelId: [, __expectString, `channelId`],
    CreatedAt: [, __expectString, `createdAt`],
    EndTime: [, __expectString, `endTime`],
    Id: [, __expectString, `id`],
    OriginEndpointId: [, __expectString, `originEndpointId`],
    S3Destination: [, (_: any) => de_S3Destination(_, context), `s3Destination`],
    StartTime: [, __expectString, `startTime`],
    Status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsEncryption
 */
const de_HlsEncryption = (output: any, context: __SerdeContext): HlsEncryption => {
  return take(output, {
    ConstantInitializationVector: [, __expectString, `constantInitializationVector`],
    EncryptionMethod: [, __expectString, `encryptionMethod`],
    KeyRotationIntervalSeconds: [, __expectInt32, `keyRotationIntervalSeconds`],
    RepeatExtXKey: [, __expectBoolean, `repeatExtXKey`],
    SpekeKeyProvider: [, (_: any) => de_SpekeKeyProvider(_, context), `spekeKeyProvider`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsIngest
 */
const de_HlsIngest = (output: any, context: __SerdeContext): HlsIngest => {
  return take(output, {
    IngestEndpoints: [, (_: any) => de___listOfIngestEndpoint(_, context), `ingestEndpoints`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsManifest
 */
const de_HlsManifest = (output: any, context: __SerdeContext): HlsManifest => {
  return take(output, {
    AdMarkers: [, __expectString, `adMarkers`],
    AdTriggers: [, _json, `adTriggers`],
    AdsOnDeliveryRestrictions: [, __expectString, `adsOnDeliveryRestrictions`],
    Id: [, __expectString, `id`],
    IncludeIframeOnlyStream: [, __expectBoolean, `includeIframeOnlyStream`],
    ManifestName: [, __expectString, `manifestName`],
    PlaylistType: [, __expectString, `playlistType`],
    PlaylistWindowSeconds: [, __expectInt32, `playlistWindowSeconds`],
    ProgramDateTimeIntervalSeconds: [, __expectInt32, `programDateTimeIntervalSeconds`],
    Url: [, __expectString, `url`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsPackage
 */
const de_HlsPackage = (output: any, context: __SerdeContext): HlsPackage => {
  return take(output, {
    AdMarkers: [, __expectString, `adMarkers`],
    AdTriggers: [, _json, `adTriggers`],
    AdsOnDeliveryRestrictions: [, __expectString, `adsOnDeliveryRestrictions`],
    Encryption: [, (_: any) => de_HlsEncryption(_, context), `encryption`],
    IncludeDvbSubtitles: [, __expectBoolean, `includeDvbSubtitles`],
    IncludeIframeOnlyStream: [, __expectBoolean, `includeIframeOnlyStream`],
    PlaylistType: [, __expectString, `playlistType`],
    PlaylistWindowSeconds: [, __expectInt32, `playlistWindowSeconds`],
    ProgramDateTimeIntervalSeconds: [, __expectInt32, `programDateTimeIntervalSeconds`],
    SegmentDurationSeconds: [, __expectInt32, `segmentDurationSeconds`],
    StreamSelection: [, (_: any) => de_StreamSelection(_, context), `streamSelection`],
    UseAudioRenditionGroup: [, __expectBoolean, `useAudioRenditionGroup`],
  }) as any;
};

/**
 * deserializeAws_restJson1IngestEndpoint
 */
const de_IngestEndpoint = (output: any, context: __SerdeContext): IngestEndpoint => {
  return take(output, {
    Id: [, __expectString, `id`],
    Password: [, __expectString, `password`],
    Url: [, __expectString, `url`],
    Username: [, __expectString, `username`],
  }) as any;
};

/**
 * deserializeAws_restJson1IngressAccessLogs
 */
const de_IngressAccessLogs = (output: any, context: __SerdeContext): IngressAccessLogs => {
  return take(output, {
    LogGroupName: [, __expectString, `logGroupName`],
  }) as any;
};

/**
 * deserializeAws_restJson1MssEncryption
 */
const de_MssEncryption = (output: any, context: __SerdeContext): MssEncryption => {
  return take(output, {
    SpekeKeyProvider: [, (_: any) => de_SpekeKeyProvider(_, context), `spekeKeyProvider`],
  }) as any;
};

/**
 * deserializeAws_restJson1MssPackage
 */
const de_MssPackage = (output: any, context: __SerdeContext): MssPackage => {
  return take(output, {
    Encryption: [, (_: any) => de_MssEncryption(_, context), `encryption`],
    ManifestWindowSeconds: [, __expectInt32, `manifestWindowSeconds`],
    SegmentDurationSeconds: [, __expectInt32, `segmentDurationSeconds`],
    StreamSelection: [, (_: any) => de_StreamSelection(_, context), `streamSelection`],
  }) as any;
};

/**
 * deserializeAws_restJson1OriginEndpoint
 */
const de_OriginEndpoint = (output: any, context: __SerdeContext): OriginEndpoint => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    Authorization: [, (_: any) => de_Authorization(_, context), `authorization`],
    ChannelId: [, __expectString, `channelId`],
    CmafPackage: [, (_: any) => de_CmafPackage(_, context), `cmafPackage`],
    CreatedAt: [, __expectString, `createdAt`],
    DashPackage: [, (_: any) => de_DashPackage(_, context), `dashPackage`],
    Description: [, __expectString, `description`],
    HlsPackage: [, (_: any) => de_HlsPackage(_, context), `hlsPackage`],
    Id: [, __expectString, `id`],
    ManifestName: [, __expectString, `manifestName`],
    MssPackage: [, (_: any) => de_MssPackage(_, context), `mssPackage`],
    Origination: [, __expectString, `origination`],
    StartoverWindowSeconds: [, __expectInt32, `startoverWindowSeconds`],
    Tags: [, _json, `tags`],
    TimeDelaySeconds: [, __expectInt32, `timeDelaySeconds`],
    Url: [, __expectString, `url`],
    Whitelist: [, _json, `whitelist`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3Destination
 */
const de_S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return take(output, {
    BucketName: [, __expectString, `bucketName`],
    ManifestKey: [, __expectString, `manifestKey`],
    RoleArn: [, __expectString, `roleArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1SpekeKeyProvider
 */
const de_SpekeKeyProvider = (output: any, context: __SerdeContext): SpekeKeyProvider => {
  return take(output, {
    CertificateArn: [, __expectString, `certificateArn`],
    EncryptionContractConfiguration: [
      ,
      (_: any) => de_EncryptionContractConfiguration(_, context),
      `encryptionContractConfiguration`,
    ],
    ResourceId: [, __expectString, `resourceId`],
    RoleArn: [, __expectString, `roleArn`],
    SystemIds: [, _json, `systemIds`],
    Url: [, __expectString, `url`],
  }) as any;
};

/**
 * deserializeAws_restJson1StreamSelection
 */
const de_StreamSelection = (output: any, context: __SerdeContext): StreamSelection => {
  return take(output, {
    MaxVideoBitsPerSecond: [, __expectInt32, `maxVideoBitsPerSecond`],
    MinVideoBitsPerSecond: [, __expectInt32, `minVideoBitsPerSecond`],
    StreamOrder: [, __expectString, `streamOrder`],
  }) as any;
};

// de_Tags omitted.

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
