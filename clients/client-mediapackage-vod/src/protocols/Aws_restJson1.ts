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
  body = JSON.stringify(
    take(input, {
      egressAccessLogs: [, (_) => se_EgressAccessLogs(_, context), `EgressAccessLogs`],
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
  body = JSON.stringify(
    take(input, {
      id: [, , `Id`],
      packagingGroupId: [, , `PackagingGroupId`],
      resourceId: [, , `ResourceId`],
      sourceArn: [, , `SourceArn`],
      sourceRoleArn: [, , `SourceRoleArn`],
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
  body = JSON.stringify(
    take(input, {
      cmafPackage: [, (_) => se_CmafPackage(_, context), `CmafPackage`],
      dashPackage: [, (_) => se_DashPackage(_, context), `DashPackage`],
      hlsPackage: [, (_) => se_HlsPackage(_, context), `HlsPackage`],
      id: [, , `Id`],
      mssPackage: [, (_) => se_MssPackage(_, context), `MssPackage`],
      packagingGroupId: [, , `PackagingGroupId`],
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
  body = JSON.stringify(
    take(input, {
      authorization: [, (_) => se_Authorization(_, context), `Authorization`],
      egressAccessLogs: [, (_) => se_EgressAccessLogs(_, context), `EgressAccessLogs`],
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
  body = JSON.stringify(
    take(input, {
      authorization: [, (_) => se_Authorization(_, context), `Authorization`],
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
    Authorization: [, (_) => de_Authorization(_, context), `authorization`],
    CreatedAt: [, __expectString, `createdAt`],
    DomainName: [, __expectString, `domainName`],
    EgressAccessLogs: [, (_) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    Id: [, __expectString, `id`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, __expectString, `createdAt`],
    EgressEndpoints: [, (_) => de___listOfEgressEndpoint(_, context), `egressEndpoints`],
    Id: [, __expectString, `id`],
    PackagingGroupId: [, __expectString, `packagingGroupId`],
    ResourceId: [, __expectString, `resourceId`],
    SourceArn: [, __expectString, `sourceArn`],
    SourceRoleArn: [, __expectString, `sourceRoleArn`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CmafPackage: [, (_) => de_CmafPackage(_, context), `cmafPackage`],
    CreatedAt: [, __expectString, `createdAt`],
    DashPackage: [, (_) => de_DashPackage(_, context), `dashPackage`],
    HlsPackage: [, (_) => de_HlsPackage(_, context), `hlsPackage`],
    Id: [, __expectString, `id`],
    MssPackage: [, (_) => de_MssPackage(_, context), `mssPackage`],
    PackagingGroupId: [, __expectString, `packagingGroupId`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    Authorization: [, (_) => de_Authorization(_, context), `authorization`],
    CreatedAt: [, __expectString, `createdAt`],
    DomainName: [, __expectString, `domainName`],
    EgressAccessLogs: [, (_) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    Id: [, __expectString, `id`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, __expectString, `createdAt`],
    EgressEndpoints: [, (_) => de___listOfEgressEndpoint(_, context), `egressEndpoints`],
    Id: [, __expectString, `id`],
    PackagingGroupId: [, __expectString, `packagingGroupId`],
    ResourceId: [, __expectString, `resourceId`],
    SourceArn: [, __expectString, `sourceArn`],
    SourceRoleArn: [, __expectString, `sourceRoleArn`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CmafPackage: [, (_) => de_CmafPackage(_, context), `cmafPackage`],
    CreatedAt: [, __expectString, `createdAt`],
    DashPackage: [, (_) => de_DashPackage(_, context), `dashPackage`],
    HlsPackage: [, (_) => de_HlsPackage(_, context), `hlsPackage`],
    Id: [, __expectString, `id`],
    MssPackage: [, (_) => de_MssPackage(_, context), `mssPackage`],
    PackagingGroupId: [, __expectString, `packagingGroupId`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ApproximateAssetCount: [, __expectInt32, `approximateAssetCount`],
    Arn: [, __expectString, `arn`],
    Authorization: [, (_) => de_Authorization(_, context), `authorization`],
    CreatedAt: [, __expectString, `createdAt`],
    DomainName: [, __expectString, `domainName`],
    EgressAccessLogs: [, (_) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    Id: [, __expectString, `id`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Assets: [, (_) => de___listOfAssetShallow(_, context), `assets`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    PackagingConfigurations: [, (_) => de___listOfPackagingConfiguration(_, context), `packagingConfigurations`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    PackagingGroups: [, (_) => de___listOfPackagingGroup(_, context), `packagingGroups`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    ApproximateAssetCount: [, __expectInt32, `approximateAssetCount`],
    Arn: [, __expectString, `arn`],
    Authorization: [, (_) => de_Authorization(_, context), `authorization`],
    CreatedAt: [, __expectString, `createdAt`],
    DomainName: [, __expectString, `domainName`],
    EgressAccessLogs: [, (_) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    Id: [, __expectString, `id`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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

// se___mapOf__string omitted.

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
    spekeKeyProvider: [, (_) => se_SpekeKeyProvider(_, context), `SpekeKeyProvider`],
  });
};

/**
 * serializeAws_restJson1CmafPackage
 */
const se_CmafPackage = (input: CmafPackage, context: __SerdeContext): any => {
  return take(input, {
    encryption: [, (_) => se_CmafEncryption(_, context), `Encryption`],
    hlsManifests: [, (_) => se___listOfHlsManifest(_, context), `HlsManifests`],
    includeEncoderConfigurationInSegments: [, , `IncludeEncoderConfigurationInSegments`],
    segmentDurationSeconds: [, , `SegmentDurationSeconds`],
  });
};

/**
 * serializeAws_restJson1DashEncryption
 */
const se_DashEncryption = (input: DashEncryption, context: __SerdeContext): any => {
  return take(input, {
    spekeKeyProvider: [, (_) => se_SpekeKeyProvider(_, context), `SpekeKeyProvider`],
  });
};

/**
 * serializeAws_restJson1DashManifest
 */
const se_DashManifest = (input: DashManifest, context: __SerdeContext): any => {
  return take(input, {
    manifestLayout: [, , `ManifestLayout`],
    manifestName: [, , `ManifestName`],
    minBufferTimeSeconds: [, , `MinBufferTimeSeconds`],
    profile: [, , `Profile`],
    scteMarkersSource: [, , `ScteMarkersSource`],
    streamSelection: [, (_) => se_StreamSelection(_, context), `StreamSelection`],
  });
};

/**
 * serializeAws_restJson1DashPackage
 */
const se_DashPackage = (input: DashPackage, context: __SerdeContext): any => {
  return take(input, {
    dashManifests: [, (_) => se___listOfDashManifest(_, context), `DashManifests`],
    encryption: [, (_) => se_DashEncryption(_, context), `Encryption`],
    includeEncoderConfigurationInSegments: [, , `IncludeEncoderConfigurationInSegments`],
    includeIframeOnlyStream: [, , `IncludeIframeOnlyStream`],
    periodTriggers: [, _json, `PeriodTriggers`],
    segmentDurationSeconds: [, , `SegmentDurationSeconds`],
    segmentTemplateFormat: [, , `SegmentTemplateFormat`],
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
    spekeKeyProvider: [, (_) => se_SpekeKeyProvider(_, context), `SpekeKeyProvider`],
  });
};

/**
 * serializeAws_restJson1HlsManifest
 */
const se_HlsManifest = (input: HlsManifest, context: __SerdeContext): any => {
  return take(input, {
    adMarkers: [, , `AdMarkers`],
    includeIframeOnlyStream: [, , `IncludeIframeOnlyStream`],
    manifestName: [, , `ManifestName`],
    programDateTimeIntervalSeconds: [, , `ProgramDateTimeIntervalSeconds`],
    repeatExtXKey: [, , `RepeatExtXKey`],
    streamSelection: [, (_) => se_StreamSelection(_, context), `StreamSelection`],
  });
};

/**
 * serializeAws_restJson1HlsPackage
 */
const se_HlsPackage = (input: HlsPackage, context: __SerdeContext): any => {
  return take(input, {
    encryption: [, (_) => se_HlsEncryption(_, context), `Encryption`],
    hlsManifests: [, (_) => se___listOfHlsManifest(_, context), `HlsManifests`],
    includeDvbSubtitles: [, , `IncludeDvbSubtitles`],
    segmentDurationSeconds: [, , `SegmentDurationSeconds`],
    useAudioRenditionGroup: [, , `UseAudioRenditionGroup`],
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
 * serializeAws_restJson1MssManifest
 */
const se_MssManifest = (input: MssManifest, context: __SerdeContext): any => {
  return take(input, {
    manifestName: [, , `ManifestName`],
    streamSelection: [, (_) => se_StreamSelection(_, context), `StreamSelection`],
  });
};

/**
 * serializeAws_restJson1MssPackage
 */
const se_MssPackage = (input: MssPackage, context: __SerdeContext): any => {
  return take(input, {
    encryption: [, (_) => se_MssEncryption(_, context), `Encryption`],
    mssManifests: [, (_) => se___listOfMssManifest(_, context), `MssManifests`],
    segmentDurationSeconds: [, , `SegmentDurationSeconds`],
  });
};

/**
 * serializeAws_restJson1SpekeKeyProvider
 */
const se_SpekeKeyProvider = (input: SpekeKeyProvider, context: __SerdeContext): any => {
  return take(input, {
    encryptionContractConfiguration: [
      ,
      (_) => se_EncryptionContractConfiguration(_, context),
      `EncryptionContractConfiguration`,
    ],
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
 * deserializeAws_restJson1__listOfAssetShallow
 */
const de___listOfAssetShallow = (output: any, context: __SerdeContext): AssetShallow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_PackagingGroup(entry, context);
    });
  return retVal;
};

// de___mapOf__string omitted.

/**
 * deserializeAws_restJson1AssetShallow
 */
const de_AssetShallow = (output: any, context: __SerdeContext): AssetShallow => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, __expectString, `createdAt`],
    Id: [, __expectString, `id`],
    PackagingGroupId: [, __expectString, `packagingGroupId`],
    ResourceId: [, __expectString, `resourceId`],
    SourceArn: [, __expectString, `sourceArn`],
    SourceRoleArn: [, __expectString, `sourceRoleArn`],
    Tags: [, _json, `tags`],
  }) as any;
};

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
 * deserializeAws_restJson1CmafEncryption
 */
const de_CmafEncryption = (output: any, context: __SerdeContext): CmafEncryption => {
  return take(output, {
    ConstantInitializationVector: [, __expectString, `constantInitializationVector`],
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
    IncludeEncoderConfigurationInSegments: [, __expectBoolean, `includeEncoderConfigurationInSegments`],
    SegmentDurationSeconds: [, __expectInt32, `segmentDurationSeconds`],
  }) as any;
};

/**
 * deserializeAws_restJson1DashEncryption
 */
const de_DashEncryption = (output: any, context: __SerdeContext): DashEncryption => {
  return take(output, {
    SpekeKeyProvider: [, (_: any) => de_SpekeKeyProvider(_, context), `spekeKeyProvider`],
  }) as any;
};

/**
 * deserializeAws_restJson1DashManifest
 */
const de_DashManifest = (output: any, context: __SerdeContext): DashManifest => {
  return take(output, {
    ManifestLayout: [, __expectString, `manifestLayout`],
    ManifestName: [, __expectString, `manifestName`],
    MinBufferTimeSeconds: [, __expectInt32, `minBufferTimeSeconds`],
    Profile: [, __expectString, `profile`],
    ScteMarkersSource: [, __expectString, `scteMarkersSource`],
    StreamSelection: [, (_: any) => de_StreamSelection(_, context), `streamSelection`],
  }) as any;
};

/**
 * deserializeAws_restJson1DashPackage
 */
const de_DashPackage = (output: any, context: __SerdeContext): DashPackage => {
  return take(output, {
    DashManifests: [, (_: any) => de___listOfDashManifest(_, context), `dashManifests`],
    Encryption: [, (_: any) => de_DashEncryption(_, context), `encryption`],
    IncludeEncoderConfigurationInSegments: [, __expectBoolean, `includeEncoderConfigurationInSegments`],
    IncludeIframeOnlyStream: [, __expectBoolean, `includeIframeOnlyStream`],
    PeriodTriggers: [, _json, `periodTriggers`],
    SegmentDurationSeconds: [, __expectInt32, `segmentDurationSeconds`],
    SegmentTemplateFormat: [, __expectString, `segmentTemplateFormat`],
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
 * deserializeAws_restJson1EgressEndpoint
 */
const de_EgressEndpoint = (output: any, context: __SerdeContext): EgressEndpoint => {
  return take(output, {
    PackagingConfigurationId: [, __expectString, `packagingConfigurationId`],
    Status: [, __expectString, `status`],
    Url: [, __expectString, `url`],
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
 * deserializeAws_restJson1HlsEncryption
 */
const de_HlsEncryption = (output: any, context: __SerdeContext): HlsEncryption => {
  return take(output, {
    ConstantInitializationVector: [, __expectString, `constantInitializationVector`],
    EncryptionMethod: [, __expectString, `encryptionMethod`],
    SpekeKeyProvider: [, (_: any) => de_SpekeKeyProvider(_, context), `spekeKeyProvider`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsManifest
 */
const de_HlsManifest = (output: any, context: __SerdeContext): HlsManifest => {
  return take(output, {
    AdMarkers: [, __expectString, `adMarkers`],
    IncludeIframeOnlyStream: [, __expectBoolean, `includeIframeOnlyStream`],
    ManifestName: [, __expectString, `manifestName`],
    ProgramDateTimeIntervalSeconds: [, __expectInt32, `programDateTimeIntervalSeconds`],
    RepeatExtXKey: [, __expectBoolean, `repeatExtXKey`],
    StreamSelection: [, (_: any) => de_StreamSelection(_, context), `streamSelection`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsPackage
 */
const de_HlsPackage = (output: any, context: __SerdeContext): HlsPackage => {
  return take(output, {
    Encryption: [, (_: any) => de_HlsEncryption(_, context), `encryption`],
    HlsManifests: [, (_: any) => de___listOfHlsManifest(_, context), `hlsManifests`],
    IncludeDvbSubtitles: [, __expectBoolean, `includeDvbSubtitles`],
    SegmentDurationSeconds: [, __expectInt32, `segmentDurationSeconds`],
    UseAudioRenditionGroup: [, __expectBoolean, `useAudioRenditionGroup`],
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
 * deserializeAws_restJson1MssManifest
 */
const de_MssManifest = (output: any, context: __SerdeContext): MssManifest => {
  return take(output, {
    ManifestName: [, __expectString, `manifestName`],
    StreamSelection: [, (_: any) => de_StreamSelection(_, context), `streamSelection`],
  }) as any;
};

/**
 * deserializeAws_restJson1MssPackage
 */
const de_MssPackage = (output: any, context: __SerdeContext): MssPackage => {
  return take(output, {
    Encryption: [, (_: any) => de_MssEncryption(_, context), `encryption`],
    MssManifests: [, (_: any) => de___listOfMssManifest(_, context), `mssManifests`],
    SegmentDurationSeconds: [, __expectInt32, `segmentDurationSeconds`],
  }) as any;
};

/**
 * deserializeAws_restJson1PackagingConfiguration
 */
const de_PackagingConfiguration = (output: any, context: __SerdeContext): PackagingConfiguration => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    CmafPackage: [, (_: any) => de_CmafPackage(_, context), `cmafPackage`],
    CreatedAt: [, __expectString, `createdAt`],
    DashPackage: [, (_: any) => de_DashPackage(_, context), `dashPackage`],
    HlsPackage: [, (_: any) => de_HlsPackage(_, context), `hlsPackage`],
    Id: [, __expectString, `id`],
    MssPackage: [, (_: any) => de_MssPackage(_, context), `mssPackage`],
    PackagingGroupId: [, __expectString, `packagingGroupId`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1PackagingGroup
 */
const de_PackagingGroup = (output: any, context: __SerdeContext): PackagingGroup => {
  return take(output, {
    ApproximateAssetCount: [, __expectInt32, `approximateAssetCount`],
    Arn: [, __expectString, `arn`],
    Authorization: [, (_: any) => de_Authorization(_, context), `authorization`],
    CreatedAt: [, __expectString, `createdAt`],
    DomainName: [, __expectString, `domainName`],
    EgressAccessLogs: [, (_: any) => de_EgressAccessLogs(_, context), `egressAccessLogs`],
    Id: [, __expectString, `id`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1SpekeKeyProvider
 */
const de_SpekeKeyProvider = (output: any, context: __SerdeContext): SpekeKeyProvider => {
  return take(output, {
    EncryptionContractConfiguration: [
      ,
      (_: any) => de_EncryptionContractConfiguration(_, context),
      `encryptionContractConfiguration`,
    ],
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
