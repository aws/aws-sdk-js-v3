// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
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
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  CreateIdMappingWorkflowCommandInput,
  CreateIdMappingWorkflowCommandOutput,
} from "../commands/CreateIdMappingWorkflowCommand";
import {
  CreateMatchingWorkflowCommandInput,
  CreateMatchingWorkflowCommandOutput,
} from "../commands/CreateMatchingWorkflowCommand";
import {
  CreateSchemaMappingCommandInput,
  CreateSchemaMappingCommandOutput,
} from "../commands/CreateSchemaMappingCommand";
import {
  DeleteIdMappingWorkflowCommandInput,
  DeleteIdMappingWorkflowCommandOutput,
} from "../commands/DeleteIdMappingWorkflowCommand";
import {
  DeleteMatchingWorkflowCommandInput,
  DeleteMatchingWorkflowCommandOutput,
} from "../commands/DeleteMatchingWorkflowCommand";
import {
  DeleteSchemaMappingCommandInput,
  DeleteSchemaMappingCommandOutput,
} from "../commands/DeleteSchemaMappingCommand";
import { GetIdMappingJobCommandInput, GetIdMappingJobCommandOutput } from "../commands/GetIdMappingJobCommand";
import {
  GetIdMappingWorkflowCommandInput,
  GetIdMappingWorkflowCommandOutput,
} from "../commands/GetIdMappingWorkflowCommand";
import { GetMatchIdCommandInput, GetMatchIdCommandOutput } from "../commands/GetMatchIdCommand";
import { GetMatchingJobCommandInput, GetMatchingJobCommandOutput } from "../commands/GetMatchingJobCommand";
import {
  GetMatchingWorkflowCommandInput,
  GetMatchingWorkflowCommandOutput,
} from "../commands/GetMatchingWorkflowCommand";
import { GetProviderServiceCommandInput, GetProviderServiceCommandOutput } from "../commands/GetProviderServiceCommand";
import { GetSchemaMappingCommandInput, GetSchemaMappingCommandOutput } from "../commands/GetSchemaMappingCommand";
import { ListIdMappingJobsCommandInput, ListIdMappingJobsCommandOutput } from "../commands/ListIdMappingJobsCommand";
import {
  ListIdMappingWorkflowsCommandInput,
  ListIdMappingWorkflowsCommandOutput,
} from "../commands/ListIdMappingWorkflowsCommand";
import { ListMatchingJobsCommandInput, ListMatchingJobsCommandOutput } from "../commands/ListMatchingJobsCommand";
import {
  ListMatchingWorkflowsCommandInput,
  ListMatchingWorkflowsCommandOutput,
} from "../commands/ListMatchingWorkflowsCommand";
import {
  ListProviderServicesCommandInput,
  ListProviderServicesCommandOutput,
} from "../commands/ListProviderServicesCommand";
import { ListSchemaMappingsCommandInput, ListSchemaMappingsCommandOutput } from "../commands/ListSchemaMappingsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartIdMappingJobCommandInput, StartIdMappingJobCommandOutput } from "../commands/StartIdMappingJobCommand";
import { StartMatchingJobCommandInput, StartMatchingJobCommandOutput } from "../commands/StartMatchingJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateIdMappingWorkflowCommandInput,
  UpdateIdMappingWorkflowCommandOutput,
} from "../commands/UpdateIdMappingWorkflowCommand";
import {
  UpdateMatchingWorkflowCommandInput,
  UpdateMatchingWorkflowCommandOutput,
} from "../commands/UpdateMatchingWorkflowCommand";
import {
  UpdateSchemaMappingCommandInput,
  UpdateSchemaMappingCommandOutput,
} from "../commands/UpdateSchemaMappingCommand";
import { EntityResolutionServiceException as __BaseException } from "../models/EntityResolutionServiceException";
import {
  AccessDeniedException,
  ConflictException,
  ExceedsLimitException,
  IdMappingTechniques,
  IdMappingWorkflowInputSource,
  IdMappingWorkflowOutputSource,
  IdMappingWorkflowSummary,
  IncrementalRunConfig,
  InputSource,
  IntermediateSourceConfiguration,
  InternalServerException,
  JobSummary,
  MatchingWorkflowSummary,
  OutputAttribute,
  OutputSource,
  ProviderProperties,
  ResolutionTechniques,
  ResourceNotFoundException,
  Rule,
  RuleBasedProperties,
  SchemaInputAttribute,
  SchemaMappingSummary,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateIdMappingWorkflowCommand
 */
export const se_CreateIdMappingWorkflowCommand = async (
  input: CreateIdMappingWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/idmappingworkflows";
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      idMappingTechniques: (_) => se_IdMappingTechniques(_, context),
      inputSourceConfig: (_) => _json(_),
      outputSourceConfig: (_) => _json(_),
      roleArn: [],
      tags: (_) => _json(_),
      workflowName: [],
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
 * serializeAws_restJson1CreateMatchingWorkflowCommand
 */
export const se_CreateMatchingWorkflowCommand = async (
  input: CreateMatchingWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/matchingworkflows";
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      incrementalRunConfig: (_) => _json(_),
      inputSourceConfig: (_) => _json(_),
      outputSourceConfig: (_) => _json(_),
      resolutionTechniques: (_) => se_ResolutionTechniques(_, context),
      roleArn: [],
      tags: (_) => _json(_),
      workflowName: [],
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
 * serializeAws_restJson1CreateSchemaMappingCommand
 */
export const se_CreateSchemaMappingCommand = async (
  input: CreateSchemaMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schemas";
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      mappedInputFields: (_) => _json(_),
      schemaName: [],
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
 * serializeAws_restJson1DeleteIdMappingWorkflowCommand
 */
export const se_DeleteIdMappingWorkflowCommand = async (
  input: DeleteIdMappingWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/idmappingworkflows/{workflowName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
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
 * serializeAws_restJson1DeleteMatchingWorkflowCommand
 */
export const se_DeleteMatchingWorkflowCommand = async (
  input: DeleteMatchingWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/matchingworkflows/{workflowName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
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
 * serializeAws_restJson1DeleteSchemaMappingCommand
 */
export const se_DeleteSchemaMappingCommand = async (
  input: DeleteSchemaMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schemas/{schemaName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "schemaName", () => input.schemaName!, "{schemaName}", false);
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
 * serializeAws_restJson1GetIdMappingJobCommand
 */
export const se_GetIdMappingJobCommand = async (
  input: GetIdMappingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/idmappingworkflows/{workflowName}/jobs/{jobId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
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
 * serializeAws_restJson1GetIdMappingWorkflowCommand
 */
export const se_GetIdMappingWorkflowCommand = async (
  input: GetIdMappingWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/idmappingworkflows/{workflowName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
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
 * serializeAws_restJson1GetMatchIdCommand
 */
export const se_GetMatchIdCommand = async (
  input: GetMatchIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/matchingworkflows/{workflowName}/matches";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      record: (_) => _json(_),
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
 * serializeAws_restJson1GetMatchingJobCommand
 */
export const se_GetMatchingJobCommand = async (
  input: GetMatchingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/matchingworkflows/{workflowName}/jobs/{jobId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
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
 * serializeAws_restJson1GetMatchingWorkflowCommand
 */
export const se_GetMatchingWorkflowCommand = async (
  input: GetMatchingWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/matchingworkflows/{workflowName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
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
 * serializeAws_restJson1GetProviderServiceCommand
 */
export const se_GetProviderServiceCommand = async (
  input: GetProviderServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/providerservices/{providerName}/{providerServiceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "providerName",
    () => input.providerName!,
    "{providerName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "providerServiceName",
    () => input.providerServiceName!,
    "{providerServiceName}",
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
 * serializeAws_restJson1GetSchemaMappingCommand
 */
export const se_GetSchemaMappingCommand = async (
  input: GetSchemaMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schemas/{schemaName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "schemaName", () => input.schemaName!, "{schemaName}", false);
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
 * serializeAws_restJson1ListIdMappingJobsCommand
 */
export const se_ListIdMappingJobsCommand = async (
  input: ListIdMappingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/idmappingworkflows/{workflowName}/jobs";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListIdMappingWorkflowsCommand
 */
export const se_ListIdMappingWorkflowsCommand = async (
  input: ListIdMappingWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/idmappingworkflows";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListMatchingJobsCommand
 */
export const se_ListMatchingJobsCommand = async (
  input: ListMatchingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/matchingworkflows/{workflowName}/jobs";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListMatchingWorkflowsCommand
 */
export const se_ListMatchingWorkflowsCommand = async (
  input: ListMatchingWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/matchingworkflows";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1ListProviderServicesCommand
 */
export const se_ListProviderServicesCommand = async (
  input: ListProviderServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/providerservices";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    providerName: [, input.providerName!],
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
 * serializeAws_restJson1ListSchemaMappingsCommand
 */
export const se_ListSchemaMappingsCommand = async (
  input: ListSchemaMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schemas";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1StartIdMappingJobCommand
 */
export const se_StartIdMappingJobCommand = async (
  input: StartIdMappingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/idmappingworkflows/{workflowName}/jobs";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
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
 * serializeAws_restJson1StartMatchingJobCommand
 */
export const se_StartMatchingJobCommand = async (
  input: StartMatchingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/matchingworkflows/{workflowName}/jobs";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
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
 * serializeAws_restJson1UpdateIdMappingWorkflowCommand
 */
export const se_UpdateIdMappingWorkflowCommand = async (
  input: UpdateIdMappingWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/idmappingworkflows/{workflowName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      idMappingTechniques: (_) => se_IdMappingTechniques(_, context),
      inputSourceConfig: (_) => _json(_),
      outputSourceConfig: (_) => _json(_),
      roleArn: [],
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
 * serializeAws_restJson1UpdateMatchingWorkflowCommand
 */
export const se_UpdateMatchingWorkflowCommand = async (
  input: UpdateMatchingWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/matchingworkflows/{workflowName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "workflowName",
    () => input.workflowName!,
    "{workflowName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      incrementalRunConfig: (_) => _json(_),
      inputSourceConfig: (_) => _json(_),
      outputSourceConfig: (_) => _json(_),
      resolutionTechniques: (_) => se_ResolutionTechniques(_, context),
      roleArn: [],
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
 * serializeAws_restJson1UpdateSchemaMappingCommand
 */
export const se_UpdateSchemaMappingCommand = async (
  input: UpdateSchemaMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/schemas/{schemaName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "schemaName", () => input.schemaName!, "{schemaName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      mappedInputFields: (_) => _json(_),
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
 * deserializeAws_restJson1CreateIdMappingWorkflowCommand
 */
export const de_CreateIdMappingWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdMappingWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateIdMappingWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    idMappingTechniques: (_) => de_IdMappingTechniques(_, context),
    inputSourceConfig: _json,
    outputSourceConfig: _json,
    roleArn: __expectString,
    workflowArn: __expectString,
    workflowName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIdMappingWorkflowCommandError
 */
const de_CreateIdMappingWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdMappingWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.entityresolution#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ExceedsLimitException":
    case "com.amazonaws.entityresolution#ExceedsLimitException":
      throw await de_ExceedsLimitExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1CreateMatchingWorkflowCommand
 */
export const de_CreateMatchingWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMatchingWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMatchingWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    incrementalRunConfig: _json,
    inputSourceConfig: _json,
    outputSourceConfig: _json,
    resolutionTechniques: (_) => de_ResolutionTechniques(_, context),
    roleArn: __expectString,
    workflowArn: __expectString,
    workflowName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMatchingWorkflowCommandError
 */
const de_CreateMatchingWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMatchingWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.entityresolution#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ExceedsLimitException":
    case "com.amazonaws.entityresolution#ExceedsLimitException":
      throw await de_ExceedsLimitExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1CreateSchemaMappingCommand
 */
export const de_CreateSchemaMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSchemaMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    mappedInputFields: _json,
    schemaArn: __expectString,
    schemaName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSchemaMappingCommandError
 */
const de_CreateSchemaMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.entityresolution#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ExceedsLimitException":
    case "com.amazonaws.entityresolution#ExceedsLimitException":
      throw await de_ExceedsLimitExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1DeleteIdMappingWorkflowCommand
 */
export const de_DeleteIdMappingWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdMappingWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteIdMappingWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIdMappingWorkflowCommandError
 */
const de_DeleteIdMappingWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdMappingWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1DeleteMatchingWorkflowCommand
 */
export const de_DeleteMatchingWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMatchingWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteMatchingWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMatchingWorkflowCommandError
 */
const de_DeleteMatchingWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMatchingWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1DeleteSchemaMappingCommand
 */
export const de_DeleteSchemaMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSchemaMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSchemaMappingCommandError
 */
const de_DeleteSchemaMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.entityresolution#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1GetIdMappingJobCommand
 */
export const de_GetIdMappingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdMappingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIdMappingJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    errorDetails: _json,
    jobId: __expectString,
    metrics: _json,
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIdMappingJobCommandError
 */
const de_GetIdMappingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdMappingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1GetIdMappingWorkflowCommand
 */
export const de_GetIdMappingWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdMappingWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIdMappingWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    idMappingTechniques: (_) => de_IdMappingTechniques(_, context),
    inputSourceConfig: _json,
    outputSourceConfig: _json,
    roleArn: __expectString,
    tags: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workflowArn: __expectString,
    workflowName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIdMappingWorkflowCommandError
 */
const de_GetIdMappingWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdMappingWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1GetMatchIdCommand
 */
export const de_GetMatchIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMatchIdCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMatchIdCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    matchId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMatchIdCommandError
 */
const de_GetMatchIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMatchIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1GetMatchingJobCommand
 */
export const de_GetMatchingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMatchingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMatchingJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    errorDetails: _json,
    jobId: __expectString,
    metrics: _json,
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMatchingJobCommandError
 */
const de_GetMatchingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMatchingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1GetMatchingWorkflowCommand
 */
export const de_GetMatchingWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMatchingWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMatchingWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    incrementalRunConfig: _json,
    inputSourceConfig: _json,
    outputSourceConfig: _json,
    resolutionTechniques: (_) => de_ResolutionTechniques(_, context),
    roleArn: __expectString,
    tags: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workflowArn: __expectString,
    workflowName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMatchingWorkflowCommandError
 */
const de_GetMatchingWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMatchingWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1GetProviderServiceCommand
 */
export const de_GetProviderServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProviderServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetProviderServiceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    anonymizedOutput: __expectBoolean,
    providerConfigurationDefinition: (_) => de_Document(_, context),
    providerEndpointConfiguration: (_) => _json(__expectUnion(_)),
    providerEntityOutputDefinition: (_) => de_Document(_, context),
    providerIntermediateDataAccessConfiguration: _json,
    providerName: __expectString,
    providerServiceArn: __expectString,
    providerServiceDisplayName: __expectString,
    providerServiceName: __expectString,
    providerServiceType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProviderServiceCommandError
 */
const de_GetProviderServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProviderServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1GetSchemaMappingCommand
 */
export const de_GetSchemaMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSchemaMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    hasWorkflows: __expectBoolean,
    mappedInputFields: _json,
    schemaArn: __expectString,
    schemaName: __expectString,
    tags: _json,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSchemaMappingCommandError
 */
const de_GetSchemaMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1ListIdMappingJobsCommand
 */
export const de_ListIdMappingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdMappingJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIdMappingJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobs: (_) => de_JobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIdMappingJobsCommandError
 */
const de_ListIdMappingJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdMappingJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1ListIdMappingWorkflowsCommand
 */
export const de_ListIdMappingWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdMappingWorkflowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIdMappingWorkflowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workflowSummaries: (_) => de_IdMappingWorkflowList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIdMappingWorkflowsCommandError
 */
const de_ListIdMappingWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdMappingWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1ListMatchingJobsCommand
 */
export const de_ListMatchingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMatchingJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMatchingJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobs: (_) => de_JobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMatchingJobsCommandError
 */
const de_ListMatchingJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMatchingJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1ListMatchingWorkflowsCommand
 */
export const de_ListMatchingWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMatchingWorkflowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMatchingWorkflowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workflowSummaries: (_) => de_MatchingWorkflowList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMatchingWorkflowsCommandError
 */
const de_ListMatchingWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMatchingWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1ListProviderServicesCommand
 */
export const de_ListProviderServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProviderServicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProviderServicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    providerServiceSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProviderServicesCommandError
 */
const de_ListProviderServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProviderServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1ListSchemaMappingsCommand
 */
export const de_ListSchemaMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSchemaMappingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    schemaList: (_) => de_SchemaMappingList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSchemaMappingsCommandError
 */
const de_ListSchemaMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1StartIdMappingJobCommand
 */
export const de_StartIdMappingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartIdMappingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartIdMappingJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartIdMappingJobCommandError
 */
const de_StartIdMappingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartIdMappingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.entityresolution#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ExceedsLimitException":
    case "com.amazonaws.entityresolution#ExceedsLimitException":
      throw await de_ExceedsLimitExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1StartMatchingJobCommand
 */
export const de_StartMatchingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMatchingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartMatchingJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartMatchingJobCommandError
 */
const de_StartMatchingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMatchingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.entityresolution#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ExceedsLimitException":
    case "com.amazonaws.entityresolution#ExceedsLimitException":
      throw await de_ExceedsLimitExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
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
 * deserializeAws_restJson1UpdateIdMappingWorkflowCommand
 */
export const de_UpdateIdMappingWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdMappingWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateIdMappingWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    idMappingTechniques: (_) => de_IdMappingTechniques(_, context),
    inputSourceConfig: _json,
    outputSourceConfig: _json,
    roleArn: __expectString,
    workflowArn: __expectString,
    workflowName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIdMappingWorkflowCommandError
 */
const de_UpdateIdMappingWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdMappingWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1UpdateMatchingWorkflowCommand
 */
export const de_UpdateMatchingWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMatchingWorkflowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMatchingWorkflowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    incrementalRunConfig: _json,
    inputSourceConfig: _json,
    outputSourceConfig: _json,
    resolutionTechniques: (_) => de_ResolutionTechniques(_, context),
    roleArn: __expectString,
    workflowName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMatchingWorkflowCommandError
 */
const de_UpdateMatchingWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMatchingWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
 * deserializeAws_restJson1UpdateSchemaMappingCommand
 */
export const de_UpdateSchemaMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSchemaMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    description: __expectString,
    mappedInputFields: _json,
    schemaArn: __expectString,
    schemaName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSchemaMappingCommandError
 */
const de_UpdateSchemaMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.entityresolution#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.entityresolution#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.entityresolution#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.entityresolution#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.entityresolution#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.entityresolution#ValidationException":
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
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ExceedsLimitExceptionRes
 */
const de_ExceedsLimitExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExceedsLimitException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaName: __expectString,
    quotaValue: __expectInt32,
  });
  Object.assign(contents, doc);
  const exception = new ExceedsLimitException({
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
  const contents: any = map({});
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
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
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
    message: __expectString,
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1IdMappingTechniques
 */
const se_IdMappingTechniques = (input: IdMappingTechniques, context: __SerdeContext): any => {
  return take(input, {
    idMappingType: [],
    providerProperties: (_) => se_ProviderProperties(_, context),
  });
};

// se_IdMappingWorkflowInputSource omitted.

// se_IdMappingWorkflowInputSourceConfig omitted.

// se_IdMappingWorkflowOutputSource omitted.

// se_IdMappingWorkflowOutputSourceConfig omitted.

// se_IncrementalRunConfig omitted.

// se_InputSource omitted.

// se_InputSourceConfig omitted.

// se_IntermediateSourceConfiguration omitted.

// se_MatchingKeys omitted.

// se_OutputAttribute omitted.

// se_OutputAttributes omitted.

// se_OutputSource omitted.

// se_OutputSourceConfig omitted.

/**
 * serializeAws_restJson1ProviderProperties
 */
const se_ProviderProperties = (input: ProviderProperties, context: __SerdeContext): any => {
  return take(input, {
    intermediateSourceConfiguration: _json,
    providerConfiguration: (_) => se_Document(_, context),
    providerServiceArn: [],
  });
};

// se_RecordAttributeMap omitted.

/**
 * serializeAws_restJson1ResolutionTechniques
 */
const se_ResolutionTechniques = (input: ResolutionTechniques, context: __SerdeContext): any => {
  return take(input, {
    providerProperties: (_) => se_ProviderProperties(_, context),
    resolutionType: [],
    ruleBasedProperties: _json,
  });
};

// se_Rule omitted.

// se_RuleBasedProperties omitted.

// se_RuleList omitted.

// se_SchemaInputAttribute omitted.

// se_SchemaInputAttributes omitted.

// se_TagMap omitted.

/**
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// de_AwsAccountIdList omitted.

// de_ErrorDetails omitted.

// de_IdMappingJobMetrics omitted.

/**
 * deserializeAws_restJson1IdMappingTechniques
 */
const de_IdMappingTechniques = (output: any, context: __SerdeContext): IdMappingTechniques => {
  return take(output, {
    idMappingType: __expectString,
    providerProperties: (_: any) => de_ProviderProperties(_, context),
  }) as any;
};

// de_IdMappingWorkflowInputSource omitted.

// de_IdMappingWorkflowInputSourceConfig omitted.

/**
 * deserializeAws_restJson1IdMappingWorkflowList
 */
const de_IdMappingWorkflowList = (output: any, context: __SerdeContext): IdMappingWorkflowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IdMappingWorkflowSummary(entry, context);
    });
  return retVal;
};

// de_IdMappingWorkflowOutputSource omitted.

// de_IdMappingWorkflowOutputSourceConfig omitted.

/**
 * deserializeAws_restJson1IdMappingWorkflowSummary
 */
const de_IdMappingWorkflowSummary = (output: any, context: __SerdeContext): IdMappingWorkflowSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workflowArn: __expectString,
    workflowName: __expectString,
  }) as any;
};

// de_IncrementalRunConfig omitted.

// de_InputSource omitted.

// de_InputSourceConfig omitted.

// de_IntermediateSourceConfiguration omitted.

/**
 * deserializeAws_restJson1JobList
 */
const de_JobList = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobSummary(entry, context);
    });
  return retVal;
};

// de_JobMetrics omitted.

/**
 * deserializeAws_restJson1JobSummary
 */
const de_JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    jobId: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

// de_MatchingKeys omitted.

/**
 * deserializeAws_restJson1MatchingWorkflowList
 */
const de_MatchingWorkflowList = (output: any, context: __SerdeContext): MatchingWorkflowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MatchingWorkflowSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MatchingWorkflowSummary
 */
const de_MatchingWorkflowSummary = (output: any, context: __SerdeContext): MatchingWorkflowSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resolutionType: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workflowArn: __expectString,
    workflowName: __expectString,
  }) as any;
};

// de_OutputAttribute omitted.

// de_OutputAttributes omitted.

// de_OutputSource omitted.

// de_OutputSourceConfig omitted.

// de_ProviderEndpointConfiguration omitted.

// de_ProviderIntermediateDataAccessConfiguration omitted.

// de_ProviderMarketplaceConfiguration omitted.

/**
 * deserializeAws_restJson1ProviderProperties
 */
const de_ProviderProperties = (output: any, context: __SerdeContext): ProviderProperties => {
  return take(output, {
    intermediateSourceConfiguration: _json,
    providerConfiguration: (_: any) => de_Document(_, context),
    providerServiceArn: __expectString,
  }) as any;
};

// de_ProviderServiceList omitted.

// de_ProviderServiceSummary omitted.

// de_RequiredBucketActionsList omitted.

/**
 * deserializeAws_restJson1ResolutionTechniques
 */
const de_ResolutionTechniques = (output: any, context: __SerdeContext): ResolutionTechniques => {
  return take(output, {
    providerProperties: (_: any) => de_ProviderProperties(_, context),
    resolutionType: __expectString,
    ruleBasedProperties: _json,
  }) as any;
};

// de_Rule omitted.

// de_RuleBasedProperties omitted.

// de_RuleList omitted.

// de_SchemaInputAttribute omitted.

// de_SchemaInputAttributes omitted.

/**
 * deserializeAws_restJson1SchemaMappingList
 */
const de_SchemaMappingList = (output: any, context: __SerdeContext): SchemaMappingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SchemaMappingSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SchemaMappingSummary
 */
const de_SchemaMappingSummary = (output: any, context: __SerdeContext): SchemaMappingSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    hasWorkflows: __expectBoolean,
    schemaArn: __expectString,
    schemaName: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_TagMap omitted.

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
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
