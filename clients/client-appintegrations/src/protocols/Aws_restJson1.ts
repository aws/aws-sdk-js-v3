// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateDataIntegrationCommandInput,
  CreateDataIntegrationCommandOutput,
} from "../commands/CreateDataIntegrationCommand";
import {
  CreateEventIntegrationCommandInput,
  CreateEventIntegrationCommandOutput,
} from "../commands/CreateEventIntegrationCommand";
import {
  DeleteDataIntegrationCommandInput,
  DeleteDataIntegrationCommandOutput,
} from "../commands/DeleteDataIntegrationCommand";
import {
  DeleteEventIntegrationCommandInput,
  DeleteEventIntegrationCommandOutput,
} from "../commands/DeleteEventIntegrationCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import { GetDataIntegrationCommandInput, GetDataIntegrationCommandOutput } from "../commands/GetDataIntegrationCommand";
import {
  GetEventIntegrationCommandInput,
  GetEventIntegrationCommandOutput,
} from "../commands/GetEventIntegrationCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import {
  ListDataIntegrationAssociationsCommandInput,
  ListDataIntegrationAssociationsCommandOutput,
} from "../commands/ListDataIntegrationAssociationsCommand";
import {
  ListDataIntegrationsCommandInput,
  ListDataIntegrationsCommandOutput,
} from "../commands/ListDataIntegrationsCommand";
import {
  ListEventIntegrationAssociationsCommandInput,
  ListEventIntegrationAssociationsCommandOutput,
} from "../commands/ListEventIntegrationAssociationsCommand";
import {
  ListEventIntegrationsCommandInput,
  ListEventIntegrationsCommandOutput,
} from "../commands/ListEventIntegrationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateDataIntegrationCommandInput,
  UpdateDataIntegrationCommandOutput,
} from "../commands/UpdateDataIntegrationCommand";
import {
  UpdateEventIntegrationCommandInput,
  UpdateEventIntegrationCommandOutput,
} from "../commands/UpdateEventIntegrationCommand";
import { AppIntegrationsServiceException as __BaseException } from "../models/AppIntegrationsServiceException";
import {
  AccessDeniedException,
  ApplicationSourceConfig,
  ApplicationSummary,
  DuplicateResourceException,
  EventFilter,
  ExternalUrlConfig,
  FileConfiguration,
  InternalServiceError,
  InvalidRequestException,
  Publication,
  ResourceNotFoundException,
  ResourceQuotaExceededException,
  ScheduleConfiguration,
  Subscription,
  ThrottlingException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApplicationSourceConfig: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      Name: [],
      Namespace: [],
      Publications: (_) => _json(_),
      Subscriptions: (_) => _json(_),
      Tags: (_) => _json(_),
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
 * serializeAws_restJson1CreateDataIntegrationCommand
 */
export const se_CreateDataIntegrationCommand = async (
  input: CreateDataIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataIntegrations";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      FileConfiguration: (_) => _json(_),
      KmsKey: [],
      Name: [],
      ObjectConfiguration: (_) => _json(_),
      ScheduleConfig: (_) => _json(_),
      SourceURI: [],
      Tags: (_) => _json(_),
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
 * serializeAws_restJson1CreateEventIntegrationCommand
 */
export const se_CreateEventIntegrationCommand = async (
  input: CreateEventIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/eventIntegrations";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      EventBridgeBus: [],
      EventFilter: (_) => _json(_),
      Name: [],
      Tags: (_) => _json(_),
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
 * serializeAws_restJson1DeleteDataIntegrationCommand
 */
export const se_DeleteDataIntegrationCommand = async (
  input: DeleteDataIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/dataIntegrations/{DataIntegrationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DataIntegrationIdentifier",
    () => input.DataIntegrationIdentifier!,
    "{DataIntegrationIdentifier}",
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
 * serializeAws_restJson1DeleteEventIntegrationCommand
 */
export const se_DeleteEventIntegrationCommand = async (
  input: DeleteEventIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/eventIntegrations/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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
 * serializeAws_restJson1GetApplicationCommand
 */
export const se_GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
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
 * serializeAws_restJson1GetDataIntegrationCommand
 */
export const se_GetDataIntegrationCommand = async (
  input: GetDataIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataIntegrations/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
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
 * serializeAws_restJson1GetEventIntegrationCommand
 */
export const se_GetEventIntegrationCommand = async (
  input: GetEventIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/eventIntegrations/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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
 * serializeAws_restJson1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications";
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
 * serializeAws_restJson1ListDataIntegrationAssociationsCommand
 */
export const se_ListDataIntegrationAssociationsCommand = async (
  input: ListDataIntegrationAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/dataIntegrations/{DataIntegrationIdentifier}/associations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "DataIntegrationIdentifier",
    () => input.DataIntegrationIdentifier!,
    "{DataIntegrationIdentifier}",
    false
  );
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
 * serializeAws_restJson1ListDataIntegrationsCommand
 */
export const se_ListDataIntegrationsCommand = async (
  input: ListDataIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataIntegrations";
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
 * serializeAws_restJson1ListEventIntegrationAssociationsCommand
 */
export const se_ListEventIntegrationAssociationsCommand = async (
  input: ListEventIntegrationAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/eventIntegrations/{EventIntegrationName}/associations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EventIntegrationName",
    () => input.EventIntegrationName!,
    "{EventIntegrationName}",
    false
  );
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
 * serializeAws_restJson1ListEventIntegrationsCommand
 */
export const se_ListEventIntegrationsCommand = async (
  input: ListEventIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/eventIntegrations";
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
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
 * serializeAws_restJson1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/applications/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApplicationSourceConfig: (_) => _json(_),
      Description: [],
      Name: [],
      Publications: (_) => _json(_),
      Subscriptions: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDataIntegrationCommand
 */
export const se_UpdateDataIntegrationCommand = async (
  input: UpdateDataIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataIntegrations/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateEventIntegrationCommand
 */
export const se_UpdateEventIntegrationCommand = async (
  input: UpdateEventIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/eventIntegrations/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApplicationCommandError
 */
const de_CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DuplicateResourceException":
    case "com.amazonaws.appintegrations#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceQuotaExceededException":
    case "com.amazonaws.appintegrations#ResourceQuotaExceededException":
      throw await de_ResourceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDataIntegrationCommand
 */
export const de_CreateDataIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDataIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ClientToken: __expectString,
    Description: __expectString,
    FileConfiguration: _json,
    Id: __expectString,
    KmsKey: __expectString,
    Name: __expectString,
    ObjectConfiguration: _json,
    ScheduleConfiguration: _json,
    SourceURI: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataIntegrationCommandError
 */
const de_CreateDataIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DuplicateResourceException":
    case "com.amazonaws.appintegrations#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceQuotaExceededException":
    case "com.amazonaws.appintegrations#ResourceQuotaExceededException":
      throw await de_ResourceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateEventIntegrationCommand
 */
export const de_CreateEventIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateEventIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventIntegrationArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEventIntegrationCommandError
 */
const de_CreateEventIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DuplicateResourceException":
    case "com.amazonaws.appintegrations#DuplicateResourceException":
      throw await de_DuplicateResourceExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceQuotaExceededException":
    case "com.amazonaws.appintegrations#ResourceQuotaExceededException":
      throw await de_ResourceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDataIntegrationCommand
 */
export const de_DeleteDataIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDataIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataIntegrationCommandError
 */
const de_DeleteDataIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteEventIntegrationCommand
 */
export const de_DeleteEventIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteEventIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEventIntegrationCommandError
 */
const de_DeleteEventIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetApplicationCommand
 */
export const de_GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationSourceConfig: _json,
    Arn: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Id: __expectString,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Namespace: __expectString,
    Publications: _json,
    Subscriptions: _json,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApplicationCommandError
 */
const de_GetApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDataIntegrationCommand
 */
export const de_GetDataIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDataIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Description: __expectString,
    FileConfiguration: _json,
    Id: __expectString,
    KmsKey: __expectString,
    Name: __expectString,
    ObjectConfiguration: _json,
    ScheduleConfiguration: _json,
    SourceURI: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataIntegrationCommandError
 */
const de_GetDataIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetEventIntegrationCommand
 */
export const de_GetEventIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEventIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Description: __expectString,
    EventBridgeBus: __expectString,
    EventFilter: _json,
    EventIntegrationArn: __expectString,
    Name: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEventIntegrationCommandError
 */
const de_GetEventIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Applications: (_) => de_ApplicationsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationsCommandError
 */
const de_ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDataIntegrationAssociationsCommand
 */
export const de_ListDataIntegrationAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIntegrationAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDataIntegrationAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataIntegrationAssociations: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataIntegrationAssociationsCommandError
 */
const de_ListDataIntegrationAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIntegrationAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDataIntegrationsCommand
 */
export const de_ListDataIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDataIntegrationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataIntegrations: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataIntegrationsCommandError
 */
const de_ListDataIntegrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIntegrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListEventIntegrationAssociationsCommand
 */
export const de_ListEventIntegrationAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventIntegrationAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEventIntegrationAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventIntegrationAssociations: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEventIntegrationAssociationsCommandError
 */
const de_ListEventIntegrationAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventIntegrationAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListEventIntegrationsCommand
 */
export const de_ListEventIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEventIntegrationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventIntegrations: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEventIntegrationsCommandError
 */
const de_ListEventIntegrationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventIntegrationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
    tags: _json,
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
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApplicationCommandError
 */
const de_UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDataIntegrationCommand
 */
export const de_UpdateDataIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDataIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataIntegrationCommandError
 */
const de_UpdateDataIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateEventIntegrationCommand
 */
export const de_UpdateEventIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventIntegrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateEventIntegrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEventIntegrationCommandError
 */
const de_UpdateEventIntegrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventIntegrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.appintegrations#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.appintegrations#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DuplicateResourceExceptionRes
 */
const de_DuplicateResourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateResourceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DuplicateResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServiceErrorRes
 */
const de_InternalServiceErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServiceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceQuotaExceededExceptionRes
 */
const de_ResourceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ApplicationApprovedOrigins omitted.

// se_ApplicationSourceConfig omitted.

// se_EventFilter omitted.

// se_ExternalUrlConfig omitted.

// se_FieldsList omitted.

// se_FieldsMap omitted.

// se_FileConfiguration omitted.

// se_FolderList omitted.

// se_ObjectConfiguration omitted.

// se_Publication omitted.

// se_PublicationList omitted.

// se_ScheduleConfiguration omitted.

// se_Subscription omitted.

// se_SubscriptionList omitted.

// se_TagMap omitted.

// de_ApplicationApprovedOrigins omitted.

/**
 * deserializeAws_restJson1ApplicationsList
 */
const de_ApplicationsList = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationSummary(entry, context);
    });
  return retVal;
};

// de_ApplicationSourceConfig omitted.

/**
 * deserializeAws_restJson1ApplicationSummary
 */
const de_ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Namespace: __expectString,
  }) as any;
};

// de_ClientAssociationMetadata omitted.

// de_DataIntegrationAssociationsList omitted.

// de_DataIntegrationAssociationSummary omitted.

// de_DataIntegrationsList omitted.

// de_DataIntegrationSummary omitted.

// de_EventFilter omitted.

// de_EventIntegration omitted.

// de_EventIntegrationAssociation omitted.

// de_EventIntegrationAssociationsList omitted.

// de_EventIntegrationsList omitted.

// de_ExternalUrlConfig omitted.

// de_FieldsList omitted.

// de_FieldsMap omitted.

// de_FileConfiguration omitted.

// de_FolderList omitted.

// de_ObjectConfiguration omitted.

// de_Publication omitted.

// de_PublicationList omitted.

// de_ScheduleConfiguration omitted.

// de_Subscription omitted.

// de_SubscriptionList omitted.

// de_TagMap omitted.

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
