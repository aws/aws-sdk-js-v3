// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { BatchGetSchemaCommandInput, BatchGetSchemaCommandOutput } from "../commands/BatchGetSchemaCommand";
import {
  CreateCollaborationCommandInput,
  CreateCollaborationCommandOutput,
} from "../commands/CreateCollaborationCommand";
import {
  CreateConfiguredTableAnalysisRuleCommandInput,
  CreateConfiguredTableAnalysisRuleCommandOutput,
} from "../commands/CreateConfiguredTableAnalysisRuleCommand";
import {
  CreateConfiguredTableAssociationCommandInput,
  CreateConfiguredTableAssociationCommandOutput,
} from "../commands/CreateConfiguredTableAssociationCommand";
import {
  CreateConfiguredTableCommandInput,
  CreateConfiguredTableCommandOutput,
} from "../commands/CreateConfiguredTableCommand";
import { CreateMembershipCommandInput, CreateMembershipCommandOutput } from "../commands/CreateMembershipCommand";
import {
  DeleteCollaborationCommandInput,
  DeleteCollaborationCommandOutput,
} from "../commands/DeleteCollaborationCommand";
import {
  DeleteConfiguredTableAnalysisRuleCommandInput,
  DeleteConfiguredTableAnalysisRuleCommandOutput,
} from "../commands/DeleteConfiguredTableAnalysisRuleCommand";
import {
  DeleteConfiguredTableAssociationCommandInput,
  DeleteConfiguredTableAssociationCommandOutput,
} from "../commands/DeleteConfiguredTableAssociationCommand";
import {
  DeleteConfiguredTableCommandInput,
  DeleteConfiguredTableCommandOutput,
} from "../commands/DeleteConfiguredTableCommand";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "../commands/DeleteMemberCommand";
import { DeleteMembershipCommandInput, DeleteMembershipCommandOutput } from "../commands/DeleteMembershipCommand";
import { GetCollaborationCommandInput, GetCollaborationCommandOutput } from "../commands/GetCollaborationCommand";
import {
  GetConfiguredTableAnalysisRuleCommandInput,
  GetConfiguredTableAnalysisRuleCommandOutput,
} from "../commands/GetConfiguredTableAnalysisRuleCommand";
import {
  GetConfiguredTableAssociationCommandInput,
  GetConfiguredTableAssociationCommandOutput,
} from "../commands/GetConfiguredTableAssociationCommand";
import { GetConfiguredTableCommandInput, GetConfiguredTableCommandOutput } from "../commands/GetConfiguredTableCommand";
import { GetMembershipCommandInput, GetMembershipCommandOutput } from "../commands/GetMembershipCommand";
import { GetProtectedQueryCommandInput, GetProtectedQueryCommandOutput } from "../commands/GetProtectedQueryCommand";
import {
  GetSchemaAnalysisRuleCommandInput,
  GetSchemaAnalysisRuleCommandOutput,
} from "../commands/GetSchemaAnalysisRuleCommand";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "../commands/GetSchemaCommand";
import { ListCollaborationsCommandInput, ListCollaborationsCommandOutput } from "../commands/ListCollaborationsCommand";
import {
  ListConfiguredTableAssociationsCommandInput,
  ListConfiguredTableAssociationsCommandOutput,
} from "../commands/ListConfiguredTableAssociationsCommand";
import {
  ListConfiguredTablesCommandInput,
  ListConfiguredTablesCommandOutput,
} from "../commands/ListConfiguredTablesCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { ListMembershipsCommandInput, ListMembershipsCommandOutput } from "../commands/ListMembershipsCommand";
import {
  ListProtectedQueriesCommandInput,
  ListProtectedQueriesCommandOutput,
} from "../commands/ListProtectedQueriesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartProtectedQueryCommandInput,
  StartProtectedQueryCommandOutput,
} from "../commands/StartProtectedQueryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateCollaborationCommandInput,
  UpdateCollaborationCommandOutput,
} from "../commands/UpdateCollaborationCommand";
import {
  UpdateConfiguredTableAnalysisRuleCommandInput,
  UpdateConfiguredTableAnalysisRuleCommandOutput,
} from "../commands/UpdateConfiguredTableAnalysisRuleCommand";
import {
  UpdateConfiguredTableAssociationCommandInput,
  UpdateConfiguredTableAssociationCommandOutput,
} from "../commands/UpdateConfiguredTableAssociationCommand";
import {
  UpdateConfiguredTableCommandInput,
  UpdateConfiguredTableCommandOutput,
} from "../commands/UpdateConfiguredTableCommand";
import { UpdateMembershipCommandInput, UpdateMembershipCommandOutput } from "../commands/UpdateMembershipCommand";
import {
  UpdateProtectedQueryCommandInput,
  UpdateProtectedQueryCommandOutput,
} from "../commands/UpdateProtectedQueryCommand";
import { CleanRoomsServiceException as __BaseException } from "../models/CleanRoomsServiceException";
import {
  AccessDeniedException,
  AggregateColumn,
  AggregationConstraint,
  AnalysisRule,
  AnalysisRuleAggregation,
  AnalysisRuleList,
  AnalysisRulePolicy,
  AnalysisRulePolicyV1,
  AnalysisRuleType,
  BatchGetSchemaError,
  Collaboration,
  CollaborationSummary,
  Column,
  ConfiguredTable,
  ConfiguredTableAnalysisRule,
  ConfiguredTableAnalysisRulePolicy,
  ConfiguredTableAnalysisRulePolicyV1,
  ConfiguredTableAnalysisRuleType,
  ConfiguredTableAssociation,
  ConfiguredTableAssociationSummary,
  ConfiguredTableSummary,
  ConflictException,
  DataEncryptionMetadata,
  GlueTableReference,
  InternalServerException,
  MemberAbility,
  Membership,
  MembershipSummary,
  MemberSpecification,
  MemberSummary,
  ProtectedQuery,
  ProtectedQueryError,
  ProtectedQueryOutput,
  ProtectedQueryOutputConfiguration,
  ProtectedQueryResult,
  ProtectedQueryResultConfiguration,
  ProtectedQueryS3Output,
  ProtectedQueryS3OutputConfiguration,
  ProtectedQuerySQLParameters,
  ProtectedQueryStatistics,
  ProtectedQuerySummary,
  ResourceNotFoundException,
  ScalarFunctions,
  Schema,
  SchemaSummary,
  ServiceQuotaExceededException,
  TableReference,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchGetSchemaCommand
 */
export const se_BatchGetSchemaCommand = async (
  input: BatchGetSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/collaborations/{collaborationIdentifier}/batch-schema";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "collaborationIdentifier",
    () => input.collaborationIdentifier!,
    "{collaborationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.names != null && { names: se_TableAliasList(input.names, context) }),
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
 * serializeAws_restJson1CreateCollaborationCommand
 */
export const se_CreateCollaborationCommand = async (
  input: CreateCollaborationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/collaborations";
  let body: any;
  body = JSON.stringify({
    ...(input.creatorDisplayName != null && { creatorDisplayName: input.creatorDisplayName }),
    ...(input.creatorMemberAbilities != null && {
      creatorMemberAbilities: se_MemberAbilities(input.creatorMemberAbilities, context),
    }),
    ...(input.dataEncryptionMetadata != null && {
      dataEncryptionMetadata: se_DataEncryptionMetadata(input.dataEncryptionMetadata, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.members != null && { members: se_MemberList(input.members, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.queryLogStatus != null && { queryLogStatus: input.queryLogStatus }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * serializeAws_restJson1CreateConfiguredTableCommand
 */
export const se_CreateConfiguredTableCommand = async (
  input: CreateConfiguredTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuredTables";
  let body: any;
  body = JSON.stringify({
    ...(input.allowedColumns != null && { allowedColumns: se_AllowedColumnList(input.allowedColumns, context) }),
    ...(input.analysisMethod != null && { analysisMethod: input.analysisMethod }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tableReference != null && { tableReference: se_TableReference(input.tableReference, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * serializeAws_restJson1CreateConfiguredTableAnalysisRuleCommand
 */
export const se_CreateConfiguredTableAnalysisRuleCommand = async (
  input: CreateConfiguredTableAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/configuredTables/{configuredTableIdentifier}/analysisRule";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "configuredTableIdentifier",
    () => input.configuredTableIdentifier!,
    "{configuredTableIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.analysisRulePolicy != null && {
      analysisRulePolicy: se_ConfiguredTableAnalysisRulePolicy(input.analysisRulePolicy, context),
    }),
    ...(input.analysisRuleType != null && { analysisRuleType: input.analysisRuleType }),
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
 * serializeAws_restJson1CreateConfiguredTableAssociationCommand
 */
export const se_CreateConfiguredTableAssociationCommand = async (
  input: CreateConfiguredTableAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/memberships/{membershipIdentifier}/configuredTableAssociations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.configuredTableIdentifier != null && { configuredTableIdentifier: input.configuredTableIdentifier }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * serializeAws_restJson1CreateMembershipCommand
 */
export const se_CreateMembershipCommand = async (
  input: CreateMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/memberships";
  let body: any;
  body = JSON.stringify({
    ...(input.collaborationIdentifier != null && { collaborationIdentifier: input.collaborationIdentifier }),
    ...(input.queryLogStatus != null && { queryLogStatus: input.queryLogStatus }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * serializeAws_restJson1DeleteCollaborationCommand
 */
export const se_DeleteCollaborationCommand = async (
  input: DeleteCollaborationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/collaborations/{collaborationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "collaborationIdentifier",
    () => input.collaborationIdentifier!,
    "{collaborationIdentifier}",
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
 * serializeAws_restJson1DeleteConfiguredTableCommand
 */
export const se_DeleteConfiguredTableCommand = async (
  input: DeleteConfiguredTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/configuredTables/{configuredTableIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "configuredTableIdentifier",
    () => input.configuredTableIdentifier!,
    "{configuredTableIdentifier}",
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
 * serializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommand
 */
export const se_DeleteConfiguredTableAnalysisRuleCommand = async (
  input: DeleteConfiguredTableAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "configuredTableIdentifier",
    () => input.configuredTableIdentifier!,
    "{configuredTableIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "analysisRuleType",
    () => input.analysisRuleType!,
    "{analysisRuleType}",
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
 * serializeAws_restJson1DeleteConfiguredTableAssociationCommand
 */
export const se_DeleteConfiguredTableAssociationCommand = async (
  input: DeleteConfiguredTableAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "configuredTableAssociationIdentifier",
    () => input.configuredTableAssociationIdentifier!,
    "{configuredTableAssociationIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
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
 * serializeAws_restJson1DeleteMemberCommand
 */
export const se_DeleteMemberCommand = async (
  input: DeleteMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/collaborations/{collaborationIdentifier}/member/{accountId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "collaborationIdentifier",
    () => input.collaborationIdentifier!,
    "{collaborationIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
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
 * serializeAws_restJson1DeleteMembershipCommand
 */
export const se_DeleteMembershipCommand = async (
  input: DeleteMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/memberships/{membershipIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
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
 * serializeAws_restJson1GetCollaborationCommand
 */
export const se_GetCollaborationCommand = async (
  input: GetCollaborationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/collaborations/{collaborationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "collaborationIdentifier",
    () => input.collaborationIdentifier!,
    "{collaborationIdentifier}",
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
 * serializeAws_restJson1GetConfiguredTableCommand
 */
export const se_GetConfiguredTableCommand = async (
  input: GetConfiguredTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/configuredTables/{configuredTableIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "configuredTableIdentifier",
    () => input.configuredTableIdentifier!,
    "{configuredTableIdentifier}",
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
 * serializeAws_restJson1GetConfiguredTableAnalysisRuleCommand
 */
export const se_GetConfiguredTableAnalysisRuleCommand = async (
  input: GetConfiguredTableAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "configuredTableIdentifier",
    () => input.configuredTableIdentifier!,
    "{configuredTableIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "analysisRuleType",
    () => input.analysisRuleType!,
    "{analysisRuleType}",
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
 * serializeAws_restJson1GetConfiguredTableAssociationCommand
 */
export const se_GetConfiguredTableAssociationCommand = async (
  input: GetConfiguredTableAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "configuredTableAssociationIdentifier",
    () => input.configuredTableAssociationIdentifier!,
    "{configuredTableAssociationIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
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
 * serializeAws_restJson1GetMembershipCommand
 */
export const se_GetMembershipCommand = async (
  input: GetMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/memberships/{membershipIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
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
 * serializeAws_restJson1GetProtectedQueryCommand
 */
export const se_GetProtectedQueryCommand = async (
  input: GetProtectedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "protectedQueryIdentifier",
    () => input.protectedQueryIdentifier!,
    "{protectedQueryIdentifier}",
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
 * serializeAws_restJson1GetSchemaCommand
 */
export const se_GetSchemaCommand = async (
  input: GetSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/collaborations/{collaborationIdentifier}/schemas/{name}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "collaborationIdentifier",
    () => input.collaborationIdentifier!,
    "{collaborationIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
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
 * serializeAws_restJson1GetSchemaAnalysisRuleCommand
 */
export const se_GetSchemaAnalysisRuleCommand = async (
  input: GetSchemaAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/collaborations/{collaborationIdentifier}/schemas/{name}/analysisRule/{type}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "collaborationIdentifier",
    () => input.collaborationIdentifier!,
    "{collaborationIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "type", () => input.type!, "{type}", false);
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
 * serializeAws_restJson1ListCollaborationsCommand
 */
export const se_ListCollaborationsCommand = async (
  input: ListCollaborationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/collaborations";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    memberStatus: [, input.memberStatus!],
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
 * serializeAws_restJson1ListConfiguredTableAssociationsCommand
 */
export const se_ListConfiguredTableAssociationsCommand = async (
  input: ListConfiguredTableAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/memberships/{membershipIdentifier}/configuredTableAssociations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
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
 * serializeAws_restJson1ListConfiguredTablesCommand
 */
export const se_ListConfiguredTablesCommand = async (
  input: ListConfiguredTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuredTables";
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
 * serializeAws_restJson1ListMembersCommand
 */
export const se_ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/collaborations/{collaborationIdentifier}/members";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "collaborationIdentifier",
    () => input.collaborationIdentifier!,
    "{collaborationIdentifier}",
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
 * serializeAws_restJson1ListMembershipsCommand
 */
export const se_ListMembershipsCommand = async (
  input: ListMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/memberships";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    status: [, input.status!],
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
 * serializeAws_restJson1ListProtectedQueriesCommand
 */
export const se_ListProtectedQueriesCommand = async (
  input: ListProtectedQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/memberships/{membershipIdentifier}/protectedQueries";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
    false
  );
  const query: any = map({
    status: [, input.status!],
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
 * serializeAws_restJson1ListSchemasCommand
 */
export const se_ListSchemasCommand = async (
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/collaborations/{collaborationIdentifier}/schemas";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "collaborationIdentifier",
    () => input.collaborationIdentifier!,
    "{collaborationIdentifier}",
    false
  );
  const query: any = map({
    schemaType: [, input.schemaType!],
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
 * serializeAws_restJson1StartProtectedQueryCommand
 */
export const se_StartProtectedQueryCommand = async (
  input: StartProtectedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/memberships/{membershipIdentifier}/protectedQueries";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.resultConfiguration != null && {
      resultConfiguration: se_ProtectedQueryResultConfiguration(input.resultConfiguration, context),
    }),
    ...(input.sqlParameters != null && { sqlParameters: se_ProtectedQuerySQLParameters(input.sqlParameters, context) }),
    ...(input.type != null && { type: input.type }),
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
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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
 * serializeAws_restJson1UpdateCollaborationCommand
 */
export const se_UpdateCollaborationCommand = async (
  input: UpdateCollaborationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/collaborations/{collaborationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "collaborationIdentifier",
    () => input.collaborationIdentifier!,
    "{collaborationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  });
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
 * serializeAws_restJson1UpdateConfiguredTableCommand
 */
export const se_UpdateConfiguredTableCommand = async (
  input: UpdateConfiguredTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/configuredTables/{configuredTableIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "configuredTableIdentifier",
    () => input.configuredTableIdentifier!,
    "{configuredTableIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  });
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
 * serializeAws_restJson1UpdateConfiguredTableAnalysisRuleCommand
 */
export const se_UpdateConfiguredTableAnalysisRuleCommand = async (
  input: UpdateConfiguredTableAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "configuredTableIdentifier",
    () => input.configuredTableIdentifier!,
    "{configuredTableIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "analysisRuleType",
    () => input.analysisRuleType!,
    "{analysisRuleType}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.analysisRulePolicy != null && {
      analysisRulePolicy: se_ConfiguredTableAnalysisRulePolicy(input.analysisRulePolicy, context),
    }),
  });
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
 * serializeAws_restJson1UpdateConfiguredTableAssociationCommand
 */
export const se_UpdateConfiguredTableAssociationCommand = async (
  input: UpdateConfiguredTableAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "configuredTableAssociationIdentifier",
    () => input.configuredTableAssociationIdentifier!,
    "{configuredTableAssociationIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  });
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
 * serializeAws_restJson1UpdateMembershipCommand
 */
export const se_UpdateMembershipCommand = async (
  input: UpdateMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/memberships/{membershipIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.queryLogStatus != null && { queryLogStatus: input.queryLogStatus }),
  });
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
 * serializeAws_restJson1UpdateProtectedQueryCommand
 */
export const se_UpdateProtectedQueryCommand = async (
  input: UpdateProtectedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "membershipIdentifier",
    () => input.membershipIdentifier!,
    "{membershipIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "protectedQueryIdentifier",
    () => input.protectedQueryIdentifier!,
    "{protectedQueryIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.targetStatus != null && { targetStatus: input.targetStatus }),
  });
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
 * deserializeAws_restJson1BatchGetSchemaCommand
 */
export const de_BatchGetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = de_BatchGetSchemaErrorList(data.errors, context);
  }
  if (data.schemas != null) {
    contents.schemas = de_SchemaList(data.schemas, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetSchemaCommandError
 */
const de_BatchGetSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateCollaborationCommand
 */
export const de_CreateCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCollaborationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.collaboration != null) {
    contents.collaboration = de_Collaboration(data.collaboration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateCollaborationCommandError
 */
const de_CreateCollaborationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollaborationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateConfiguredTableCommand
 */
export const de_CreateConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfiguredTableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTable != null) {
    contents.configuredTable = de_ConfiguredTable(data.configuredTable, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredTableCommandError
 */
const de_CreateConfiguredTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateConfiguredTableAnalysisRuleCommand
 */
export const de_CreateConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfiguredTableAnalysisRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisRule != null) {
    contents.analysisRule = de_ConfiguredTableAnalysisRule(data.analysisRule, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredTableAnalysisRuleCommandError
 */
const de_CreateConfiguredTableAnalysisRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAnalysisRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateConfiguredTableAssociationCommand
 */
export const de_CreateConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfiguredTableAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTableAssociation != null) {
    contents.configuredTableAssociation = de_ConfiguredTableAssociation(data.configuredTableAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredTableAssociationCommandError
 */
const de_CreateConfiguredTableAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateMembershipCommand
 */
export const de_CreateMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.membership != null) {
    contents.membership = de_Membership(data.membership, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMembershipCommandError
 */
const de_CreateMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteCollaborationCommand
 */
export const de_DeleteCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollaborationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteCollaborationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCollaborationCommandError
 */
const de_DeleteCollaborationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollaborationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteConfiguredTableCommand
 */
export const de_DeleteConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteConfiguredTableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableCommandError
 */
const de_DeleteConfiguredTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommand
 */
export const de_DeleteConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteConfiguredTableAnalysisRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommandError
 */
const de_DeleteConfiguredTableAnalysisRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAnalysisRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteConfiguredTableAssociationCommand
 */
export const de_DeleteConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteConfiguredTableAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableAssociationCommandError
 */
const de_DeleteConfiguredTableAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteMemberCommand
 */
export const de_DeleteMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMemberCommandError
 */
const de_DeleteMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteMembershipCommand
 */
export const de_DeleteMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMembershipCommandError
 */
const de_DeleteMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetCollaborationCommand
 */
export const de_GetCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCollaborationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.collaboration != null) {
    contents.collaboration = de_Collaboration(data.collaboration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCollaborationCommandError
 */
const de_GetCollaborationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConfiguredTableCommand
 */
export const de_GetConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfiguredTableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTable != null) {
    contents.configuredTable = de_ConfiguredTable(data.configuredTable, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredTableCommandError
 */
const de_GetConfiguredTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConfiguredTableAnalysisRuleCommand
 */
export const de_GetConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfiguredTableAnalysisRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisRule != null) {
    contents.analysisRule = de_ConfiguredTableAnalysisRule(data.analysisRule, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredTableAnalysisRuleCommandError
 */
const de_GetConfiguredTableAnalysisRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAnalysisRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConfiguredTableAssociationCommand
 */
export const de_GetConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfiguredTableAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTableAssociation != null) {
    contents.configuredTableAssociation = de_ConfiguredTableAssociation(data.configuredTableAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredTableAssociationCommandError
 */
const de_GetConfiguredTableAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetMembershipCommand
 */
export const de_GetMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.membership != null) {
    contents.membership = de_Membership(data.membership, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMembershipCommandError
 */
const de_GetMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetProtectedQueryCommand
 */
export const de_GetProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetProtectedQueryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.protectedQuery != null) {
    contents.protectedQuery = de_ProtectedQuery(data.protectedQuery, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetProtectedQueryCommandError
 */
const de_GetProtectedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSchemaCommand
 */
export const de_GetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.schema != null) {
    contents.schema = de_Schema(data.schema, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSchemaCommandError
 */
const de_GetSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSchemaAnalysisRuleCommand
 */
export const de_GetSchemaAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSchemaAnalysisRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisRule != null) {
    contents.analysisRule = de_AnalysisRule(data.analysisRule, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSchemaAnalysisRuleCommandError
 */
const de_GetSchemaAnalysisRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAnalysisRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListCollaborationsCommand
 */
export const de_ListCollaborationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCollaborationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.collaborationList != null) {
    contents.collaborationList = de_CollaborationSummaryList(data.collaborationList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationsCommandError
 */
const de_ListCollaborationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListConfiguredTableAssociationsCommand
 */
export const de_ListConfiguredTableAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTableAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfiguredTableAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTableAssociationSummaries != null) {
    contents.configuredTableAssociationSummaries = de_ConfiguredTableAssociationSummaryList(
      data.configuredTableAssociationSummaries,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConfiguredTableAssociationsCommandError
 */
const de_ListConfiguredTableAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTableAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListConfiguredTablesCommand
 */
export const de_ListConfiguredTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfiguredTablesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTableSummaries != null) {
    contents.configuredTableSummaries = de_ConfiguredTableSummaryList(data.configuredTableSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConfiguredTablesCommandError
 */
const de_ListConfiguredTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListMembersCommand
 */
export const de_ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.memberSummaries != null) {
    contents.memberSummaries = de_MemberSummaryList(data.memberSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMembersCommandError
 */
const de_ListMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListMembershipsCommand
 */
export const de_ListMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMembershipsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.membershipSummaries != null) {
    contents.membershipSummaries = de_MembershipSummaryList(data.membershipSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMembershipsCommandError
 */
const de_ListMembershipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembershipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListProtectedQueriesCommand
 */
export const de_ListProtectedQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedQueriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProtectedQueriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.protectedQueries != null) {
    contents.protectedQueries = de_ProtectedQuerySummaryList(data.protectedQueries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProtectedQueriesCommandError
 */
const de_ListProtectedQueriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedQueriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSchemasCommand
 */
export const de_ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSchemasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.schemaSummaries != null) {
    contents.schemaSummaries = de_SchemaSummaryList(data.schemaSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSchemasCommandError
 */
const de_ListSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    contents.tags = de_TagMap(data.tags, context);
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
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartProtectedQueryCommand
 */
export const de_StartProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartProtectedQueryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.protectedQuery != null) {
    contents.protectedQuery = de_ProtectedQuery(data.protectedQuery, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartProtectedQueryCommandError
 */
const de_StartProtectedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProtectedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateCollaborationCommand
 */
export const de_UpdateCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCollaborationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.collaboration != null) {
    contents.collaboration = de_Collaboration(data.collaboration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCollaborationCommandError
 */
const de_UpdateCollaborationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCollaborationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConfiguredTableCommand
 */
export const de_UpdateConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfiguredTableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTable != null) {
    contents.configuredTable = de_ConfiguredTable(data.configuredTable, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfiguredTableCommandError
 */
const de_UpdateConfiguredTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConfiguredTableAnalysisRuleCommand
 */
export const de_UpdateConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfiguredTableAnalysisRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisRule != null) {
    contents.analysisRule = de_ConfiguredTableAnalysisRule(data.analysisRule, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfiguredTableAnalysisRuleCommandError
 */
const de_UpdateConfiguredTableAnalysisRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAnalysisRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConfiguredTableAssociationCommand
 */
export const de_UpdateConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfiguredTableAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTableAssociation != null) {
    contents.configuredTableAssociation = de_ConfiguredTableAssociation(data.configuredTableAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfiguredTableAssociationCommandError
 */
const de_UpdateConfiguredTableAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateMembershipCommand
 */
export const de_UpdateMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.membership != null) {
    contents.membership = de_Membership(data.membership, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMembershipCommandError
 */
const de_UpdateMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateProtectedQueryCommand
 */
export const de_UpdateProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateProtectedQueryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.protectedQuery != null) {
    contents.protectedQuery = de_ProtectedQuery(data.protectedQuery, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProtectedQueryCommandError
 */
const de_UpdateProtectedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaName != null) {
    contents.quotaName = __expectString(data.quotaName);
  }
  if (data.quotaValue != null) {
    contents.quotaValue = __limitedParseDouble(data.quotaValue);
  }
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.fieldList != null) {
    contents.fieldList = de_ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AggregateColumn
 */
const se_AggregateColumn = (input: AggregateColumn, context: __SerdeContext): any => {
  return {
    ...(input.columnNames != null && { columnNames: se_AnalysisRuleColumnNameList(input.columnNames, context) }),
    ...(input.function != null && { function: input.function }),
  };
};

/**
 * serializeAws_restJson1AggregateColumnList
 */
const se_AggregateColumnList = (input: AggregateColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AggregateColumn(entry, context);
    });
};

/**
 * serializeAws_restJson1AggregationConstraint
 */
const se_AggregationConstraint = (input: AggregationConstraint, context: __SerdeContext): any => {
  return {
    ...(input.columnName != null && { columnName: input.columnName }),
    ...(input.minimum != null && { minimum: input.minimum }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1AggregationConstraints
 */
const se_AggregationConstraints = (input: AggregationConstraint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AggregationConstraint(entry, context);
    });
};

/**
 * serializeAws_restJson1AllowedColumnList
 */
const se_AllowedColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AnalysisRuleAggregation
 */
const se_AnalysisRuleAggregation = (input: AnalysisRuleAggregation, context: __SerdeContext): any => {
  return {
    ...(input.aggregateColumns != null && {
      aggregateColumns: se_AggregateColumnList(input.aggregateColumns, context),
    }),
    ...(input.dimensionColumns != null && {
      dimensionColumns: se_AnalysisRuleColumnList(input.dimensionColumns, context),
    }),
    ...(input.joinColumns != null && { joinColumns: se_AnalysisRuleColumnList(input.joinColumns, context) }),
    ...(input.joinRequired != null && { joinRequired: input.joinRequired }),
    ...(input.outputConstraints != null && {
      outputConstraints: se_AggregationConstraints(input.outputConstraints, context),
    }),
    ...(input.scalarFunctions != null && { scalarFunctions: se_ScalarFunctionsList(input.scalarFunctions, context) }),
  };
};

/**
 * serializeAws_restJson1AnalysisRuleColumnList
 */
const se_AnalysisRuleColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AnalysisRuleColumnNameList
 */
const se_AnalysisRuleColumnNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AnalysisRuleList
 */
const se_AnalysisRuleList = (input: AnalysisRuleList, context: __SerdeContext): any => {
  return {
    ...(input.joinColumns != null && { joinColumns: se_AnalysisRuleColumnList(input.joinColumns, context) }),
    ...(input.listColumns != null && { listColumns: se_AnalysisRuleColumnList(input.listColumns, context) }),
  };
};

/**
 * serializeAws_restJson1ConfiguredTableAnalysisRulePolicy
 */
const se_ConfiguredTableAnalysisRulePolicy = (
  input: ConfiguredTableAnalysisRulePolicy,
  context: __SerdeContext
): any => {
  return ConfiguredTableAnalysisRulePolicy.visit(input, {
    v1: (value) => ({ v1: se_ConfiguredTableAnalysisRulePolicyV1(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ConfiguredTableAnalysisRulePolicyV1
 */
const se_ConfiguredTableAnalysisRulePolicyV1 = (
  input: ConfiguredTableAnalysisRulePolicyV1,
  context: __SerdeContext
): any => {
  return ConfiguredTableAnalysisRulePolicyV1.visit(input, {
    aggregation: (value) => ({ aggregation: se_AnalysisRuleAggregation(value, context) }),
    list: (value) => ({ list: se_AnalysisRuleList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1DataEncryptionMetadata
 */
const se_DataEncryptionMetadata = (input: DataEncryptionMetadata, context: __SerdeContext): any => {
  return {
    ...(input.allowCleartext != null && { allowCleartext: input.allowCleartext }),
    ...(input.allowDuplicates != null && { allowDuplicates: input.allowDuplicates }),
    ...(input.allowJoinsOnColumnsWithDifferentNames != null && {
      allowJoinsOnColumnsWithDifferentNames: input.allowJoinsOnColumnsWithDifferentNames,
    }),
    ...(input.preserveNulls != null && { preserveNulls: input.preserveNulls }),
  };
};

/**
 * serializeAws_restJson1GlueTableReference
 */
const se_GlueTableReference = (input: GlueTableReference, context: __SerdeContext): any => {
  return {
    ...(input.databaseName != null && { databaseName: input.databaseName }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

/**
 * serializeAws_restJson1MemberAbilities
 */
const se_MemberAbilities = (input: (MemberAbility | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1MemberList
 */
const se_MemberList = (input: MemberSpecification[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MemberSpecification(entry, context);
    });
};

/**
 * serializeAws_restJson1MemberSpecification
 */
const se_MemberSpecification = (input: MemberSpecification, context: __SerdeContext): any => {
  return {
    ...(input.accountId != null && { accountId: input.accountId }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.memberAbilities != null && { memberAbilities: se_MemberAbilities(input.memberAbilities, context) }),
  };
};

/**
 * serializeAws_restJson1ProtectedQueryOutputConfiguration
 */
const se_ProtectedQueryOutputConfiguration = (
  input: ProtectedQueryOutputConfiguration,
  context: __SerdeContext
): any => {
  return ProtectedQueryOutputConfiguration.visit(input, {
    s3: (value) => ({ s3: se_ProtectedQueryS3OutputConfiguration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ProtectedQueryResultConfiguration
 */
const se_ProtectedQueryResultConfiguration = (
  input: ProtectedQueryResultConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.outputConfiguration != null && {
      outputConfiguration: se_ProtectedQueryOutputConfiguration(input.outputConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1ProtectedQueryS3OutputConfiguration
 */
const se_ProtectedQueryS3OutputConfiguration = (
  input: ProtectedQueryS3OutputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
    ...(input.resultFormat != null && { resultFormat: input.resultFormat }),
  };
};

/**
 * serializeAws_restJson1ProtectedQuerySQLParameters
 */
const se_ProtectedQuerySQLParameters = (input: ProtectedQuerySQLParameters, context: __SerdeContext): any => {
  return {
    ...(input.queryString != null && { queryString: input.queryString }),
  };
};

/**
 * serializeAws_restJson1ScalarFunctionsList
 */
const se_ScalarFunctionsList = (input: (ScalarFunctions | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TableAliasList
 */
const se_TableAliasList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TableReference
 */
const se_TableReference = (input: TableReference, context: __SerdeContext): any => {
  return TableReference.visit(input, {
    glue: (value) => ({ glue: se_GlueTableReference(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AggregateColumn
 */
const de_AggregateColumn = (output: any, context: __SerdeContext): AggregateColumn => {
  return {
    columnNames: output.columnNames != null ? de_AnalysisRuleColumnNameList(output.columnNames, context) : undefined,
    function: __expectString(output.function),
  } as any;
};

/**
 * deserializeAws_restJson1AggregateColumnList
 */
const de_AggregateColumnList = (output: any, context: __SerdeContext): AggregateColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregateColumn(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AggregationConstraint
 */
const de_AggregationConstraint = (output: any, context: __SerdeContext): AggregationConstraint => {
  return {
    columnName: __expectString(output.columnName),
    minimum: __expectInt32(output.minimum),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1AggregationConstraints
 */
const de_AggregationConstraints = (output: any, context: __SerdeContext): AggregationConstraint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregationConstraint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AllowedColumnList
 */
const de_AllowedColumnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1AnalysisRule
 */
const de_AnalysisRule = (output: any, context: __SerdeContext): AnalysisRule => {
  return {
    collaborationId: __expectString(output.collaborationId),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    name: __expectString(output.name),
    policy: output.policy != null ? de_AnalysisRulePolicy(__expectUnion(output.policy), context) : undefined,
    type: __expectString(output.type),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnalysisRuleAggregation
 */
const de_AnalysisRuleAggregation = (output: any, context: __SerdeContext): AnalysisRuleAggregation => {
  return {
    aggregateColumns:
      output.aggregateColumns != null ? de_AggregateColumnList(output.aggregateColumns, context) : undefined,
    dimensionColumns:
      output.dimensionColumns != null ? de_AnalysisRuleColumnList(output.dimensionColumns, context) : undefined,
    joinColumns: output.joinColumns != null ? de_AnalysisRuleColumnList(output.joinColumns, context) : undefined,
    joinRequired: __expectString(output.joinRequired),
    outputConstraints:
      output.outputConstraints != null ? de_AggregationConstraints(output.outputConstraints, context) : undefined,
    scalarFunctions:
      output.scalarFunctions != null ? de_ScalarFunctionsList(output.scalarFunctions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnalysisRuleColumnList
 */
const de_AnalysisRuleColumnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1AnalysisRuleColumnNameList
 */
const de_AnalysisRuleColumnNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1AnalysisRuleList
 */
const de_AnalysisRuleList = (output: any, context: __SerdeContext): AnalysisRuleList => {
  return {
    joinColumns: output.joinColumns != null ? de_AnalysisRuleColumnList(output.joinColumns, context) : undefined,
    listColumns: output.listColumns != null ? de_AnalysisRuleColumnList(output.listColumns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnalysisRulePolicy
 */
const de_AnalysisRulePolicy = (output: any, context: __SerdeContext): AnalysisRulePolicy => {
  if (output.v1 != null) {
    return {
      v1: de_AnalysisRulePolicyV1(__expectUnion(output.v1), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AnalysisRulePolicyV1
 */
const de_AnalysisRulePolicyV1 = (output: any, context: __SerdeContext): AnalysisRulePolicyV1 => {
  if (output.aggregation != null) {
    return {
      aggregation: de_AnalysisRuleAggregation(output.aggregation, context),
    };
  }
  if (output.list != null) {
    return {
      list: de_AnalysisRuleList(output.list, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AnalysisRuleTypeList
 */
const de_AnalysisRuleTypeList = (output: any, context: __SerdeContext): (AnalysisRuleType | string)[] => {
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
 * deserializeAws_restJson1BatchGetSchemaError
 */
const de_BatchGetSchemaError = (output: any, context: __SerdeContext): BatchGetSchemaError => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetSchemaErrorList
 */
const de_BatchGetSchemaErrorList = (output: any, context: __SerdeContext): BatchGetSchemaError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetSchemaError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Collaboration
 */
const de_Collaboration = (output: any, context: __SerdeContext): Collaboration => {
  return {
    arn: __expectString(output.arn),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    creatorAccountId: __expectString(output.creatorAccountId),
    creatorDisplayName: __expectString(output.creatorDisplayName),
    dataEncryptionMetadata:
      output.dataEncryptionMetadata != null
        ? de_DataEncryptionMetadata(output.dataEncryptionMetadata, context)
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    memberStatus: __expectString(output.memberStatus),
    membershipArn: __expectString(output.membershipArn),
    membershipId: __expectString(output.membershipId),
    name: __expectString(output.name),
    queryLogStatus: __expectString(output.queryLogStatus),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CollaborationSummary
 */
const de_CollaborationSummary = (output: any, context: __SerdeContext): CollaborationSummary => {
  return {
    arn: __expectString(output.arn),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    creatorAccountId: __expectString(output.creatorAccountId),
    creatorDisplayName: __expectString(output.creatorDisplayName),
    id: __expectString(output.id),
    memberStatus: __expectString(output.memberStatus),
    membershipArn: __expectString(output.membershipArn),
    membershipId: __expectString(output.membershipId),
    name: __expectString(output.name),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CollaborationSummaryList
 */
const de_CollaborationSummaryList = (output: any, context: __SerdeContext): CollaborationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CollaborationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Column
 */
const de_Column = (output: any, context: __SerdeContext): Column => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ColumnList
 */
const de_ColumnList = (output: any, context: __SerdeContext): Column[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Column(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfiguredTable
 */
const de_ConfiguredTable = (output: any, context: __SerdeContext): ConfiguredTable => {
  return {
    allowedColumns: output.allowedColumns != null ? de_AllowedColumnList(output.allowedColumns, context) : undefined,
    analysisMethod: __expectString(output.analysisMethod),
    analysisRuleTypes:
      output.analysisRuleTypes != null
        ? de_ConfiguredTableAnalysisRuleTypeList(output.analysisRuleTypes, context)
        : undefined,
    arn: __expectString(output.arn),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    tableReference:
      output.tableReference != null ? de_TableReference(__expectUnion(output.tableReference), context) : undefined,
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConfiguredTableAnalysisRule
 */
const de_ConfiguredTableAnalysisRule = (output: any, context: __SerdeContext): ConfiguredTableAnalysisRule => {
  return {
    configuredTableArn: __expectString(output.configuredTableArn),
    configuredTableId: __expectString(output.configuredTableId),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    policy:
      output.policy != null ? de_ConfiguredTableAnalysisRulePolicy(__expectUnion(output.policy), context) : undefined,
    type: __expectString(output.type),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConfiguredTableAnalysisRulePolicy
 */
const de_ConfiguredTableAnalysisRulePolicy = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAnalysisRulePolicy => {
  if (output.v1 != null) {
    return {
      v1: de_ConfiguredTableAnalysisRulePolicyV1(__expectUnion(output.v1), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ConfiguredTableAnalysisRulePolicyV1
 */
const de_ConfiguredTableAnalysisRulePolicyV1 = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAnalysisRulePolicyV1 => {
  if (output.aggregation != null) {
    return {
      aggregation: de_AnalysisRuleAggregation(output.aggregation, context),
    };
  }
  if (output.list != null) {
    return {
      list: de_AnalysisRuleList(output.list, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ConfiguredTableAnalysisRuleTypeList
 */
const de_ConfiguredTableAnalysisRuleTypeList = (
  output: any,
  context: __SerdeContext
): (ConfiguredTableAnalysisRuleType | string)[] => {
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
 * deserializeAws_restJson1ConfiguredTableAssociation
 */
const de_ConfiguredTableAssociation = (output: any, context: __SerdeContext): ConfiguredTableAssociation => {
  return {
    arn: __expectString(output.arn),
    configuredTableArn: __expectString(output.configuredTableArn),
    configuredTableId: __expectString(output.configuredTableId),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    membershipArn: __expectString(output.membershipArn),
    membershipId: __expectString(output.membershipId),
    name: __expectString(output.name),
    roleArn: __expectString(output.roleArn),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConfiguredTableAssociationSummary
 */
const de_ConfiguredTableAssociationSummary = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAssociationSummary => {
  return {
    arn: __expectString(output.arn),
    configuredTableId: __expectString(output.configuredTableId),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    id: __expectString(output.id),
    membershipArn: __expectString(output.membershipArn),
    membershipId: __expectString(output.membershipId),
    name: __expectString(output.name),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConfiguredTableAssociationSummaryList
 */
const de_ConfiguredTableAssociationSummaryList = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfiguredTableAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfiguredTableSummary
 */
const de_ConfiguredTableSummary = (output: any, context: __SerdeContext): ConfiguredTableSummary => {
  return {
    analysisMethod: __expectString(output.analysisMethod),
    analysisRuleTypes:
      output.analysisRuleTypes != null
        ? de_ConfiguredTableAnalysisRuleTypeList(output.analysisRuleTypes, context)
        : undefined,
    arn: __expectString(output.arn),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConfiguredTableSummaryList
 */
const de_ConfiguredTableSummaryList = (output: any, context: __SerdeContext): ConfiguredTableSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfiguredTableSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataEncryptionMetadata
 */
const de_DataEncryptionMetadata = (output: any, context: __SerdeContext): DataEncryptionMetadata => {
  return {
    allowCleartext: __expectBoolean(output.allowCleartext),
    allowDuplicates: __expectBoolean(output.allowDuplicates),
    allowJoinsOnColumnsWithDifferentNames: __expectBoolean(output.allowJoinsOnColumnsWithDifferentNames),
    preserveNulls: __expectBoolean(output.preserveNulls),
  } as any;
};

/**
 * deserializeAws_restJson1GlueTableReference
 */
const de_GlueTableReference = (output: any, context: __SerdeContext): GlueTableReference => {
  return {
    databaseName: __expectString(output.databaseName),
    tableName: __expectString(output.tableName),
  } as any;
};

/**
 * deserializeAws_restJson1MemberAbilities
 */
const de_MemberAbilities = (output: any, context: __SerdeContext): (MemberAbility | string)[] => {
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
 * deserializeAws_restJson1Membership
 */
const de_Membership = (output: any, context: __SerdeContext): Membership => {
  return {
    arn: __expectString(output.arn),
    collaborationArn: __expectString(output.collaborationArn),
    collaborationCreatorAccountId: __expectString(output.collaborationCreatorAccountId),
    collaborationCreatorDisplayName: __expectString(output.collaborationCreatorDisplayName),
    collaborationId: __expectString(output.collaborationId),
    collaborationName: __expectString(output.collaborationName),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    id: __expectString(output.id),
    memberAbilities: output.memberAbilities != null ? de_MemberAbilities(output.memberAbilities, context) : undefined,
    queryLogStatus: __expectString(output.queryLogStatus),
    status: __expectString(output.status),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MembershipSummary
 */
const de_MembershipSummary = (output: any, context: __SerdeContext): MembershipSummary => {
  return {
    arn: __expectString(output.arn),
    collaborationArn: __expectString(output.collaborationArn),
    collaborationCreatorAccountId: __expectString(output.collaborationCreatorAccountId),
    collaborationCreatorDisplayName: __expectString(output.collaborationCreatorDisplayName),
    collaborationId: __expectString(output.collaborationId),
    collaborationName: __expectString(output.collaborationName),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    id: __expectString(output.id),
    memberAbilities: output.memberAbilities != null ? de_MemberAbilities(output.memberAbilities, context) : undefined,
    status: __expectString(output.status),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MembershipSummaryList
 */
const de_MembershipSummaryList = (output: any, context: __SerdeContext): MembershipSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MembershipSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MemberSummary
 */
const de_MemberSummary = (output: any, context: __SerdeContext): MemberSummary => {
  return {
    abilities: output.abilities != null ? de_MemberAbilities(output.abilities, context) : undefined,
    accountId: __expectString(output.accountId),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    displayName: __expectString(output.displayName),
    membershipArn: __expectString(output.membershipArn),
    membershipId: __expectString(output.membershipId),
    status: __expectString(output.status),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MemberSummaryList
 */
const de_MemberSummaryList = (output: any, context: __SerdeContext): MemberSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MemberSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProtectedQuery
 */
const de_ProtectedQuery = (output: any, context: __SerdeContext): ProtectedQuery => {
  return {
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    error: output.error != null ? de_ProtectedQueryError(output.error, context) : undefined,
    id: __expectString(output.id),
    membershipArn: __expectString(output.membershipArn),
    membershipId: __expectString(output.membershipId),
    result: output.result != null ? de_ProtectedQueryResult(output.result, context) : undefined,
    resultConfiguration:
      output.resultConfiguration != null
        ? de_ProtectedQueryResultConfiguration(output.resultConfiguration, context)
        : undefined,
    sqlParameters:
      output.sqlParameters != null ? de_ProtectedQuerySQLParameters(output.sqlParameters, context) : undefined,
    statistics: output.statistics != null ? de_ProtectedQueryStatistics(output.statistics, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ProtectedQueryError
 */
const de_ProtectedQueryError = (output: any, context: __SerdeContext): ProtectedQueryError => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1ProtectedQueryOutput
 */
const de_ProtectedQueryOutput = (output: any, context: __SerdeContext): ProtectedQueryOutput => {
  if (output.s3 != null) {
    return {
      s3: de_ProtectedQueryS3Output(output.s3, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ProtectedQueryOutputConfiguration
 */
const de_ProtectedQueryOutputConfiguration = (
  output: any,
  context: __SerdeContext
): ProtectedQueryOutputConfiguration => {
  if (output.s3 != null) {
    return {
      s3: de_ProtectedQueryS3OutputConfiguration(output.s3, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ProtectedQueryResult
 */
const de_ProtectedQueryResult = (output: any, context: __SerdeContext): ProtectedQueryResult => {
  return {
    output: output.output != null ? de_ProtectedQueryOutput(__expectUnion(output.output), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProtectedQueryResultConfiguration
 */
const de_ProtectedQueryResultConfiguration = (
  output: any,
  context: __SerdeContext
): ProtectedQueryResultConfiguration => {
  return {
    outputConfiguration:
      output.outputConfiguration != null
        ? de_ProtectedQueryOutputConfiguration(__expectUnion(output.outputConfiguration), context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProtectedQueryS3Output
 */
const de_ProtectedQueryS3Output = (output: any, context: __SerdeContext): ProtectedQueryS3Output => {
  return {
    location: __expectString(output.location),
  } as any;
};

/**
 * deserializeAws_restJson1ProtectedQueryS3OutputConfiguration
 */
const de_ProtectedQueryS3OutputConfiguration = (
  output: any,
  context: __SerdeContext
): ProtectedQueryS3OutputConfiguration => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
    resultFormat: __expectString(output.resultFormat),
  } as any;
};

/**
 * deserializeAws_restJson1ProtectedQuerySQLParameters
 */
const de_ProtectedQuerySQLParameters = (output: any, context: __SerdeContext): ProtectedQuerySQLParameters => {
  return {
    queryString: __expectString(output.queryString),
  } as any;
};

/**
 * deserializeAws_restJson1ProtectedQueryStatistics
 */
const de_ProtectedQueryStatistics = (output: any, context: __SerdeContext): ProtectedQueryStatistics => {
  return {
    totalDurationInMillis: __expectLong(output.totalDurationInMillis),
  } as any;
};

/**
 * deserializeAws_restJson1ProtectedQuerySummary
 */
const de_ProtectedQuerySummary = (output: any, context: __SerdeContext): ProtectedQuerySummary => {
  return {
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    id: __expectString(output.id),
    membershipArn: __expectString(output.membershipArn),
    membershipId: __expectString(output.membershipId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ProtectedQuerySummaryList
 */
const de_ProtectedQuerySummaryList = (output: any, context: __SerdeContext): ProtectedQuerySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProtectedQuerySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ScalarFunctionsList
 */
const de_ScalarFunctionsList = (output: any, context: __SerdeContext): (ScalarFunctions | string)[] => {
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
 * deserializeAws_restJson1Schema
 */
const de_Schema = (output: any, context: __SerdeContext): Schema => {
  return {
    analysisMethod: __expectString(output.analysisMethod),
    analysisRuleTypes:
      output.analysisRuleTypes != null ? de_AnalysisRuleTypeList(output.analysisRuleTypes, context) : undefined,
    collaborationArn: __expectString(output.collaborationArn),
    collaborationId: __expectString(output.collaborationId),
    columns: output.columns != null ? de_ColumnList(output.columns, context) : undefined,
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    creatorAccountId: __expectString(output.creatorAccountId),
    description: __expectString(output.description),
    name: __expectString(output.name),
    partitionKeys: output.partitionKeys != null ? de_ColumnList(output.partitionKeys, context) : undefined,
    type: __expectString(output.type),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SchemaList
 */
const de_SchemaList = (output: any, context: __SerdeContext): Schema[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Schema(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SchemaSummary
 */
const de_SchemaSummary = (output: any, context: __SerdeContext): SchemaSummary => {
  return {
    analysisMethod: __expectString(output.analysisMethod),
    analysisRuleTypes:
      output.analysisRuleTypes != null ? de_AnalysisRuleTypeList(output.analysisRuleTypes, context) : undefined,
    collaborationArn: __expectString(output.collaborationArn),
    collaborationId: __expectString(output.collaborationId),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    creatorAccountId: __expectString(output.creatorAccountId),
    name: __expectString(output.name),
    type: __expectString(output.type),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SchemaSummaryList
 */
const de_SchemaSummaryList = (output: any, context: __SerdeContext): SchemaSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SchemaSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TableReference
 */
const de_TableReference = (output: any, context: __SerdeContext): TableReference => {
  if (output.glue != null) {
    return {
      glue: de_GlueTableReference(output.glue, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
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
