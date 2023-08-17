// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BulkPublishCommandInput, BulkPublishCommandOutput } from "../commands/BulkPublishCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import {
  DescribeIdentityPoolUsageCommandInput,
  DescribeIdentityPoolUsageCommandOutput,
} from "../commands/DescribeIdentityPoolUsageCommand";
import {
  DescribeIdentityUsageCommandInput,
  DescribeIdentityUsageCommandOutput,
} from "../commands/DescribeIdentityUsageCommand";
import {
  GetBulkPublishDetailsCommandInput,
  GetBulkPublishDetailsCommandOutput,
} from "../commands/GetBulkPublishDetailsCommand";
import { GetCognitoEventsCommandInput, GetCognitoEventsCommandOutput } from "../commands/GetCognitoEventsCommand";
import {
  GetIdentityPoolConfigurationCommandInput,
  GetIdentityPoolConfigurationCommandOutput,
} from "../commands/GetIdentityPoolConfigurationCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import {
  ListIdentityPoolUsageCommandInput,
  ListIdentityPoolUsageCommandOutput,
} from "../commands/ListIdentityPoolUsageCommand";
import { ListRecordsCommandInput, ListRecordsCommandOutput } from "../commands/ListRecordsCommand";
import { RegisterDeviceCommandInput, RegisterDeviceCommandOutput } from "../commands/RegisterDeviceCommand";
import { SetCognitoEventsCommandInput, SetCognitoEventsCommandOutput } from "../commands/SetCognitoEventsCommand";
import {
  SetIdentityPoolConfigurationCommandInput,
  SetIdentityPoolConfigurationCommandOutput,
} from "../commands/SetIdentityPoolConfigurationCommand";
import { SubscribeToDatasetCommandInput, SubscribeToDatasetCommandOutput } from "../commands/SubscribeToDatasetCommand";
import {
  UnsubscribeFromDatasetCommandInput,
  UnsubscribeFromDatasetCommandOutput,
} from "../commands/UnsubscribeFromDatasetCommand";
import { UpdateRecordsCommandInput, UpdateRecordsCommandOutput } from "../commands/UpdateRecordsCommand";
import { CognitoSyncServiceException as __BaseException } from "../models/CognitoSyncServiceException";
import {
  _Record,
  AlreadyStreamedException,
  CognitoStreams,
  ConcurrentModificationException,
  Dataset,
  DuplicateRequestException,
  IdentityPoolUsage,
  IdentityUsage,
  InternalErrorException,
  InvalidConfigurationException,
  InvalidLambdaFunctionOutputException,
  InvalidParameterException,
  LambdaThrottledException,
  LimitExceededException,
  NotAuthorizedException,
  PushSync,
  RecordPatch,
  ResourceConflictException,
  ResourceNotFoundException,
  TooManyRequestsException,
} from "../models/models_0";

/**
 * serializeAws_restJson1BulkPublishCommand
 */
export const se_BulkPublishCommand = async (
  input: BulkPublishCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/bulkpublish";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  let body: any;
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
 * serializeAws_restJson1DeleteDatasetCommand
 */
export const se_DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "IdentityId", () => input.IdentityId!, "{IdentityId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DatasetName", () => input.DatasetName!, "{DatasetName}", false);
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
 * serializeAws_restJson1DescribeDatasetCommand
 */
export const se_DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "IdentityId", () => input.IdentityId!, "{IdentityId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DatasetName", () => input.DatasetName!, "{DatasetName}", false);
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
 * serializeAws_restJson1DescribeIdentityPoolUsageCommand
 */
export const se_DescribeIdentityPoolUsageCommand = async (
  input: DescribeIdentityPoolUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identitypools/{IdentityPoolId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
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
 * serializeAws_restJson1DescribeIdentityUsageCommand
 */
export const se_DescribeIdentityUsageCommand = async (
  input: DescribeIdentityUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "IdentityId", () => input.IdentityId!, "{IdentityId}", false);
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
 * serializeAws_restJson1GetBulkPublishDetailsCommand
 */
export const se_GetBulkPublishDetailsCommand = async (
  input: GetBulkPublishDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/getBulkPublishDetails";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  let body: any;
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
 * serializeAws_restJson1GetCognitoEventsCommand
 */
export const se_GetCognitoEventsCommand = async (
  input: GetCognitoEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identitypools/{IdentityPoolId}/events";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
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
 * serializeAws_restJson1GetIdentityPoolConfigurationCommand
 */
export const se_GetIdentityPoolConfigurationCommand = async (
  input: GetIdentityPoolConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
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
 * serializeAws_restJson1ListDatasetsCommand
 */
export const se_ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "IdentityId", () => input.IdentityId!, "{IdentityId}", false);
  const query: any = map({
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
 * serializeAws_restJson1ListIdentityPoolUsageCommand
 */
export const se_ListIdentityPoolUsageCommand = async (
  input: ListIdentityPoolUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identitypools";
  const query: any = map({
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
 * serializeAws_restJson1ListRecordsCommand
 */
export const se_ListRecordsCommand = async (
  input: ListRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "IdentityId", () => input.IdentityId!, "{IdentityId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DatasetName", () => input.DatasetName!, "{DatasetName}", false);
  const query: any = map({
    lastSyncCount: [() => input.LastSyncCount !== void 0, () => input.LastSyncCount!.toString()],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    syncSessionToken: [, input.SyncSessionToken!],
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
 * serializeAws_restJson1RegisterDeviceCommand
 */
export const se_RegisterDeviceCommand = async (
  input: RegisterDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identity/{IdentityId}/device";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "IdentityId", () => input.IdentityId!, "{IdentityId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Platform: [],
      Token: [],
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
 * serializeAws_restJson1SetCognitoEventsCommand
 */
export const se_SetCognitoEventsCommand = async (
  input: SetCognitoEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identitypools/{IdentityPoolId}/events";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      Events: (_) => _json(_),
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
 * serializeAws_restJson1SetIdentityPoolConfigurationCommand
 */
export const se_SetIdentityPoolConfigurationCommand = async (
  input: SetIdentityPoolConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      CognitoStreams: (_) => _json(_),
      PushSync: (_) => _json(_),
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
 * serializeAws_restJson1SubscribeToDatasetCommand
 */
export const se_SubscribeToDatasetCommand = async (
  input: SubscribeToDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "IdentityId", () => input.IdentityId!, "{IdentityId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DatasetName", () => input.DatasetName!, "{DatasetName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
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
 * serializeAws_restJson1UnsubscribeFromDatasetCommand
 */
export const se_UnsubscribeFromDatasetCommand = async (
  input: UnsubscribeFromDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "IdentityId", () => input.IdentityId!, "{IdentityId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DatasetName", () => input.DatasetName!, "{DatasetName}", false);
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
 * serializeAws_restJson1UpdateRecordsCommand
 */
export const se_UpdateRecordsCommand = async (
  input: UpdateRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-context": input.ClientContext!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IdentityPoolId",
    () => input.IdentityPoolId!,
    "{IdentityPoolId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "IdentityId", () => input.IdentityId!, "{IdentityId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DatasetName", () => input.DatasetName!, "{DatasetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeviceId: [],
      RecordPatches: (_) => se_RecordPatchList(_, context),
      SyncSessionToken: [],
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
 * deserializeAws_restJson1BulkPublishCommand
 */
export const de_BulkPublishCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BulkPublishCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BulkPublishCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IdentityPoolId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BulkPublishCommandError
 */
const de_BulkPublishCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BulkPublishCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyStreamedException":
    case "com.amazonaws.cognitosync#AlreadyStreamedException":
      throw await de_AlreadyStreamedExceptionRes(parsedOutput, context);
    case "DuplicateRequestException":
    case "com.amazonaws.cognitosync#DuplicateRequestException":
      throw await de_DuplicateRequestExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDatasetCommand
 */
export const de_DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Dataset: (_) => de_Dataset(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatasetCommandError
 */
const de_DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitosync#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeDatasetCommand
 */
export const de_DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Dataset: (_) => de_Dataset(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDatasetCommandError
 */
const de_DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeIdentityPoolUsageCommand
 */
export const de_DescribeIdentityPoolUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeIdentityPoolUsageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IdentityPoolUsage: (_) => de_IdentityPoolUsage(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeIdentityPoolUsageCommandError
 */
const de_DescribeIdentityPoolUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeIdentityUsageCommand
 */
export const de_DescribeIdentityUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeIdentityUsageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IdentityUsage: (_) => de_IdentityUsage(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeIdentityUsageCommandError
 */
const de_DescribeIdentityUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetBulkPublishDetailsCommand
 */
export const de_GetBulkPublishDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBulkPublishDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBulkPublishDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BulkPublishCompleteTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    BulkPublishStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    BulkPublishStatus: __expectString,
    FailureMessage: __expectString,
    IdentityPoolId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBulkPublishDetailsCommandError
 */
const de_GetBulkPublishDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBulkPublishDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetCognitoEventsCommand
 */
export const de_GetCognitoEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCognitoEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCognitoEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Events: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCognitoEventsCommandError
 */
const de_GetCognitoEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCognitoEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetIdentityPoolConfigurationCommand
 */
export const de_GetIdentityPoolConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIdentityPoolConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CognitoStreams: _json,
    IdentityPoolId: __expectString,
    PushSync: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIdentityPoolConfigurationCommandError
 */
const de_GetIdentityPoolConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDatasetsCommand
 */
export const de_ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDatasetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Count: __expectInt32,
    Datasets: (_) => de_DatasetList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDatasetsCommandError
 */
const de_ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListIdentityPoolUsageCommand
 */
export const de_ListIdentityPoolUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIdentityPoolUsageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Count: __expectInt32,
    IdentityPoolUsages: (_) => de_IdentityPoolUsageList(_, context),
    MaxResults: __expectInt32,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIdentityPoolUsageCommandError
 */
const de_ListIdentityPoolUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListRecordsCommand
 */
export const de_ListRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRecordsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Count: __expectInt32,
    DatasetDeletedAfterRequestedSyncCount: __expectBoolean,
    DatasetExists: __expectBoolean,
    DatasetSyncCount: __expectLong,
    LastModifiedBy: __expectString,
    MergedDatasetNames: _json,
    NextToken: __expectString,
    Records: (_) => de_RecordList(_, context),
    SyncSessionToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRecordsCommandError
 */
const de_ListRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RegisterDeviceCommand
 */
export const de_RegisterDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeviceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterDeviceCommandError
 */
const de_RegisterDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidConfigurationException":
    case "com.amazonaws.cognitosync#InvalidConfigurationException":
      throw await de_InvalidConfigurationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SetCognitoEventsCommand
 */
export const de_SetCognitoEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetCognitoEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SetCognitoEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SetCognitoEventsCommandError
 */
const de_SetCognitoEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetCognitoEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SetIdentityPoolConfigurationCommand
 */
export const de_SetIdentityPoolConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SetIdentityPoolConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CognitoStreams: _json,
    IdentityPoolId: __expectString,
    PushSync: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SetIdentityPoolConfigurationCommandError
 */
const de_SetIdentityPoolConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitosync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SubscribeToDatasetCommand
 */
export const de_SubscribeToDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SubscribeToDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SubscribeToDatasetCommandError
 */
const de_SubscribeToDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidConfigurationException":
    case "com.amazonaws.cognitosync#InvalidConfigurationException":
      throw await de_InvalidConfigurationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UnsubscribeFromDatasetCommand
 */
export const de_UnsubscribeFromDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UnsubscribeFromDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UnsubscribeFromDatasetCommandError
 */
const de_UnsubscribeFromDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidConfigurationException":
    case "com.amazonaws.cognitosync#InvalidConfigurationException":
      throw await de_InvalidConfigurationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateRecordsCommand
 */
export const de_UpdateRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRecordsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Records: (_) => de_RecordList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRecordsCommandError
 */
const de_UpdateRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidLambdaFunctionOutputException":
    case "com.amazonaws.cognitosync#InvalidLambdaFunctionOutputException":
      throw await de_InvalidLambdaFunctionOutputExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LambdaThrottledException":
    case "com.amazonaws.cognitosync#LambdaThrottledException":
      throw await de_LambdaThrottledExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitosync#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitosync#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AlreadyStreamedExceptionRes
 */
const de_AlreadyStreamedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyStreamedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AlreadyStreamedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DuplicateRequestExceptionRes
 */
const de_DuplicateRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DuplicateRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalErrorExceptionRes
 */
const de_InternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidConfigurationExceptionRes
 */
const de_InvalidConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidLambdaFunctionOutputExceptionRes
 */
const de_InvalidLambdaFunctionOutputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLambdaFunctionOutputException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidLambdaFunctionOutputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LambdaThrottledExceptionRes
 */
const de_LambdaThrottledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LambdaThrottledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LambdaThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotAuthorizedExceptionRes
 */
const de_NotAuthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotAuthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceConflictExceptionRes
 */
const de_ResourceConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceConflictException({
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ApplicationArnList omitted.

// se_CognitoStreams omitted.

// se_Events omitted.

// se_PushSync omitted.

/**
 * serializeAws_restJson1RecordPatch
 */
const se_RecordPatch = (input: RecordPatch, context: __SerdeContext): any => {
  return take(input, {
    DeviceLastModifiedDate: (_) => Math.round(_.getTime() / 1000),
    Key: [],
    Op: [],
    SyncCount: [],
    Value: [],
  });
};

/**
 * serializeAws_restJson1RecordPatchList
 */
const se_RecordPatchList = (input: RecordPatch[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RecordPatch(entry, context);
    });
};

// de_ApplicationArnList omitted.

// de_CognitoStreams omitted.

/**
 * deserializeAws_restJson1Dataset
 */
const de_Dataset = (output: any, context: __SerdeContext): Dataset => {
  return take(output, {
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataStorage: __expectLong,
    DatasetName: __expectString,
    IdentityId: __expectString,
    LastModifiedBy: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NumRecords: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1DatasetList
 */
const de_DatasetList = (output: any, context: __SerdeContext): Dataset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Dataset(entry, context);
    });
  return retVal;
};

// de_Events omitted.

/**
 * deserializeAws_restJson1IdentityPoolUsage
 */
const de_IdentityPoolUsage = (output: any, context: __SerdeContext): IdentityPoolUsage => {
  return take(output, {
    DataStorage: __expectLong,
    IdentityPoolId: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SyncSessionsCount: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1IdentityPoolUsageList
 */
const de_IdentityPoolUsageList = (output: any, context: __SerdeContext): IdentityPoolUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IdentityPoolUsage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IdentityUsage
 */
const de_IdentityUsage = (output: any, context: __SerdeContext): IdentityUsage => {
  return take(output, {
    DataStorage: __expectLong,
    DatasetCount: __expectInt32,
    IdentityId: __expectString,
    IdentityPoolId: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_MergedDatasetNameList omitted.

// de_PushSync omitted.

/**
 * deserializeAws_restJson1_Record
 */
const de__Record = (output: any, context: __SerdeContext): _Record => {
  return take(output, {
    DeviceLastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Key: __expectString,
    LastModifiedBy: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SyncCount: __expectLong,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RecordList
 */
const de_RecordList = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de__Record(entry, context);
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
