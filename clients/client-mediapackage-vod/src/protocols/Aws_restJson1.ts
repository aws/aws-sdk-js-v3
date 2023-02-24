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
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "../commands/CreateAssetCommand";
import {
  CreatePackagingConfigurationCommandInput,
  CreatePackagingConfigurationCommandOutput,
} from "../commands/CreatePackagingConfigurationCommand";
import {
  CreatePackagingGroupCommandInput,
  CreatePackagingGroupCommandOutput,
} from "../commands/CreatePackagingGroupCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "../commands/DeleteAssetCommand";
import {
  DeletePackagingConfigurationCommandInput,
  DeletePackagingConfigurationCommandOutput,
} from "../commands/DeletePackagingConfigurationCommand";
import {
  DeletePackagingGroupCommandInput,
  DeletePackagingGroupCommandOutput,
} from "../commands/DeletePackagingGroupCommand";
import { DescribeAssetCommandInput, DescribeAssetCommandOutput } from "../commands/DescribeAssetCommand";
import {
  DescribePackagingConfigurationCommandInput,
  DescribePackagingConfigurationCommandOutput,
} from "../commands/DescribePackagingConfigurationCommand";
import {
  DescribePackagingGroupCommandInput,
  DescribePackagingGroupCommandOutput,
} from "../commands/DescribePackagingGroupCommand";
import { ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import {
  ListPackagingConfigurationsCommandInput,
  ListPackagingConfigurationsCommandOutput,
} from "../commands/ListPackagingConfigurationsCommand";
import {
  ListPackagingGroupsCommandInput,
  ListPackagingGroupsCommandOutput,
} from "../commands/ListPackagingGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdatePackagingGroupCommandInput,
  UpdatePackagingGroupCommandOutput,
} from "../commands/UpdatePackagingGroupCommand";
import { MediaPackageVodServiceException as __BaseException } from "../models/MediaPackageVodServiceException";
import {
  __PeriodTriggersElement,
  AssetShallow,
  Authorization,
  CmafEncryption,
  CmafPackage,
  DashEncryption,
  DashManifest,
  DashPackage,
  EgressAccessLogs,
  EgressEndpoint,
  EncryptionContractConfiguration,
  ForbiddenException,
  HlsEncryption,
  HlsManifest,
  HlsPackage,
  InternalServerErrorException,
  MssEncryption,
  MssManifest,
  MssPackage,
  NotFoundException,
  PackagingConfiguration,
  PackagingGroup,
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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packaging_groups/{Id}/configure_logs";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.EgressAccessLogs != null && {
      egressAccessLogs: serializeAws_restJson1EgressAccessLogs(input.EgressAccessLogs, context),
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

export const serializeAws_restJson1CreateAssetCommand = async (
  input: CreateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets";
  let body: any;
  body = JSON.stringify({
    ...(input.Id != null && { id: input.Id }),
    ...(input.PackagingGroupId != null && { packagingGroupId: input.PackagingGroupId }),
    ...(input.ResourceId != null && { resourceId: input.ResourceId }),
    ...(input.SourceArn != null && { sourceArn: input.SourceArn }),
    ...(input.SourceRoleArn != null && { sourceRoleArn: input.SourceRoleArn }),
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

export const serializeAws_restJson1CreatePackagingConfigurationCommand = async (
  input: CreatePackagingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packaging_configurations";
  let body: any;
  body = JSON.stringify({
    ...(input.CmafPackage != null && { cmafPackage: serializeAws_restJson1CmafPackage(input.CmafPackage, context) }),
    ...(input.DashPackage != null && { dashPackage: serializeAws_restJson1DashPackage(input.DashPackage, context) }),
    ...(input.HlsPackage != null && { hlsPackage: serializeAws_restJson1HlsPackage(input.HlsPackage, context) }),
    ...(input.Id != null && { id: input.Id }),
    ...(input.MssPackage != null && { mssPackage: serializeAws_restJson1MssPackage(input.MssPackage, context) }),
    ...(input.PackagingGroupId != null && { packagingGroupId: input.PackagingGroupId }),
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

export const serializeAws_restJson1CreatePackagingGroupCommand = async (
  input: CreatePackagingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packaging_groups";
  let body: any;
  body = JSON.stringify({
    ...(input.Authorization != null && {
      authorization: serializeAws_restJson1Authorization(input.Authorization, context),
    }),
    ...(input.EgressAccessLogs != null && {
      egressAccessLogs: serializeAws_restJson1EgressAccessLogs(input.EgressAccessLogs, context),
    }),
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

export const serializeAws_restJson1DeleteAssetCommand = async (
  input: DeleteAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{Id}";
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

export const serializeAws_restJson1DeletePackagingConfigurationCommand = async (
  input: DeletePackagingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packaging_configurations/{Id}";
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

export const serializeAws_restJson1DeletePackagingGroupCommand = async (
  input: DeletePackagingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packaging_groups/{Id}";
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

export const serializeAws_restJson1DescribeAssetCommand = async (
  input: DescribeAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{Id}";
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

export const serializeAws_restJson1DescribePackagingConfigurationCommand = async (
  input: DescribePackagingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packaging_configurations/{Id}";
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

export const serializeAws_restJson1DescribePackagingGroupCommand = async (
  input: DescribePackagingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packaging_groups/{Id}";
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

export const serializeAws_restJson1ListAssetsCommand = async (
  input: ListAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    packagingGroupId: [, input.PackagingGroupId!],
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

export const serializeAws_restJson1ListPackagingConfigurationsCommand = async (
  input: ListPackagingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packaging_configurations";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    packagingGroupId: [, input.PackagingGroupId!],
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

export const serializeAws_restJson1ListPackagingGroupsCommand = async (
  input: ListPackagingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packaging_groups";
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

export const serializeAws_restJson1UpdatePackagingGroupCommand = async (
  input: UpdatePackagingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packaging_groups/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Authorization != null && {
      authorization: serializeAws_restJson1Authorization(input.Authorization, context),
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
  if (data.authorization != null) {
    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
  }
  if (data.domainName != null) {
    contents.DomainName = __expectString(data.domainName);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
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
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1CreateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAssetCommandError(output, context);
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
  if (data.egressEndpoints != null) {
    contents.EgressEndpoints = deserializeAws_restJson1__listOfEgressEndpoint(data.egressEndpoints, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.packagingGroupId != null) {
    contents.PackagingGroupId = __expectString(data.packagingGroupId);
  }
  if (data.resourceId != null) {
    contents.ResourceId = __expectString(data.resourceId);
  }
  if (data.sourceArn != null) {
    contents.SourceArn = __expectString(data.sourceArn);
  }
  if (data.sourceRoleArn != null) {
    contents.SourceRoleArn = __expectString(data.sourceRoleArn);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1CreatePackagingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePackagingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.cmafPackage != null) {
    contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
  }
  if (data.dashPackage != null) {
    contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
  }
  if (data.hlsPackage != null) {
    contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.mssPackage != null) {
    contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
  }
  if (data.packagingGroupId != null) {
    contents.PackagingGroupId = __expectString(data.packagingGroupId);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreatePackagingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1CreatePackagingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePackagingGroupCommandError(output, context);
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
  if (data.domainName != null) {
    contents.DomainName = __expectString(data.domainName);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreatePackagingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1DeletePackagingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingConfigurationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePackagingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePackagingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1DeletePackagingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePackagingGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePackagingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1DescribeAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAssetCommandError(output, context);
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
  if (data.egressEndpoints != null) {
    contents.EgressEndpoints = deserializeAws_restJson1__listOfEgressEndpoint(data.egressEndpoints, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.packagingGroupId != null) {
    contents.PackagingGroupId = __expectString(data.packagingGroupId);
  }
  if (data.resourceId != null) {
    contents.ResourceId = __expectString(data.resourceId);
  }
  if (data.sourceArn != null) {
    contents.SourceArn = __expectString(data.sourceArn);
  }
  if (data.sourceRoleArn != null) {
    contents.SourceRoleArn = __expectString(data.sourceRoleArn);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1DescribePackagingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePackagingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.cmafPackage != null) {
    contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
  }
  if (data.dashPackage != null) {
    contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
  }
  if (data.hlsPackage != null) {
    contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.mssPackage != null) {
    contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
  }
  if (data.packagingGroupId != null) {
    contents.PackagingGroupId = __expectString(data.packagingGroupId);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribePackagingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1DescribePackagingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePackagingGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.approximateAssetCount != null) {
    contents.ApproximateAssetCount = __expectInt32(data.approximateAssetCount);
  }
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authorization != null) {
    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
  }
  if (data.domainName != null) {
    contents.DomainName = __expectString(data.domainName);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribePackagingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1ListAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assets != null) {
    contents.Assets = deserializeAws_restJson1__listOfAssetShallow(data.assets, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1ListPackagingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPackagingConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.packagingConfigurations != null) {
    contents.PackagingConfigurations = deserializeAws_restJson1__listOfPackagingConfiguration(
      data.packagingConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListPackagingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1ListPackagingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPackagingGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.packagingGroups != null) {
    contents.PackagingGroups = deserializeAws_restJson1__listOfPackagingGroup(data.packagingGroups, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPackagingGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

export const deserializeAws_restJson1UpdatePackagingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackagingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePackagingGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.approximateAssetCount != null) {
    contents.ApproximateAssetCount = __expectInt32(data.approximateAssetCount);
  }
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authorization != null) {
    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
  }
  if (data.domainName != null) {
    contents.DomainName = __expectString(data.domainName);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdatePackagingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackagingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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

const serializeAws_restJson1__listOfDashManifest = (input: DashManifest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DashManifest(entry, context);
    });
};

const serializeAws_restJson1__listOfHlsManifest = (input: HlsManifest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1HlsManifest(entry, context);
    });
};

const serializeAws_restJson1__listOfMssManifest = (input: MssManifest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MssManifest(entry, context);
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
    ...(input.SpekeKeyProvider != null && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }),
  };
};

const serializeAws_restJson1CmafPackage = (input: CmafPackage, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { encryption: serializeAws_restJson1CmafEncryption(input.Encryption, context) }),
    ...(input.HlsManifests != null && {
      hlsManifests: serializeAws_restJson1__listOfHlsManifest(input.HlsManifests, context),
    }),
    ...(input.IncludeEncoderConfigurationInSegments != null && {
      includeEncoderConfigurationInSegments: input.IncludeEncoderConfigurationInSegments,
    }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
  };
};

const serializeAws_restJson1DashEncryption = (input: DashEncryption, context: __SerdeContext): any => {
  return {
    ...(input.SpekeKeyProvider != null && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }),
  };
};

const serializeAws_restJson1DashManifest = (input: DashManifest, context: __SerdeContext): any => {
  return {
    ...(input.ManifestLayout != null && { manifestLayout: input.ManifestLayout }),
    ...(input.ManifestName != null && { manifestName: input.ManifestName }),
    ...(input.MinBufferTimeSeconds != null && { minBufferTimeSeconds: input.MinBufferTimeSeconds }),
    ...(input.Profile != null && { profile: input.Profile }),
    ...(input.ScteMarkersSource != null && { scteMarkersSource: input.ScteMarkersSource }),
    ...(input.StreamSelection != null && {
      streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
    }),
  };
};

const serializeAws_restJson1DashPackage = (input: DashPackage, context: __SerdeContext): any => {
  return {
    ...(input.DashManifests != null && {
      dashManifests: serializeAws_restJson1__listOfDashManifest(input.DashManifests, context),
    }),
    ...(input.Encryption != null && { encryption: serializeAws_restJson1DashEncryption(input.Encryption, context) }),
    ...(input.IncludeEncoderConfigurationInSegments != null && {
      includeEncoderConfigurationInSegments: input.IncludeEncoderConfigurationInSegments,
    }),
    ...(input.IncludeIframeOnlyStream != null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
    ...(input.PeriodTriggers != null && {
      periodTriggers: serializeAws_restJson1__listOf__PeriodTriggersElement(input.PeriodTriggers, context),
    }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.SegmentTemplateFormat != null && { segmentTemplateFormat: input.SegmentTemplateFormat }),
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
    ...(input.SpekeKeyProvider != null && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }),
  };
};

const serializeAws_restJson1HlsManifest = (input: HlsManifest, context: __SerdeContext): any => {
  return {
    ...(input.AdMarkers != null && { adMarkers: input.AdMarkers }),
    ...(input.IncludeIframeOnlyStream != null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
    ...(input.ManifestName != null && { manifestName: input.ManifestName }),
    ...(input.ProgramDateTimeIntervalSeconds != null && {
      programDateTimeIntervalSeconds: input.ProgramDateTimeIntervalSeconds,
    }),
    ...(input.RepeatExtXKey != null && { repeatExtXKey: input.RepeatExtXKey }),
    ...(input.StreamSelection != null && {
      streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
    }),
  };
};

const serializeAws_restJson1HlsPackage = (input: HlsPackage, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { encryption: serializeAws_restJson1HlsEncryption(input.Encryption, context) }),
    ...(input.HlsManifests != null && {
      hlsManifests: serializeAws_restJson1__listOfHlsManifest(input.HlsManifests, context),
    }),
    ...(input.IncludeDvbSubtitles != null && { includeDvbSubtitles: input.IncludeDvbSubtitles }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.UseAudioRenditionGroup != null && { useAudioRenditionGroup: input.UseAudioRenditionGroup }),
  };
};

const serializeAws_restJson1MssEncryption = (input: MssEncryption, context: __SerdeContext): any => {
  return {
    ...(input.SpekeKeyProvider != null && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }),
  };
};

const serializeAws_restJson1MssManifest = (input: MssManifest, context: __SerdeContext): any => {
  return {
    ...(input.ManifestName != null && { manifestName: input.ManifestName }),
    ...(input.StreamSelection != null && {
      streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
    }),
  };
};

const serializeAws_restJson1MssPackage = (input: MssPackage, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { encryption: serializeAws_restJson1MssEncryption(input.Encryption, context) }),
    ...(input.MssManifests != null && {
      mssManifests: serializeAws_restJson1__listOfMssManifest(input.MssManifests, context),
    }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
  };
};

const serializeAws_restJson1SpekeKeyProvider = (input: SpekeKeyProvider, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionContractConfiguration != null && {
      encryptionContractConfiguration: serializeAws_restJson1EncryptionContractConfiguration(
        input.EncryptionContractConfiguration,
        context
      ),
    }),
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

const deserializeAws_restJson1__listOfAssetShallow = (output: any, context: __SerdeContext): AssetShallow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetShallow(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfDashManifest = (output: any, context: __SerdeContext): DashManifest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DashManifest(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfEgressEndpoint = (output: any, context: __SerdeContext): EgressEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EgressEndpoint(entry, context);
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

const deserializeAws_restJson1__listOfMssManifest = (output: any, context: __SerdeContext): MssManifest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MssManifest(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfPackagingConfiguration = (
  output: any,
  context: __SerdeContext
): PackagingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackagingConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfPackagingGroup = (output: any, context: __SerdeContext): PackagingGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackagingGroup(entry, context);
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

const deserializeAws_restJson1AssetShallow = (output: any, context: __SerdeContext): AssetShallow => {
  return {
    Arn: __expectString(output.arn),
    CreatedAt: __expectString(output.createdAt),
    Id: __expectString(output.id),
    PackagingGroupId: __expectString(output.packagingGroupId),
    ResourceId: __expectString(output.resourceId),
    SourceArn: __expectString(output.sourceArn),
    SourceRoleArn: __expectString(output.sourceRoleArn),
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Authorization = (output: any, context: __SerdeContext): Authorization => {
  return {
    CdnIdentifierSecret: __expectString(output.cdnIdentifierSecret),
    SecretsRoleArn: __expectString(output.secretsRoleArn),
  } as any;
};

const deserializeAws_restJson1CmafEncryption = (output: any, context: __SerdeContext): CmafEncryption => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
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
    IncludeEncoderConfigurationInSegments: __expectBoolean(output.includeEncoderConfigurationInSegments),
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
  } as any;
};

const deserializeAws_restJson1DashEncryption = (output: any, context: __SerdeContext): DashEncryption => {
  return {
    SpekeKeyProvider:
      output.spekeKeyProvider != null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashManifest = (output: any, context: __SerdeContext): DashManifest => {
  return {
    ManifestLayout: __expectString(output.manifestLayout),
    ManifestName: __expectString(output.manifestName),
    MinBufferTimeSeconds: __expectInt32(output.minBufferTimeSeconds),
    Profile: __expectString(output.profile),
    ScteMarkersSource: __expectString(output.scteMarkersSource),
    StreamSelection:
      output.streamSelection != null
        ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashPackage = (output: any, context: __SerdeContext): DashPackage => {
  return {
    DashManifests:
      output.dashManifests != null
        ? deserializeAws_restJson1__listOfDashManifest(output.dashManifests, context)
        : undefined,
    Encryption:
      output.encryption != null ? deserializeAws_restJson1DashEncryption(output.encryption, context) : undefined,
    IncludeEncoderConfigurationInSegments: __expectBoolean(output.includeEncoderConfigurationInSegments),
    IncludeIframeOnlyStream: __expectBoolean(output.includeIframeOnlyStream),
    PeriodTriggers:
      output.periodTriggers != null
        ? deserializeAws_restJson1__listOf__PeriodTriggersElement(output.periodTriggers, context)
        : undefined,
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    SegmentTemplateFormat: __expectString(output.segmentTemplateFormat),
  } as any;
};

const deserializeAws_restJson1EgressAccessLogs = (output: any, context: __SerdeContext): EgressAccessLogs => {
  return {
    LogGroupName: __expectString(output.logGroupName),
  } as any;
};

const deserializeAws_restJson1EgressEndpoint = (output: any, context: __SerdeContext): EgressEndpoint => {
  return {
    PackagingConfigurationId: __expectString(output.packagingConfigurationId),
    Status: __expectString(output.status),
    Url: __expectString(output.url),
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

const deserializeAws_restJson1HlsEncryption = (output: any, context: __SerdeContext): HlsEncryption => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    EncryptionMethod: __expectString(output.encryptionMethod),
    SpekeKeyProvider:
      output.spekeKeyProvider != null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HlsManifest = (output: any, context: __SerdeContext): HlsManifest => {
  return {
    AdMarkers: __expectString(output.adMarkers),
    IncludeIframeOnlyStream: __expectBoolean(output.includeIframeOnlyStream),
    ManifestName: __expectString(output.manifestName),
    ProgramDateTimeIntervalSeconds: __expectInt32(output.programDateTimeIntervalSeconds),
    RepeatExtXKey: __expectBoolean(output.repeatExtXKey),
    StreamSelection:
      output.streamSelection != null
        ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HlsPackage = (output: any, context: __SerdeContext): HlsPackage => {
  return {
    Encryption:
      output.encryption != null ? deserializeAws_restJson1HlsEncryption(output.encryption, context) : undefined,
    HlsManifests:
      output.hlsManifests != null
        ? deserializeAws_restJson1__listOfHlsManifest(output.hlsManifests, context)
        : undefined,
    IncludeDvbSubtitles: __expectBoolean(output.includeDvbSubtitles),
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    UseAudioRenditionGroup: __expectBoolean(output.useAudioRenditionGroup),
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

const deserializeAws_restJson1MssManifest = (output: any, context: __SerdeContext): MssManifest => {
  return {
    ManifestName: __expectString(output.manifestName),
    StreamSelection:
      output.streamSelection != null
        ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MssPackage = (output: any, context: __SerdeContext): MssPackage => {
  return {
    Encryption:
      output.encryption != null ? deserializeAws_restJson1MssEncryption(output.encryption, context) : undefined,
    MssManifests:
      output.mssManifests != null
        ? deserializeAws_restJson1__listOfMssManifest(output.mssManifests, context)
        : undefined,
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
  } as any;
};

const deserializeAws_restJson1PackagingConfiguration = (
  output: any,
  context: __SerdeContext
): PackagingConfiguration => {
  return {
    Arn: __expectString(output.arn),
    CmafPackage:
      output.cmafPackage != null ? deserializeAws_restJson1CmafPackage(output.cmafPackage, context) : undefined,
    DashPackage:
      output.dashPackage != null ? deserializeAws_restJson1DashPackage(output.dashPackage, context) : undefined,
    HlsPackage: output.hlsPackage != null ? deserializeAws_restJson1HlsPackage(output.hlsPackage, context) : undefined,
    Id: __expectString(output.id),
    MssPackage: output.mssPackage != null ? deserializeAws_restJson1MssPackage(output.mssPackage, context) : undefined,
    PackagingGroupId: __expectString(output.packagingGroupId),
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PackagingGroup = (output: any, context: __SerdeContext): PackagingGroup => {
  return {
    ApproximateAssetCount: __expectInt32(output.approximateAssetCount),
    Arn: __expectString(output.arn),
    Authorization:
      output.authorization != null ? deserializeAws_restJson1Authorization(output.authorization, context) : undefined,
    DomainName: __expectString(output.domainName),
    EgressAccessLogs:
      output.egressAccessLogs != null
        ? deserializeAws_restJson1EgressAccessLogs(output.egressAccessLogs, context)
        : undefined,
    Id: __expectString(output.id),
    Tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SpekeKeyProvider = (output: any, context: __SerdeContext): SpekeKeyProvider => {
  return {
    EncryptionContractConfiguration:
      output.encryptionContractConfiguration != null
        ? deserializeAws_restJson1EncryptionContractConfiguration(output.encryptionContractConfiguration, context)
        : undefined,
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
