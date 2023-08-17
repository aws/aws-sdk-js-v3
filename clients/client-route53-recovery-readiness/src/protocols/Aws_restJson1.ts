// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateCellCommandInput, CreateCellCommandOutput } from "../commands/CreateCellCommand";
import {
  CreateCrossAccountAuthorizationCommandInput,
  CreateCrossAccountAuthorizationCommandOutput,
} from "../commands/CreateCrossAccountAuthorizationCommand";
import {
  CreateReadinessCheckCommandInput,
  CreateReadinessCheckCommandOutput,
} from "../commands/CreateReadinessCheckCommand";
import {
  CreateRecoveryGroupCommandInput,
  CreateRecoveryGroupCommandOutput,
} from "../commands/CreateRecoveryGroupCommand";
import { CreateResourceSetCommandInput, CreateResourceSetCommandOutput } from "../commands/CreateResourceSetCommand";
import { DeleteCellCommandInput, DeleteCellCommandOutput } from "../commands/DeleteCellCommand";
import {
  DeleteCrossAccountAuthorizationCommandInput,
  DeleteCrossAccountAuthorizationCommandOutput,
} from "../commands/DeleteCrossAccountAuthorizationCommand";
import {
  DeleteReadinessCheckCommandInput,
  DeleteReadinessCheckCommandOutput,
} from "../commands/DeleteReadinessCheckCommand";
import {
  DeleteRecoveryGroupCommandInput,
  DeleteRecoveryGroupCommandOutput,
} from "../commands/DeleteRecoveryGroupCommand";
import { DeleteResourceSetCommandInput, DeleteResourceSetCommandOutput } from "../commands/DeleteResourceSetCommand";
import {
  GetArchitectureRecommendationsCommandInput,
  GetArchitectureRecommendationsCommandOutput,
} from "../commands/GetArchitectureRecommendationsCommand";
import { GetCellCommandInput, GetCellCommandOutput } from "../commands/GetCellCommand";
import {
  GetCellReadinessSummaryCommandInput,
  GetCellReadinessSummaryCommandOutput,
} from "../commands/GetCellReadinessSummaryCommand";
import { GetReadinessCheckCommandInput, GetReadinessCheckCommandOutput } from "../commands/GetReadinessCheckCommand";
import {
  GetReadinessCheckResourceStatusCommandInput,
  GetReadinessCheckResourceStatusCommandOutput,
} from "../commands/GetReadinessCheckResourceStatusCommand";
import {
  GetReadinessCheckStatusCommandInput,
  GetReadinessCheckStatusCommandOutput,
} from "../commands/GetReadinessCheckStatusCommand";
import { GetRecoveryGroupCommandInput, GetRecoveryGroupCommandOutput } from "../commands/GetRecoveryGroupCommand";
import {
  GetRecoveryGroupReadinessSummaryCommandInput,
  GetRecoveryGroupReadinessSummaryCommandOutput,
} from "../commands/GetRecoveryGroupReadinessSummaryCommand";
import { GetResourceSetCommandInput, GetResourceSetCommandOutput } from "../commands/GetResourceSetCommand";
import { ListCellsCommandInput, ListCellsCommandOutput } from "../commands/ListCellsCommand";
import {
  ListCrossAccountAuthorizationsCommandInput,
  ListCrossAccountAuthorizationsCommandOutput,
} from "../commands/ListCrossAccountAuthorizationsCommand";
import {
  ListReadinessChecksCommandInput,
  ListReadinessChecksCommandOutput,
} from "../commands/ListReadinessChecksCommand";
import { ListRecoveryGroupsCommandInput, ListRecoveryGroupsCommandOutput } from "../commands/ListRecoveryGroupsCommand";
import { ListResourceSetsCommandInput, ListResourceSetsCommandOutput } from "../commands/ListResourceSetsCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import {
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "../commands/ListTagsForResourcesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCellCommandInput, UpdateCellCommandOutput } from "../commands/UpdateCellCommand";
import {
  UpdateReadinessCheckCommandInput,
  UpdateReadinessCheckCommandOutput,
} from "../commands/UpdateReadinessCheckCommand";
import {
  UpdateRecoveryGroupCommandInput,
  UpdateRecoveryGroupCommandOutput,
} from "../commands/UpdateRecoveryGroupCommand";
import { UpdateResourceSetCommandInput, UpdateResourceSetCommandOutput } from "../commands/UpdateResourceSetCommand";
import {
  AccessDeniedException,
  CellOutput,
  ConflictException,
  DNSTargetResource,
  InternalServerException,
  ListRulesOutput,
  Message,
  NLBResource,
  R53ResourceRecord,
  ReadinessCheckOutput,
  ReadinessCheckSummary,
  Recommendation,
  RecoveryGroupOutput,
  Resource,
  ResourceNotFoundException,
  ResourceResult,
  ResourceSetOutput,
  RuleResult,
  TargetResource,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { Route53RecoveryReadinessServiceException as __BaseException } from "../models/Route53RecoveryReadinessServiceException";

/**
 * serializeAws_restJson1CreateCellCommand
 */
export const se_CreateCellCommand = async (
  input: CreateCellCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cells";
  let body: any;
  body = JSON.stringify(
    take(input, {
      cellName: [, , `CellName`],
      cells: [, (_) => _json(_), `Cells`],
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
 * serializeAws_restJson1CreateCrossAccountAuthorizationCommand
 */
export const se_CreateCrossAccountAuthorizationCommand = async (
  input: CreateCrossAccountAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crossaccountauthorizations";
  let body: any;
  body = JSON.stringify(
    take(input, {
      crossAccountAuthorization: [, , `CrossAccountAuthorization`],
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
 * serializeAws_restJson1CreateReadinessCheckCommand
 */
export const se_CreateReadinessCheckCommand = async (
  input: CreateReadinessCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/readinesschecks";
  let body: any;
  body = JSON.stringify(
    take(input, {
      readinessCheckName: [, , `ReadinessCheckName`],
      resourceSetName: [, , `ResourceSetName`],
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
 * serializeAws_restJson1CreateRecoveryGroupCommand
 */
export const se_CreateRecoveryGroupCommand = async (
  input: CreateRecoveryGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recoverygroups";
  let body: any;
  body = JSON.stringify(
    take(input, {
      cells: [, (_) => _json(_), `Cells`],
      recoveryGroupName: [, , `RecoveryGroupName`],
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
 * serializeAws_restJson1CreateResourceSetCommand
 */
export const se_CreateResourceSetCommand = async (
  input: CreateResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcesets";
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceSetName: [, , `ResourceSetName`],
      resourceSetType: [, , `ResourceSetType`],
      resources: [, (_) => se___listOfResource(_, context), `Resources`],
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
 * serializeAws_restJson1DeleteCellCommand
 */
export const se_DeleteCellCommand = async (
  input: DeleteCellCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cells/{CellName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "CellName", () => input.CellName!, "{CellName}", false);
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
 * serializeAws_restJson1DeleteCrossAccountAuthorizationCommand
 */
export const se_DeleteCrossAccountAuthorizationCommand = async (
  input: DeleteCrossAccountAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/crossaccountauthorizations/{CrossAccountAuthorization}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CrossAccountAuthorization",
    () => input.CrossAccountAuthorization!,
    "{CrossAccountAuthorization}",
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
 * serializeAws_restJson1DeleteReadinessCheckCommand
 */
export const se_DeleteReadinessCheckCommand = async (
  input: DeleteReadinessCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/readinesschecks/{ReadinessCheckName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReadinessCheckName",
    () => input.ReadinessCheckName!,
    "{ReadinessCheckName}",
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
 * serializeAws_restJson1DeleteRecoveryGroupCommand
 */
export const se_DeleteRecoveryGroupCommand = async (
  input: DeleteRecoveryGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recoverygroups/{RecoveryGroupName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecoveryGroupName",
    () => input.RecoveryGroupName!,
    "{RecoveryGroupName}",
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
 * serializeAws_restJson1DeleteResourceSetCommand
 */
export const se_DeleteResourceSetCommand = async (
  input: DeleteResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcesets/{ResourceSetName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceSetName",
    () => input.ResourceSetName!,
    "{ResourceSetName}",
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
 * serializeAws_restJson1GetArchitectureRecommendationsCommand
 */
export const se_GetArchitectureRecommendationsCommand = async (
  input: GetArchitectureRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/recoverygroups/{RecoveryGroupName}/architectureRecommendations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecoveryGroupName",
    () => input.RecoveryGroupName!,
    "{RecoveryGroupName}",
    false
  );
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
 * serializeAws_restJson1GetCellCommand
 */
export const se_GetCellCommand = async (
  input: GetCellCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cells/{CellName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "CellName", () => input.CellName!, "{CellName}", false);
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
 * serializeAws_restJson1GetCellReadinessSummaryCommand
 */
export const se_GetCellReadinessSummaryCommand = async (
  input: GetCellReadinessSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cellreadiness/{CellName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "CellName", () => input.CellName!, "{CellName}", false);
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
 * serializeAws_restJson1GetReadinessCheckCommand
 */
export const se_GetReadinessCheckCommand = async (
  input: GetReadinessCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/readinesschecks/{ReadinessCheckName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReadinessCheckName",
    () => input.ReadinessCheckName!,
    "{ReadinessCheckName}",
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
 * serializeAws_restJson1GetReadinessCheckResourceStatusCommand
 */
export const se_GetReadinessCheckResourceStatusCommand = async (
  input: GetReadinessCheckResourceStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/readinesschecks/{ReadinessCheckName}/resource/{ResourceIdentifier}/status";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReadinessCheckName",
    () => input.ReadinessCheckName!,
    "{ReadinessCheckName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceIdentifier",
    () => input.ResourceIdentifier!,
    "{ResourceIdentifier}",
    false
  );
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
 * serializeAws_restJson1GetReadinessCheckStatusCommand
 */
export const se_GetReadinessCheckStatusCommand = async (
  input: GetReadinessCheckStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/readinesschecks/{ReadinessCheckName}/status";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReadinessCheckName",
    () => input.ReadinessCheckName!,
    "{ReadinessCheckName}",
    false
  );
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
 * serializeAws_restJson1GetRecoveryGroupCommand
 */
export const se_GetRecoveryGroupCommand = async (
  input: GetRecoveryGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recoverygroups/{RecoveryGroupName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecoveryGroupName",
    () => input.RecoveryGroupName!,
    "{RecoveryGroupName}",
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
 * serializeAws_restJson1GetRecoveryGroupReadinessSummaryCommand
 */
export const se_GetRecoveryGroupReadinessSummaryCommand = async (
  input: GetRecoveryGroupReadinessSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/recoverygroupreadiness/{RecoveryGroupName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecoveryGroupName",
    () => input.RecoveryGroupName!,
    "{RecoveryGroupName}",
    false
  );
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
 * serializeAws_restJson1GetResourceSetCommand
 */
export const se_GetResourceSetCommand = async (
  input: GetResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcesets/{ResourceSetName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceSetName",
    () => input.ResourceSetName!,
    "{ResourceSetName}",
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
 * serializeAws_restJson1ListCellsCommand
 */
export const se_ListCellsCommand = async (
  input: ListCellsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cells";
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
 * serializeAws_restJson1ListCrossAccountAuthorizationsCommand
 */
export const se_ListCrossAccountAuthorizationsCommand = async (
  input: ListCrossAccountAuthorizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crossaccountauthorizations";
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
 * serializeAws_restJson1ListReadinessChecksCommand
 */
export const se_ListReadinessChecksCommand = async (
  input: ListReadinessChecksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/readinesschecks";
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
 * serializeAws_restJson1ListRecoveryGroupsCommand
 */
export const se_ListRecoveryGroupsCommand = async (
  input: ListRecoveryGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recoverygroups";
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
 * serializeAws_restJson1ListResourceSetsCommand
 */
export const se_ListResourceSetsCommand = async (
  input: ListResourceSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcesets";
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
 * serializeAws_restJson1ListRulesCommand
 */
export const se_ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    resourceType: [, input.ResourceType!],
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
 * serializeAws_restJson1ListTagsForResourcesCommand
 */
export const se_ListTagsForResourcesCommand = async (
  input: ListTagsForResourcesCommandInput,
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
 * serializeAws_restJson1UpdateCellCommand
 */
export const se_UpdateCellCommand = async (
  input: UpdateCellCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cells/{CellName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "CellName", () => input.CellName!, "{CellName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      cells: [, (_) => _json(_), `Cells`],
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
 * serializeAws_restJson1UpdateReadinessCheckCommand
 */
export const se_UpdateReadinessCheckCommand = async (
  input: UpdateReadinessCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/readinesschecks/{ReadinessCheckName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReadinessCheckName",
    () => input.ReadinessCheckName!,
    "{ReadinessCheckName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceSetName: [, , `ResourceSetName`],
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
 * serializeAws_restJson1UpdateRecoveryGroupCommand
 */
export const se_UpdateRecoveryGroupCommand = async (
  input: UpdateRecoveryGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recoverygroups/{RecoveryGroupName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecoveryGroupName",
    () => input.RecoveryGroupName!,
    "{RecoveryGroupName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      cells: [, (_) => _json(_), `Cells`],
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
 * serializeAws_restJson1UpdateResourceSetCommand
 */
export const se_UpdateResourceSetCommand = async (
  input: UpdateResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcesets/{ResourceSetName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceSetName",
    () => input.ResourceSetName!,
    "{ResourceSetName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceSetType: [, , `ResourceSetType`],
      resources: [, (_) => se___listOfResource(_, context), `Resources`],
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
 * deserializeAws_restJson1CreateCellCommand
 */
export const de_CreateCellCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCellCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCellCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CellArn: [, __expectString, `cellArn`],
    CellName: [, __expectString, `cellName`],
    Cells: [, _json, `cells`],
    ParentReadinessScopes: [, _json, `parentReadinessScopes`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCellCommandError
 */
const de_CreateCellCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCellCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53recoveryreadiness#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1CreateCrossAccountAuthorizationCommand
 */
export const de_CreateCrossAccountAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCrossAccountAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCrossAccountAuthorizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CrossAccountAuthorization: [, __expectString, `crossAccountAuthorization`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCrossAccountAuthorizationCommandError
 */
const de_CreateCrossAccountAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCrossAccountAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53recoveryreadiness#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1CreateReadinessCheckCommand
 */
export const de_CreateReadinessCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReadinessCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateReadinessCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReadinessCheckArn: [, __expectString, `readinessCheckArn`],
    ReadinessCheckName: [, __expectString, `readinessCheckName`],
    ResourceSet: [, __expectString, `resourceSet`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateReadinessCheckCommandError
 */
const de_CreateReadinessCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReadinessCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53recoveryreadiness#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1CreateRecoveryGroupCommand
 */
export const de_CreateRecoveryGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecoveryGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateRecoveryGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Cells: [, _json, `cells`],
    RecoveryGroupArn: [, __expectString, `recoveryGroupArn`],
    RecoveryGroupName: [, __expectString, `recoveryGroupName`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRecoveryGroupCommandError
 */
const de_CreateRecoveryGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecoveryGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53recoveryreadiness#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1CreateResourceSetCommand
 */
export const de_CreateResourceSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateResourceSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ResourceSetArn: [, __expectString, `resourceSetArn`],
    ResourceSetName: [, __expectString, `resourceSetName`],
    ResourceSetType: [, __expectString, `resourceSetType`],
    Resources: [, (_) => de___listOfResource(_, context), `resources`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateResourceSetCommandError
 */
const de_CreateResourceSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53recoveryreadiness#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1DeleteCellCommand
 */
export const de_DeleteCellCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCellCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteCellCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCellCommandError
 */
const de_DeleteCellCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCellCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1DeleteCrossAccountAuthorizationCommand
 */
export const de_DeleteCrossAccountAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrossAccountAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCrossAccountAuthorizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCrossAccountAuthorizationCommandError
 */
const de_DeleteCrossAccountAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrossAccountAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1DeleteReadinessCheckCommand
 */
export const de_DeleteReadinessCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReadinessCheckCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteReadinessCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteReadinessCheckCommandError
 */
const de_DeleteReadinessCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReadinessCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1DeleteRecoveryGroupCommand
 */
export const de_DeleteRecoveryGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteRecoveryGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRecoveryGroupCommandError
 */
const de_DeleteRecoveryGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1DeleteResourceSetCommand
 */
export const de_DeleteResourceSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteResourceSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourceSetCommandError
 */
const de_DeleteResourceSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1GetArchitectureRecommendationsCommand
 */
export const de_GetArchitectureRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchitectureRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetArchitectureRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LastAuditTimestamp: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastAuditTimestamp`],
    NextToken: [, __expectString, `nextToken`],
    Recommendations: [, (_) => de___listOfRecommendation(_, context), `recommendations`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetArchitectureRecommendationsCommandError
 */
const de_GetArchitectureRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchitectureRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1GetCellCommand
 */
export const de_GetCellCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCellCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCellCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CellArn: [, __expectString, `cellArn`],
    CellName: [, __expectString, `cellName`],
    Cells: [, _json, `cells`],
    ParentReadinessScopes: [, _json, `parentReadinessScopes`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCellCommandError
 */
const de_GetCellCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCellCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1GetCellReadinessSummaryCommand
 */
export const de_GetCellReadinessSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCellReadinessSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCellReadinessSummaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Readiness: [, __expectString, `readiness`],
    ReadinessChecks: [, (_) => de___listOfReadinessCheckSummary(_, context), `readinessChecks`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCellReadinessSummaryCommandError
 */
const de_GetCellReadinessSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCellReadinessSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1GetReadinessCheckCommand
 */
export const de_GetReadinessCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReadinessCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReadinessCheckArn: [, __expectString, `readinessCheckArn`],
    ReadinessCheckName: [, __expectString, `readinessCheckName`],
    ResourceSet: [, __expectString, `resourceSet`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetReadinessCheckCommandError
 */
const de_GetReadinessCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1GetReadinessCheckResourceStatusCommand
 */
export const de_GetReadinessCheckResourceStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckResourceStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReadinessCheckResourceStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Readiness: [, __expectString, `readiness`],
    Rules: [, (_) => de___listOfRuleResult(_, context), `rules`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetReadinessCheckResourceStatusCommandError
 */
const de_GetReadinessCheckResourceStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckResourceStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1GetReadinessCheckStatusCommand
 */
export const de_GetReadinessCheckStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReadinessCheckStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Messages: [, (_) => de___listOfMessage(_, context), `messages`],
    NextToken: [, __expectString, `nextToken`],
    Readiness: [, __expectString, `readiness`],
    Resources: [, (_) => de___listOfResourceResult(_, context), `resources`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetReadinessCheckStatusCommandError
 */
const de_GetReadinessCheckStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1GetRecoveryGroupCommand
 */
export const de_GetRecoveryGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRecoveryGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Cells: [, _json, `cells`],
    RecoveryGroupArn: [, __expectString, `recoveryGroupArn`],
    RecoveryGroupName: [, __expectString, `recoveryGroupName`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRecoveryGroupCommandError
 */
const de_GetRecoveryGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1GetRecoveryGroupReadinessSummaryCommand
 */
export const de_GetRecoveryGroupReadinessSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryGroupReadinessSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRecoveryGroupReadinessSummaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Readiness: [, __expectString, `readiness`],
    ReadinessChecks: [, (_) => de___listOfReadinessCheckSummary(_, context), `readinessChecks`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRecoveryGroupReadinessSummaryCommandError
 */
const de_GetRecoveryGroupReadinessSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryGroupReadinessSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1GetResourceSetCommand
 */
export const de_GetResourceSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourceSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ResourceSetArn: [, __expectString, `resourceSetArn`],
    ResourceSetName: [, __expectString, `resourceSetName`],
    ResourceSetType: [, __expectString, `resourceSetType`],
    Resources: [, (_) => de___listOfResource(_, context), `resources`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceSetCommandError
 */
const de_GetResourceSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1ListCellsCommand
 */
export const de_ListCellsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCellsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCellsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Cells: [, (_) => de___listOfCellOutput(_, context), `cells`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCellsCommandError
 */
const de_ListCellsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCellsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1ListCrossAccountAuthorizationsCommand
 */
export const de_ListCrossAccountAuthorizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrossAccountAuthorizationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCrossAccountAuthorizationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CrossAccountAuthorizations: [, _json, `crossAccountAuthorizations`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCrossAccountAuthorizationsCommandError
 */
const de_ListCrossAccountAuthorizationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrossAccountAuthorizationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1ListReadinessChecksCommand
 */
export const de_ListReadinessChecksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadinessChecksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReadinessChecksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    ReadinessChecks: [, (_) => de___listOfReadinessCheckOutput(_, context), `readinessChecks`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListReadinessChecksCommandError
 */
const de_ListReadinessChecksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadinessChecksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1ListRecoveryGroupsCommand
 */
export const de_ListRecoveryGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRecoveryGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    RecoveryGroups: [, (_) => de___listOfRecoveryGroupOutput(_, context), `recoveryGroups`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRecoveryGroupsCommandError
 */
const de_ListRecoveryGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1ListResourceSetsCommand
 */
export const de_ListResourceSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResourceSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    ResourceSets: [, (_) => de___listOfResourceSetOutput(_, context), `resourceSets`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceSetsCommandError
 */
const de_ListResourceSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1ListRulesCommand
 */
export const de_ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Rules: [, (_) => de___listOfListRulesOutput(_, context), `rules`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRulesCommandError
 */
const de_ListRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1ListTagsForResourcesCommand
 */
export const de_ListTagsForResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourcesCommandError(output, context);
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
 * deserializeAws_restJson1ListTagsForResourcesCommandError
 */
const de_ListTagsForResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1UpdateCellCommand
 */
export const de_UpdateCellCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCellCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCellCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CellArn: [, __expectString, `cellArn`],
    CellName: [, __expectString, `cellName`],
    Cells: [, _json, `cells`],
    ParentReadinessScopes: [, _json, `parentReadinessScopes`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCellCommandError
 */
const de_UpdateCellCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCellCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1UpdateReadinessCheckCommand
 */
export const de_UpdateReadinessCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReadinessCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateReadinessCheckCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReadinessCheckArn: [, __expectString, `readinessCheckArn`],
    ReadinessCheckName: [, __expectString, `readinessCheckName`],
    ResourceSet: [, __expectString, `resourceSet`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReadinessCheckCommandError
 */
const de_UpdateReadinessCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReadinessCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1UpdateRecoveryGroupCommand
 */
export const de_UpdateRecoveryGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRecoveryGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Cells: [, _json, `cells`],
    RecoveryGroupArn: [, __expectString, `recoveryGroupArn`],
    RecoveryGroupName: [, __expectString, `recoveryGroupName`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRecoveryGroupCommandError
 */
const de_UpdateRecoveryGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
 * deserializeAws_restJson1UpdateResourceSetCommand
 */
export const de_UpdateResourceSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateResourceSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ResourceSetArn: [, __expectString, `resourceSetArn`],
    ResourceSetName: [, __expectString, `resourceSetName`],
    ResourceSetType: [, __expectString, `resourceSetType`],
    Resources: [, (_) => de___listOfResource(_, context), `resources`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceSetCommandError
 */
const de_UpdateResourceSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
    Message: [, __expectString, `message`],
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
    Message: [, __expectString, `message`],
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
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
    Message: [, __expectString, `message`],
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
    Message: [, __expectString, `message`],
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
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOf__string omitted.

/**
 * serializeAws_restJson1__listOfResource
 */
const se___listOfResource = (input: Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Resource(entry, context);
    });
};

/**
 * serializeAws_restJson1DNSTargetResource
 */
const se_DNSTargetResource = (input: DNSTargetResource, context: __SerdeContext): any => {
  return take(input, {
    domainName: [, , `DomainName`],
    hostedZoneArn: [, , `HostedZoneArn`],
    recordSetId: [, , `RecordSetId`],
    recordType: [, , `RecordType`],
    targetResource: [, (_) => se_TargetResource(_, context), `TargetResource`],
  });
};

/**
 * serializeAws_restJson1NLBResource
 */
const se_NLBResource = (input: NLBResource, context: __SerdeContext): any => {
  return take(input, {
    arn: [, , `Arn`],
  });
};

/**
 * serializeAws_restJson1R53ResourceRecord
 */
const se_R53ResourceRecord = (input: R53ResourceRecord, context: __SerdeContext): any => {
  return take(input, {
    domainName: [, , `DomainName`],
    recordSetId: [, , `RecordSetId`],
  });
};

/**
 * serializeAws_restJson1Resource
 */
const se_Resource = (input: Resource, context: __SerdeContext): any => {
  return take(input, {
    componentId: [, , `ComponentId`],
    dnsTargetResource: [, (_) => se_DNSTargetResource(_, context), `DnsTargetResource`],
    readinessScopes: [, _json, `ReadinessScopes`],
    resourceArn: [, , `ResourceArn`],
  });
};

// se_Tags omitted.

/**
 * serializeAws_restJson1TargetResource
 */
const se_TargetResource = (input: TargetResource, context: __SerdeContext): any => {
  return take(input, {
    nLBResource: [, (_) => se_NLBResource(_, context), `NLBResource`],
    r53Resource: [, (_) => se_R53ResourceRecord(_, context), `R53Resource`],
  });
};

// de___listOf__string omitted.

/**
 * deserializeAws_restJson1__listOfCellOutput
 */
const de___listOfCellOutput = (output: any, context: __SerdeContext): CellOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CellOutput(entry, context);
    });
  return retVal;
};

// de___listOfCrossAccountAuthorization omitted.

/**
 * deserializeAws_restJson1__listOfListRulesOutput
 */
const de___listOfListRulesOutput = (output: any, context: __SerdeContext): ListRulesOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListRulesOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMessage
 */
const de___listOfMessage = (output: any, context: __SerdeContext): Message[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Message(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfReadinessCheckOutput
 */
const de___listOfReadinessCheckOutput = (output: any, context: __SerdeContext): ReadinessCheckOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReadinessCheckOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfReadinessCheckSummary
 */
const de___listOfReadinessCheckSummary = (output: any, context: __SerdeContext): ReadinessCheckSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReadinessCheckSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfRecommendation
 */
const de___listOfRecommendation = (output: any, context: __SerdeContext): Recommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Recommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfRecoveryGroupOutput
 */
const de___listOfRecoveryGroupOutput = (output: any, context: __SerdeContext): RecoveryGroupOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecoveryGroupOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfResource
 */
const de___listOfResource = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfResourceResult
 */
const de___listOfResourceResult = (output: any, context: __SerdeContext): ResourceResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfResourceSetOutput
 */
const de___listOfResourceSetOutput = (output: any, context: __SerdeContext): ResourceSetOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceSetOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfRuleResult
 */
const de___listOfRuleResult = (output: any, context: __SerdeContext): RuleResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RuleResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CellOutput
 */
const de_CellOutput = (output: any, context: __SerdeContext): CellOutput => {
  return take(output, {
    CellArn: [, __expectString, `cellArn`],
    CellName: [, __expectString, `cellName`],
    Cells: [, _json, `cells`],
    ParentReadinessScopes: [, _json, `parentReadinessScopes`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1DNSTargetResource
 */
const de_DNSTargetResource = (output: any, context: __SerdeContext): DNSTargetResource => {
  return take(output, {
    DomainName: [, __expectString, `domainName`],
    HostedZoneArn: [, __expectString, `hostedZoneArn`],
    RecordSetId: [, __expectString, `recordSetId`],
    RecordType: [, __expectString, `recordType`],
    TargetResource: [, (_: any) => de_TargetResource(_, context), `targetResource`],
  }) as any;
};

/**
 * deserializeAws_restJson1ListRulesOutput
 */
const de_ListRulesOutput = (output: any, context: __SerdeContext): ListRulesOutput => {
  return take(output, {
    ResourceType: [, __expectString, `resourceType`],
    RuleDescription: [, __expectString, `ruleDescription`],
    RuleId: [, __expectString, `ruleId`],
  }) as any;
};

/**
 * deserializeAws_restJson1Message
 */
const de_Message = (output: any, context: __SerdeContext): Message => {
  return take(output, {
    MessageText: [, __expectString, `messageText`],
  }) as any;
};

/**
 * deserializeAws_restJson1NLBResource
 */
const de_NLBResource = (output: any, context: __SerdeContext): NLBResource => {
  return take(output, {
    Arn: [, __expectString, `arn`],
  }) as any;
};

/**
 * deserializeAws_restJson1R53ResourceRecord
 */
const de_R53ResourceRecord = (output: any, context: __SerdeContext): R53ResourceRecord => {
  return take(output, {
    DomainName: [, __expectString, `domainName`],
    RecordSetId: [, __expectString, `recordSetId`],
  }) as any;
};

/**
 * deserializeAws_restJson1ReadinessCheckOutput
 */
const de_ReadinessCheckOutput = (output: any, context: __SerdeContext): ReadinessCheckOutput => {
  return take(output, {
    ReadinessCheckArn: [, __expectString, `readinessCheckArn`],
    ReadinessCheckName: [, __expectString, `readinessCheckName`],
    ResourceSet: [, __expectString, `resourceSet`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1ReadinessCheckSummary
 */
const de_ReadinessCheckSummary = (output: any, context: __SerdeContext): ReadinessCheckSummary => {
  return take(output, {
    Readiness: [, __expectString, `readiness`],
    ReadinessCheckName: [, __expectString, `readinessCheckName`],
  }) as any;
};

/**
 * deserializeAws_restJson1Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return take(output, {
    RecommendationText: [, __expectString, `recommendationText`],
  }) as any;
};

/**
 * deserializeAws_restJson1RecoveryGroupOutput
 */
const de_RecoveryGroupOutput = (output: any, context: __SerdeContext): RecoveryGroupOutput => {
  return take(output, {
    Cells: [, _json, `cells`],
    RecoveryGroupArn: [, __expectString, `recoveryGroupArn`],
    RecoveryGroupName: [, __expectString, `recoveryGroupName`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return take(output, {
    ComponentId: [, __expectString, `componentId`],
    DnsTargetResource: [, (_: any) => de_DNSTargetResource(_, context), `dnsTargetResource`],
    ReadinessScopes: [, _json, `readinessScopes`],
    ResourceArn: [, __expectString, `resourceArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceResult
 */
const de_ResourceResult = (output: any, context: __SerdeContext): ResourceResult => {
  return take(output, {
    ComponentId: [, __expectString, `componentId`],
    LastCheckedTimestamp: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastCheckedTimestamp`],
    Readiness: [, __expectString, `readiness`],
    ResourceArn: [, __expectString, `resourceArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceSetOutput
 */
const de_ResourceSetOutput = (output: any, context: __SerdeContext): ResourceSetOutput => {
  return take(output, {
    ResourceSetArn: [, __expectString, `resourceSetArn`],
    ResourceSetName: [, __expectString, `resourceSetName`],
    ResourceSetType: [, __expectString, `resourceSetType`],
    Resources: [, (_: any) => de___listOfResource(_, context), `resources`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1RuleResult
 */
const de_RuleResult = (output: any, context: __SerdeContext): RuleResult => {
  return take(output, {
    LastCheckedTimestamp: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastCheckedTimestamp`],
    Messages: [, (_: any) => de___listOfMessage(_, context), `messages`],
    Readiness: [, __expectString, `readiness`],
    RuleId: [, __expectString, `ruleId`],
  }) as any;
};

// de_Tags omitted.

/**
 * deserializeAws_restJson1TargetResource
 */
const de_TargetResource = (output: any, context: __SerdeContext): TargetResource => {
  return take(output, {
    NLBResource: [, (_: any) => de_NLBResource(_, context), `nLBResource`],
    R53Resource: [, (_: any) => de_R53ResourceRecord(_, context), `r53Resource`],
  }) as any;
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
