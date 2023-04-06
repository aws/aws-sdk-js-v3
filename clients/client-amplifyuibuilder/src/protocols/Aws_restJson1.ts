// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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
import { GetComponentCommandInput, GetComponentCommandOutput } from "../commands/GetComponentCommand";
import { GetFormCommandInput, GetFormCommandOutput } from "../commands/GetFormCommand";
import { GetMetadataCommandInput, GetMetadataCommandOutput } from "../commands/GetMetadataCommand";
import { GetThemeCommandInput, GetThemeCommandOutput } from "../commands/GetThemeCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import { ListFormsCommandInput, ListFormsCommandOutput } from "../commands/ListFormsCommand";
import { ListThemesCommandInput, ListThemesCommandOutput } from "../commands/ListThemesCommand";
import { PutMetadataFlagCommandInput, PutMetadataFlagCommandOutput } from "../commands/PutMetadataFlagCommand";
import { RefreshTokenCommandInput, RefreshTokenCommandOutput } from "../commands/RefreshTokenCommand";
import { UpdateComponentCommandInput, UpdateComponentCommandOutput } from "../commands/UpdateComponentCommand";
import { UpdateFormCommandInput, UpdateFormCommandOutput } from "../commands/UpdateFormCommand";
import { UpdateThemeCommandInput, UpdateThemeCommandOutput } from "../commands/UpdateThemeCommand";
import { AmplifyUIBuilderServiceException as __BaseException } from "../models/AmplifyUIBuilderServiceException";
import {
  ActionParameters,
  Component,
  ComponentBindingPropertiesValue,
  ComponentBindingPropertiesValueProperties,
  ComponentChild,
  ComponentConditionProperty,
  ComponentDataConfiguration,
  ComponentEvent,
  ComponentProperty,
  ComponentPropertyBindingProperties,
  ComponentSummary,
  ComponentVariant,
  CreateComponentData,
  CreateFormData,
  CreateThemeData,
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
  FormSummary,
  InternalServerException,
  InvalidParameterException,
  MutationActionSetStateParameter,
  Predicate,
  PutMetadataFlagBody,
  RefreshTokenRequestBody,
  ResourceConflictException,
  ResourceNotFoundException,
  SectionalElement,
  ServiceQuotaExceededException,
  SortProperty,
  Theme,
  ThemeSummary,
  ThemeValue,
  ThemeValues,
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
    body = se_ExchangeCodeForTokenRequestBody(input.request, context);
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
    body = se_PutMetadataFlagBody(input.body, context);
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
    body = se_RefreshTokenRequestBody(input.refreshTokenBody, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.accessToken != null) {
    contents.accessToken = __expectString(data.accessToken);
  }
  if (data.expiresIn != null) {
    contents.expiresIn = __expectInt32(data.expiresIn);
  }
  if (data.refreshToken != null) {
    contents.refreshToken = __expectString(data.refreshToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.entities != null) {
    contents.entities = de_ComponentList(data.entities, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.entities != null) {
    contents.entities = de_FormList(data.entities, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.entities != null) {
    contents.entities = de_ThemeList(data.entities, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.features != null) {
    contents.features = de_FeaturesMap(data.features, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.entities != null) {
    contents.entities = de_ComponentSummaryList(data.entities, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.entities != null) {
    contents.entities = de_FormSummaryList(data.entities, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.entities != null) {
    contents.entities = de_ThemeSummaryList(data.entities, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.accessToken != null) {
    contents.accessToken = __expectString(data.accessToken);
  }
  if (data.expiresIn != null) {
    contents.expiresIn = __expectInt32(data.expiresIn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  const exception = new ServiceQuotaExceededException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  return {
    ...(input.anchor != null && { anchor: se_ComponentProperty(input.anchor, context) }),
    ...(input.fields != null && { fields: se_ComponentProperties(input.fields, context) }),
    ...(input.global != null && { global: se_ComponentProperty(input.global, context) }),
    ...(input.id != null && { id: se_ComponentProperty(input.id, context) }),
    ...(input.model != null && { model: input.model }),
    ...(input.state != null && { state: se_MutationActionSetStateParameter(input.state, context) }),
    ...(input.target != null && { target: se_ComponentProperty(input.target, context) }),
    ...(input.type != null && { type: se_ComponentProperty(input.type, context) }),
    ...(input.url != null && { url: se_ComponentProperty(input.url, context) }),
  };
};

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
  return {
    ...(input.bindingProperties != null && {
      bindingProperties: se_ComponentBindingPropertiesValueProperties(input.bindingProperties, context),
    }),
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1ComponentBindingPropertiesValueProperties
 */
const se_ComponentBindingPropertiesValueProperties = (
  input: ComponentBindingPropertiesValueProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.field != null && { field: input.field }),
    ...(input.key != null && { key: input.key }),
    ...(input.model != null && { model: input.model }),
    ...(input.predicates != null && { predicates: se_PredicateList(input.predicates, context) }),
    ...(input.slotName != null && { slotName: input.slotName }),
    ...(input.userAttribute != null && { userAttribute: input.userAttribute }),
  };
};

/**
 * serializeAws_restJson1ComponentChild
 */
const se_ComponentChild = (input: ComponentChild, context: __SerdeContext): any => {
  return {
    ...(input.children != null && { children: se_ComponentChildList(input.children, context) }),
    ...(input.componentType != null && { componentType: input.componentType }),
    ...(input.events != null && { events: se_ComponentEvents(input.events, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.properties != null && { properties: se_ComponentProperties(input.properties, context) }),
    ...(input.sourceId != null && { sourceId: input.sourceId }),
  };
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
  return {
    ...(input.else != null && { else: se_ComponentProperty(input.else, context) }),
    ...(input.field != null && { field: input.field }),
    ...(input.operand != null && { operand: input.operand }),
    ...(input.operandType != null && { operandType: input.operandType }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.property != null && { property: input.property }),
    ...(input.then != null && { then: se_ComponentProperty(input.then, context) }),
  };
};

/**
 * serializeAws_restJson1ComponentDataConfiguration
 */
const se_ComponentDataConfiguration = (input: ComponentDataConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.identifiers != null && { identifiers: se_IdentifierList(input.identifiers, context) }),
    ...(input.model != null && { model: input.model }),
    ...(input.predicate != null && { predicate: se_Predicate(input.predicate, context) }),
    ...(input.sort != null && { sort: se_SortPropertyList(input.sort, context) }),
  };
};

/**
 * serializeAws_restJson1ComponentEvent
 */
const se_ComponentEvent = (input: ComponentEvent, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: input.action }),
    ...(input.bindingEvent != null && { bindingEvent: input.bindingEvent }),
    ...(input.parameters != null && { parameters: se_ActionParameters(input.parameters, context) }),
  };
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

/**
 * serializeAws_restJson1ComponentOverrides
 */
const se_ComponentOverrides = (input: Record<string, Record<string, string>>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ComponentOverridesValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ComponentOverridesValue
 */
const se_ComponentOverridesValue = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

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
  return {
    ...(input.bindingProperties != null && {
      bindingProperties: se_ComponentPropertyBindingProperties(input.bindingProperties, context),
    }),
    ...(input.bindings != null && { bindings: se_FormBindings(input.bindings, context) }),
    ...(input.collectionBindingProperties != null && {
      collectionBindingProperties: se_ComponentPropertyBindingProperties(input.collectionBindingProperties, context),
    }),
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.concat != null && { concat: se_ComponentPropertyList(input.concat, context) }),
    ...(input.condition != null && { condition: se_ComponentConditionProperty(input.condition, context) }),
    ...(input.configured != null && { configured: input.configured }),
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.event != null && { event: input.event }),
    ...(input.importedValue != null && { importedValue: input.importedValue }),
    ...(input.model != null && { model: input.model }),
    ...(input.property != null && { property: input.property }),
    ...(input.type != null && { type: input.type }),
    ...(input.userAttribute != null && { userAttribute: input.userAttribute }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1ComponentPropertyBindingProperties
 */
const se_ComponentPropertyBindingProperties = (
  input: ComponentPropertyBindingProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.field != null && { field: input.field }),
    ...(input.property != null && { property: input.property }),
  };
};

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

/**
 * serializeAws_restJson1ComponentVariant
 */
const se_ComponentVariant = (input: ComponentVariant, context: __SerdeContext): any => {
  return {
    ...(input.overrides != null && { overrides: se_ComponentOverrides(input.overrides, context) }),
    ...(input.variantValues != null && { variantValues: se_ComponentVariantValues(input.variantValues, context) }),
  };
};

/**
 * serializeAws_restJson1ComponentVariants
 */
const se_ComponentVariants = (input: ComponentVariant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComponentVariant(entry, context);
    });
};

/**
 * serializeAws_restJson1ComponentVariantValues
 */
const se_ComponentVariantValues = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1CreateComponentData
 */
const se_CreateComponentData = (input: CreateComponentData, context: __SerdeContext): any => {
  return {
    ...(input.bindingProperties != null && {
      bindingProperties: se_ComponentBindingProperties(input.bindingProperties, context),
    }),
    ...(input.children != null && { children: se_ComponentChildList(input.children, context) }),
    ...(input.collectionProperties != null && {
      collectionProperties: se_ComponentCollectionProperties(input.collectionProperties, context),
    }),
    ...(input.componentType != null && { componentType: input.componentType }),
    ...(input.events != null && { events: se_ComponentEvents(input.events, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.overrides != null && { overrides: se_ComponentOverrides(input.overrides, context) }),
    ...(input.properties != null && { properties: se_ComponentProperties(input.properties, context) }),
    ...(input.schemaVersion != null && { schemaVersion: input.schemaVersion }),
    ...(input.sourceId != null && { sourceId: input.sourceId }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.variants != null && { variants: se_ComponentVariants(input.variants, context) }),
  };
};

/**
 * serializeAws_restJson1CreateFormData
 */
const se_CreateFormData = (input: CreateFormData, context: __SerdeContext): any => {
  return {
    ...(input.cta != null && { cta: se_FormCTA(input.cta, context) }),
    ...(input.dataType != null && { dataType: se_FormDataTypeConfig(input.dataType, context) }),
    ...(input.fields != null && { fields: se_FieldsMap(input.fields, context) }),
    ...(input.formActionType != null && { formActionType: input.formActionType }),
    ...(input.labelDecorator != null && { labelDecorator: input.labelDecorator }),
    ...(input.name != null && { name: input.name }),
    ...(input.schemaVersion != null && { schemaVersion: input.schemaVersion }),
    ...(input.sectionalElements != null && {
      sectionalElements: se_SectionalElementMap(input.sectionalElements, context),
    }),
    ...(input.style != null && { style: se_FormStyle(input.style, context) }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1CreateThemeData
 */
const se_CreateThemeData = (input: CreateThemeData, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.overrides != null && { overrides: se_ThemeValuesList(input.overrides, context) }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.values != null && { values: se_ThemeValuesList(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1ExchangeCodeForTokenRequestBody
 */
const se_ExchangeCodeForTokenRequestBody = (input: ExchangeCodeForTokenRequestBody, context: __SerdeContext): any => {
  return {
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.code != null && { code: input.code }),
    ...(input.redirectUri != null && { redirectUri: input.redirectUri }),
  };
};

/**
 * serializeAws_restJson1FieldConfig
 */
const se_FieldConfig = (input: FieldConfig, context: __SerdeContext): any => {
  return {
    ...(input.excluded != null && { excluded: input.excluded }),
    ...(input.inputType != null && { inputType: se_FieldInputConfig(input.inputType, context) }),
    ...(input.label != null && { label: input.label }),
    ...(input.position != null && { position: se_FieldPosition(input.position, context) }),
    ...(input.validations != null && { validations: se_ValidationsList(input.validations, context) }),
  };
};

/**
 * serializeAws_restJson1FieldInputConfig
 */
const se_FieldInputConfig = (input: FieldInputConfig, context: __SerdeContext): any => {
  return {
    ...(input.defaultChecked != null && { defaultChecked: input.defaultChecked }),
    ...(input.defaultCountryCode != null && { defaultCountryCode: input.defaultCountryCode }),
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
    ...(input.descriptiveText != null && { descriptiveText: input.descriptiveText }),
    ...(input.fileUploaderConfig != null && {
      fileUploaderConfig: se_FileUploaderFieldConfig(input.fileUploaderConfig, context),
    }),
    ...(input.isArray != null && { isArray: input.isArray }),
    ...(input.maxValue != null && { maxValue: __serializeFloat(input.maxValue) }),
    ...(input.minValue != null && { minValue: __serializeFloat(input.minValue) }),
    ...(input.name != null && { name: input.name }),
    ...(input.placeholder != null && { placeholder: input.placeholder }),
    ...(input.readOnly != null && { readOnly: input.readOnly }),
    ...(input.required != null && { required: input.required }),
    ...(input.step != null && { step: __serializeFloat(input.step) }),
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
    ...(input.valueMappings != null && { valueMappings: se_ValueMappings(input.valueMappings, context) }),
  };
};

/**
 * serializeAws_restJson1FieldPosition
 */
const se_FieldPosition = (input: FieldPosition, context: __SerdeContext): any => {
  return FieldPosition.visit(input, {
    below: (value) => ({ below: value }),
    fixed: (value) => ({ fixed: value }),
    rightOf: (value) => ({ rightOf: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

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

/**
 * serializeAws_restJson1FieldValidationConfiguration
 */
const se_FieldValidationConfiguration = (input: FieldValidationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.numValues != null && { numValues: se_NumValues(input.numValues, context) }),
    ...(input.strValues != null && { strValues: se_StrValues(input.strValues, context) }),
    ...(input.type != null && { type: input.type }),
    ...(input.validationMessage != null && { validationMessage: input.validationMessage }),
  };
};

/**
 * serializeAws_restJson1FileUploaderFieldConfig
 */
const se_FileUploaderFieldConfig = (input: FileUploaderFieldConfig, context: __SerdeContext): any => {
  return {
    ...(input.acceptedFileTypes != null && { acceptedFileTypes: se_StrValues(input.acceptedFileTypes, context) }),
    ...(input.accessLevel != null && { accessLevel: input.accessLevel }),
    ...(input.isResumable != null && { isResumable: input.isResumable }),
    ...(input.maxFileCount != null && { maxFileCount: input.maxFileCount }),
    ...(input.maxSize != null && { maxSize: input.maxSize }),
    ...(input.showThumbnails != null && { showThumbnails: input.showThumbnails }),
  };
};

/**
 * serializeAws_restJson1FormBindingElement
 */
const se_FormBindingElement = (input: FormBindingElement, context: __SerdeContext): any => {
  return {
    ...(input.element != null && { element: input.element }),
    ...(input.property != null && { property: input.property }),
  };
};

/**
 * serializeAws_restJson1FormBindings
 */
const se_FormBindings = (input: Record<string, FormBindingElement>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_FormBindingElement(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1FormButton
 */
const se_FormButton = (input: FormButton, context: __SerdeContext): any => {
  return {
    ...(input.children != null && { children: input.children }),
    ...(input.excluded != null && { excluded: input.excluded }),
    ...(input.position != null && { position: se_FieldPosition(input.position, context) }),
  };
};

/**
 * serializeAws_restJson1FormCTA
 */
const se_FormCTA = (input: FormCTA, context: __SerdeContext): any => {
  return {
    ...(input.cancel != null && { cancel: se_FormButton(input.cancel, context) }),
    ...(input.clear != null && { clear: se_FormButton(input.clear, context) }),
    ...(input.position != null && { position: input.position }),
    ...(input.submit != null && { submit: se_FormButton(input.submit, context) }),
  };
};

/**
 * serializeAws_restJson1FormDataTypeConfig
 */
const se_FormDataTypeConfig = (input: FormDataTypeConfig, context: __SerdeContext): any => {
  return {
    ...(input.dataSourceType != null && { dataSourceType: input.dataSourceType }),
    ...(input.dataTypeName != null && { dataTypeName: input.dataTypeName }),
  };
};

/**
 * serializeAws_restJson1FormInputBindingProperties
 */
const se_FormInputBindingProperties = (
  input: Record<string, FormInputBindingPropertiesValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_FormInputBindingPropertiesValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1FormInputBindingPropertiesValue
 */
const se_FormInputBindingPropertiesValue = (input: FormInputBindingPropertiesValue, context: __SerdeContext): any => {
  return {
    ...(input.bindingProperties != null && {
      bindingProperties: se_FormInputBindingPropertiesValueProperties(input.bindingProperties, context),
    }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1FormInputBindingPropertiesValueProperties
 */
const se_FormInputBindingPropertiesValueProperties = (
  input: FormInputBindingPropertiesValueProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.model != null && { model: input.model }),
  };
};

/**
 * serializeAws_restJson1FormInputValueProperty
 */
const se_FormInputValueProperty = (input: FormInputValueProperty, context: __SerdeContext): any => {
  return {
    ...(input.bindingProperties != null && {
      bindingProperties: se_FormInputValuePropertyBindingProperties(input.bindingProperties, context),
    }),
    ...(input.concat != null && { concat: se_FormInputValuePropertyList(input.concat, context) }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1FormInputValuePropertyBindingProperties
 */
const se_FormInputValuePropertyBindingProperties = (
  input: FormInputValuePropertyBindingProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.field != null && { field: input.field }),
    ...(input.property != null && { property: input.property }),
  };
};

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

/**
 * serializeAws_restJson1FormStyle
 */
const se_FormStyle = (input: FormStyle, context: __SerdeContext): any => {
  return {
    ...(input.horizontalGap != null && { horizontalGap: se_FormStyleConfig(input.horizontalGap, context) }),
    ...(input.outerPadding != null && { outerPadding: se_FormStyleConfig(input.outerPadding, context) }),
    ...(input.verticalGap != null && { verticalGap: se_FormStyleConfig(input.verticalGap, context) }),
  };
};

/**
 * serializeAws_restJson1FormStyleConfig
 */
const se_FormStyleConfig = (input: FormStyleConfig, context: __SerdeContext): any => {
  return FormStyleConfig.visit(input, {
    tokenReference: (value) => ({ tokenReference: value }),
    value: (value) => ({ value: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1IdentifierList
 */
const se_IdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1MutationActionSetStateParameter
 */
const se_MutationActionSetStateParameter = (input: MutationActionSetStateParameter, context: __SerdeContext): any => {
  return {
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.property != null && { property: input.property }),
    ...(input.set != null && { set: se_ComponentProperty(input.set, context) }),
  };
};

/**
 * serializeAws_restJson1NumValues
 */
const se_NumValues = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Predicate
 */
const se_Predicate = (input: Predicate, context: __SerdeContext): any => {
  return {
    ...(input.and != null && { and: se_PredicateList(input.and, context) }),
    ...(input.field != null && { field: input.field }),
    ...(input.operand != null && { operand: input.operand }),
    ...(input.operandType != null && { operandType: input.operandType }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.or != null && { or: se_PredicateList(input.or, context) }),
  };
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

/**
 * serializeAws_restJson1PutMetadataFlagBody
 */
const se_PutMetadataFlagBody = (input: PutMetadataFlagBody, context: __SerdeContext): any => {
  return {
    ...(input.newValue != null && { newValue: input.newValue }),
  };
};

/**
 * serializeAws_restJson1RefreshTokenRequestBody
 */
const se_RefreshTokenRequestBody = (input: RefreshTokenRequestBody, context: __SerdeContext): any => {
  return {
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.token != null && { token: input.token }),
  };
};

/**
 * serializeAws_restJson1SectionalElement
 */
const se_SectionalElement = (input: SectionalElement, context: __SerdeContext): any => {
  return {
    ...(input.excluded != null && { excluded: input.excluded }),
    ...(input.level != null && { level: input.level }),
    ...(input.orientation != null && { orientation: input.orientation }),
    ...(input.position != null && { position: se_FieldPosition(input.position, context) }),
    ...(input.text != null && { text: input.text }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1SectionalElementMap
 */
const se_SectionalElementMap = (input: Record<string, SectionalElement>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_SectionalElement(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SortProperty
 */
const se_SortProperty = (input: SortProperty, context: __SerdeContext): any => {
  return {
    ...(input.direction != null && { direction: input.direction }),
    ...(input.field != null && { field: input.field }),
  };
};

/**
 * serializeAws_restJson1SortPropertyList
 */
const se_SortPropertyList = (input: SortProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SortProperty(entry, context);
    });
};

/**
 * serializeAws_restJson1StrValues
 */
const se_StrValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
 * serializeAws_restJson1ThemeValue
 */
const se_ThemeValue = (input: ThemeValue, context: __SerdeContext): any => {
  return {
    ...(input.children != null && { children: se_ThemeValuesList(input.children, context) }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1ThemeValues
 */
const se_ThemeValues = (input: ThemeValues, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: se_ThemeValue(input.value, context) }),
  };
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
  return {
    ...(input.bindingProperties != null && {
      bindingProperties: se_ComponentBindingProperties(input.bindingProperties, context),
    }),
    ...(input.children != null && { children: se_ComponentChildList(input.children, context) }),
    ...(input.collectionProperties != null && {
      collectionProperties: se_ComponentCollectionProperties(input.collectionProperties, context),
    }),
    ...(input.componentType != null && { componentType: input.componentType }),
    ...(input.events != null && { events: se_ComponentEvents(input.events, context) }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.overrides != null && { overrides: se_ComponentOverrides(input.overrides, context) }),
    ...(input.properties != null && { properties: se_ComponentProperties(input.properties, context) }),
    ...(input.schemaVersion != null && { schemaVersion: input.schemaVersion }),
    ...(input.sourceId != null && { sourceId: input.sourceId }),
    ...(input.variants != null && { variants: se_ComponentVariants(input.variants, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateFormData
 */
const se_UpdateFormData = (input: UpdateFormData, context: __SerdeContext): any => {
  return {
    ...(input.cta != null && { cta: se_FormCTA(input.cta, context) }),
    ...(input.dataType != null && { dataType: se_FormDataTypeConfig(input.dataType, context) }),
    ...(input.fields != null && { fields: se_FieldsMap(input.fields, context) }),
    ...(input.formActionType != null && { formActionType: input.formActionType }),
    ...(input.labelDecorator != null && { labelDecorator: input.labelDecorator }),
    ...(input.name != null && { name: input.name }),
    ...(input.schemaVersion != null && { schemaVersion: input.schemaVersion }),
    ...(input.sectionalElements != null && {
      sectionalElements: se_SectionalElementMap(input.sectionalElements, context),
    }),
    ...(input.style != null && { style: se_FormStyle(input.style, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateThemeData
 */
const se_UpdateThemeData = (input: UpdateThemeData, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.overrides != null && { overrides: se_ThemeValuesList(input.overrides, context) }),
    ...(input.values != null && { values: se_ThemeValuesList(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1ValidationsList
 */
const se_ValidationsList = (input: FieldValidationConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FieldValidationConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1ValueMapping
 */
const se_ValueMapping = (input: ValueMapping, context: __SerdeContext): any => {
  return {
    ...(input.displayValue != null && { displayValue: se_FormInputValueProperty(input.displayValue, context) }),
    ...(input.value != null && { value: se_FormInputValueProperty(input.value, context) }),
  };
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
  return {
    ...(input.bindingProperties != null && {
      bindingProperties: se_FormInputBindingProperties(input.bindingProperties, context),
    }),
    ...(input.values != null && { values: se_ValueMappingList(input.values, context) }),
  };
};

/**
 * deserializeAws_restJson1ActionParameters
 */
const de_ActionParameters = (output: any, context: __SerdeContext): ActionParameters => {
  return {
    anchor: output.anchor != null ? de_ComponentProperty(output.anchor, context) : undefined,
    fields: output.fields != null ? de_ComponentProperties(output.fields, context) : undefined,
    global: output.global != null ? de_ComponentProperty(output.global, context) : undefined,
    id: output.id != null ? de_ComponentProperty(output.id, context) : undefined,
    model: __expectString(output.model),
    state: output.state != null ? de_MutationActionSetStateParameter(output.state, context) : undefined,
    target: output.target != null ? de_ComponentProperty(output.target, context) : undefined,
    type: output.type != null ? de_ComponentProperty(output.type, context) : undefined,
    url: output.url != null ? de_ComponentProperty(output.url, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Component
 */
const de_Component = (output: any, context: __SerdeContext): Component => {
  return {
    appId: __expectString(output.appId),
    bindingProperties:
      output.bindingProperties != null ? de_ComponentBindingProperties(output.bindingProperties, context) : undefined,
    children: output.children != null ? de_ComponentChildList(output.children, context) : undefined,
    collectionProperties:
      output.collectionProperties != null
        ? de_ComponentCollectionProperties(output.collectionProperties, context)
        : undefined,
    componentType: __expectString(output.componentType),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    environmentName: __expectString(output.environmentName),
    events: output.events != null ? de_ComponentEvents(output.events, context) : undefined,
    id: __expectString(output.id),
    modifiedAt:
      output.modifiedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.modifiedAt)) : undefined,
    name: __expectString(output.name),
    overrides: output.overrides != null ? de_ComponentOverrides(output.overrides, context) : undefined,
    properties: output.properties != null ? de_ComponentProperties(output.properties, context) : undefined,
    schemaVersion: __expectString(output.schemaVersion),
    sourceId: __expectString(output.sourceId),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    variants: output.variants != null ? de_ComponentVariants(output.variants, context) : undefined,
  } as any;
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
      acc[key] = de_ComponentBindingPropertiesValue(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1ComponentBindingPropertiesValue
 */
const de_ComponentBindingPropertiesValue = (output: any, context: __SerdeContext): ComponentBindingPropertiesValue => {
  return {
    bindingProperties:
      output.bindingProperties != null
        ? de_ComponentBindingPropertiesValueProperties(output.bindingProperties, context)
        : undefined,
    defaultValue: __expectString(output.defaultValue),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentBindingPropertiesValueProperties
 */
const de_ComponentBindingPropertiesValueProperties = (
  output: any,
  context: __SerdeContext
): ComponentBindingPropertiesValueProperties => {
  return {
    bucket: __expectString(output.bucket),
    defaultValue: __expectString(output.defaultValue),
    field: __expectString(output.field),
    key: __expectString(output.key),
    model: __expectString(output.model),
    predicates: output.predicates != null ? de_PredicateList(output.predicates, context) : undefined,
    slotName: __expectString(output.slotName),
    userAttribute: __expectString(output.userAttribute),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentChild
 */
const de_ComponentChild = (output: any, context: __SerdeContext): ComponentChild => {
  return {
    children: output.children != null ? de_ComponentChildList(output.children, context) : undefined,
    componentType: __expectString(output.componentType),
    events: output.events != null ? de_ComponentEvents(output.events, context) : undefined,
    name: __expectString(output.name),
    properties: output.properties != null ? de_ComponentProperties(output.properties, context) : undefined,
    sourceId: __expectString(output.sourceId),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentChildList
 */
const de_ComponentChildList = (output: any, context: __SerdeContext): ComponentChild[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      acc[key] = de_ComponentDataConfiguration(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1ComponentConditionProperty
 */
const de_ComponentConditionProperty = (output: any, context: __SerdeContext): ComponentConditionProperty => {
  return {
    else: output.else != null ? de_ComponentProperty(output.else, context) : undefined,
    field: __expectString(output.field),
    operand: __expectString(output.operand),
    operandType: __expectString(output.operandType),
    operator: __expectString(output.operator),
    property: __expectString(output.property),
    then: output.then != null ? de_ComponentProperty(output.then, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ComponentDataConfiguration
 */
const de_ComponentDataConfiguration = (output: any, context: __SerdeContext): ComponentDataConfiguration => {
  return {
    identifiers: output.identifiers != null ? de_IdentifierList(output.identifiers, context) : undefined,
    model: __expectString(output.model),
    predicate: output.predicate != null ? de_Predicate(output.predicate, context) : undefined,
    sort: output.sort != null ? de_SortPropertyList(output.sort, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ComponentEvent
 */
const de_ComponentEvent = (output: any, context: __SerdeContext): ComponentEvent => {
  return {
    action: __expectString(output.action),
    bindingEvent: __expectString(output.bindingEvent),
    parameters: output.parameters != null ? de_ActionParameters(output.parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ComponentEvents
 */
const de_ComponentEvents = (output: any, context: __SerdeContext): Record<string, ComponentEvent> => {
  return Object.entries(output).reduce((acc: Record<string, ComponentEvent>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ComponentEvent(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ComponentList
 */
const de_ComponentList = (output: any, context: __SerdeContext): Component[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Component(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentOverrides
 */
const de_ComponentOverrides = (output: any, context: __SerdeContext): Record<string, Record<string, string>> => {
  return Object.entries(output).reduce((acc: Record<string, Record<string, string>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ComponentOverridesValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ComponentOverridesValue
 */
const de_ComponentOverridesValue = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ComponentProperties
 */
const de_ComponentProperties = (output: any, context: __SerdeContext): Record<string, ComponentProperty> => {
  return Object.entries(output).reduce((acc: Record<string, ComponentProperty>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ComponentProperty(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ComponentProperty
 */
const de_ComponentProperty = (output: any, context: __SerdeContext): ComponentProperty => {
  return {
    bindingProperties:
      output.bindingProperties != null
        ? de_ComponentPropertyBindingProperties(output.bindingProperties, context)
        : undefined,
    bindings: output.bindings != null ? de_FormBindings(output.bindings, context) : undefined,
    collectionBindingProperties:
      output.collectionBindingProperties != null
        ? de_ComponentPropertyBindingProperties(output.collectionBindingProperties, context)
        : undefined,
    componentName: __expectString(output.componentName),
    concat: output.concat != null ? de_ComponentPropertyList(output.concat, context) : undefined,
    condition: output.condition != null ? de_ComponentConditionProperty(output.condition, context) : undefined,
    configured: __expectBoolean(output.configured),
    defaultValue: __expectString(output.defaultValue),
    event: __expectString(output.event),
    importedValue: __expectString(output.importedValue),
    model: __expectString(output.model),
    property: __expectString(output.property),
    type: __expectString(output.type),
    userAttribute: __expectString(output.userAttribute),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentPropertyBindingProperties
 */
const de_ComponentPropertyBindingProperties = (
  output: any,
  context: __SerdeContext
): ComponentPropertyBindingProperties => {
  return {
    field: __expectString(output.field),
    property: __expectString(output.property),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentPropertyList
 */
const de_ComponentPropertyList = (output: any, context: __SerdeContext): ComponentProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentSummary
 */
const de_ComponentSummary = (output: any, context: __SerdeContext): ComponentSummary => {
  return {
    appId: __expectString(output.appId),
    componentType: __expectString(output.componentType),
    environmentName: __expectString(output.environmentName),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentSummaryList
 */
const de_ComponentSummaryList = (output: any, context: __SerdeContext): ComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentVariant
 */
const de_ComponentVariant = (output: any, context: __SerdeContext): ComponentVariant => {
  return {
    overrides: output.overrides != null ? de_ComponentOverrides(output.overrides, context) : undefined,
    variantValues: output.variantValues != null ? de_ComponentVariantValues(output.variantValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ComponentVariants
 */
const de_ComponentVariants = (output: any, context: __SerdeContext): ComponentVariant[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentVariant(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentVariantValues
 */
const de_ComponentVariantValues = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1FeaturesMap
 */
const de_FeaturesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1FieldConfig
 */
const de_FieldConfig = (output: any, context: __SerdeContext): FieldConfig => {
  return {
    excluded: __expectBoolean(output.excluded),
    inputType: output.inputType != null ? de_FieldInputConfig(output.inputType, context) : undefined,
    label: __expectString(output.label),
    position: output.position != null ? de_FieldPosition(__expectUnion(output.position), context) : undefined,
    validations: output.validations != null ? de_ValidationsList(output.validations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FieldInputConfig
 */
const de_FieldInputConfig = (output: any, context: __SerdeContext): FieldInputConfig => {
  return {
    defaultChecked: __expectBoolean(output.defaultChecked),
    defaultCountryCode: __expectString(output.defaultCountryCode),
    defaultValue: __expectString(output.defaultValue),
    descriptiveText: __expectString(output.descriptiveText),
    fileUploaderConfig:
      output.fileUploaderConfig != null ? de_FileUploaderFieldConfig(output.fileUploaderConfig, context) : undefined,
    isArray: __expectBoolean(output.isArray),
    maxValue: __limitedParseFloat32(output.maxValue),
    minValue: __limitedParseFloat32(output.minValue),
    name: __expectString(output.name),
    placeholder: __expectString(output.placeholder),
    readOnly: __expectBoolean(output.readOnly),
    required: __expectBoolean(output.required),
    step: __limitedParseFloat32(output.step),
    type: __expectString(output.type),
    value: __expectString(output.value),
    valueMappings: output.valueMappings != null ? de_ValueMappings(output.valueMappings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FieldPosition
 */
const de_FieldPosition = (output: any, context: __SerdeContext): FieldPosition => {
  if (__expectString(output.below) !== undefined) {
    return { below: __expectString(output.below) as any };
  }
  if (__expectString(output.fixed) !== undefined) {
    return { fixed: __expectString(output.fixed) as any };
  }
  if (__expectString(output.rightOf) !== undefined) {
    return { rightOf: __expectString(output.rightOf) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1FieldsMap
 */
const de_FieldsMap = (output: any, context: __SerdeContext): Record<string, FieldConfig> => {
  return Object.entries(output).reduce((acc: Record<string, FieldConfig>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_FieldConfig(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1FieldValidationConfiguration
 */
const de_FieldValidationConfiguration = (output: any, context: __SerdeContext): FieldValidationConfiguration => {
  return {
    numValues: output.numValues != null ? de_NumValues(output.numValues, context) : undefined,
    strValues: output.strValues != null ? de_StrValues(output.strValues, context) : undefined,
    type: __expectString(output.type),
    validationMessage: __expectString(output.validationMessage),
  } as any;
};

/**
 * deserializeAws_restJson1FileUploaderFieldConfig
 */
const de_FileUploaderFieldConfig = (output: any, context: __SerdeContext): FileUploaderFieldConfig => {
  return {
    acceptedFileTypes: output.acceptedFileTypes != null ? de_StrValues(output.acceptedFileTypes, context) : undefined,
    accessLevel: __expectString(output.accessLevel),
    isResumable: __expectBoolean(output.isResumable),
    maxFileCount: __expectInt32(output.maxFileCount),
    maxSize: __expectInt32(output.maxSize),
    showThumbnails: __expectBoolean(output.showThumbnails),
  } as any;
};

/**
 * deserializeAws_restJson1Form
 */
const de_Form = (output: any, context: __SerdeContext): Form => {
  return {
    appId: __expectString(output.appId),
    cta: output.cta != null ? de_FormCTA(output.cta, context) : undefined,
    dataType: output.dataType != null ? de_FormDataTypeConfig(output.dataType, context) : undefined,
    environmentName: __expectString(output.environmentName),
    fields: output.fields != null ? de_FieldsMap(output.fields, context) : undefined,
    formActionType: __expectString(output.formActionType),
    id: __expectString(output.id),
    labelDecorator: __expectString(output.labelDecorator),
    name: __expectString(output.name),
    schemaVersion: __expectString(output.schemaVersion),
    sectionalElements:
      output.sectionalElements != null ? de_SectionalElementMap(output.sectionalElements, context) : undefined,
    style: output.style != null ? de_FormStyle(output.style, context) : undefined,
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FormBindingElement
 */
const de_FormBindingElement = (output: any, context: __SerdeContext): FormBindingElement => {
  return {
    element: __expectString(output.element),
    property: __expectString(output.property),
  } as any;
};

/**
 * deserializeAws_restJson1FormBindings
 */
const de_FormBindings = (output: any, context: __SerdeContext): Record<string, FormBindingElement> => {
  return Object.entries(output).reduce((acc: Record<string, FormBindingElement>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_FormBindingElement(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1FormButton
 */
const de_FormButton = (output: any, context: __SerdeContext): FormButton => {
  return {
    children: __expectString(output.children),
    excluded: __expectBoolean(output.excluded),
    position: output.position != null ? de_FieldPosition(__expectUnion(output.position), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FormCTA
 */
const de_FormCTA = (output: any, context: __SerdeContext): FormCTA => {
  return {
    cancel: output.cancel != null ? de_FormButton(output.cancel, context) : undefined,
    clear: output.clear != null ? de_FormButton(output.clear, context) : undefined,
    position: __expectString(output.position),
    submit: output.submit != null ? de_FormButton(output.submit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FormDataTypeConfig
 */
const de_FormDataTypeConfig = (output: any, context: __SerdeContext): FormDataTypeConfig => {
  return {
    dataSourceType: __expectString(output.dataSourceType),
    dataTypeName: __expectString(output.dataTypeName),
  } as any;
};

/**
 * deserializeAws_restJson1FormInputBindingProperties
 */
const de_FormInputBindingProperties = (
  output: any,
  context: __SerdeContext
): Record<string, FormInputBindingPropertiesValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, FormInputBindingPropertiesValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_FormInputBindingPropertiesValue(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1FormInputBindingPropertiesValue
 */
const de_FormInputBindingPropertiesValue = (output: any, context: __SerdeContext): FormInputBindingPropertiesValue => {
  return {
    bindingProperties:
      output.bindingProperties != null
        ? de_FormInputBindingPropertiesValueProperties(output.bindingProperties, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1FormInputBindingPropertiesValueProperties
 */
const de_FormInputBindingPropertiesValueProperties = (
  output: any,
  context: __SerdeContext
): FormInputBindingPropertiesValueProperties => {
  return {
    model: __expectString(output.model),
  } as any;
};

/**
 * deserializeAws_restJson1FormInputValueProperty
 */
const de_FormInputValueProperty = (output: any, context: __SerdeContext): FormInputValueProperty => {
  return {
    bindingProperties:
      output.bindingProperties != null
        ? de_FormInputValuePropertyBindingProperties(output.bindingProperties, context)
        : undefined,
    concat: output.concat != null ? de_FormInputValuePropertyList(output.concat, context) : undefined,
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1FormInputValuePropertyBindingProperties
 */
const de_FormInputValuePropertyBindingProperties = (
  output: any,
  context: __SerdeContext
): FormInputValuePropertyBindingProperties => {
  return {
    field: __expectString(output.field),
    property: __expectString(output.property),
  } as any;
};

/**
 * deserializeAws_restJson1FormInputValuePropertyList
 */
const de_FormInputValuePropertyList = (output: any, context: __SerdeContext): FormInputValueProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_Form(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FormStyle
 */
const de_FormStyle = (output: any, context: __SerdeContext): FormStyle => {
  return {
    horizontalGap:
      output.horizontalGap != null ? de_FormStyleConfig(__expectUnion(output.horizontalGap), context) : undefined,
    outerPadding:
      output.outerPadding != null ? de_FormStyleConfig(__expectUnion(output.outerPadding), context) : undefined,
    verticalGap:
      output.verticalGap != null ? de_FormStyleConfig(__expectUnion(output.verticalGap), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FormStyleConfig
 */
const de_FormStyleConfig = (output: any, context: __SerdeContext): FormStyleConfig => {
  if (__expectString(output.tokenReference) !== undefined) {
    return { tokenReference: __expectString(output.tokenReference) as any };
  }
  if (__expectString(output.value) !== undefined) {
    return { value: __expectString(output.value) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1FormSummary
 */
const de_FormSummary = (output: any, context: __SerdeContext): FormSummary => {
  return {
    appId: __expectString(output.appId),
    dataType: output.dataType != null ? de_FormDataTypeConfig(output.dataType, context) : undefined,
    environmentName: __expectString(output.environmentName),
    formActionType: __expectString(output.formActionType),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1FormSummaryList
 */
const de_FormSummaryList = (output: any, context: __SerdeContext): FormSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FormSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IdentifierList
 */
const de_IdentifierList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1MutationActionSetStateParameter
 */
const de_MutationActionSetStateParameter = (output: any, context: __SerdeContext): MutationActionSetStateParameter => {
  return {
    componentName: __expectString(output.componentName),
    property: __expectString(output.property),
    set: output.set != null ? de_ComponentProperty(output.set, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NumValues
 */
const de_NumValues = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Predicate
 */
const de_Predicate = (output: any, context: __SerdeContext): Predicate => {
  return {
    and: output.and != null ? de_PredicateList(output.and, context) : undefined,
    field: __expectString(output.field),
    operand: __expectString(output.operand),
    operandType: __expectString(output.operandType),
    operator: __expectString(output.operator),
    or: output.or != null ? de_PredicateList(output.or, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PredicateList
 */
const de_PredicateList = (output: any, context: __SerdeContext): Predicate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Predicate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SectionalElement
 */
const de_SectionalElement = (output: any, context: __SerdeContext): SectionalElement => {
  return {
    excluded: __expectBoolean(output.excluded),
    level: __expectInt32(output.level),
    orientation: __expectString(output.orientation),
    position: output.position != null ? de_FieldPosition(__expectUnion(output.position), context) : undefined,
    text: __expectString(output.text),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1SectionalElementMap
 */
const de_SectionalElementMap = (output: any, context: __SerdeContext): Record<string, SectionalElement> => {
  return Object.entries(output).reduce((acc: Record<string, SectionalElement>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_SectionalElement(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SortProperty
 */
const de_SortProperty = (output: any, context: __SerdeContext): SortProperty => {
  return {
    direction: __expectString(output.direction),
    field: __expectString(output.field),
  } as any;
};

/**
 * deserializeAws_restJson1SortPropertyList
 */
const de_SortPropertyList = (output: any, context: __SerdeContext): SortProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SortProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StrValues
 */
const de_StrValues = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_restJson1Theme
 */
const de_Theme = (output: any, context: __SerdeContext): Theme => {
  return {
    appId: __expectString(output.appId),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    environmentName: __expectString(output.environmentName),
    id: __expectString(output.id),
    modifiedAt:
      output.modifiedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.modifiedAt)) : undefined,
    name: __expectString(output.name),
    overrides: output.overrides != null ? de_ThemeValuesList(output.overrides, context) : undefined,
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    values: output.values != null ? de_ThemeValuesList(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ThemeList
 */
const de_ThemeList = (output: any, context: __SerdeContext): Theme[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Theme(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThemeSummary
 */
const de_ThemeSummary = (output: any, context: __SerdeContext): ThemeSummary => {
  return {
    appId: __expectString(output.appId),
    environmentName: __expectString(output.environmentName),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ThemeSummaryList
 */
const de_ThemeSummaryList = (output: any, context: __SerdeContext): ThemeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ThemeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThemeValue
 */
const de_ThemeValue = (output: any, context: __SerdeContext): ThemeValue => {
  return {
    children: output.children != null ? de_ThemeValuesList(output.children, context) : undefined,
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1ThemeValues
 */
const de_ThemeValues = (output: any, context: __SerdeContext): ThemeValues => {
  return {
    key: __expectString(output.key),
    value: output.value != null ? de_ThemeValue(output.value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ThemeValuesList
 */
const de_ThemeValuesList = (output: any, context: __SerdeContext): ThemeValues[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ThemeValues(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValidationsList
 */
const de_ValidationsList = (output: any, context: __SerdeContext): FieldValidationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldValidationConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValueMapping
 */
const de_ValueMapping = (output: any, context: __SerdeContext): ValueMapping => {
  return {
    displayValue: output.displayValue != null ? de_FormInputValueProperty(output.displayValue, context) : undefined,
    value: output.value != null ? de_FormInputValueProperty(output.value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ValueMappingList
 */
const de_ValueMappingList = (output: any, context: __SerdeContext): ValueMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValueMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValueMappings
 */
const de_ValueMappings = (output: any, context: __SerdeContext): ValueMappings => {
  return {
    bindingProperties:
      output.bindingProperties != null ? de_FormInputBindingProperties(output.bindingProperties, context) : undefined,
    values: output.values != null ? de_ValueMappingList(output.values, context) : undefined,
  } as any;
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
