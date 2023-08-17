// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  BatchGetUserAccessTasksCommandInput,
  BatchGetUserAccessTasksCommandOutput,
} from "../commands/BatchGetUserAccessTasksCommand";
import {
  ConnectAppAuthorizationCommandInput,
  ConnectAppAuthorizationCommandOutput,
} from "../commands/ConnectAppAuthorizationCommand";
import {
  CreateAppAuthorizationCommandInput,
  CreateAppAuthorizationCommandOutput,
} from "../commands/CreateAppAuthorizationCommand";
import { CreateAppBundleCommandInput, CreateAppBundleCommandOutput } from "../commands/CreateAppBundleCommand";
import { CreateIngestionCommandInput, CreateIngestionCommandOutput } from "../commands/CreateIngestionCommand";
import {
  CreateIngestionDestinationCommandInput,
  CreateIngestionDestinationCommandOutput,
} from "../commands/CreateIngestionDestinationCommand";
import {
  DeleteAppAuthorizationCommandInput,
  DeleteAppAuthorizationCommandOutput,
} from "../commands/DeleteAppAuthorizationCommand";
import { DeleteAppBundleCommandInput, DeleteAppBundleCommandOutput } from "../commands/DeleteAppBundleCommand";
import { DeleteIngestionCommandInput, DeleteIngestionCommandOutput } from "../commands/DeleteIngestionCommand";
import {
  DeleteIngestionDestinationCommandInput,
  DeleteIngestionDestinationCommandOutput,
} from "../commands/DeleteIngestionDestinationCommand";
import {
  GetAppAuthorizationCommandInput,
  GetAppAuthorizationCommandOutput,
} from "../commands/GetAppAuthorizationCommand";
import { GetAppBundleCommandInput, GetAppBundleCommandOutput } from "../commands/GetAppBundleCommand";
import { GetIngestionCommandInput, GetIngestionCommandOutput } from "../commands/GetIngestionCommand";
import {
  GetIngestionDestinationCommandInput,
  GetIngestionDestinationCommandOutput,
} from "../commands/GetIngestionDestinationCommand";
import {
  ListAppAuthorizationsCommandInput,
  ListAppAuthorizationsCommandOutput,
} from "../commands/ListAppAuthorizationsCommand";
import { ListAppBundlesCommandInput, ListAppBundlesCommandOutput } from "../commands/ListAppBundlesCommand";
import {
  ListIngestionDestinationsCommandInput,
  ListIngestionDestinationsCommandOutput,
} from "../commands/ListIngestionDestinationsCommand";
import { ListIngestionsCommandInput, ListIngestionsCommandOutput } from "../commands/ListIngestionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartIngestionCommandInput, StartIngestionCommandOutput } from "../commands/StartIngestionCommand";
import {
  StartUserAccessTasksCommandInput,
  StartUserAccessTasksCommandOutput,
} from "../commands/StartUserAccessTasksCommand";
import { StopIngestionCommandInput, StopIngestionCommandOutput } from "../commands/StopIngestionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAppAuthorizationCommandInput,
  UpdateAppAuthorizationCommandOutput,
} from "../commands/UpdateAppAuthorizationCommand";
import {
  UpdateIngestionDestinationCommandInput,
  UpdateIngestionDestinationCommandOutput,
} from "../commands/UpdateIngestionDestinationCommand";
import { AppFabricServiceException as __BaseException } from "../models/AppFabricServiceException";
import {
  AccessDeniedException,
  ApiKeyCredential,
  AppAuthorization,
  AppAuthorizationSummary,
  AuditLogDestinationConfiguration,
  AuditLogProcessingConfiguration,
  AuthRequest,
  ConflictException,
  Credential,
  Destination,
  DestinationConfiguration,
  FirehoseStream,
  Ingestion,
  IngestionDestination,
  InternalServerException,
  Oauth2Credential,
  ProcessingConfiguration,
  ResourceNotFoundException,
  S3Bucket,
  ServiceQuotaExceededException,
  Tag,
  Tenant,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchGetUserAccessTasksCommand
 */
export const se_BatchGetUserAccessTasksCommand = async (
  input: BatchGetUserAccessTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/useraccess/batchget";
  let body: any;
  body = JSON.stringify(
    take(input, {
      appBundleIdentifier: [],
      taskIdList: (_) => _json(_),
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
 * serializeAws_restJson1ConnectAppAuthorizationCommand
 */
export const se_ConnectAppAuthorizationCommand = async (
  input: ConnectAppAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}/connect";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appAuthorizationIdentifier",
    () => input.appAuthorizationIdentifier!,
    "{appAuthorizationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      authRequest: (_) => _json(_),
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
 * serializeAws_restJson1CreateAppAuthorizationCommand
 */
export const se_CreateAppAuthorizationCommand = async (
  input: CreateAppAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/appauthorizations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      app: [],
      authType: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      credential: (_) => _json(_),
      tags: (_) => _json(_),
      tenant: (_) => _json(_),
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
 * serializeAws_restJson1CreateAppBundleCommand
 */
export const se_CreateAppBundleCommand = async (
  input: CreateAppBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appbundles";
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customerManagedKeyIdentifier: [],
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
 * serializeAws_restJson1CreateIngestionCommand
 */
export const se_CreateIngestionCommand = async (
  input: CreateIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/ingestions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      app: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ingestionType: [],
      tags: (_) => _json(_),
      tenantId: [],
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
 * serializeAws_restJson1CreateIngestionDestinationCommand
 */
export const se_CreateIngestionDestinationCommand = async (
  input: CreateIngestionDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionIdentifier",
    () => input.ingestionIdentifier!,
    "{ingestionIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      destinationConfiguration: (_) => _json(_),
      processingConfiguration: (_) => _json(_),
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
 * serializeAws_restJson1DeleteAppAuthorizationCommand
 */
export const se_DeleteAppAuthorizationCommand = async (
  input: DeleteAppAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appAuthorizationIdentifier",
    () => input.appAuthorizationIdentifier!,
    "{appAuthorizationIdentifier}",
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
 * serializeAws_restJson1DeleteAppBundleCommand
 */
export const se_DeleteAppBundleCommand = async (
  input: DeleteAppBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appbundles/{appBundleIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
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
 * serializeAws_restJson1DeleteIngestionCommand
 */
export const se_DeleteIngestionCommand = async (
  input: DeleteIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionIdentifier",
    () => input.ingestionIdentifier!,
    "{ingestionIdentifier}",
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
 * serializeAws_restJson1DeleteIngestionDestinationCommand
 */
export const se_DeleteIngestionDestinationCommand = async (
  input: DeleteIngestionDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionIdentifier",
    () => input.ingestionIdentifier!,
    "{ingestionIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionDestinationIdentifier",
    () => input.ingestionDestinationIdentifier!,
    "{ingestionDestinationIdentifier}",
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
 * serializeAws_restJson1GetAppAuthorizationCommand
 */
export const se_GetAppAuthorizationCommand = async (
  input: GetAppAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appAuthorizationIdentifier",
    () => input.appAuthorizationIdentifier!,
    "{appAuthorizationIdentifier}",
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
 * serializeAws_restJson1GetAppBundleCommand
 */
export const se_GetAppBundleCommand = async (
  input: GetAppBundleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appbundles/{appBundleIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
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
 * serializeAws_restJson1GetIngestionCommand
 */
export const se_GetIngestionCommand = async (
  input: GetIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionIdentifier",
    () => input.ingestionIdentifier!,
    "{ingestionIdentifier}",
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
 * serializeAws_restJson1GetIngestionDestinationCommand
 */
export const se_GetIngestionDestinationCommand = async (
  input: GetIngestionDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionIdentifier",
    () => input.ingestionIdentifier!,
    "{ingestionIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionDestinationIdentifier",
    () => input.ingestionDestinationIdentifier!,
    "{ingestionDestinationIdentifier}",
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
 * serializeAws_restJson1ListAppAuthorizationsCommand
 */
export const se_ListAppAuthorizationsCommand = async (
  input: ListAppAuthorizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/appauthorizations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
 * serializeAws_restJson1ListAppBundlesCommand
 */
export const se_ListAppBundlesCommand = async (
  input: ListAppBundlesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appbundles";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
 * serializeAws_restJson1ListIngestionDestinationsCommand
 */
export const se_ListIngestionDestinationsCommand = async (
  input: ListIngestionDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionIdentifier",
    () => input.ingestionIdentifier!,
    "{ingestionIdentifier}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
 * serializeAws_restJson1ListIngestionsCommand
 */
export const se_ListIngestionsCommand = async (
  input: ListIngestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/ingestions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
 * serializeAws_restJson1StartIngestionCommand
 */
export const se_StartIngestionCommand = async (
  input: StartIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/start";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionIdentifier",
    () => input.ingestionIdentifier!,
    "{ingestionIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
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
 * serializeAws_restJson1StartUserAccessTasksCommand
 */
export const se_StartUserAccessTasksCommand = async (
  input: StartUserAccessTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/useraccess/start";
  let body: any;
  body = JSON.stringify(
    take(input, {
      appBundleIdentifier: [],
      email: [],
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
 * serializeAws_restJson1StopIngestionCommand
 */
export const se_StopIngestionCommand = async (
  input: StopIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/stop";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionIdentifier",
    () => input.ingestionIdentifier!,
    "{ingestionIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
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
 * serializeAws_restJson1UpdateAppAuthorizationCommand
 */
export const se_UpdateAppAuthorizationCommand = async (
  input: UpdateAppAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appAuthorizationIdentifier",
    () => input.appAuthorizationIdentifier!,
    "{appAuthorizationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      credential: (_) => _json(_),
      tenant: (_) => _json(_),
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
 * serializeAws_restJson1UpdateIngestionDestinationCommand
 */
export const se_UpdateIngestionDestinationCommand = async (
  input: UpdateIngestionDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}/ingestiondestinations/{ingestionDestinationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "appBundleIdentifier",
    () => input.appBundleIdentifier!,
    "{appBundleIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionIdentifier",
    () => input.ingestionIdentifier!,
    "{ingestionIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ingestionDestinationIdentifier",
    () => input.ingestionDestinationIdentifier!,
    "{ingestionDestinationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationConfiguration: (_) => _json(_),
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
 * deserializeAws_restJson1BatchGetUserAccessTasksCommand
 */
export const de_BatchGetUserAccessTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetUserAccessTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetUserAccessTasksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userAccessResultsList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetUserAccessTasksCommandError
 */
const de_BatchGetUserAccessTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetUserAccessTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ConnectAppAuthorizationCommand
 */
export const de_ConnectAppAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectAppAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ConnectAppAuthorizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appAuthorizationSummary: (_) => de_AppAuthorizationSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ConnectAppAuthorizationCommandError
 */
const de_ConnectAppAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectAppAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateAppAuthorizationCommand
 */
export const de_CreateAppAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppAuthorizationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateAppAuthorizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appAuthorization: (_) => de_AppAuthorization(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppAuthorizationCommandError
 */
const de_CreateAppAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appfabric#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appfabric#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateAppBundleCommand
 */
export const de_CreateAppBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppBundleCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateAppBundleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appBundle: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppBundleCommandError
 */
const de_CreateAppBundleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppBundleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appfabric#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appfabric#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateIngestionCommand
 */
export const de_CreateIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateIngestionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestion: (_) => de_Ingestion(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIngestionCommandError
 */
const de_CreateIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appfabric#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appfabric#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateIngestionDestinationCommand
 */
export const de_CreateIngestionDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestionDestinationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateIngestionDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionDestination: (_) => de_IngestionDestination(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIngestionDestinationCommandError
 */
const de_CreateIngestionDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestionDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appfabric#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appfabric#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAppAuthorizationCommand
 */
export const de_DeleteAppAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppAuthorizationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAppAuthorizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppAuthorizationCommandError
 */
const de_DeleteAppAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAppBundleCommand
 */
export const de_DeleteAppBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppBundleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAppBundleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppBundleCommandError
 */
const de_DeleteAppBundleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppBundleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appfabric#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteIngestionCommand
 */
export const de_DeleteIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIngestionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteIngestionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIngestionCommandError
 */
const de_DeleteIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIngestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteIngestionDestinationCommand
 */
export const de_DeleteIngestionDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIngestionDestinationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteIngestionDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIngestionDestinationCommandError
 */
const de_DeleteIngestionDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIngestionDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAppAuthorizationCommand
 */
export const de_GetAppAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAppAuthorizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appAuthorization: (_) => de_AppAuthorization(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAppAuthorizationCommandError
 */
const de_GetAppAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAppBundleCommand
 */
export const de_GetAppBundleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppBundleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAppBundleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appBundle: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAppBundleCommandError
 */
const de_GetAppBundleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppBundleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetIngestionCommand
 */
export const de_GetIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIngestionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestion: (_) => de_Ingestion(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIngestionCommandError
 */
const de_GetIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIngestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetIngestionDestinationCommand
 */
export const de_GetIngestionDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIngestionDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIngestionDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionDestination: (_) => de_IngestionDestination(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIngestionDestinationCommandError
 */
const de_GetIngestionDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIngestionDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAppAuthorizationsCommand
 */
export const de_ListAppAuthorizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppAuthorizationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppAuthorizationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appAuthorizationSummaryList: (_) => de_AppAuthorizationSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppAuthorizationsCommandError
 */
const de_ListAppAuthorizationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppAuthorizationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAppBundlesCommand
 */
export const de_ListAppBundlesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppBundlesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppBundlesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appBundleSummaryList: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppBundlesCommandError
 */
const de_ListAppBundlesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppBundlesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListIngestionDestinationsCommand
 */
export const de_ListIngestionDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIngestionDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionDestinations: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIngestionDestinationsCommandError
 */
const de_ListIngestionDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListIngestionsCommand
 */
export const de_ListIngestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIngestionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestions: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIngestionsCommandError
 */
const de_ListIngestionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartIngestionCommand
 */
export const de_StartIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartIngestionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartIngestionCommandError
 */
const de_StartIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartIngestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appfabric#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartUserAccessTasksCommand
 */
export const de_StartUserAccessTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartUserAccessTasksCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_StartUserAccessTasksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userAccessTasksList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartUserAccessTasksCommandError
 */
const de_StartUserAccessTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartUserAccessTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StopIngestionCommand
 */
export const de_StopIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopIngestionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopIngestionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopIngestionCommandError
 */
const de_StopIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopIngestionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appfabric#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAppAuthorizationCommand
 */
export const de_UpdateAppAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAppAuthorizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appAuthorization: (_) => de_AppAuthorization(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppAuthorizationCommandError
 */
const de_UpdateAppAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateIngestionDestinationCommand
 */
export const de_UpdateIngestionDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIngestionDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateIngestionDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionDestination: (_) => de_IngestionDestination(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIngestionDestinationCommandError
 */
const de_UpdateIngestionDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIngestionDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appfabric#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appfabric#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appfabric#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appfabric#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appfabric#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appfabric#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.appfabric#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
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
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
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
  const doc = take(data, {
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ApiKeyCredential omitted.

// se_AuditLogDestinationConfiguration omitted.

// se_AuditLogProcessingConfiguration omitted.

// se_AuthRequest omitted.

// se_Credential omitted.

// se_Destination omitted.

// se_DestinationConfiguration omitted.

// se_FirehoseStream omitted.

// se_Oauth2Credential omitted.

// se_ProcessingConfiguration omitted.

// se_S3Bucket omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_TaskIdList omitted.

// se_Tenant omitted.

/**
 * deserializeAws_restJson1AppAuthorization
 */
const de_AppAuthorization = (output: any, context: __SerdeContext): AppAuthorization => {
  return take(output, {
    app: __expectString,
    appAuthorizationArn: __expectString,
    appBundleArn: __expectString,
    authType: __expectString,
    authUrl: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    persona: __expectString,
    status: __expectString,
    tenant: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AppAuthorizationSummary
 */
const de_AppAuthorizationSummary = (output: any, context: __SerdeContext): AppAuthorizationSummary => {
  return take(output, {
    app: __expectString,
    appAuthorizationArn: __expectString,
    appBundleArn: __expectString,
    status: __expectString,
    tenant: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AppAuthorizationSummaryList
 */
const de_AppAuthorizationSummaryList = (output: any, context: __SerdeContext): AppAuthorizationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppAuthorizationSummary(entry, context);
    });
  return retVal;
};

// de_AppBundle omitted.

// de_AppBundleSummary omitted.

// de_AppBundleSummaryList omitted.

// de_AuditLogDestinationConfiguration omitted.

// de_AuditLogProcessingConfiguration omitted.

// de_Destination omitted.

// de_DestinationConfiguration omitted.

// de_FirehoseStream omitted.

/**
 * deserializeAws_restJson1Ingestion
 */
const de_Ingestion = (output: any, context: __SerdeContext): Ingestion => {
  return take(output, {
    app: __expectString,
    appBundleArn: __expectString,
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ingestionType: __expectString,
    state: __expectString,
    tenantId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1IngestionDestination
 */
const de_IngestionDestination = (output: any, context: __SerdeContext): IngestionDestination => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    destinationConfiguration: (_: any) => _json(__expectUnion(_)),
    ingestionArn: __expectString,
    processingConfiguration: (_: any) => _json(__expectUnion(_)),
    status: __expectString,
    statusReason: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_IngestionDestinationList omitted.

// de_IngestionDestinationSummary omitted.

// de_IngestionList omitted.

// de_IngestionSummary omitted.

// de_ProcessingConfiguration omitted.

// de_S3Bucket omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TaskError omitted.

// de_Tenant omitted.

// de_UserAccessResultItem omitted.

// de_UserAccessResultsList omitted.

// de_UserAccessTaskItem omitted.

// de_UserAccessTasksList omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

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
