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
  StartProtectedQueryCommandInput,
  StartProtectedQueryCommandOutput,
} from "../commands/StartProtectedQueryCommand";
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

export const serializeAws_restJson1BatchGetSchemaCommand = async (
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
    ...(input.names != null && { names: serializeAws_restJson1TableAliasList(input.names, context) }),
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

export const serializeAws_restJson1CreateCollaborationCommand = async (
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
      creatorMemberAbilities: serializeAws_restJson1MemberAbilities(input.creatorMemberAbilities, context),
    }),
    ...(input.dataEncryptionMetadata != null && {
      dataEncryptionMetadata: serializeAws_restJson1DataEncryptionMetadata(input.dataEncryptionMetadata, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.members != null && { members: serializeAws_restJson1MemberList(input.members, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.queryLogStatus != null && { queryLogStatus: input.queryLogStatus }),
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

export const serializeAws_restJson1CreateConfiguredTableCommand = async (
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
    ...(input.allowedColumns != null && {
      allowedColumns: serializeAws_restJson1AllowedColumnList(input.allowedColumns, context),
    }),
    ...(input.analysisMethod != null && { analysisMethod: input.analysisMethod }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tableReference != null && {
      tableReference: serializeAws_restJson1TableReference(input.tableReference, context),
    }),
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

export const serializeAws_restJson1CreateConfiguredTableAnalysisRuleCommand = async (
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
      analysisRulePolicy: serializeAws_restJson1ConfiguredTableAnalysisRulePolicy(input.analysisRulePolicy, context),
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

export const serializeAws_restJson1CreateConfiguredTableAssociationCommand = async (
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

export const serializeAws_restJson1CreateMembershipCommand = async (
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

export const serializeAws_restJson1DeleteCollaborationCommand = async (
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

export const serializeAws_restJson1DeleteConfiguredTableCommand = async (
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

export const serializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommand = async (
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

export const serializeAws_restJson1DeleteConfiguredTableAssociationCommand = async (
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

export const serializeAws_restJson1DeleteMemberCommand = async (
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

export const serializeAws_restJson1DeleteMembershipCommand = async (
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

export const serializeAws_restJson1GetCollaborationCommand = async (
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

export const serializeAws_restJson1GetConfiguredTableCommand = async (
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

export const serializeAws_restJson1GetConfiguredTableAnalysisRuleCommand = async (
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

export const serializeAws_restJson1GetConfiguredTableAssociationCommand = async (
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

export const serializeAws_restJson1GetMembershipCommand = async (
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

export const serializeAws_restJson1GetProtectedQueryCommand = async (
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

export const serializeAws_restJson1GetSchemaCommand = async (
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

export const serializeAws_restJson1GetSchemaAnalysisRuleCommand = async (
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

export const serializeAws_restJson1ListCollaborationsCommand = async (
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

export const serializeAws_restJson1ListConfiguredTableAssociationsCommand = async (
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

export const serializeAws_restJson1ListConfiguredTablesCommand = async (
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

export const serializeAws_restJson1ListMembersCommand = async (
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

export const serializeAws_restJson1ListMembershipsCommand = async (
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

export const serializeAws_restJson1ListProtectedQueriesCommand = async (
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

export const serializeAws_restJson1ListSchemasCommand = async (
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

export const serializeAws_restJson1StartProtectedQueryCommand = async (
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
      resultConfiguration: serializeAws_restJson1ProtectedQueryResultConfiguration(input.resultConfiguration, context),
    }),
    ...(input.sqlParameters != null && {
      sqlParameters: serializeAws_restJson1ProtectedQuerySQLParameters(input.sqlParameters, context),
    }),
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

export const serializeAws_restJson1UpdateCollaborationCommand = async (
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

export const serializeAws_restJson1UpdateConfiguredTableCommand = async (
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

export const serializeAws_restJson1UpdateConfiguredTableAnalysisRuleCommand = async (
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
      analysisRulePolicy: serializeAws_restJson1ConfiguredTableAnalysisRulePolicy(input.analysisRulePolicy, context),
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

export const serializeAws_restJson1UpdateConfiguredTableAssociationCommand = async (
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

export const serializeAws_restJson1UpdateMembershipCommand = async (
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

export const serializeAws_restJson1UpdateProtectedQueryCommand = async (
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

export const deserializeAws_restJson1BatchGetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGetSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = deserializeAws_restJson1BatchGetSchemaErrorList(data.errors, context);
  }
  if (data.schemas != null) {
    contents.schemas = deserializeAws_restJson1SchemaList(data.schemas, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchGetSchemaCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCollaborationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.collaboration != null) {
    contents.collaboration = deserializeAws_restJson1Collaboration(data.collaboration, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateCollaborationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfiguredTableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTable != null) {
    contents.configuredTable = deserializeAws_restJson1ConfiguredTable(data.configuredTable, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateConfiguredTableCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfiguredTableAnalysisRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisRule != null) {
    contents.analysisRule = deserializeAws_restJson1ConfiguredTableAnalysisRule(data.analysisRule, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateConfiguredTableAnalysisRuleCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfiguredTableAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTableAssociation != null) {
    contents.configuredTableAssociation = deserializeAws_restJson1ConfiguredTableAssociation(
      data.configuredTableAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateConfiguredTableAssociationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.membership != null) {
    contents.membership = deserializeAws_restJson1Membership(data.membership, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateMembershipCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollaborationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCollaborationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteCollaborationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfiguredTableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteConfiguredTableCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfiguredTableAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteConfiguredTableAssociationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMemberCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMembershipCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCollaborationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.collaboration != null) {
    contents.collaboration = deserializeAws_restJson1Collaboration(data.collaboration, context);
  }
  return contents;
};

const deserializeAws_restJson1GetCollaborationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfiguredTableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTable != null) {
    contents.configuredTable = deserializeAws_restJson1ConfiguredTable(data.configuredTable, context);
  }
  return contents;
};

const deserializeAws_restJson1GetConfiguredTableCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfiguredTableAnalysisRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisRule != null) {
    contents.analysisRule = deserializeAws_restJson1ConfiguredTableAnalysisRule(data.analysisRule, context);
  }
  return contents;
};

const deserializeAws_restJson1GetConfiguredTableAnalysisRuleCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfiguredTableAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTableAssociation != null) {
    contents.configuredTableAssociation = deserializeAws_restJson1ConfiguredTableAssociation(
      data.configuredTableAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetConfiguredTableAssociationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.membership != null) {
    contents.membership = deserializeAws_restJson1Membership(data.membership, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMembershipCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProtectedQueryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.protectedQuery != null) {
    contents.protectedQuery = deserializeAws_restJson1ProtectedQuery(data.protectedQuery, context);
  }
  return contents;
};

const deserializeAws_restJson1GetProtectedQueryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.schema != null) {
    contents.schema = deserializeAws_restJson1Schema(data.schema, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSchemaCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSchemaAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSchemaAnalysisRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisRule != null) {
    contents.analysisRule = deserializeAws_restJson1AnalysisRule(data.analysisRule, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSchemaAnalysisRuleCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListCollaborationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCollaborationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.collaborationList != null) {
    contents.collaborationList = deserializeAws_restJson1CollaborationSummaryList(data.collaborationList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCollaborationsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListConfiguredTableAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTableAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConfiguredTableAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTableAssociationSummaries != null) {
    contents.configuredTableAssociationSummaries = deserializeAws_restJson1ConfiguredTableAssociationSummaryList(
      data.configuredTableAssociationSummaries,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListConfiguredTableAssociationsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListConfiguredTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConfiguredTablesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTableSummaries != null) {
    contents.configuredTableSummaries = deserializeAws_restJson1ConfiguredTableSummaryList(
      data.configuredTableSummaries,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListConfiguredTablesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.memberSummaries != null) {
    contents.memberSummaries = deserializeAws_restJson1MemberSummaryList(data.memberSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMembersCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMembershipsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.membershipSummaries != null) {
    contents.membershipSummaries = deserializeAws_restJson1MembershipSummaryList(data.membershipSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMembershipsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListProtectedQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedQueriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProtectedQueriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.protectedQueries != null) {
    contents.protectedQueries = deserializeAws_restJson1ProtectedQuerySummaryList(data.protectedQueries, context);
  }
  return contents;
};

const deserializeAws_restJson1ListProtectedQueriesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSchemasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.schemaSummaries != null) {
    contents.schemaSummaries = deserializeAws_restJson1SchemaSummaryList(data.schemaSummaries, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSchemasCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartProtectedQueryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.protectedQuery != null) {
    contents.protectedQuery = deserializeAws_restJson1ProtectedQuery(data.protectedQuery, context);
  }
  return contents;
};

const deserializeAws_restJson1StartProtectedQueryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCollaborationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.collaboration != null) {
    contents.collaboration = deserializeAws_restJson1Collaboration(data.collaboration, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateCollaborationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConfiguredTableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTable != null) {
    contents.configuredTable = deserializeAws_restJson1ConfiguredTable(data.configuredTable, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateConfiguredTableCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConfiguredTableAnalysisRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisRule != null) {
    contents.analysisRule = deserializeAws_restJson1ConfiguredTableAnalysisRule(data.analysisRule, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateConfiguredTableAnalysisRuleCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConfiguredTableAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configuredTableAssociation != null) {
    contents.configuredTableAssociation = deserializeAws_restJson1ConfiguredTableAssociation(
      data.configuredTableAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1UpdateConfiguredTableAssociationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.membership != null) {
    contents.membership = deserializeAws_restJson1Membership(data.membership, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateMembershipCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProtectedQueryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.protectedQuery != null) {
    contents.protectedQuery = deserializeAws_restJson1ProtectedQuery(data.protectedQuery, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateProtectedQueryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fieldList != null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
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

const serializeAws_restJson1AggregateColumn = (input: AggregateColumn, context: __SerdeContext): any => {
  return {
    ...(input.columnNames != null && {
      columnNames: serializeAws_restJson1AnalysisRuleColumnNameList(input.columnNames, context),
    }),
    ...(input.function != null && { function: input.function }),
  };
};

const serializeAws_restJson1AggregateColumnList = (input: AggregateColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AggregateColumn(entry, context);
    });
};

const serializeAws_restJson1AggregationConstraint = (input: AggregationConstraint, context: __SerdeContext): any => {
  return {
    ...(input.columnName != null && { columnName: input.columnName }),
    ...(input.minimum != null && { minimum: input.minimum }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1AggregationConstraints = (input: AggregationConstraint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AggregationConstraint(entry, context);
    });
};

const serializeAws_restJson1AllowedColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AnalysisRuleAggregation = (
  input: AnalysisRuleAggregation,
  context: __SerdeContext
): any => {
  return {
    ...(input.aggregateColumns != null && {
      aggregateColumns: serializeAws_restJson1AggregateColumnList(input.aggregateColumns, context),
    }),
    ...(input.dimensionColumns != null && {
      dimensionColumns: serializeAws_restJson1AnalysisRuleColumnList(input.dimensionColumns, context),
    }),
    ...(input.joinColumns != null && {
      joinColumns: serializeAws_restJson1AnalysisRuleColumnList(input.joinColumns, context),
    }),
    ...(input.joinRequired != null && { joinRequired: input.joinRequired }),
    ...(input.outputConstraints != null && {
      outputConstraints: serializeAws_restJson1AggregationConstraints(input.outputConstraints, context),
    }),
    ...(input.scalarFunctions != null && {
      scalarFunctions: serializeAws_restJson1ScalarFunctionsList(input.scalarFunctions, context),
    }),
  };
};

const serializeAws_restJson1AnalysisRuleColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AnalysisRuleColumnNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AnalysisRuleList = (input: AnalysisRuleList, context: __SerdeContext): any => {
  return {
    ...(input.joinColumns != null && {
      joinColumns: serializeAws_restJson1AnalysisRuleColumnList(input.joinColumns, context),
    }),
    ...(input.listColumns != null && {
      listColumns: serializeAws_restJson1AnalysisRuleColumnList(input.listColumns, context),
    }),
  };
};

const serializeAws_restJson1ConfiguredTableAnalysisRulePolicy = (
  input: ConfiguredTableAnalysisRulePolicy,
  context: __SerdeContext
): any => {
  return ConfiguredTableAnalysisRulePolicy.visit(input, {
    v1: (value) => ({ v1: serializeAws_restJson1ConfiguredTableAnalysisRulePolicyV1(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ConfiguredTableAnalysisRulePolicyV1 = (
  input: ConfiguredTableAnalysisRulePolicyV1,
  context: __SerdeContext
): any => {
  return ConfiguredTableAnalysisRulePolicyV1.visit(input, {
    aggregation: (value) => ({ aggregation: serializeAws_restJson1AnalysisRuleAggregation(value, context) }),
    list: (value) => ({ list: serializeAws_restJson1AnalysisRuleList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1DataEncryptionMetadata = (input: DataEncryptionMetadata, context: __SerdeContext): any => {
  return {
    ...(input.allowCleartext != null && { allowCleartext: input.allowCleartext }),
    ...(input.allowDuplicates != null && { allowDuplicates: input.allowDuplicates }),
    ...(input.allowJoinsOnColumnsWithDifferentNames != null && {
      allowJoinsOnColumnsWithDifferentNames: input.allowJoinsOnColumnsWithDifferentNames,
    }),
    ...(input.preserveNulls != null && { preserveNulls: input.preserveNulls }),
  };
};

const serializeAws_restJson1GlueTableReference = (input: GlueTableReference, context: __SerdeContext): any => {
  return {
    ...(input.databaseName != null && { databaseName: input.databaseName }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

const serializeAws_restJson1MemberAbilities = (input: (MemberAbility | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1MemberList = (input: MemberSpecification[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MemberSpecification(entry, context);
    });
};

const serializeAws_restJson1MemberSpecification = (input: MemberSpecification, context: __SerdeContext): any => {
  return {
    ...(input.accountId != null && { accountId: input.accountId }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.memberAbilities != null && {
      memberAbilities: serializeAws_restJson1MemberAbilities(input.memberAbilities, context),
    }),
  };
};

const serializeAws_restJson1ProtectedQueryOutputConfiguration = (
  input: ProtectedQueryOutputConfiguration,
  context: __SerdeContext
): any => {
  return ProtectedQueryOutputConfiguration.visit(input, {
    s3: (value) => ({ s3: serializeAws_restJson1ProtectedQueryS3OutputConfiguration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ProtectedQueryResultConfiguration = (
  input: ProtectedQueryResultConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.outputConfiguration != null && {
      outputConfiguration: serializeAws_restJson1ProtectedQueryOutputConfiguration(input.outputConfiguration, context),
    }),
  };
};

const serializeAws_restJson1ProtectedQueryS3OutputConfiguration = (
  input: ProtectedQueryS3OutputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
    ...(input.resultFormat != null && { resultFormat: input.resultFormat }),
  };
};

const serializeAws_restJson1ProtectedQuerySQLParameters = (
  input: ProtectedQuerySQLParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.queryString != null && { queryString: input.queryString }),
  };
};

const serializeAws_restJson1ScalarFunctionsList = (
  input: (ScalarFunctions | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TableAliasList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TableReference = (input: TableReference, context: __SerdeContext): any => {
  return TableReference.visit(input, {
    glue: (value) => ({ glue: serializeAws_restJson1GlueTableReference(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const deserializeAws_restJson1AggregateColumn = (output: any, context: __SerdeContext): AggregateColumn => {
  return {
    columnNames:
      output.columnNames != null
        ? deserializeAws_restJson1AnalysisRuleColumnNameList(output.columnNames, context)
        : undefined,
    function: __expectString(output.function),
  } as any;
};

const deserializeAws_restJson1AggregateColumnList = (output: any, context: __SerdeContext): AggregateColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AggregateColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AggregationConstraint = (output: any, context: __SerdeContext): AggregationConstraint => {
  return {
    columnName: __expectString(output.columnName),
    minimum: __expectInt32(output.minimum),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1AggregationConstraints = (
  output: any,
  context: __SerdeContext
): AggregationConstraint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AggregationConstraint(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AllowedColumnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AnalysisRule = (output: any, context: __SerdeContext): AnalysisRule => {
  return {
    collaborationId: __expectString(output.collaborationId),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    name: __expectString(output.name),
    policy:
      output.policy != null
        ? deserializeAws_restJson1AnalysisRulePolicy(__expectUnion(output.policy), context)
        : undefined,
    type: __expectString(output.type),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1AnalysisRuleAggregation = (
  output: any,
  context: __SerdeContext
): AnalysisRuleAggregation => {
  return {
    aggregateColumns:
      output.aggregateColumns != null
        ? deserializeAws_restJson1AggregateColumnList(output.aggregateColumns, context)
        : undefined,
    dimensionColumns:
      output.dimensionColumns != null
        ? deserializeAws_restJson1AnalysisRuleColumnList(output.dimensionColumns, context)
        : undefined,
    joinColumns:
      output.joinColumns != null
        ? deserializeAws_restJson1AnalysisRuleColumnList(output.joinColumns, context)
        : undefined,
    joinRequired: __expectString(output.joinRequired),
    outputConstraints:
      output.outputConstraints != null
        ? deserializeAws_restJson1AggregationConstraints(output.outputConstraints, context)
        : undefined,
    scalarFunctions:
      output.scalarFunctions != null
        ? deserializeAws_restJson1ScalarFunctionsList(output.scalarFunctions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AnalysisRuleColumnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AnalysisRuleColumnNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AnalysisRuleList = (output: any, context: __SerdeContext): AnalysisRuleList => {
  return {
    joinColumns:
      output.joinColumns != null
        ? deserializeAws_restJson1AnalysisRuleColumnList(output.joinColumns, context)
        : undefined,
    listColumns:
      output.listColumns != null
        ? deserializeAws_restJson1AnalysisRuleColumnList(output.listColumns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AnalysisRulePolicy = (output: any, context: __SerdeContext): AnalysisRulePolicy => {
  if (output.v1 != null) {
    return {
      v1: deserializeAws_restJson1AnalysisRulePolicyV1(__expectUnion(output.v1), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1AnalysisRulePolicyV1 = (output: any, context: __SerdeContext): AnalysisRulePolicyV1 => {
  if (output.aggregation != null) {
    return {
      aggregation: deserializeAws_restJson1AnalysisRuleAggregation(output.aggregation, context),
    };
  }
  if (output.list != null) {
    return {
      list: deserializeAws_restJson1AnalysisRuleList(output.list, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1AnalysisRuleTypeList = (
  output: any,
  context: __SerdeContext
): (AnalysisRuleType | string)[] => {
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

const deserializeAws_restJson1BatchGetSchemaError = (output: any, context: __SerdeContext): BatchGetSchemaError => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1BatchGetSchemaErrorList = (
  output: any,
  context: __SerdeContext
): BatchGetSchemaError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchGetSchemaError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Collaboration = (output: any, context: __SerdeContext): Collaboration => {
  return {
    arn: __expectString(output.arn),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    creatorAccountId: __expectString(output.creatorAccountId),
    creatorDisplayName: __expectString(output.creatorDisplayName),
    dataEncryptionMetadata:
      output.dataEncryptionMetadata != null
        ? deserializeAws_restJson1DataEncryptionMetadata(output.dataEncryptionMetadata, context)
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

const deserializeAws_restJson1CollaborationSummary = (output: any, context: __SerdeContext): CollaborationSummary => {
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

const deserializeAws_restJson1CollaborationSummaryList = (
  output: any,
  context: __SerdeContext
): CollaborationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CollaborationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Column = (output: any, context: __SerdeContext): Column => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ColumnList = (output: any, context: __SerdeContext): Column[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Column(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConfiguredTable = (output: any, context: __SerdeContext): ConfiguredTable => {
  return {
    allowedColumns:
      output.allowedColumns != null
        ? deserializeAws_restJson1AllowedColumnList(output.allowedColumns, context)
        : undefined,
    analysisMethod: __expectString(output.analysisMethod),
    analysisRuleTypes:
      output.analysisRuleTypes != null
        ? deserializeAws_restJson1ConfiguredTableAnalysisRuleTypeList(output.analysisRuleTypes, context)
        : undefined,
    arn: __expectString(output.arn),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    tableReference:
      output.tableReference != null
        ? deserializeAws_restJson1TableReference(__expectUnion(output.tableReference), context)
        : undefined,
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1ConfiguredTableAnalysisRule = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAnalysisRule => {
  return {
    configuredTableArn: __expectString(output.configuredTableArn),
    configuredTableId: __expectString(output.configuredTableId),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    policy:
      output.policy != null
        ? deserializeAws_restJson1ConfiguredTableAnalysisRulePolicy(__expectUnion(output.policy), context)
        : undefined,
    type: __expectString(output.type),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1ConfiguredTableAnalysisRulePolicy = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAnalysisRulePolicy => {
  if (output.v1 != null) {
    return {
      v1: deserializeAws_restJson1ConfiguredTableAnalysisRulePolicyV1(__expectUnion(output.v1), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ConfiguredTableAnalysisRulePolicyV1 = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAnalysisRulePolicyV1 => {
  if (output.aggregation != null) {
    return {
      aggregation: deserializeAws_restJson1AnalysisRuleAggregation(output.aggregation, context),
    };
  }
  if (output.list != null) {
    return {
      list: deserializeAws_restJson1AnalysisRuleList(output.list, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ConfiguredTableAnalysisRuleTypeList = (
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

const deserializeAws_restJson1ConfiguredTableAssociation = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAssociation => {
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

const deserializeAws_restJson1ConfiguredTableAssociationSummary = (
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

const deserializeAws_restJson1ConfiguredTableAssociationSummaryList = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConfiguredTableAssociationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConfiguredTableSummary = (
  output: any,
  context: __SerdeContext
): ConfiguredTableSummary => {
  return {
    analysisMethod: __expectString(output.analysisMethod),
    analysisRuleTypes:
      output.analysisRuleTypes != null
        ? deserializeAws_restJson1ConfiguredTableAnalysisRuleTypeList(output.analysisRuleTypes, context)
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

const deserializeAws_restJson1ConfiguredTableSummaryList = (
  output: any,
  context: __SerdeContext
): ConfiguredTableSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConfiguredTableSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataEncryptionMetadata = (
  output: any,
  context: __SerdeContext
): DataEncryptionMetadata => {
  return {
    allowCleartext: __expectBoolean(output.allowCleartext),
    allowDuplicates: __expectBoolean(output.allowDuplicates),
    allowJoinsOnColumnsWithDifferentNames: __expectBoolean(output.allowJoinsOnColumnsWithDifferentNames),
    preserveNulls: __expectBoolean(output.preserveNulls),
  } as any;
};

const deserializeAws_restJson1GlueTableReference = (output: any, context: __SerdeContext): GlueTableReference => {
  return {
    databaseName: __expectString(output.databaseName),
    tableName: __expectString(output.tableName),
  } as any;
};

const deserializeAws_restJson1MemberAbilities = (output: any, context: __SerdeContext): (MemberAbility | string)[] => {
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

const deserializeAws_restJson1Membership = (output: any, context: __SerdeContext): Membership => {
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
    memberAbilities:
      output.memberAbilities != null
        ? deserializeAws_restJson1MemberAbilities(output.memberAbilities, context)
        : undefined,
    queryLogStatus: __expectString(output.queryLogStatus),
    status: __expectString(output.status),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1MembershipSummary = (output: any, context: __SerdeContext): MembershipSummary => {
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
    memberAbilities:
      output.memberAbilities != null
        ? deserializeAws_restJson1MemberAbilities(output.memberAbilities, context)
        : undefined,
    status: __expectString(output.status),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1MembershipSummaryList = (output: any, context: __SerdeContext): MembershipSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MembershipSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MemberSummary = (output: any, context: __SerdeContext): MemberSummary => {
  return {
    abilities:
      output.abilities != null ? deserializeAws_restJson1MemberAbilities(output.abilities, context) : undefined,
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

const deserializeAws_restJson1MemberSummaryList = (output: any, context: __SerdeContext): MemberSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MemberSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProtectedQuery = (output: any, context: __SerdeContext): ProtectedQuery => {
  return {
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    error: output.error != null ? deserializeAws_restJson1ProtectedQueryError(output.error, context) : undefined,
    id: __expectString(output.id),
    membershipArn: __expectString(output.membershipArn),
    membershipId: __expectString(output.membershipId),
    result: output.result != null ? deserializeAws_restJson1ProtectedQueryResult(output.result, context) : undefined,
    resultConfiguration:
      output.resultConfiguration != null
        ? deserializeAws_restJson1ProtectedQueryResultConfiguration(output.resultConfiguration, context)
        : undefined,
    sqlParameters:
      output.sqlParameters != null
        ? deserializeAws_restJson1ProtectedQuerySQLParameters(output.sqlParameters, context)
        : undefined,
    statistics:
      output.statistics != null
        ? deserializeAws_restJson1ProtectedQueryStatistics(output.statistics, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ProtectedQueryError = (output: any, context: __SerdeContext): ProtectedQueryError => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1ProtectedQueryOutput = (output: any, context: __SerdeContext): ProtectedQueryOutput => {
  if (output.s3 != null) {
    return {
      s3: deserializeAws_restJson1ProtectedQueryS3Output(output.s3, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ProtectedQueryOutputConfiguration = (
  output: any,
  context: __SerdeContext
): ProtectedQueryOutputConfiguration => {
  if (output.s3 != null) {
    return {
      s3: deserializeAws_restJson1ProtectedQueryS3OutputConfiguration(output.s3, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ProtectedQueryResult = (output: any, context: __SerdeContext): ProtectedQueryResult => {
  return {
    output:
      output.output != null
        ? deserializeAws_restJson1ProtectedQueryOutput(__expectUnion(output.output), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProtectedQueryResultConfiguration = (
  output: any,
  context: __SerdeContext
): ProtectedQueryResultConfiguration => {
  return {
    outputConfiguration:
      output.outputConfiguration != null
        ? deserializeAws_restJson1ProtectedQueryOutputConfiguration(__expectUnion(output.outputConfiguration), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProtectedQueryS3Output = (
  output: any,
  context: __SerdeContext
): ProtectedQueryS3Output => {
  return {
    location: __expectString(output.location),
  } as any;
};

const deserializeAws_restJson1ProtectedQueryS3OutputConfiguration = (
  output: any,
  context: __SerdeContext
): ProtectedQueryS3OutputConfiguration => {
  return {
    bucket: __expectString(output.bucket),
    keyPrefix: __expectString(output.keyPrefix),
    resultFormat: __expectString(output.resultFormat),
  } as any;
};

const deserializeAws_restJson1ProtectedQuerySQLParameters = (
  output: any,
  context: __SerdeContext
): ProtectedQuerySQLParameters => {
  return {
    queryString: __expectString(output.queryString),
  } as any;
};

const deserializeAws_restJson1ProtectedQueryStatistics = (
  output: any,
  context: __SerdeContext
): ProtectedQueryStatistics => {
  return {
    totalDurationInMillis: __expectLong(output.totalDurationInMillis),
  } as any;
};

const deserializeAws_restJson1ProtectedQuerySummary = (output: any, context: __SerdeContext): ProtectedQuerySummary => {
  return {
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    id: __expectString(output.id),
    membershipArn: __expectString(output.membershipArn),
    membershipId: __expectString(output.membershipId),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ProtectedQuerySummaryList = (
  output: any,
  context: __SerdeContext
): ProtectedQuerySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProtectedQuerySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ScalarFunctionsList = (
  output: any,
  context: __SerdeContext
): (ScalarFunctions | string)[] => {
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

const deserializeAws_restJson1Schema = (output: any, context: __SerdeContext): Schema => {
  return {
    analysisMethod: __expectString(output.analysisMethod),
    analysisRuleTypes:
      output.analysisRuleTypes != null
        ? deserializeAws_restJson1AnalysisRuleTypeList(output.analysisRuleTypes, context)
        : undefined,
    collaborationArn: __expectString(output.collaborationArn),
    collaborationId: __expectString(output.collaborationId),
    columns: output.columns != null ? deserializeAws_restJson1ColumnList(output.columns, context) : undefined,
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    creatorAccountId: __expectString(output.creatorAccountId),
    description: __expectString(output.description),
    name: __expectString(output.name),
    partitionKeys:
      output.partitionKeys != null ? deserializeAws_restJson1ColumnList(output.partitionKeys, context) : undefined,
    type: __expectString(output.type),
    updateTime:
      output.updateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1SchemaList = (output: any, context: __SerdeContext): Schema[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Schema(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SchemaSummary = (output: any, context: __SerdeContext): SchemaSummary => {
  return {
    analysisMethod: __expectString(output.analysisMethod),
    analysisRuleTypes:
      output.analysisRuleTypes != null
        ? deserializeAws_restJson1AnalysisRuleTypeList(output.analysisRuleTypes, context)
        : undefined,
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

const deserializeAws_restJson1SchemaSummaryList = (output: any, context: __SerdeContext): SchemaSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SchemaSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TableReference = (output: any, context: __SerdeContext): TableReference => {
  if (output.glue != null) {
    return {
      glue: deserializeAws_restJson1GlueTableReference(output.glue, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
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
