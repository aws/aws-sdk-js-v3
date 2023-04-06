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
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packaging_groups/{Id}/configure_logs";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.EgressAccessLogs != null && { egressAccessLogs: se_EgressAccessLogs(input.EgressAccessLogs, context) }),
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
 * serializeAws_restJson1CreateAssetCommand
 */
export const se_CreateAssetCommand = async (
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
 * serializeAws_restJson1CreatePackagingConfigurationCommand
 */
export const se_CreatePackagingConfigurationCommand = async (
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
    ...(input.CmafPackage != null && { cmafPackage: se_CmafPackage(input.CmafPackage, context) }),
    ...(input.DashPackage != null && { dashPackage: se_DashPackage(input.DashPackage, context) }),
    ...(input.HlsPackage != null && { hlsPackage: se_HlsPackage(input.HlsPackage, context) }),
    ...(input.Id != null && { id: input.Id }),
    ...(input.MssPackage != null && { mssPackage: se_MssPackage(input.MssPackage, context) }),
    ...(input.PackagingGroupId != null && { packagingGroupId: input.PackagingGroupId }),
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
 * serializeAws_restJson1CreatePackagingGroupCommand
 */
export const se_CreatePackagingGroupCommand = async (
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
    ...(input.Authorization != null && { authorization: se_Authorization(input.Authorization, context) }),
    ...(input.EgressAccessLogs != null && { egressAccessLogs: se_EgressAccessLogs(input.EgressAccessLogs, context) }),
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
 * serializeAws_restJson1DeleteAssetCommand
 */
export const se_DeleteAssetCommand = async (
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

/**
 * serializeAws_restJson1DeletePackagingConfigurationCommand
 */
export const se_DeletePackagingConfigurationCommand = async (
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

/**
 * serializeAws_restJson1DeletePackagingGroupCommand
 */
export const se_DeletePackagingGroupCommand = async (
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

/**
 * serializeAws_restJson1DescribeAssetCommand
 */
export const se_DescribeAssetCommand = async (
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

/**
 * serializeAws_restJson1DescribePackagingConfigurationCommand
 */
export const se_DescribePackagingConfigurationCommand = async (
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

/**
 * serializeAws_restJson1DescribePackagingGroupCommand
 */
export const se_DescribePackagingGroupCommand = async (
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

/**
 * serializeAws_restJson1ListAssetsCommand
 */
export const se_ListAssetsCommand = async (
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

/**
 * serializeAws_restJson1ListPackagingConfigurationsCommand
 */
export const se_ListPackagingConfigurationsCommand = async (
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

/**
 * serializeAws_restJson1ListPackagingGroupsCommand
 */
export const se_ListPackagingGroupsCommand = async (
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
 * serializeAws_restJson1UpdatePackagingGroupCommand
 */
export const se_UpdatePackagingGroupCommand = async (
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
    ...(input.Authorization != null && { authorization: se_Authorization(input.Authorization, context) }),
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
  if (data.authorization != null) {
    contents.Authorization = de_Authorization(data.authorization, context);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.domainName != null) {
    contents.DomainName = __expectString(data.domainName);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = de_EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
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
    case "com.amazonaws.mediapackagevod#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1CreateAssetCommand
 */
export const de_CreateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAssetCommandError(output, context);
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
    contents.EgressEndpoints = de___listOfEgressEndpoint(data.egressEndpoints, context);
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
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetCommandError
 */
const de_CreateAssetCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1CreatePackagingConfigurationCommand
 */
export const de_CreatePackagingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePackagingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
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
  if (data.hlsPackage != null) {
    contents.HlsPackage = de_HlsPackage(data.hlsPackage, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.mssPackage != null) {
    contents.MssPackage = de_MssPackage(data.mssPackage, context);
  }
  if (data.packagingGroupId != null) {
    contents.PackagingGroupId = __expectString(data.packagingGroupId);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePackagingConfigurationCommandError
 */
const de_CreatePackagingConfigurationCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1CreatePackagingGroupCommand
 */
export const de_CreatePackagingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePackagingGroupCommandError(output, context);
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
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.domainName != null) {
    contents.DomainName = __expectString(data.domainName);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = de_EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePackagingGroupCommandError
 */
const de_CreatePackagingGroupCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1DeleteAssetCommand
 */
export const de_DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetCommandError
 */
const de_DeleteAssetCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1DeletePackagingConfigurationCommand
 */
export const de_DeletePackagingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingConfigurationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeletePackagingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackagingConfigurationCommandError
 */
const de_DeletePackagingConfigurationCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1DeletePackagingGroupCommand
 */
export const de_DeletePackagingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeletePackagingGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackagingGroupCommandError
 */
const de_DeletePackagingGroupCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1DescribeAssetCommand
 */
export const de_DescribeAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAssetCommandError(output, context);
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
    contents.EgressEndpoints = de___listOfEgressEndpoint(data.egressEndpoints, context);
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
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAssetCommandError
 */
const de_DescribeAssetCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1DescribePackagingConfigurationCommand
 */
export const de_DescribePackagingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePackagingConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
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
  if (data.hlsPackage != null) {
    contents.HlsPackage = de_HlsPackage(data.hlsPackage, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.mssPackage != null) {
    contents.MssPackage = de_MssPackage(data.mssPackage, context);
  }
  if (data.packagingGroupId != null) {
    contents.PackagingGroupId = __expectString(data.packagingGroupId);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackagingConfigurationCommandError
 */
const de_DescribePackagingConfigurationCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1DescribePackagingGroupCommand
 */
export const de_DescribePackagingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePackagingGroupCommandError(output, context);
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
    contents.Authorization = de_Authorization(data.authorization, context);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.domainName != null) {
    contents.DomainName = __expectString(data.domainName);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = de_EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackagingGroupCommandError
 */
const de_DescribePackagingGroupCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1ListAssetsCommand
 */
export const de_ListAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assets != null) {
    contents.Assets = de___listOfAssetShallow(data.assets, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetsCommandError
 */
const de_ListAssetsCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1ListPackagingConfigurationsCommand
 */
export const de_ListPackagingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPackagingConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.packagingConfigurations != null) {
    contents.PackagingConfigurations = de___listOfPackagingConfiguration(data.packagingConfigurations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPackagingConfigurationsCommandError
 */
const de_ListPackagingConfigurationsCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1ListPackagingGroupsCommand
 */
export const de_ListPackagingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPackagingGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.packagingGroups != null) {
    contents.PackagingGroups = de___listOfPackagingGroup(data.packagingGroups, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPackagingGroupsCommandError
 */
const de_ListPackagingGroupsCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * deserializeAws_restJson1UpdatePackagingGroupCommand
 */
export const de_UpdatePackagingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackagingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePackagingGroupCommandError(output, context);
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
    contents.Authorization = de_Authorization(data.authorization, context);
  }
  if (data.createdAt != null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.domainName != null) {
    contents.DomainName = __expectString(data.domainName);
  }
  if (data.egressAccessLogs != null) {
    contents.EgressAccessLogs = de_EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePackagingGroupCommandError
 */
const de_UpdatePackagingGroupCommandError = async (
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
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediapackagevod#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
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
 * serializeAws_restJson1__listOfDashManifest
 */
const se___listOfDashManifest = (input: DashManifest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DashManifest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfHlsManifest
 */
const se___listOfHlsManifest = (input: HlsManifest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HlsManifest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfMssManifest
 */
const se___listOfMssManifest = (input: MssManifest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MssManifest(entry, context);
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
    ...(input.SpekeKeyProvider != null && { spekeKeyProvider: se_SpekeKeyProvider(input.SpekeKeyProvider, context) }),
  };
};

/**
 * serializeAws_restJson1CmafPackage
 */
const se_CmafPackage = (input: CmafPackage, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { encryption: se_CmafEncryption(input.Encryption, context) }),
    ...(input.HlsManifests != null && { hlsManifests: se___listOfHlsManifest(input.HlsManifests, context) }),
    ...(input.IncludeEncoderConfigurationInSegments != null && {
      includeEncoderConfigurationInSegments: input.IncludeEncoderConfigurationInSegments,
    }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
  };
};

/**
 * serializeAws_restJson1DashEncryption
 */
const se_DashEncryption = (input: DashEncryption, context: __SerdeContext): any => {
  return {
    ...(input.SpekeKeyProvider != null && { spekeKeyProvider: se_SpekeKeyProvider(input.SpekeKeyProvider, context) }),
  };
};

/**
 * serializeAws_restJson1DashManifest
 */
const se_DashManifest = (input: DashManifest, context: __SerdeContext): any => {
  return {
    ...(input.ManifestLayout != null && { manifestLayout: input.ManifestLayout }),
    ...(input.ManifestName != null && { manifestName: input.ManifestName }),
    ...(input.MinBufferTimeSeconds != null && { minBufferTimeSeconds: input.MinBufferTimeSeconds }),
    ...(input.Profile != null && { profile: input.Profile }),
    ...(input.ScteMarkersSource != null && { scteMarkersSource: input.ScteMarkersSource }),
    ...(input.StreamSelection != null && { streamSelection: se_StreamSelection(input.StreamSelection, context) }),
  };
};

/**
 * serializeAws_restJson1DashPackage
 */
const se_DashPackage = (input: DashPackage, context: __SerdeContext): any => {
  return {
    ...(input.DashManifests != null && { dashManifests: se___listOfDashManifest(input.DashManifests, context) }),
    ...(input.Encryption != null && { encryption: se_DashEncryption(input.Encryption, context) }),
    ...(input.IncludeEncoderConfigurationInSegments != null && {
      includeEncoderConfigurationInSegments: input.IncludeEncoderConfigurationInSegments,
    }),
    ...(input.IncludeIframeOnlyStream != null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
    ...(input.PeriodTriggers != null && {
      periodTriggers: se___listOf__PeriodTriggersElement(input.PeriodTriggers, context),
    }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.SegmentTemplateFormat != null && { segmentTemplateFormat: input.SegmentTemplateFormat }),
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
    ...(input.SpekeKeyProvider != null && { spekeKeyProvider: se_SpekeKeyProvider(input.SpekeKeyProvider, context) }),
  };
};

/**
 * serializeAws_restJson1HlsManifest
 */
const se_HlsManifest = (input: HlsManifest, context: __SerdeContext): any => {
  return {
    ...(input.AdMarkers != null && { adMarkers: input.AdMarkers }),
    ...(input.IncludeIframeOnlyStream != null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
    ...(input.ManifestName != null && { manifestName: input.ManifestName }),
    ...(input.ProgramDateTimeIntervalSeconds != null && {
      programDateTimeIntervalSeconds: input.ProgramDateTimeIntervalSeconds,
    }),
    ...(input.RepeatExtXKey != null && { repeatExtXKey: input.RepeatExtXKey }),
    ...(input.StreamSelection != null && { streamSelection: se_StreamSelection(input.StreamSelection, context) }),
  };
};

/**
 * serializeAws_restJson1HlsPackage
 */
const se_HlsPackage = (input: HlsPackage, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { encryption: se_HlsEncryption(input.Encryption, context) }),
    ...(input.HlsManifests != null && { hlsManifests: se___listOfHlsManifest(input.HlsManifests, context) }),
    ...(input.IncludeDvbSubtitles != null && { includeDvbSubtitles: input.IncludeDvbSubtitles }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.UseAudioRenditionGroup != null && { useAudioRenditionGroup: input.UseAudioRenditionGroup }),
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
 * serializeAws_restJson1MssManifest
 */
const se_MssManifest = (input: MssManifest, context: __SerdeContext): any => {
  return {
    ...(input.ManifestName != null && { manifestName: input.ManifestName }),
    ...(input.StreamSelection != null && { streamSelection: se_StreamSelection(input.StreamSelection, context) }),
  };
};

/**
 * serializeAws_restJson1MssPackage
 */
const se_MssPackage = (input: MssPackage, context: __SerdeContext): any => {
  return {
    ...(input.Encryption != null && { encryption: se_MssEncryption(input.Encryption, context) }),
    ...(input.MssManifests != null && { mssManifests: se___listOfMssManifest(input.MssManifests, context) }),
    ...(input.SegmentDurationSeconds != null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
  };
};

/**
 * serializeAws_restJson1SpekeKeyProvider
 */
const se_SpekeKeyProvider = (input: SpekeKeyProvider, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionContractConfiguration != null && {
      encryptionContractConfiguration: se_EncryptionContractConfiguration(
        input.EncryptionContractConfiguration,
        context
      ),
    }),
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
 * deserializeAws_restJson1__listOfAssetShallow
 */
const de___listOfAssetShallow = (output: any, context: __SerdeContext): AssetShallow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetShallow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfDashManifest
 */
const de___listOfDashManifest = (output: any, context: __SerdeContext): DashManifest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DashManifest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfEgressEndpoint
 */
const de___listOfEgressEndpoint = (output: any, context: __SerdeContext): EgressEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EgressEndpoint(entry, context);
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
 * deserializeAws_restJson1__listOfMssManifest
 */
const de___listOfMssManifest = (output: any, context: __SerdeContext): MssManifest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MssManifest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfPackagingConfiguration
 */
const de___listOfPackagingConfiguration = (output: any, context: __SerdeContext): PackagingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PackagingConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfPackagingGroup
 */
const de___listOfPackagingGroup = (output: any, context: __SerdeContext): PackagingGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PackagingGroup(entry, context);
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
 * deserializeAws_restJson1AssetShallow
 */
const de_AssetShallow = (output: any, context: __SerdeContext): AssetShallow => {
  return {
    Arn: __expectString(output.arn),
    CreatedAt: __expectString(output.createdAt),
    Id: __expectString(output.id),
    PackagingGroupId: __expectString(output.packagingGroupId),
    ResourceId: __expectString(output.resourceId),
    SourceArn: __expectString(output.sourceArn),
    SourceRoleArn: __expectString(output.sourceRoleArn),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
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
 * deserializeAws_restJson1CmafEncryption
 */
const de_CmafEncryption = (output: any, context: __SerdeContext): CmafEncryption => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
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
    IncludeEncoderConfigurationInSegments: __expectBoolean(output.includeEncoderConfigurationInSegments),
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1DashEncryption
 */
const de_DashEncryption = (output: any, context: __SerdeContext): DashEncryption => {
  return {
    SpekeKeyProvider:
      output.spekeKeyProvider != null ? de_SpekeKeyProvider(output.spekeKeyProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DashManifest
 */
const de_DashManifest = (output: any, context: __SerdeContext): DashManifest => {
  return {
    ManifestLayout: __expectString(output.manifestLayout),
    ManifestName: __expectString(output.manifestName),
    MinBufferTimeSeconds: __expectInt32(output.minBufferTimeSeconds),
    Profile: __expectString(output.profile),
    ScteMarkersSource: __expectString(output.scteMarkersSource),
    StreamSelection: output.streamSelection != null ? de_StreamSelection(output.streamSelection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DashPackage
 */
const de_DashPackage = (output: any, context: __SerdeContext): DashPackage => {
  return {
    DashManifests: output.dashManifests != null ? de___listOfDashManifest(output.dashManifests, context) : undefined,
    Encryption: output.encryption != null ? de_DashEncryption(output.encryption, context) : undefined,
    IncludeEncoderConfigurationInSegments: __expectBoolean(output.includeEncoderConfigurationInSegments),
    IncludeIframeOnlyStream: __expectBoolean(output.includeIframeOnlyStream),
    PeriodTriggers:
      output.periodTriggers != null ? de___listOf__PeriodTriggersElement(output.periodTriggers, context) : undefined,
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    SegmentTemplateFormat: __expectString(output.segmentTemplateFormat),
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
 * deserializeAws_restJson1EgressEndpoint
 */
const de_EgressEndpoint = (output: any, context: __SerdeContext): EgressEndpoint => {
  return {
    PackagingConfigurationId: __expectString(output.packagingConfigurationId),
    Status: __expectString(output.status),
    Url: __expectString(output.url),
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
 * deserializeAws_restJson1HlsEncryption
 */
const de_HlsEncryption = (output: any, context: __SerdeContext): HlsEncryption => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    EncryptionMethod: __expectString(output.encryptionMethod),
    SpekeKeyProvider:
      output.spekeKeyProvider != null ? de_SpekeKeyProvider(output.spekeKeyProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HlsManifest
 */
const de_HlsManifest = (output: any, context: __SerdeContext): HlsManifest => {
  return {
    AdMarkers: __expectString(output.adMarkers),
    IncludeIframeOnlyStream: __expectBoolean(output.includeIframeOnlyStream),
    ManifestName: __expectString(output.manifestName),
    ProgramDateTimeIntervalSeconds: __expectInt32(output.programDateTimeIntervalSeconds),
    RepeatExtXKey: __expectBoolean(output.repeatExtXKey),
    StreamSelection: output.streamSelection != null ? de_StreamSelection(output.streamSelection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HlsPackage
 */
const de_HlsPackage = (output: any, context: __SerdeContext): HlsPackage => {
  return {
    Encryption: output.encryption != null ? de_HlsEncryption(output.encryption, context) : undefined,
    HlsManifests: output.hlsManifests != null ? de___listOfHlsManifest(output.hlsManifests, context) : undefined,
    IncludeDvbSubtitles: __expectBoolean(output.includeDvbSubtitles),
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
    UseAudioRenditionGroup: __expectBoolean(output.useAudioRenditionGroup),
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
 * deserializeAws_restJson1MssManifest
 */
const de_MssManifest = (output: any, context: __SerdeContext): MssManifest => {
  return {
    ManifestName: __expectString(output.manifestName),
    StreamSelection: output.streamSelection != null ? de_StreamSelection(output.streamSelection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MssPackage
 */
const de_MssPackage = (output: any, context: __SerdeContext): MssPackage => {
  return {
    Encryption: output.encryption != null ? de_MssEncryption(output.encryption, context) : undefined,
    MssManifests: output.mssManifests != null ? de___listOfMssManifest(output.mssManifests, context) : undefined,
    SegmentDurationSeconds: __expectInt32(output.segmentDurationSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1PackagingConfiguration
 */
const de_PackagingConfiguration = (output: any, context: __SerdeContext): PackagingConfiguration => {
  return {
    Arn: __expectString(output.arn),
    CmafPackage: output.cmafPackage != null ? de_CmafPackage(output.cmafPackage, context) : undefined,
    CreatedAt: __expectString(output.createdAt),
    DashPackage: output.dashPackage != null ? de_DashPackage(output.dashPackage, context) : undefined,
    HlsPackage: output.hlsPackage != null ? de_HlsPackage(output.hlsPackage, context) : undefined,
    Id: __expectString(output.id),
    MssPackage: output.mssPackage != null ? de_MssPackage(output.mssPackage, context) : undefined,
    PackagingGroupId: __expectString(output.packagingGroupId),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PackagingGroup
 */
const de_PackagingGroup = (output: any, context: __SerdeContext): PackagingGroup => {
  return {
    ApproximateAssetCount: __expectInt32(output.approximateAssetCount),
    Arn: __expectString(output.arn),
    Authorization: output.authorization != null ? de_Authorization(output.authorization, context) : undefined,
    CreatedAt: __expectString(output.createdAt),
    DomainName: __expectString(output.domainName),
    EgressAccessLogs:
      output.egressAccessLogs != null ? de_EgressAccessLogs(output.egressAccessLogs, context) : undefined,
    Id: __expectString(output.id),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SpekeKeyProvider
 */
const de_SpekeKeyProvider = (output: any, context: __SerdeContext): SpekeKeyProvider => {
  return {
    EncryptionContractConfiguration:
      output.encryptionContractConfiguration != null
        ? de_EncryptionContractConfiguration(output.encryptionContractConfiguration, context)
        : undefined,
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
