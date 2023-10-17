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
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateComponentCommandInput, CreateComponentCommandOutput } from "../commands/CreateComponentCommand";
import { CreateFormCommandInput, CreateFormCommandOutput } from "../commands/CreateFormCommand";
import { CreateThemeCommandInput, CreateThemeCommandOutput } from "../commands/CreateThemeCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "../commands/DeleteComponentCommand";
import { DeleteFormCommandInput, DeleteFormCommandOutput } from "../commands/DeleteFormCommand";
import { DeleteThemeCommandInput, DeleteThemeCommandOutput } from "../commands/DeleteThemeCommand";
import {
  ExchangeCodeForTokenCommandInput,
  ExchangeCodeForTokenCommandOutput,
} from "../commands/ExchangeCodeForTokenCommand";
import { ExportComponentsCommandInput, ExportComponentsCommandOutput } from "../commands/ExportComponentsCommand";
import { ExportFormsCommandInput, ExportFormsCommandOutput } from "../commands/ExportFormsCommand";
import { ExportThemesCommandInput, ExportThemesCommandOutput } from "../commands/ExportThemesCommand";
import { GetCodegenJobCommandInput, GetCodegenJobCommandOutput } from "../commands/GetCodegenJobCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "../commands/GetComponentCommand";
import { GetFormCommandInput, GetFormCommandOutput } from "../commands/GetFormCommand";
import { GetMetadataCommandInput, GetMetadataCommandOutput } from "../commands/GetMetadataCommand";
import { GetThemeCommandInput, GetThemeCommandOutput } from "../commands/GetThemeCommand";
import { ListCodegenJobsCommandInput, ListCodegenJobsCommandOutput } from "../commands/ListCodegenJobsCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import { ListFormsCommandInput, ListFormsCommandOutput } from "../commands/ListFormsCommand";
import { ListThemesCommandInput, ListThemesCommandOutput } from "../commands/ListThemesCommand";
import { PutMetadataFlagCommandInput, PutMetadataFlagCommandOutput } from "../commands/PutMetadataFlagCommand";
import { RefreshTokenCommandInput, RefreshTokenCommandOutput } from "../commands/RefreshTokenCommand";
import { StartCodegenJobCommandInput, StartCodegenJobCommandOutput } from "../commands/StartCodegenJobCommand";
import { UpdateComponentCommandInput, UpdateComponentCommandOutput } from "../commands/UpdateComponentCommand";
import { UpdateFormCommandInput, UpdateFormCommandOutput } from "../commands/UpdateFormCommand";
import { UpdateThemeCommandInput, UpdateThemeCommandOutput } from "../commands/UpdateThemeCommand";
import { AmplifyUIBuilderServiceException as __BaseException } from "../models/AmplifyUIBuilderServiceException";
import {
  ActionParameters,
  ApiConfiguration,
  CodegenFeatureFlags,
  CodegenGenericDataEnum,
  CodegenGenericDataField,
  CodegenGenericDataModel,
  CodegenGenericDataNonModel,
  CodegenGenericDataRelationshipType,
  CodegenJob,
  CodegenJobGenericDataSchema,
  CodegenJobRenderConfig,
  CodegenJobSummary,
  Component,
  ComponentBindingPropertiesValue,
  ComponentBindingPropertiesValueProperties,
  ComponentChild,
  ComponentConditionProperty,
  ComponentDataConfiguration,
  ComponentEvent,
  ComponentProperty,
  ComponentPropertyBindingProperties,
  ComponentVariant,
  CreateComponentData,
  CreateFormData,
  CreateThemeData,
  DataStoreRenderConfig,
  ExchangeCodeForTokenRequestBody,
  FieldConfig,
  FieldInputConfig,
  FieldPosition,
  FieldValidationConfiguration,
  FileUploaderFieldConfig,
  Form,
  FormBindingElement,
  FormButton,
  FormCTA,
  FormDataTypeConfig,
  FormInputBindingPropertiesValue,
  FormInputBindingPropertiesValueProperties,
  FormInputValueProperty,
  FormInputValuePropertyBindingProperties,
  FormStyle,
  FormStyleConfig,
  GraphQLRenderConfig,
  InternalServerException,
  InvalidParameterException,
  MutationActionSetStateParameter,
  NoApiRenderConfig,
  Predicate,
  PutMetadataFlagBody,
  ReactStartCodegenJobData,
  RefreshTokenRequestBody,
  ResourceConflictException,
  ResourceNotFoundException,
  SectionalElement,
  ServiceQuotaExceededException,
  SortProperty,
  StartCodegenJobData,
  Theme,
  ThemeValue,
  ThemeValues,
  ThrottlingException,
  UnauthorizedException,
  UpdateComponentData,
  UpdateFormData,
  UpdateThemeData,
  ValueMapping,
  ValueMappings,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateComponentCommand
 */
export const se_CreateComponentCommand = async (
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/components";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  if (input.componentToCreate !== undefined) {
    body = se_CreateComponentData(input.componentToCreate, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateFormCommand
 */
export const se_CreateFormCommand = async (
  input: CreateFormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/forms";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  if (input.formToCreate !== undefined) {
    body = se_CreateFormData(input.formToCreate, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateThemeCommand
 */
export const se_CreateThemeCommand = async (
  input: CreateThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/themes";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  if (input.themeToCreate !== undefined) {
    body = se_CreateThemeData(input.themeToCreate, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteComponentCommand
 */
export const se_DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/components/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
 * serializeAws_restJson1DeleteFormCommand
 */
export const se_DeleteFormCommand = async (
  input: DeleteFormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/forms/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
 * serializeAws_restJson1DeleteThemeCommand
 */
export const se_DeleteThemeCommand = async (
  input: DeleteThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/themes/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
 * serializeAws_restJson1ExchangeCodeForTokenCommand
 */
export const se_ExchangeCodeForTokenCommand = async (
  input: ExchangeCodeForTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tokens/{provider}";
  resolvedPath = __resolvedPath(resolvedPath, input, "provider", () => input.provider!, "{provider}", false);
  let body: any;
  if (input.request !== undefined) {
    body = _json(input.request);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1ExportComponentsCommand
 */
export const se_ExportComponentsCommand = async (
  input: ExportComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/export/app/{appId}/environment/{environmentName}/components";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  const query: any = map({
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
 * serializeAws_restJson1ExportFormsCommand
 */
export const se_ExportFormsCommand = async (
  input: ExportFormsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/export/app/{appId}/environment/{environmentName}/forms";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  const query: any = map({
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
 * serializeAws_restJson1ExportThemesCommand
 */
export const se_ExportThemesCommand = async (
  input: ExportThemesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/export/app/{appId}/environment/{environmentName}/themes";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  const query: any = map({
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
 * serializeAws_restJson1GetCodegenJobCommand
 */
export const se_GetCodegenJobCommand = async (
  input: GetCodegenJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/codegen-jobs/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
 * serializeAws_restJson1GetComponentCommand
 */
export const se_GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/components/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
 * serializeAws_restJson1GetFormCommand
 */
export const se_GetFormCommand = async (
  input: GetFormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/forms/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
 * serializeAws_restJson1GetMetadataCommand
 */
export const se_GetMetadataCommand = async (
  input: GetMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/metadata";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
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
 * serializeAws_restJson1GetThemeCommand
 */
export const se_GetThemeCommand = async (
  input: GetThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/themes/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
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
 * serializeAws_restJson1ListCodegenJobsCommand
 */
export const se_ListCodegenJobsCommand = async (
  input: ListCodegenJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/codegen-jobs";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
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
 * serializeAws_restJson1ListComponentsCommand
 */
export const se_ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/components";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
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
 * serializeAws_restJson1ListFormsCommand
 */
export const se_ListFormsCommand = async (
  input: ListFormsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/forms";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
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
 * serializeAws_restJson1ListThemesCommand
 */
export const se_ListThemesCommand = async (
  input: ListThemesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/themes";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
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
 * serializeAws_restJson1PutMetadataFlagCommand
 */
export const se_PutMetadataFlagCommand = async (
  input: PutMetadataFlagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/metadata/features/{featureName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "featureName", () => input.featureName!, "{featureName}", false);
  let body: any;
  if (input.body !== undefined) {
    body = _json(input.body);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1RefreshTokenCommand
 */
export const se_RefreshTokenCommand = async (
  input: RefreshTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tokens/{provider}/refresh";
  resolvedPath = __resolvedPath(resolvedPath, input, "provider", () => input.provider!, "{provider}", false);
  let body: any;
  if (input.refreshTokenBody !== undefined) {
    body = _json(input.refreshTokenBody);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1StartCodegenJobCommand
 */
export const se_StartCodegenJobCommand = async (
  input: StartCodegenJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/codegen-jobs";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  if (input.codegenJobToCreate !== undefined) {
    body = _json(input.codegenJobToCreate);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateComponentCommand
 */
export const se_UpdateComponentCommand = async (
  input: UpdateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/components/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  if (input.updatedComponent !== undefined) {
    body = se_UpdateComponentData(input.updatedComponent, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFormCommand
 */
export const se_UpdateFormCommand = async (
  input: UpdateFormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/forms/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  if (input.updatedForm !== undefined) {
    body = se_UpdateFormData(input.updatedForm, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateThemeCommand
 */
export const se_UpdateThemeCommand = async (
  input: UpdateThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/themes/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "environmentName",
    () => input.environmentName!,
    "{environmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  if (input.updatedTheme !== undefined) {
    body = se_UpdateThemeData(input.updatedTheme, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateComponentCommand
 */
export const de_CreateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.entity = de_Component(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateComponentCommandError
 */
const de_CreateComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.amplifyuibuilder#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.amplifyuibuilder#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateFormCommand
 */
export const de_CreateFormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFormCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFormCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.entity = de_Form(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFormCommandError
 */
const de_CreateFormCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFormCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.amplifyuibuilder#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.amplifyuibuilder#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateThemeCommand
 */
export const de_CreateThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateThemeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.entity = de_Theme(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateThemeCommandError
 */
const de_CreateThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.amplifyuibuilder#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.amplifyuibuilder#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteComponentCommand
 */
export const de_DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteComponentCommandError
 */
const de_DeleteComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplifyuibuilder#ResourceNotFoundException":
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
 * deserializeAws_restJson1DeleteFormCommand
 */
export const de_DeleteFormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFormCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFormCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFormCommandError
 */
const de_DeleteFormCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFormCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplifyuibuilder#ResourceNotFoundException":
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
 * deserializeAws_restJson1DeleteThemeCommand
 */
export const de_DeleteThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteThemeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteThemeCommandError
 */
const de_DeleteThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplifyuibuilder#ResourceNotFoundException":
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
 * deserializeAws_restJson1ExchangeCodeForTokenCommand
 */
export const de_ExchangeCodeForTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExchangeCodeForTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExchangeCodeForTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessToken: __expectString,
    expiresIn: __expectInt32,
    refreshToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExchangeCodeForTokenCommandError
 */
const de_ExchangeCodeForTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExchangeCodeForTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ExportComponentsCommand
 */
export const de_ExportComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExportComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    entities: (_) => de_ComponentList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExportComponentsCommandError
 */
const de_ExportComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ExportFormsCommand
 */
export const de_ExportFormsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportFormsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExportFormsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    entities: (_) => de_FormList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExportFormsCommandError
 */
const de_ExportFormsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportFormsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ExportThemesCommand
 */
export const de_ExportThemesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportThemesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExportThemesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    entities: (_) => de_ThemeList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExportThemesCommandError
 */
const de_ExportThemesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportThemesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetCodegenJobCommand
 */
export const de_GetCodegenJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodegenJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCodegenJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.job = de_CodegenJob(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetCodegenJobCommandError
 */
const de_GetCodegenJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodegenJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplifyuibuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.amplifyuibuilder#ThrottlingException":
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
 * deserializeAws_restJson1GetComponentCommand
 */
export const de_GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.component = de_Component(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetComponentCommandError
 */
const de_GetComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplifyuibuilder#ResourceNotFoundException":
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
 * deserializeAws_restJson1GetFormCommand
 */
export const de_GetFormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFormCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFormCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.form = de_Form(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetFormCommandError
 */
const de_GetFormCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFormCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplifyuibuilder#ResourceNotFoundException":
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
 * deserializeAws_restJson1GetMetadataCommand
 */
export const de_GetMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    features: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMetadataCommandError
 */
const de_GetMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplifyuibuilder#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetThemeCommand
 */
export const de_GetThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetThemeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.theme = de_Theme(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetThemeCommandError
 */
const de_GetThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplifyuibuilder#ResourceNotFoundException":
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
 * deserializeAws_restJson1ListCodegenJobsCommand
 */
export const de_ListCodegenJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodegenJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCodegenJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    entities: (_) => de_CodegenJobSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCodegenJobsCommandError
 */
const de_ListCodegenJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodegenJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.amplifyuibuilder#ThrottlingException":
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
 * deserializeAws_restJson1ListComponentsCommand
 */
export const de_ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    entities: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentsCommandError
 */
const de_ListComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListFormsCommand
 */
export const de_ListFormsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFormsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFormsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    entities: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFormsCommandError
 */
const de_ListFormsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFormsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListThemesCommand
 */
export const de_ListThemesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListThemesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    entities: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListThemesCommandError
 */
const de_ListThemesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutMetadataFlagCommand
 */
export const de_PutMetadataFlagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetadataFlagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutMetadataFlagCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutMetadataFlagCommandError
 */
const de_PutMetadataFlagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetadataFlagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.amplifyuibuilder#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RefreshTokenCommand
 */
export const de_RefreshTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RefreshTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessToken: __expectString,
    expiresIn: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RefreshTokenCommandError
 */
const de_RefreshTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartCodegenJobCommand
 */
export const de_StartCodegenJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCodegenJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartCodegenJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.entity = de_CodegenJob(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartCodegenJobCommandError
 */
const de_StartCodegenJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCodegenJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.amplifyuibuilder#ThrottlingException":
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
 * deserializeAws_restJson1UpdateComponentCommand
 */
export const de_UpdateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.entity = de_Component(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateComponentCommandError
 */
const de_UpdateComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.amplifyuibuilder#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateFormCommand
 */
export const de_UpdateFormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFormCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFormCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.entity = de_Form(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFormCommandError
 */
const de_UpdateFormCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFormCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.amplifyuibuilder#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateThemeCommand
 */
export const de_UpdateThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateThemeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.entity = de_Theme(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThemeCommandError
 */
const de_UpdateThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.amplifyuibuilder#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ActionParameters
 */
const se_ActionParameters = (input: ActionParameters, context: __SerdeContext): any => {
  return take(input, {
    anchor: (_) => se_ComponentProperty(_, context),
    fields: (_) => se_ComponentProperties(_, context),
    global: (_) => se_ComponentProperty(_, context),
    id: (_) => se_ComponentProperty(_, context),
    model: [],
    state: (_) => se_MutationActionSetStateParameter(_, context),
    target: (_) => se_ComponentProperty(_, context),
    type: (_) => se_ComponentProperty(_, context),
    url: (_) => se_ComponentProperty(_, context),
  });
};

// se_ApiConfiguration omitted.

// se_AssociatedFieldsList omitted.

// se_CodegenFeatureFlags omitted.

// se_CodegenGenericDataEnum omitted.

// se_CodegenGenericDataEnums omitted.

// se_CodegenGenericDataEnumValuesList omitted.

// se_CodegenGenericDataField omitted.

// se_CodegenGenericDataFields omitted.

// se_CodegenGenericDataModel omitted.

// se_CodegenGenericDataModels omitted.

// se_CodegenGenericDataNonModel omitted.

// se_CodegenGenericDataNonModelFields omitted.

// se_CodegenGenericDataNonModels omitted.

// se_CodegenGenericDataRelationshipType omitted.

// se_CodegenJobGenericDataSchema omitted.

// se_CodegenJobRenderConfig omitted.

// se_CodegenPrimaryKeysList omitted.

/**
 * serializeAws_restJson1ComponentBindingProperties
 */
const se_ComponentBindingProperties = (
  input: Record<string, ComponentBindingPropertiesValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ComponentBindingPropertiesValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ComponentBindingPropertiesValue
 */
const se_ComponentBindingPropertiesValue = (input: ComponentBindingPropertiesValue, context: __SerdeContext): any => {
  return take(input, {
    bindingProperties: (_) => se_ComponentBindingPropertiesValueProperties(_, context),
    defaultValue: [],
    type: [],
  });
};

/**
 * serializeAws_restJson1ComponentBindingPropertiesValueProperties
 */
const se_ComponentBindingPropertiesValueProperties = (
  input: ComponentBindingPropertiesValueProperties,
  context: __SerdeContext
): any => {
  return take(input, {
    bucket: [],
    defaultValue: [],
    field: [],
    key: [],
    model: [],
    predicates: (_) => se_PredicateList(_, context),
    slotName: [],
    userAttribute: [],
  });
};

/**
 * serializeAws_restJson1ComponentChild
 */
const se_ComponentChild = (input: ComponentChild, context: __SerdeContext): any => {
  return take(input, {
    children: (_) => se_ComponentChildList(_, context),
    componentType: [],
    events: (_) => se_ComponentEvents(_, context),
    name: [],
    properties: (_) => se_ComponentProperties(_, context),
    sourceId: [],
  });
};

/**
 * serializeAws_restJson1ComponentChildList
 */
const se_ComponentChildList = (input: ComponentChild[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComponentChild(entry, context);
    });
};

/**
 * serializeAws_restJson1ComponentCollectionProperties
 */
const se_ComponentCollectionProperties = (
  input: Record<string, ComponentDataConfiguration>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ComponentDataConfiguration(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ComponentConditionProperty
 */
const se_ComponentConditionProperty = (input: ComponentConditionProperty, context: __SerdeContext): any => {
  return take(input, {
    else: (_) => se_ComponentProperty(_, context),
    field: [],
    operand: [],
    operandType: [],
    operator: [],
    property: [],
    then: (_) => se_ComponentProperty(_, context),
  });
};

/**
 * serializeAws_restJson1ComponentDataConfiguration
 */
const se_ComponentDataConfiguration = (input: ComponentDataConfiguration, context: __SerdeContext): any => {
  return take(input, {
    identifiers: _json,
    model: [],
    predicate: (_) => se_Predicate(_, context),
    sort: _json,
  });
};

/**
 * serializeAws_restJson1ComponentEvent
 */
const se_ComponentEvent = (input: ComponentEvent, context: __SerdeContext): any => {
  return take(input, {
    action: [],
    bindingEvent: [],
    parameters: (_) => se_ActionParameters(_, context),
  });
};

/**
 * serializeAws_restJson1ComponentEvents
 */
const se_ComponentEvents = (input: Record<string, ComponentEvent>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ComponentEvent(value, context);
    return acc;
  }, {});
};

// se_ComponentOverrides omitted.

// se_ComponentOverridesValue omitted.

/**
 * serializeAws_restJson1ComponentProperties
 */
const se_ComponentProperties = (input: Record<string, ComponentProperty>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ComponentProperty(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ComponentProperty
 */
const se_ComponentProperty = (input: ComponentProperty, context: __SerdeContext): any => {
  return take(input, {
    bindingProperties: _json,
    bindings: _json,
    collectionBindingProperties: _json,
    componentName: [],
    concat: (_) => se_ComponentPropertyList(_, context),
    condition: (_) => se_ComponentConditionProperty(_, context),
    configured: [],
    defaultValue: [],
    event: [],
    importedValue: [],
    model: [],
    property: [],
    type: [],
    userAttribute: [],
    value: [],
  });
};

// se_ComponentPropertyBindingProperties omitted.

/**
 * serializeAws_restJson1ComponentPropertyList
 */
const se_ComponentPropertyList = (input: ComponentProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComponentProperty(entry, context);
    });
};

// se_ComponentVariant omitted.

// se_ComponentVariants omitted.

// se_ComponentVariantValues omitted.

/**
 * serializeAws_restJson1CreateComponentData
 */
const se_CreateComponentData = (input: CreateComponentData, context: __SerdeContext): any => {
  return take(input, {
    bindingProperties: (_) => se_ComponentBindingProperties(_, context),
    children: (_) => se_ComponentChildList(_, context),
    collectionProperties: (_) => se_ComponentCollectionProperties(_, context),
    componentType: [],
    events: (_) => se_ComponentEvents(_, context),
    name: [],
    overrides: _json,
    properties: (_) => se_ComponentProperties(_, context),
    schemaVersion: [],
    sourceId: [],
    tags: _json,
    variants: _json,
  });
};

/**
 * serializeAws_restJson1CreateFormData
 */
const se_CreateFormData = (input: CreateFormData, context: __SerdeContext): any => {
  return take(input, {
    cta: _json,
    dataType: _json,
    fields: (_) => se_FieldsMap(_, context),
    formActionType: [],
    labelDecorator: [],
    name: [],
    schemaVersion: [],
    sectionalElements: _json,
    style: _json,
    tags: _json,
  });
};

/**
 * serializeAws_restJson1CreateThemeData
 */
const se_CreateThemeData = (input: CreateThemeData, context: __SerdeContext): any => {
  return take(input, {
    name: [],
    overrides: (_) => se_ThemeValuesList(_, context),
    tags: _json,
    values: (_) => se_ThemeValuesList(_, context),
  });
};

// se_DataStoreRenderConfig omitted.

// se_ExchangeCodeForTokenRequestBody omitted.

/**
 * serializeAws_restJson1FieldConfig
 */
const se_FieldConfig = (input: FieldConfig, context: __SerdeContext): any => {
  return take(input, {
    excluded: [],
    inputType: (_) => se_FieldInputConfig(_, context),
    label: [],
    position: _json,
    validations: _json,
  });
};

/**
 * serializeAws_restJson1FieldInputConfig
 */
const se_FieldInputConfig = (input: FieldInputConfig, context: __SerdeContext): any => {
  return take(input, {
    defaultChecked: [],
    defaultCountryCode: [],
    defaultValue: [],
    descriptiveText: [],
    fileUploaderConfig: _json,
    isArray: [],
    maxValue: __serializeFloat,
    minValue: __serializeFloat,
    name: [],
    placeholder: [],
    readOnly: [],
    required: [],
    step: __serializeFloat,
    type: [],
    value: [],
    valueMappings: (_) => se_ValueMappings(_, context),
  });
};

// se_FieldPosition omitted.

/**
 * serializeAws_restJson1FieldsMap
 */
const se_FieldsMap = (input: Record<string, FieldConfig>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_FieldConfig(value, context);
    return acc;
  }, {});
};

// se_FieldValidationConfiguration omitted.

// se_FileUploaderFieldConfig omitted.

// se_FormBindingElement omitted.

// se_FormBindings omitted.

// se_FormButton omitted.

// se_FormCTA omitted.

// se_FormDataTypeConfig omitted.

// se_FormInputBindingProperties omitted.

// se_FormInputBindingPropertiesValue omitted.

// se_FormInputBindingPropertiesValueProperties omitted.

/**
 * serializeAws_restJson1FormInputValueProperty
 */
const se_FormInputValueProperty = (input: FormInputValueProperty, context: __SerdeContext): any => {
  return take(input, {
    bindingProperties: _json,
    concat: (_) => se_FormInputValuePropertyList(_, context),
    value: [],
  });
};

// se_FormInputValuePropertyBindingProperties omitted.

/**
 * serializeAws_restJson1FormInputValuePropertyList
 */
const se_FormInputValuePropertyList = (input: FormInputValueProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FormInputValueProperty(entry, context);
    });
};

// se_FormStyle omitted.

// se_FormStyleConfig omitted.

// se_GraphQLRenderConfig omitted.

// se_IdentifierList omitted.

/**
 * serializeAws_restJson1MutationActionSetStateParameter
 */
const se_MutationActionSetStateParameter = (input: MutationActionSetStateParameter, context: __SerdeContext): any => {
  return take(input, {
    componentName: [],
    property: [],
    set: (_) => se_ComponentProperty(_, context),
  });
};

// se_NoApiRenderConfig omitted.

// se_NumValues omitted.

/**
 * serializeAws_restJson1Predicate
 */
const se_Predicate = (input: Predicate, context: __SerdeContext): any => {
  return take(input, {
    and: (_) => se_PredicateList(_, context),
    field: [],
    operand: [],
    operandType: [],
    operator: [],
    or: (_) => se_PredicateList(_, context),
  });
};

/**
 * serializeAws_restJson1PredicateList
 */
const se_PredicateList = (input: Predicate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Predicate(entry, context);
    });
};

// se_PutMetadataFlagBody omitted.

// se_ReactCodegenDependencies omitted.

// se_ReactStartCodegenJobData omitted.

// se_RefreshTokenRequestBody omitted.

// se_RelatedModelFieldsList omitted.

// se_SectionalElement omitted.

// se_SectionalElementMap omitted.

// se_SortProperty omitted.

// se_SortPropertyList omitted.

// se_StartCodegenJobData omitted.

// se_StrValues omitted.

// se_Tags omitted.

/**
 * serializeAws_restJson1ThemeValue
 */
const se_ThemeValue = (input: ThemeValue, context: __SerdeContext): any => {
  return take(input, {
    children: (_) => se_ThemeValuesList(_, context),
    value: [],
  });
};

/**
 * serializeAws_restJson1ThemeValues
 */
const se_ThemeValues = (input: ThemeValues, context: __SerdeContext): any => {
  return take(input, {
    key: [],
    value: (_) => se_ThemeValue(_, context),
  });
};

/**
 * serializeAws_restJson1ThemeValuesList
 */
const se_ThemeValuesList = (input: ThemeValues[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ThemeValues(entry, context);
    });
};

/**
 * serializeAws_restJson1UpdateComponentData
 */
const se_UpdateComponentData = (input: UpdateComponentData, context: __SerdeContext): any => {
  return take(input, {
    bindingProperties: (_) => se_ComponentBindingProperties(_, context),
    children: (_) => se_ComponentChildList(_, context),
    collectionProperties: (_) => se_ComponentCollectionProperties(_, context),
    componentType: [],
    events: (_) => se_ComponentEvents(_, context),
    id: [],
    name: [],
    overrides: _json,
    properties: (_) => se_ComponentProperties(_, context),
    schemaVersion: [],
    sourceId: [],
    variants: _json,
  });
};

/**
 * serializeAws_restJson1UpdateFormData
 */
const se_UpdateFormData = (input: UpdateFormData, context: __SerdeContext): any => {
  return take(input, {
    cta: _json,
    dataType: _json,
    fields: (_) => se_FieldsMap(_, context),
    formActionType: [],
    labelDecorator: [],
    name: [],
    schemaVersion: [],
    sectionalElements: _json,
    style: _json,
  });
};

/**
 * serializeAws_restJson1UpdateThemeData
 */
const se_UpdateThemeData = (input: UpdateThemeData, context: __SerdeContext): any => {
  return take(input, {
    id: [],
    name: [],
    overrides: (_) => se_ThemeValuesList(_, context),
    values: (_) => se_ThemeValuesList(_, context),
  });
};

// se_ValidationsList omitted.

/**
 * serializeAws_restJson1ValueMapping
 */
const se_ValueMapping = (input: ValueMapping, context: __SerdeContext): any => {
  return take(input, {
    displayValue: (_) => se_FormInputValueProperty(_, context),
    value: (_) => se_FormInputValueProperty(_, context),
  });
};

/**
 * serializeAws_restJson1ValueMappingList
 */
const se_ValueMappingList = (input: ValueMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ValueMapping(entry, context);
    });
};

/**
 * serializeAws_restJson1ValueMappings
 */
const se_ValueMappings = (input: ValueMappings, context: __SerdeContext): any => {
  return take(input, {
    bindingProperties: _json,
    values: (_) => se_ValueMappingList(_, context),
  });
};

/**
 * deserializeAws_restJson1ActionParameters
 */
const de_ActionParameters = (output: any, context: __SerdeContext): ActionParameters => {
  return take(output, {
    anchor: (_: any) => de_ComponentProperty(_, context),
    fields: (_: any) => de_ComponentProperties(_, context),
    global: (_: any) => de_ComponentProperty(_, context),
    id: (_: any) => de_ComponentProperty(_, context),
    model: __expectString,
    state: (_: any) => de_MutationActionSetStateParameter(_, context),
    target: (_: any) => de_ComponentProperty(_, context),
    type: (_: any) => de_ComponentProperty(_, context),
    url: (_: any) => de_ComponentProperty(_, context),
  }) as any;
};

// de_ApiConfiguration omitted.

// de_AssociatedFieldsList omitted.

// de_CodegenDependencies omitted.

// de_CodegenDependency omitted.

// de_CodegenFeatureFlags omitted.

// de_CodegenGenericDataEnum omitted.

// de_CodegenGenericDataEnums omitted.

// de_CodegenGenericDataEnumValuesList omitted.

// de_CodegenGenericDataField omitted.

// de_CodegenGenericDataFields omitted.

// de_CodegenGenericDataModel omitted.

// de_CodegenGenericDataModels omitted.

// de_CodegenGenericDataNonModel omitted.

// de_CodegenGenericDataNonModelFields omitted.

// de_CodegenGenericDataNonModels omitted.

// de_CodegenGenericDataRelationshipType omitted.

/**
 * deserializeAws_restJson1CodegenJob
 */
const de_CodegenJob = (output: any, context: __SerdeContext): CodegenJob => {
  return take(output, {
    appId: __expectString,
    asset: _json,
    autoGenerateForms: __expectBoolean,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dependencies: _json,
    environmentName: __expectString,
    features: _json,
    genericDataSchema: _json,
    id: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    renderConfig: (_: any) => _json(__expectUnion(_)),
    status: __expectString,
    statusMessage: __expectString,
    tags: _json,
  }) as any;
};

// de_CodegenJobAsset omitted.

// de_CodegenJobGenericDataSchema omitted.

// de_CodegenJobRenderConfig omitted.

/**
 * deserializeAws_restJson1CodegenJobSummary
 */
const de_CodegenJobSummary = (output: any, context: __SerdeContext): CodegenJobSummary => {
  return take(output, {
    appId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    environmentName: __expectString,
    id: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1CodegenJobSummaryList
 */
const de_CodegenJobSummaryList = (output: any, context: __SerdeContext): CodegenJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CodegenJobSummary(entry, context);
    });
  return retVal;
};

// de_CodegenPrimaryKeysList omitted.

/**
 * deserializeAws_restJson1Component
 */
const de_Component = (output: any, context: __SerdeContext): Component => {
  return take(output, {
    appId: __expectString,
    bindingProperties: (_: any) => de_ComponentBindingProperties(_, context),
    children: (_: any) => de_ComponentChildList(_, context),
    collectionProperties: (_: any) => de_ComponentCollectionProperties(_, context),
    componentType: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    environmentName: __expectString,
    events: (_: any) => de_ComponentEvents(_, context),
    id: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    overrides: _json,
    properties: (_: any) => de_ComponentProperties(_, context),
    schemaVersion: __expectString,
    sourceId: __expectString,
    tags: _json,
    variants: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ComponentBindingProperties
 */
const de_ComponentBindingProperties = (
  output: any,
  context: __SerdeContext
): Record<string, ComponentBindingPropertiesValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ComponentBindingPropertiesValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = de_ComponentBindingPropertiesValue(value, context);
      return acc;
    },
    {} as Record<string, ComponentBindingPropertiesValue>
  );
};

/**
 * deserializeAws_restJson1ComponentBindingPropertiesValue
 */
const de_ComponentBindingPropertiesValue = (output: any, context: __SerdeContext): ComponentBindingPropertiesValue => {
  return take(output, {
    bindingProperties: (_: any) => de_ComponentBindingPropertiesValueProperties(_, context),
    defaultValue: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ComponentBindingPropertiesValueProperties
 */
const de_ComponentBindingPropertiesValueProperties = (
  output: any,
  context: __SerdeContext
): ComponentBindingPropertiesValueProperties => {
  return take(output, {
    bucket: __expectString,
    defaultValue: __expectString,
    field: __expectString,
    key: __expectString,
    model: __expectString,
    predicates: (_: any) => de_PredicateList(_, context),
    slotName: __expectString,
    userAttribute: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ComponentChild
 */
const de_ComponentChild = (output: any, context: __SerdeContext): ComponentChild => {
  return take(output, {
    children: (_: any) => de_ComponentChildList(_, context),
    componentType: __expectString,
    events: (_: any) => de_ComponentEvents(_, context),
    name: __expectString,
    properties: (_: any) => de_ComponentProperties(_, context),
    sourceId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ComponentChildList
 */
const de_ComponentChildList = (output: any, context: __SerdeContext): ComponentChild[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ComponentChild(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentCollectionProperties
 */
const de_ComponentCollectionProperties = (
  output: any,
  context: __SerdeContext
): Record<string, ComponentDataConfiguration> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ComponentDataConfiguration>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = de_ComponentDataConfiguration(value, context);
      return acc;
    },
    {} as Record<string, ComponentDataConfiguration>
  );
};

/**
 * deserializeAws_restJson1ComponentConditionProperty
 */
const de_ComponentConditionProperty = (output: any, context: __SerdeContext): ComponentConditionProperty => {
  return take(output, {
    else: (_: any) => de_ComponentProperty(_, context),
    field: __expectString,
    operand: __expectString,
    operandType: __expectString,
    operator: __expectString,
    property: __expectString,
    then: (_: any) => de_ComponentProperty(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ComponentDataConfiguration
 */
const de_ComponentDataConfiguration = (output: any, context: __SerdeContext): ComponentDataConfiguration => {
  return take(output, {
    identifiers: _json,
    model: __expectString,
    predicate: (_: any) => de_Predicate(_, context),
    sort: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ComponentEvent
 */
const de_ComponentEvent = (output: any, context: __SerdeContext): ComponentEvent => {
  return take(output, {
    action: __expectString,
    bindingEvent: __expectString,
    parameters: (_: any) => de_ActionParameters(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ComponentEvents
 */
const de_ComponentEvents = (output: any, context: __SerdeContext): Record<string, ComponentEvent> => {
  return Object.entries(output).reduce((acc: Record<string, ComponentEvent>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_ComponentEvent(value, context);
    return acc;
  }, {} as Record<string, ComponentEvent>);
};

/**
 * deserializeAws_restJson1ComponentList
 */
const de_ComponentList = (output: any, context: __SerdeContext): Component[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Component(entry, context);
    });
  return retVal;
};

// de_ComponentOverrides omitted.

// de_ComponentOverridesValue omitted.

/**
 * deserializeAws_restJson1ComponentProperties
 */
const de_ComponentProperties = (output: any, context: __SerdeContext): Record<string, ComponentProperty> => {
  return Object.entries(output).reduce((acc: Record<string, ComponentProperty>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_ComponentProperty(value, context);
    return acc;
  }, {} as Record<string, ComponentProperty>);
};

/**
 * deserializeAws_restJson1ComponentProperty
 */
const de_ComponentProperty = (output: any, context: __SerdeContext): ComponentProperty => {
  return take(output, {
    bindingProperties: _json,
    bindings: _json,
    collectionBindingProperties: _json,
    componentName: __expectString,
    concat: (_: any) => de_ComponentPropertyList(_, context),
    condition: (_: any) => de_ComponentConditionProperty(_, context),
    configured: __expectBoolean,
    defaultValue: __expectString,
    event: __expectString,
    importedValue: __expectString,
    model: __expectString,
    property: __expectString,
    type: __expectString,
    userAttribute: __expectString,
    value: __expectString,
  }) as any;
};

// de_ComponentPropertyBindingProperties omitted.

/**
 * deserializeAws_restJson1ComponentPropertyList
 */
const de_ComponentPropertyList = (output: any, context: __SerdeContext): ComponentProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ComponentProperty(entry, context);
    });
  return retVal;
};

// de_ComponentSummary omitted.

// de_ComponentSummaryList omitted.

// de_ComponentVariant omitted.

// de_ComponentVariants omitted.

// de_ComponentVariantValues omitted.

// de_DataStoreRenderConfig omitted.

// de_FeaturesMap omitted.

/**
 * deserializeAws_restJson1FieldConfig
 */
const de_FieldConfig = (output: any, context: __SerdeContext): FieldConfig => {
  return take(output, {
    excluded: __expectBoolean,
    inputType: (_: any) => de_FieldInputConfig(_, context),
    label: __expectString,
    position: (_: any) => _json(__expectUnion(_)),
    validations: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1FieldInputConfig
 */
const de_FieldInputConfig = (output: any, context: __SerdeContext): FieldInputConfig => {
  return take(output, {
    defaultChecked: __expectBoolean,
    defaultCountryCode: __expectString,
    defaultValue: __expectString,
    descriptiveText: __expectString,
    fileUploaderConfig: _json,
    isArray: __expectBoolean,
    maxValue: __limitedParseFloat32,
    minValue: __limitedParseFloat32,
    name: __expectString,
    placeholder: __expectString,
    readOnly: __expectBoolean,
    required: __expectBoolean,
    step: __limitedParseFloat32,
    type: __expectString,
    value: __expectString,
    valueMappings: (_: any) => de_ValueMappings(_, context),
  }) as any;
};

// de_FieldPosition omitted.

/**
 * deserializeAws_restJson1FieldsMap
 */
const de_FieldsMap = (output: any, context: __SerdeContext): Record<string, FieldConfig> => {
  return Object.entries(output).reduce((acc: Record<string, FieldConfig>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_FieldConfig(value, context);
    return acc;
  }, {} as Record<string, FieldConfig>);
};

// de_FieldValidationConfiguration omitted.

// de_FileUploaderFieldConfig omitted.

/**
 * deserializeAws_restJson1Form
 */
const de_Form = (output: any, context: __SerdeContext): Form => {
  return take(output, {
    appId: __expectString,
    cta: _json,
    dataType: _json,
    environmentName: __expectString,
    fields: (_: any) => de_FieldsMap(_, context),
    formActionType: __expectString,
    id: __expectString,
    labelDecorator: __expectString,
    name: __expectString,
    schemaVersion: __expectString,
    sectionalElements: _json,
    style: _json,
    tags: _json,
  }) as any;
};

// de_FormBindingElement omitted.

// de_FormBindings omitted.

// de_FormButton omitted.

// de_FormCTA omitted.

// de_FormDataTypeConfig omitted.

// de_FormInputBindingProperties omitted.

// de_FormInputBindingPropertiesValue omitted.

// de_FormInputBindingPropertiesValueProperties omitted.

/**
 * deserializeAws_restJson1FormInputValueProperty
 */
const de_FormInputValueProperty = (output: any, context: __SerdeContext): FormInputValueProperty => {
  return take(output, {
    bindingProperties: _json,
    concat: (_: any) => de_FormInputValuePropertyList(_, context),
    value: __expectString,
  }) as any;
};

// de_FormInputValuePropertyBindingProperties omitted.

/**
 * deserializeAws_restJson1FormInputValuePropertyList
 */
const de_FormInputValuePropertyList = (output: any, context: __SerdeContext): FormInputValueProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FormInputValueProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FormList
 */
const de_FormList = (output: any, context: __SerdeContext): Form[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Form(entry, context);
    });
  return retVal;
};

// de_FormStyle omitted.

// de_FormStyleConfig omitted.

// de_FormSummary omitted.

// de_FormSummaryList omitted.

// de_GraphQLRenderConfig omitted.

// de_IdentifierList omitted.

/**
 * deserializeAws_restJson1MutationActionSetStateParameter
 */
const de_MutationActionSetStateParameter = (output: any, context: __SerdeContext): MutationActionSetStateParameter => {
  return take(output, {
    componentName: __expectString,
    property: __expectString,
    set: (_: any) => de_ComponentProperty(_, context),
  }) as any;
};

// de_NoApiRenderConfig omitted.

// de_NumValues omitted.

/**
 * deserializeAws_restJson1Predicate
 */
const de_Predicate = (output: any, context: __SerdeContext): Predicate => {
  return take(output, {
    and: (_: any) => de_PredicateList(_, context),
    field: __expectString,
    operand: __expectString,
    operandType: __expectString,
    operator: __expectString,
    or: (_: any) => de_PredicateList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PredicateList
 */
const de_PredicateList = (output: any, context: __SerdeContext): Predicate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Predicate(entry, context);
    });
  return retVal;
};

// de_ReactCodegenDependencies omitted.

// de_ReactStartCodegenJobData omitted.

// de_RelatedModelFieldsList omitted.

// de_SectionalElement omitted.

// de_SectionalElementMap omitted.

// de_SortProperty omitted.

// de_SortPropertyList omitted.

// de_StrValues omitted.

// de_Tags omitted.

/**
 * deserializeAws_restJson1Theme
 */
const de_Theme = (output: any, context: __SerdeContext): Theme => {
  return take(output, {
    appId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    environmentName: __expectString,
    id: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    overrides: (_: any) => de_ThemeValuesList(_, context),
    tags: _json,
    values: (_: any) => de_ThemeValuesList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ThemeList
 */
const de_ThemeList = (output: any, context: __SerdeContext): Theme[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Theme(entry, context);
    });
  return retVal;
};

// de_ThemeSummary omitted.

// de_ThemeSummaryList omitted.

/**
 * deserializeAws_restJson1ThemeValue
 */
const de_ThemeValue = (output: any, context: __SerdeContext): ThemeValue => {
  return take(output, {
    children: (_: any) => de_ThemeValuesList(_, context),
    value: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ThemeValues
 */
const de_ThemeValues = (output: any, context: __SerdeContext): ThemeValues => {
  return take(output, {
    key: __expectString,
    value: (_: any) => de_ThemeValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ThemeValuesList
 */
const de_ThemeValuesList = (output: any, context: __SerdeContext): ThemeValues[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ThemeValues(entry, context);
    });
  return retVal;
};

// de_ValidationsList omitted.

/**
 * deserializeAws_restJson1ValueMapping
 */
const de_ValueMapping = (output: any, context: __SerdeContext): ValueMapping => {
  return take(output, {
    displayValue: (_: any) => de_FormInputValueProperty(_, context),
    value: (_: any) => de_FormInputValueProperty(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ValueMappingList
 */
const de_ValueMappingList = (output: any, context: __SerdeContext): ValueMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ValueMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValueMappings
 */
const de_ValueMappings = (output: any, context: __SerdeContext): ValueMappings => {
  return take(output, {
    bindingProperties: _json,
    values: (_: any) => de_ValueMappingList(_, context),
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
