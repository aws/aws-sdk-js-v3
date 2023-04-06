// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloneBackendCommandInput, CloneBackendCommandOutput } from "../commands/CloneBackendCommand";
import { CreateBackendAPICommandInput, CreateBackendAPICommandOutput } from "../commands/CreateBackendAPICommand";
import { CreateBackendAuthCommandInput, CreateBackendAuthCommandOutput } from "../commands/CreateBackendAuthCommand";
import { CreateBackendCommandInput, CreateBackendCommandOutput } from "../commands/CreateBackendCommand";
import {
  CreateBackendConfigCommandInput,
  CreateBackendConfigCommandOutput,
} from "../commands/CreateBackendConfigCommand";
import {
  CreateBackendStorageCommandInput,
  CreateBackendStorageCommandOutput,
} from "../commands/CreateBackendStorageCommand";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "../commands/CreateTokenCommand";
import { DeleteBackendAPICommandInput, DeleteBackendAPICommandOutput } from "../commands/DeleteBackendAPICommand";
import { DeleteBackendAuthCommandInput, DeleteBackendAuthCommandOutput } from "../commands/DeleteBackendAuthCommand";
import { DeleteBackendCommandInput, DeleteBackendCommandOutput } from "../commands/DeleteBackendCommand";
import {
  DeleteBackendStorageCommandInput,
  DeleteBackendStorageCommandOutput,
} from "../commands/DeleteBackendStorageCommand";
import { DeleteTokenCommandInput, DeleteTokenCommandOutput } from "../commands/DeleteTokenCommand";
import {
  GenerateBackendAPIModelsCommandInput,
  GenerateBackendAPIModelsCommandOutput,
} from "../commands/GenerateBackendAPIModelsCommand";
import { GetBackendAPICommandInput, GetBackendAPICommandOutput } from "../commands/GetBackendAPICommand";
import {
  GetBackendAPIModelsCommandInput,
  GetBackendAPIModelsCommandOutput,
} from "../commands/GetBackendAPIModelsCommand";
import { GetBackendAuthCommandInput, GetBackendAuthCommandOutput } from "../commands/GetBackendAuthCommand";
import { GetBackendCommandInput, GetBackendCommandOutput } from "../commands/GetBackendCommand";
import { GetBackendJobCommandInput, GetBackendJobCommandOutput } from "../commands/GetBackendJobCommand";
import { GetBackendStorageCommandInput, GetBackendStorageCommandOutput } from "../commands/GetBackendStorageCommand";
import { GetTokenCommandInput, GetTokenCommandOutput } from "../commands/GetTokenCommand";
import { ImportBackendAuthCommandInput, ImportBackendAuthCommandOutput } from "../commands/ImportBackendAuthCommand";
import {
  ImportBackendStorageCommandInput,
  ImportBackendStorageCommandOutput,
} from "../commands/ImportBackendStorageCommand";
import { ListBackendJobsCommandInput, ListBackendJobsCommandOutput } from "../commands/ListBackendJobsCommand";
import { ListS3BucketsCommandInput, ListS3BucketsCommandOutput } from "../commands/ListS3BucketsCommand";
import { RemoveAllBackendsCommandInput, RemoveAllBackendsCommandOutput } from "../commands/RemoveAllBackendsCommand";
import {
  RemoveBackendConfigCommandInput,
  RemoveBackendConfigCommandOutput,
} from "../commands/RemoveBackendConfigCommand";
import { UpdateBackendAPICommandInput, UpdateBackendAPICommandOutput } from "../commands/UpdateBackendAPICommand";
import { UpdateBackendAuthCommandInput, UpdateBackendAuthCommandOutput } from "../commands/UpdateBackendAuthCommand";
import {
  UpdateBackendConfigCommandInput,
  UpdateBackendConfigCommandOutput,
} from "../commands/UpdateBackendConfigCommand";
import { UpdateBackendJobCommandInput, UpdateBackendJobCommandOutput } from "../commands/UpdateBackendJobCommand";
import {
  UpdateBackendStorageCommandInput,
  UpdateBackendStorageCommandOutput,
} from "../commands/UpdateBackendStorageCommand";
import { AmplifyBackendServiceException as __BaseException } from "../models/AmplifyBackendServiceException";
import {
  AdditionalConstraintsElement,
  AuthenticatedElement,
  BackendAPIAppSyncAuthSettings,
  BackendAPIAuthType,
  BackendAPIConflictResolution,
  BackendAPIResourceConfig,
  BackendAuthAppleProviderConfig,
  BackendAuthSocialProviderConfig,
  BackendJobRespObj,
  BackendStoragePermissions,
  BadRequestException,
  CreateBackendAuthForgotPasswordConfig,
  CreateBackendAuthIdentityPoolConfig,
  CreateBackendAuthMFAConfig,
  CreateBackendAuthOAuthConfig,
  CreateBackendAuthPasswordPolicyConfig,
  CreateBackendAuthResourceConfig,
  CreateBackendAuthUserPoolConfig,
  CreateBackendAuthVerificationMessageConfig,
  CreateBackendStorageResourceConfig,
  EmailSettings,
  GatewayTimeoutException,
  GetBackendStorageResourceConfig,
  LoginAuthConfigReqObj,
  MfaTypesElement,
  NotFoundException,
  OAuthScopesElement,
  RequiredSignUpAttributesElement,
  ResourceConfig,
  S3BucketInfo,
  Settings,
  SmsSettings,
  SocialProviderSettings,
  TooManyRequestsException,
  UnAuthenticatedElement,
  UpdateBackendAuthForgotPasswordConfig,
  UpdateBackendAuthIdentityPoolConfig,
  UpdateBackendAuthMFAConfig,
  UpdateBackendAuthOAuthConfig,
  UpdateBackendAuthPasswordPolicyConfig,
  UpdateBackendAuthResourceConfig,
  UpdateBackendAuthUserPoolConfig,
  UpdateBackendAuthVerificationMessageConfig,
  UpdateBackendStorageResourceConfig,
} from "../models/models_0";

/**
 * serializeAws_restJson1CloneBackendCommand
 */
export const se_CloneBackendCommand = async (
  input: CloneBackendCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/environments/{BackendEnvironmentName}/clone";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.TargetEnvironmentName != null && { targetEnvironmentName: input.TargetEnvironmentName }),
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
 * serializeAws_restJson1CreateBackendCommand
 */
export const se_CreateBackendCommand = async (
  input: CreateBackendCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend";
  let body: any;
  body = JSON.stringify({
    ...(input.AppId != null && { appId: input.AppId }),
    ...(input.AppName != null && { appName: input.AppName }),
    ...(input.BackendEnvironmentName != null && { backendEnvironmentName: input.BackendEnvironmentName }),
    ...(input.ResourceConfig != null && { resourceConfig: se_ResourceConfig(input.ResourceConfig, context) }),
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1CreateBackendAPICommand
 */
export const se_CreateBackendAPICommand = async (
  input: CreateBackendAPICommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/api";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.BackendEnvironmentName != null && { backendEnvironmentName: input.BackendEnvironmentName }),
    ...(input.ResourceConfig != null && { resourceConfig: se_BackendAPIResourceConfig(input.ResourceConfig, context) }),
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1CreateBackendAuthCommand
 */
export const se_CreateBackendAuthCommand = async (
  input: CreateBackendAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/auth";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.BackendEnvironmentName != null && { backendEnvironmentName: input.BackendEnvironmentName }),
    ...(input.ResourceConfig != null && {
      resourceConfig: se_CreateBackendAuthResourceConfig(input.ResourceConfig, context),
    }),
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1CreateBackendConfigCommand
 */
export const se_CreateBackendConfigCommand = async (
  input: CreateBackendConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.BackendManagerAppId != null && { backendManagerAppId: input.BackendManagerAppId }),
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
 * serializeAws_restJson1CreateBackendStorageCommand
 */
export const se_CreateBackendStorageCommand = async (
  input: CreateBackendStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/storage";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.BackendEnvironmentName != null && { backendEnvironmentName: input.BackendEnvironmentName }),
    ...(input.ResourceConfig != null && {
      resourceConfig: se_CreateBackendStorageResourceConfig(input.ResourceConfig, context),
    }),
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1CreateTokenCommand
 */
export const se_CreateTokenCommand = async (
  input: CreateTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/challenge";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
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
 * serializeAws_restJson1DeleteBackendCommand
 */
export const se_DeleteBackendCommand = async (
  input: DeleteBackendCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/environments/{BackendEnvironmentName}/remove";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
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
 * serializeAws_restJson1DeleteBackendAPICommand
 */
export const se_DeleteBackendAPICommand = async (
  input: DeleteBackendAPICommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/api/{BackendEnvironmentName}/remove";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceConfig != null && { resourceConfig: se_BackendAPIResourceConfig(input.ResourceConfig, context) }),
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1DeleteBackendAuthCommand
 */
export const se_DeleteBackendAuthCommand = async (
  input: DeleteBackendAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/auth/{BackendEnvironmentName}/remove";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1DeleteBackendStorageCommand
 */
export const se_DeleteBackendStorageCommand = async (
  input: DeleteBackendStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/storage/{BackendEnvironmentName}/remove";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
    ...(input.ServiceName != null && { serviceName: input.ServiceName }),
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
 * serializeAws_restJson1DeleteTokenCommand
 */
export const se_DeleteTokenCommand = async (
  input: DeleteTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/challenge/{SessionId}/remove";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SessionId", () => input.SessionId!, "{SessionId}", false);
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
 * serializeAws_restJson1GenerateBackendAPIModelsCommand
 */
export const se_GenerateBackendAPIModelsCommand = async (
  input: GenerateBackendAPIModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/api/{BackendEnvironmentName}/generateModels";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1GetBackendCommand
 */
export const se_GetBackendCommand = async (
  input: GetBackendCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/details";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.BackendEnvironmentName != null && { backendEnvironmentName: input.BackendEnvironmentName }),
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
 * serializeAws_restJson1GetBackendAPICommand
 */
export const se_GetBackendAPICommand = async (
  input: GetBackendAPICommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/api/{BackendEnvironmentName}/details";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceConfig != null && { resourceConfig: se_BackendAPIResourceConfig(input.ResourceConfig, context) }),
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1GetBackendAPIModelsCommand
 */
export const se_GetBackendAPIModelsCommand = async (
  input: GetBackendAPIModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/api/{BackendEnvironmentName}/getModels";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1GetBackendAuthCommand
 */
export const se_GetBackendAuthCommand = async (
  input: GetBackendAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/auth/{BackendEnvironmentName}/details";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1GetBackendJobCommand
 */
export const se_GetBackendJobCommand = async (
  input: GetBackendJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/job/{BackendEnvironmentName}/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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
 * serializeAws_restJson1GetBackendStorageCommand
 */
export const se_GetBackendStorageCommand = async (
  input: GetBackendStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/storage/{BackendEnvironmentName}/details";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1GetTokenCommand
 */
export const se_GetTokenCommand = async (
  input: GetTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/challenge/{SessionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "SessionId", () => input.SessionId!, "{SessionId}", false);
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
 * serializeAws_restJson1ImportBackendAuthCommand
 */
export const se_ImportBackendAuthCommand = async (
  input: ImportBackendAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/auth/{BackendEnvironmentName}/import";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.IdentityPoolId != null && { identityPoolId: input.IdentityPoolId }),
    ...(input.NativeClientId != null && { nativeClientId: input.NativeClientId }),
    ...(input.UserPoolId != null && { userPoolId: input.UserPoolId }),
    ...(input.WebClientId != null && { webClientId: input.WebClientId }),
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
 * serializeAws_restJson1ImportBackendStorageCommand
 */
export const se_ImportBackendStorageCommand = async (
  input: ImportBackendStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/storage/{BackendEnvironmentName}/import";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.BucketName != null && { bucketName: input.BucketName }),
    ...(input.ServiceName != null && { serviceName: input.ServiceName }),
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
 * serializeAws_restJson1ListBackendJobsCommand
 */
export const se_ListBackendJobsCommand = async (
  input: ListBackendJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/job/{BackendEnvironmentName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.JobId != null && { jobId: input.JobId }),
    ...(input.MaxResults != null && { maxResults: input.MaxResults }),
    ...(input.NextToken != null && { nextToken: input.NextToken }),
    ...(input.Operation != null && { operation: input.Operation }),
    ...(input.Status != null && { status: input.Status }),
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
 * serializeAws_restJson1ListS3BucketsCommand
 */
export const se_ListS3BucketsCommand = async (
  input: ListS3BucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/s3Buckets";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken != null && { nextToken: input.NextToken }),
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
 * serializeAws_restJson1RemoveAllBackendsCommand
 */
export const se_RemoveAllBackendsCommand = async (
  input: RemoveAllBackendsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/remove";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CleanAmplifyApp != null && { cleanAmplifyApp: input.CleanAmplifyApp }),
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
 * serializeAws_restJson1RemoveBackendConfigCommand
 */
export const se_RemoveBackendConfigCommand = async (
  input: RemoveBackendConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/config/remove";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
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
 * serializeAws_restJson1UpdateBackendAPICommand
 */
export const se_UpdateBackendAPICommand = async (
  input: UpdateBackendAPICommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/api/{BackendEnvironmentName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceConfig != null && { resourceConfig: se_BackendAPIResourceConfig(input.ResourceConfig, context) }),
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1UpdateBackendAuthCommand
 */
export const se_UpdateBackendAuthCommand = async (
  input: UpdateBackendAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/auth/{BackendEnvironmentName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceConfig != null && {
      resourceConfig: se_UpdateBackendAuthResourceConfig(input.ResourceConfig, context),
    }),
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * serializeAws_restJson1UpdateBackendConfigCommand
 */
export const se_UpdateBackendConfigCommand = async (
  input: UpdateBackendConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/config/update";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LoginAuthConfig != null && { loginAuthConfig: se_LoginAuthConfigReqObj(input.LoginAuthConfig, context) }),
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
 * serializeAws_restJson1UpdateBackendJobCommand
 */
export const se_UpdateBackendJobCommand = async (
  input: UpdateBackendJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/job/{BackendEnvironmentName}/{JobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Operation != null && { operation: input.Operation }),
    ...(input.Status != null && { status: input.Status }),
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
 * serializeAws_restJson1UpdateBackendStorageCommand
 */
export const se_UpdateBackendStorageCommand = async (
  input: UpdateBackendStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/storage/{BackendEnvironmentName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AppId", () => input.AppId!, "{AppId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackendEnvironmentName",
    () => input.BackendEnvironmentName!,
    "{BackendEnvironmentName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceConfig != null && {
      resourceConfig: se_UpdateBackendStorageResourceConfig(input.ResourceConfig, context),
    }),
    ...(input.ResourceName != null && { resourceName: input.ResourceName }),
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
 * deserializeAws_restJson1CloneBackendCommand
 */
export const de_CloneBackendCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneBackendCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CloneBackendCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CloneBackendCommandError
 */
const de_CloneBackendCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneBackendCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateBackendCommand
 */
export const de_CreateBackendCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBackendCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBackendCommandError
 */
const de_CreateBackendCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateBackendAPICommand
 */
export const de_CreateBackendAPICommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendAPICommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBackendAPICommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBackendAPICommandError
 */
const de_CreateBackendAPICommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendAPICommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateBackendAuthCommand
 */
export const de_CreateBackendAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBackendAuthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBackendAuthCommandError
 */
const de_CreateBackendAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateBackendConfigCommand
 */
export const de_CreateBackendConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBackendConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBackendConfigCommandError
 */
const de_CreateBackendConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateBackendStorageCommand
 */
export const de_CreateBackendStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendStorageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBackendStorageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBackendStorageCommandError
 */
const de_CreateBackendStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateTokenCommand
 */
export const de_CreateTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.challengeCode != null) {
    contents.ChallengeCode = __expectString(data.challengeCode);
  }
  if (data.sessionId != null) {
    contents.SessionId = __expectString(data.sessionId);
  }
  if (data.ttl != null) {
    contents.Ttl = __expectString(data.ttl);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateTokenCommandError
 */
const de_CreateTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteBackendCommand
 */
export const de_DeleteBackendCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBackendCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackendCommandError
 */
const de_DeleteBackendCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteBackendAPICommand
 */
export const de_DeleteBackendAPICommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendAPICommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBackendAPICommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackendAPICommandError
 */
const de_DeleteBackendAPICommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendAPICommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteBackendAuthCommand
 */
export const de_DeleteBackendAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBackendAuthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackendAuthCommandError
 */
const de_DeleteBackendAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteBackendStorageCommand
 */
export const de_DeleteBackendStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendStorageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBackendStorageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackendStorageCommandError
 */
const de_DeleteBackendStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteTokenCommand
 */
export const de_DeleteTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.isSuccess != null) {
    contents.IsSuccess = __expectBoolean(data.isSuccess);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTokenCommandError
 */
const de_DeleteTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GenerateBackendAPIModelsCommand
 */
export const de_GenerateBackendAPIModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateBackendAPIModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GenerateBackendAPIModelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GenerateBackendAPIModelsCommandError
 */
const de_GenerateBackendAPIModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateBackendAPIModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetBackendCommand
 */
export const de_GetBackendCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackendCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.amplifyFeatureFlags != null) {
    contents.AmplifyFeatureFlags = __expectString(data.amplifyFeatureFlags);
  }
  if (data.amplifyMetaConfig != null) {
    contents.AmplifyMetaConfig = __expectString(data.amplifyMetaConfig);
  }
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.appName != null) {
    contents.AppName = __expectString(data.appName);
  }
  if (data.backendEnvironmentList != null) {
    contents.BackendEnvironmentList = de_ListOf__string(data.backendEnvironmentList, context);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBackendCommandError
 */
const de_GetBackendCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetBackendAPICommand
 */
export const de_GetBackendAPICommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAPICommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackendAPICommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.resourceConfig != null) {
    contents.ResourceConfig = de_BackendAPIResourceConfig(data.resourceConfig, context);
  }
  if (data.resourceName != null) {
    contents.ResourceName = __expectString(data.resourceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBackendAPICommandError
 */
const de_GetBackendAPICommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAPICommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetBackendAPIModelsCommand
 */
export const de_GetBackendAPIModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAPIModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackendAPIModelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.modelIntrospectionSchema != null) {
    contents.ModelIntrospectionSchema = __expectString(data.modelIntrospectionSchema);
  }
  if (data.models != null) {
    contents.Models = __expectString(data.models);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBackendAPIModelsCommandError
 */
const de_GetBackendAPIModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAPIModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetBackendAuthCommand
 */
export const de_GetBackendAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackendAuthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.resourceConfig != null) {
    contents.ResourceConfig = de_CreateBackendAuthResourceConfig(data.resourceConfig, context);
  }
  if (data.resourceName != null) {
    contents.ResourceName = __expectString(data.resourceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBackendAuthCommandError
 */
const de_GetBackendAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetBackendJobCommand
 */
export const de_GetBackendJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackendJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.createTime != null) {
    contents.CreateTime = __expectString(data.createTime);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  if (data.updateTime != null) {
    contents.UpdateTime = __expectString(data.updateTime);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBackendJobCommandError
 */
const de_GetBackendJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetBackendStorageCommand
 */
export const de_GetBackendStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendStorageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackendStorageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.resourceConfig != null) {
    contents.ResourceConfig = de_GetBackendStorageResourceConfig(data.resourceConfig, context);
  }
  if (data.resourceName != null) {
    contents.ResourceName = __expectString(data.resourceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBackendStorageCommandError
 */
const de_GetBackendStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTokenCommand
 */
export const de_GetTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.challengeCode != null) {
    contents.ChallengeCode = __expectString(data.challengeCode);
  }
  if (data.sessionId != null) {
    contents.SessionId = __expectString(data.sessionId);
  }
  if (data.ttl != null) {
    contents.Ttl = __expectString(data.ttl);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTokenCommandError
 */
const de_GetTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ImportBackendAuthCommand
 */
export const de_ImportBackendAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportBackendAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ImportBackendAuthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ImportBackendAuthCommandError
 */
const de_ImportBackendAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportBackendAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ImportBackendStorageCommand
 */
export const de_ImportBackendStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportBackendStorageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ImportBackendStorageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ImportBackendStorageCommandError
 */
const de_ImportBackendStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportBackendStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListBackendJobsCommand
 */
export const de_ListBackendJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackendJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBackendJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs != null) {
    contents.Jobs = de_ListOfBackendJobRespObj(data.jobs, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBackendJobsCommandError
 */
const de_ListBackendJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackendJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListS3BucketsCommand
 */
export const de_ListS3BucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListS3BucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListS3BucketsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.buckets != null) {
    contents.Buckets = de_ListOfS3BucketInfo(data.buckets, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListS3BucketsCommandError
 */
const de_ListS3BucketsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListS3BucketsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RemoveAllBackendsCommand
 */
export const de_RemoveAllBackendsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllBackendsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveAllBackendsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemoveAllBackendsCommandError
 */
const de_RemoveAllBackendsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllBackendsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RemoveBackendConfigCommand
 */
export const de_RemoveBackendConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveBackendConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveBackendConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemoveBackendConfigCommandError
 */
const de_RemoveBackendConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveBackendConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBackendAPICommand
 */
export const de_UpdateBackendAPICommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendAPICommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBackendAPICommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBackendAPICommandError
 */
const de_UpdateBackendAPICommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendAPICommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBackendAuthCommand
 */
export const de_UpdateBackendAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBackendAuthCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBackendAuthCommandError
 */
const de_UpdateBackendAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBackendConfigCommand
 */
export const de_UpdateBackendConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBackendConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendManagerAppId != null) {
    contents.BackendManagerAppId = __expectString(data.backendManagerAppId);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.loginAuthConfig != null) {
    contents.LoginAuthConfig = de_LoginAuthConfigReqObj(data.loginAuthConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBackendConfigCommandError
 */
const de_UpdateBackendConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBackendJobCommand
 */
export const de_UpdateBackendJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBackendJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.createTime != null) {
    contents.CreateTime = __expectString(data.createTime);
  }
  if (data.error != null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation != null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  if (data.updateTime != null) {
    contents.UpdateTime = __expectString(data.updateTime);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBackendJobCommandError
 */
const de_UpdateBackendJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBackendStorageCommand
 */
export const de_UpdateBackendStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendStorageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBackendStorageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId != null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName != null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.jobId != null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.status != null) {
    contents.Status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBackendStorageCommandError
 */
const de_UpdateBackendStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1GatewayTimeoutExceptionRes
 */
const de_GatewayTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GatewayTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new GatewayTimeoutException({
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
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  if (data.resourceType != null) {
    contents.ResourceType = __expectString(data.resourceType);
  }
  const exception = new NotFoundException({
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
  if (data.limitType != null) {
    contents.LimitType = __expectString(data.limitType);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1BackendAPIAppSyncAuthSettings
 */
const se_BackendAPIAppSyncAuthSettings = (input: BackendAPIAppSyncAuthSettings, context: __SerdeContext): any => {
  return {
    ...(input.CognitoUserPoolId != null && { cognitoUserPoolId: input.CognitoUserPoolId }),
    ...(input.Description != null && { description: input.Description }),
    ...(input.ExpirationTime != null && { expirationTime: __serializeFloat(input.ExpirationTime) }),
    ...(input.OpenIDAuthTTL != null && { openIDAuthTTL: input.OpenIDAuthTTL }),
    ...(input.OpenIDClientId != null && { openIDClientId: input.OpenIDClientId }),
    ...(input.OpenIDIatTTL != null && { openIDIatTTL: input.OpenIDIatTTL }),
    ...(input.OpenIDIssueURL != null && { openIDIssueURL: input.OpenIDIssueURL }),
    ...(input.OpenIDProviderName != null && { openIDProviderName: input.OpenIDProviderName }),
  };
};

/**
 * serializeAws_restJson1BackendAPIAuthType
 */
const se_BackendAPIAuthType = (input: BackendAPIAuthType, context: __SerdeContext): any => {
  return {
    ...(input.Mode != null && { mode: input.Mode }),
    ...(input.Settings != null && { settings: se_BackendAPIAppSyncAuthSettings(input.Settings, context) }),
  };
};

/**
 * serializeAws_restJson1BackendAPIConflictResolution
 */
const se_BackendAPIConflictResolution = (input: BackendAPIConflictResolution, context: __SerdeContext): any => {
  return {
    ...(input.ResolutionStrategy != null && { resolutionStrategy: input.ResolutionStrategy }),
  };
};

/**
 * serializeAws_restJson1BackendAPIResourceConfig
 */
const se_BackendAPIResourceConfig = (input: BackendAPIResourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalAuthTypes != null && {
      additionalAuthTypes: se_ListOfBackendAPIAuthType(input.AdditionalAuthTypes, context),
    }),
    ...(input.ApiName != null && { apiName: input.ApiName }),
    ...(input.ConflictResolution != null && {
      conflictResolution: se_BackendAPIConflictResolution(input.ConflictResolution, context),
    }),
    ...(input.DefaultAuthType != null && { defaultAuthType: se_BackendAPIAuthType(input.DefaultAuthType, context) }),
    ...(input.Service != null && { service: input.Service }),
    ...(input.TransformSchema != null && { transformSchema: input.TransformSchema }),
  };
};

/**
 * serializeAws_restJson1BackendAuthAppleProviderConfig
 */
const se_BackendAuthAppleProviderConfig = (input: BackendAuthAppleProviderConfig, context: __SerdeContext): any => {
  return {
    ...(input.ClientId != null && { client_id: input.ClientId }),
    ...(input.KeyId != null && { key_id: input.KeyId }),
    ...(input.PrivateKey != null && { private_key: input.PrivateKey }),
    ...(input.TeamId != null && { team_id: input.TeamId }),
  };
};

/**
 * serializeAws_restJson1BackendAuthSocialProviderConfig
 */
const se_BackendAuthSocialProviderConfig = (input: BackendAuthSocialProviderConfig, context: __SerdeContext): any => {
  return {
    ...(input.ClientId != null && { client_id: input.ClientId }),
    ...(input.ClientSecret != null && { client_secret: input.ClientSecret }),
  };
};

/**
 * serializeAws_restJson1BackendStoragePermissions
 */
const se_BackendStoragePermissions = (input: BackendStoragePermissions, context: __SerdeContext): any => {
  return {
    ...(input.Authenticated != null && { authenticated: se_ListOfAuthenticatedElement(input.Authenticated, context) }),
    ...(input.UnAuthenticated != null && {
      unAuthenticated: se_ListOfUnAuthenticatedElement(input.UnAuthenticated, context),
    }),
  };
};

/**
 * serializeAws_restJson1CreateBackendAuthForgotPasswordConfig
 */
const se_CreateBackendAuthForgotPasswordConfig = (
  input: CreateBackendAuthForgotPasswordConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryMethod != null && { deliveryMethod: input.DeliveryMethod }),
    ...(input.EmailSettings != null && { emailSettings: se_EmailSettings(input.EmailSettings, context) }),
    ...(input.SmsSettings != null && { smsSettings: se_SmsSettings(input.SmsSettings, context) }),
  };
};

/**
 * serializeAws_restJson1CreateBackendAuthIdentityPoolConfig
 */
const se_CreateBackendAuthIdentityPoolConfig = (
  input: CreateBackendAuthIdentityPoolConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityPoolName != null && { identityPoolName: input.IdentityPoolName }),
    ...(input.UnauthenticatedLogin != null && { unauthenticatedLogin: input.UnauthenticatedLogin }),
  };
};

/**
 * serializeAws_restJson1CreateBackendAuthMFAConfig
 */
const se_CreateBackendAuthMFAConfig = (input: CreateBackendAuthMFAConfig, context: __SerdeContext): any => {
  return {
    ...(input.MFAMode != null && { MFAMode: input.MFAMode }),
    ...(input.Settings != null && { settings: se_Settings(input.Settings, context) }),
  };
};

/**
 * serializeAws_restJson1CreateBackendAuthOAuthConfig
 */
const se_CreateBackendAuthOAuthConfig = (input: CreateBackendAuthOAuthConfig, context: __SerdeContext): any => {
  return {
    ...(input.DomainPrefix != null && { domainPrefix: input.DomainPrefix }),
    ...(input.OAuthGrantType != null && { oAuthGrantType: input.OAuthGrantType }),
    ...(input.OAuthScopes != null && { oAuthScopes: se_ListOfOAuthScopesElement(input.OAuthScopes, context) }),
    ...(input.RedirectSignInURIs != null && {
      redirectSignInURIs: se_ListOf__string(input.RedirectSignInURIs, context),
    }),
    ...(input.RedirectSignOutURIs != null && {
      redirectSignOutURIs: se_ListOf__string(input.RedirectSignOutURIs, context),
    }),
    ...(input.SocialProviderSettings != null && {
      socialProviderSettings: se_SocialProviderSettings(input.SocialProviderSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1CreateBackendAuthPasswordPolicyConfig
 */
const se_CreateBackendAuthPasswordPolicyConfig = (
  input: CreateBackendAuthPasswordPolicyConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalConstraints != null && {
      additionalConstraints: se_ListOfAdditionalConstraintsElement(input.AdditionalConstraints, context),
    }),
    ...(input.MinimumLength != null && { minimumLength: __serializeFloat(input.MinimumLength) }),
  };
};

/**
 * serializeAws_restJson1CreateBackendAuthResourceConfig
 */
const se_CreateBackendAuthResourceConfig = (input: CreateBackendAuthResourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.AuthResources != null && { authResources: input.AuthResources }),
    ...(input.IdentityPoolConfigs != null && {
      identityPoolConfigs: se_CreateBackendAuthIdentityPoolConfig(input.IdentityPoolConfigs, context),
    }),
    ...(input.Service != null && { service: input.Service }),
    ...(input.UserPoolConfigs != null && {
      userPoolConfigs: se_CreateBackendAuthUserPoolConfig(input.UserPoolConfigs, context),
    }),
  };
};

/**
 * serializeAws_restJson1CreateBackendAuthUserPoolConfig
 */
const se_CreateBackendAuthUserPoolConfig = (input: CreateBackendAuthUserPoolConfig, context: __SerdeContext): any => {
  return {
    ...(input.ForgotPassword != null && {
      forgotPassword: se_CreateBackendAuthForgotPasswordConfig(input.ForgotPassword, context),
    }),
    ...(input.Mfa != null && { mfa: se_CreateBackendAuthMFAConfig(input.Mfa, context) }),
    ...(input.OAuth != null && { oAuth: se_CreateBackendAuthOAuthConfig(input.OAuth, context) }),
    ...(input.PasswordPolicy != null && {
      passwordPolicy: se_CreateBackendAuthPasswordPolicyConfig(input.PasswordPolicy, context),
    }),
    ...(input.RequiredSignUpAttributes != null && {
      requiredSignUpAttributes: se_ListOfRequiredSignUpAttributesElement(input.RequiredSignUpAttributes, context),
    }),
    ...(input.SignInMethod != null && { signInMethod: input.SignInMethod }),
    ...(input.UserPoolName != null && { userPoolName: input.UserPoolName }),
    ...(input.VerificationMessage != null && {
      verificationMessage: se_CreateBackendAuthVerificationMessageConfig(input.VerificationMessage, context),
    }),
  };
};

/**
 * serializeAws_restJson1CreateBackendAuthVerificationMessageConfig
 */
const se_CreateBackendAuthVerificationMessageConfig = (
  input: CreateBackendAuthVerificationMessageConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryMethod != null && { deliveryMethod: input.DeliveryMethod }),
    ...(input.EmailSettings != null && { emailSettings: se_EmailSettings(input.EmailSettings, context) }),
    ...(input.SmsSettings != null && { smsSettings: se_SmsSettings(input.SmsSettings, context) }),
  };
};

/**
 * serializeAws_restJson1CreateBackendStorageResourceConfig
 */
const se_CreateBackendStorageResourceConfig = (
  input: CreateBackendStorageResourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketName != null && { bucketName: input.BucketName }),
    ...(input.Permissions != null && { permissions: se_BackendStoragePermissions(input.Permissions, context) }),
    ...(input.ServiceName != null && { serviceName: input.ServiceName }),
  };
};

/**
 * serializeAws_restJson1EmailSettings
 */
const se_EmailSettings = (input: EmailSettings, context: __SerdeContext): any => {
  return {
    ...(input.EmailMessage != null && { emailMessage: input.EmailMessage }),
    ...(input.EmailSubject != null && { emailSubject: input.EmailSubject }),
  };
};

/**
 * serializeAws_restJson1ListOf__string
 */
const se_ListOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListOfAdditionalConstraintsElement
 */
const se_ListOfAdditionalConstraintsElement = (
  input: (AdditionalConstraintsElement | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListOfAuthenticatedElement
 */
const se_ListOfAuthenticatedElement = (input: (AuthenticatedElement | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListOfBackendAPIAuthType
 */
const se_ListOfBackendAPIAuthType = (input: BackendAPIAuthType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BackendAPIAuthType(entry, context);
    });
};

/**
 * serializeAws_restJson1ListOfMfaTypesElement
 */
const se_ListOfMfaTypesElement = (input: (MfaTypesElement | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListOfOAuthScopesElement
 */
const se_ListOfOAuthScopesElement = (input: (OAuthScopesElement | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListOfRequiredSignUpAttributesElement
 */
const se_ListOfRequiredSignUpAttributesElement = (
  input: (RequiredSignUpAttributesElement | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListOfUnAuthenticatedElement
 */
const se_ListOfUnAuthenticatedElement = (input: (UnAuthenticatedElement | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1LoginAuthConfigReqObj
 */
const se_LoginAuthConfigReqObj = (input: LoginAuthConfigReqObj, context: __SerdeContext): any => {
  return {
    ...(input.AwsCognitoIdentityPoolId != null && { aws_cognito_identity_pool_id: input.AwsCognitoIdentityPoolId }),
    ...(input.AwsCognitoRegion != null && { aws_cognito_region: input.AwsCognitoRegion }),
    ...(input.AwsUserPoolsId != null && { aws_user_pools_id: input.AwsUserPoolsId }),
    ...(input.AwsUserPoolsWebClientId != null && { aws_user_pools_web_client_id: input.AwsUserPoolsWebClientId }),
  };
};

/**
 * serializeAws_restJson1ResourceConfig
 */
const se_ResourceConfig = (input: ResourceConfig, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1Settings
 */
const se_Settings = (input: Settings, context: __SerdeContext): any => {
  return {
    ...(input.MfaTypes != null && { mfaTypes: se_ListOfMfaTypesElement(input.MfaTypes, context) }),
    ...(input.SmsMessage != null && { smsMessage: input.SmsMessage }),
  };
};

/**
 * serializeAws_restJson1SmsSettings
 */
const se_SmsSettings = (input: SmsSettings, context: __SerdeContext): any => {
  return {
    ...(input.SmsMessage != null && { smsMessage: input.SmsMessage }),
  };
};

/**
 * serializeAws_restJson1SocialProviderSettings
 */
const se_SocialProviderSettings = (input: SocialProviderSettings, context: __SerdeContext): any => {
  return {
    ...(input.Facebook != null && { Facebook: se_BackendAuthSocialProviderConfig(input.Facebook, context) }),
    ...(input.Google != null && { Google: se_BackendAuthSocialProviderConfig(input.Google, context) }),
    ...(input.LoginWithAmazon != null && {
      LoginWithAmazon: se_BackendAuthSocialProviderConfig(input.LoginWithAmazon, context),
    }),
    ...(input.SignInWithApple != null && {
      SignInWithApple: se_BackendAuthAppleProviderConfig(input.SignInWithApple, context),
    }),
  };
};

/**
 * serializeAws_restJson1UpdateBackendAuthForgotPasswordConfig
 */
const se_UpdateBackendAuthForgotPasswordConfig = (
  input: UpdateBackendAuthForgotPasswordConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryMethod != null && { deliveryMethod: input.DeliveryMethod }),
    ...(input.EmailSettings != null && { emailSettings: se_EmailSettings(input.EmailSettings, context) }),
    ...(input.SmsSettings != null && { smsSettings: se_SmsSettings(input.SmsSettings, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateBackendAuthIdentityPoolConfig
 */
const se_UpdateBackendAuthIdentityPoolConfig = (
  input: UpdateBackendAuthIdentityPoolConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.UnauthenticatedLogin != null && { unauthenticatedLogin: input.UnauthenticatedLogin }),
  };
};

/**
 * serializeAws_restJson1UpdateBackendAuthMFAConfig
 */
const se_UpdateBackendAuthMFAConfig = (input: UpdateBackendAuthMFAConfig, context: __SerdeContext): any => {
  return {
    ...(input.MFAMode != null && { MFAMode: input.MFAMode }),
    ...(input.Settings != null && { settings: se_Settings(input.Settings, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateBackendAuthOAuthConfig
 */
const se_UpdateBackendAuthOAuthConfig = (input: UpdateBackendAuthOAuthConfig, context: __SerdeContext): any => {
  return {
    ...(input.DomainPrefix != null && { domainPrefix: input.DomainPrefix }),
    ...(input.OAuthGrantType != null && { oAuthGrantType: input.OAuthGrantType }),
    ...(input.OAuthScopes != null && { oAuthScopes: se_ListOfOAuthScopesElement(input.OAuthScopes, context) }),
    ...(input.RedirectSignInURIs != null && {
      redirectSignInURIs: se_ListOf__string(input.RedirectSignInURIs, context),
    }),
    ...(input.RedirectSignOutURIs != null && {
      redirectSignOutURIs: se_ListOf__string(input.RedirectSignOutURIs, context),
    }),
    ...(input.SocialProviderSettings != null && {
      socialProviderSettings: se_SocialProviderSettings(input.SocialProviderSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1UpdateBackendAuthPasswordPolicyConfig
 */
const se_UpdateBackendAuthPasswordPolicyConfig = (
  input: UpdateBackendAuthPasswordPolicyConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalConstraints != null && {
      additionalConstraints: se_ListOfAdditionalConstraintsElement(input.AdditionalConstraints, context),
    }),
    ...(input.MinimumLength != null && { minimumLength: __serializeFloat(input.MinimumLength) }),
  };
};

/**
 * serializeAws_restJson1UpdateBackendAuthResourceConfig
 */
const se_UpdateBackendAuthResourceConfig = (input: UpdateBackendAuthResourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.AuthResources != null && { authResources: input.AuthResources }),
    ...(input.IdentityPoolConfigs != null && {
      identityPoolConfigs: se_UpdateBackendAuthIdentityPoolConfig(input.IdentityPoolConfigs, context),
    }),
    ...(input.Service != null && { service: input.Service }),
    ...(input.UserPoolConfigs != null && {
      userPoolConfigs: se_UpdateBackendAuthUserPoolConfig(input.UserPoolConfigs, context),
    }),
  };
};

/**
 * serializeAws_restJson1UpdateBackendAuthUserPoolConfig
 */
const se_UpdateBackendAuthUserPoolConfig = (input: UpdateBackendAuthUserPoolConfig, context: __SerdeContext): any => {
  return {
    ...(input.ForgotPassword != null && {
      forgotPassword: se_UpdateBackendAuthForgotPasswordConfig(input.ForgotPassword, context),
    }),
    ...(input.Mfa != null && { mfa: se_UpdateBackendAuthMFAConfig(input.Mfa, context) }),
    ...(input.OAuth != null && { oAuth: se_UpdateBackendAuthOAuthConfig(input.OAuth, context) }),
    ...(input.PasswordPolicy != null && {
      passwordPolicy: se_UpdateBackendAuthPasswordPolicyConfig(input.PasswordPolicy, context),
    }),
    ...(input.VerificationMessage != null && {
      verificationMessage: se_UpdateBackendAuthVerificationMessageConfig(input.VerificationMessage, context),
    }),
  };
};

/**
 * serializeAws_restJson1UpdateBackendAuthVerificationMessageConfig
 */
const se_UpdateBackendAuthVerificationMessageConfig = (
  input: UpdateBackendAuthVerificationMessageConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryMethod != null && { deliveryMethod: input.DeliveryMethod }),
    ...(input.EmailSettings != null && { emailSettings: se_EmailSettings(input.EmailSettings, context) }),
    ...(input.SmsSettings != null && { smsSettings: se_SmsSettings(input.SmsSettings, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateBackendStorageResourceConfig
 */
const se_UpdateBackendStorageResourceConfig = (
  input: UpdateBackendStorageResourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Permissions != null && { permissions: se_BackendStoragePermissions(input.Permissions, context) }),
    ...(input.ServiceName != null && { serviceName: input.ServiceName }),
  };
};

/**
 * deserializeAws_restJson1BackendAPIAppSyncAuthSettings
 */
const de_BackendAPIAppSyncAuthSettings = (output: any, context: __SerdeContext): BackendAPIAppSyncAuthSettings => {
  return {
    CognitoUserPoolId: __expectString(output.cognitoUserPoolId),
    Description: __expectString(output.description),
    ExpirationTime: __limitedParseDouble(output.expirationTime),
    OpenIDAuthTTL: __expectString(output.openIDAuthTTL),
    OpenIDClientId: __expectString(output.openIDClientId),
    OpenIDIatTTL: __expectString(output.openIDIatTTL),
    OpenIDIssueURL: __expectString(output.openIDIssueURL),
    OpenIDProviderName: __expectString(output.openIDProviderName),
  } as any;
};

/**
 * deserializeAws_restJson1BackendAPIAuthType
 */
const de_BackendAPIAuthType = (output: any, context: __SerdeContext): BackendAPIAuthType => {
  return {
    Mode: __expectString(output.mode),
    Settings: output.settings != null ? de_BackendAPIAppSyncAuthSettings(output.settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BackendAPIConflictResolution
 */
const de_BackendAPIConflictResolution = (output: any, context: __SerdeContext): BackendAPIConflictResolution => {
  return {
    ResolutionStrategy: __expectString(output.resolutionStrategy),
  } as any;
};

/**
 * deserializeAws_restJson1BackendAPIResourceConfig
 */
const de_BackendAPIResourceConfig = (output: any, context: __SerdeContext): BackendAPIResourceConfig => {
  return {
    AdditionalAuthTypes:
      output.additionalAuthTypes != null ? de_ListOfBackendAPIAuthType(output.additionalAuthTypes, context) : undefined,
    ApiName: __expectString(output.apiName),
    ConflictResolution:
      output.conflictResolution != null
        ? de_BackendAPIConflictResolution(output.conflictResolution, context)
        : undefined,
    DefaultAuthType:
      output.defaultAuthType != null ? de_BackendAPIAuthType(output.defaultAuthType, context) : undefined,
    Service: __expectString(output.service),
    TransformSchema: __expectString(output.transformSchema),
  } as any;
};

/**
 * deserializeAws_restJson1BackendAuthAppleProviderConfig
 */
const de_BackendAuthAppleProviderConfig = (output: any, context: __SerdeContext): BackendAuthAppleProviderConfig => {
  return {
    ClientId: __expectString(output.client_id),
    KeyId: __expectString(output.key_id),
    PrivateKey: __expectString(output.private_key),
    TeamId: __expectString(output.team_id),
  } as any;
};

/**
 * deserializeAws_restJson1BackendAuthSocialProviderConfig
 */
const de_BackendAuthSocialProviderConfig = (output: any, context: __SerdeContext): BackendAuthSocialProviderConfig => {
  return {
    ClientId: __expectString(output.client_id),
    ClientSecret: __expectString(output.client_secret),
  } as any;
};

/**
 * deserializeAws_restJson1BackendJobRespObj
 */
const de_BackendJobRespObj = (output: any, context: __SerdeContext): BackendJobRespObj => {
  return {
    AppId: __expectString(output.appId),
    BackendEnvironmentName: __expectString(output.backendEnvironmentName),
    CreateTime: __expectString(output.createTime),
    Error: __expectString(output.error),
    JobId: __expectString(output.jobId),
    Operation: __expectString(output.operation),
    Status: __expectString(output.status),
    UpdateTime: __expectString(output.updateTime),
  } as any;
};

/**
 * deserializeAws_restJson1BackendStoragePermissions
 */
const de_BackendStoragePermissions = (output: any, context: __SerdeContext): BackendStoragePermissions => {
  return {
    Authenticated:
      output.authenticated != null ? de_ListOfAuthenticatedElement(output.authenticated, context) : undefined,
    UnAuthenticated:
      output.unAuthenticated != null ? de_ListOfUnAuthenticatedElement(output.unAuthenticated, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthForgotPasswordConfig
 */
const de_CreateBackendAuthForgotPasswordConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthForgotPasswordConfig => {
  return {
    DeliveryMethod: __expectString(output.deliveryMethod),
    EmailSettings: output.emailSettings != null ? de_EmailSettings(output.emailSettings, context) : undefined,
    SmsSettings: output.smsSettings != null ? de_SmsSettings(output.smsSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthIdentityPoolConfig
 */
const de_CreateBackendAuthIdentityPoolConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthIdentityPoolConfig => {
  return {
    IdentityPoolName: __expectString(output.identityPoolName),
    UnauthenticatedLogin: __expectBoolean(output.unauthenticatedLogin),
  } as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthMFAConfig
 */
const de_CreateBackendAuthMFAConfig = (output: any, context: __SerdeContext): CreateBackendAuthMFAConfig => {
  return {
    MFAMode: __expectString(output.MFAMode),
    Settings: output.settings != null ? de_Settings(output.settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthOAuthConfig
 */
const de_CreateBackendAuthOAuthConfig = (output: any, context: __SerdeContext): CreateBackendAuthOAuthConfig => {
  return {
    DomainPrefix: __expectString(output.domainPrefix),
    OAuthGrantType: __expectString(output.oAuthGrantType),
    OAuthScopes: output.oAuthScopes != null ? de_ListOfOAuthScopesElement(output.oAuthScopes, context) : undefined,
    RedirectSignInURIs:
      output.redirectSignInURIs != null ? de_ListOf__string(output.redirectSignInURIs, context) : undefined,
    RedirectSignOutURIs:
      output.redirectSignOutURIs != null ? de_ListOf__string(output.redirectSignOutURIs, context) : undefined,
    SocialProviderSettings:
      output.socialProviderSettings != null
        ? de_SocialProviderSettings(output.socialProviderSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthPasswordPolicyConfig
 */
const de_CreateBackendAuthPasswordPolicyConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthPasswordPolicyConfig => {
  return {
    AdditionalConstraints:
      output.additionalConstraints != null
        ? de_ListOfAdditionalConstraintsElement(output.additionalConstraints, context)
        : undefined,
    MinimumLength: __limitedParseDouble(output.minimumLength),
  } as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthResourceConfig
 */
const de_CreateBackendAuthResourceConfig = (output: any, context: __SerdeContext): CreateBackendAuthResourceConfig => {
  return {
    AuthResources: __expectString(output.authResources),
    IdentityPoolConfigs:
      output.identityPoolConfigs != null
        ? de_CreateBackendAuthIdentityPoolConfig(output.identityPoolConfigs, context)
        : undefined,
    Service: __expectString(output.service),
    UserPoolConfigs:
      output.userPoolConfigs != null ? de_CreateBackendAuthUserPoolConfig(output.userPoolConfigs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthUserPoolConfig
 */
const de_CreateBackendAuthUserPoolConfig = (output: any, context: __SerdeContext): CreateBackendAuthUserPoolConfig => {
  return {
    ForgotPassword:
      output.forgotPassword != null
        ? de_CreateBackendAuthForgotPasswordConfig(output.forgotPassword, context)
        : undefined,
    Mfa: output.mfa != null ? de_CreateBackendAuthMFAConfig(output.mfa, context) : undefined,
    OAuth: output.oAuth != null ? de_CreateBackendAuthOAuthConfig(output.oAuth, context) : undefined,
    PasswordPolicy:
      output.passwordPolicy != null
        ? de_CreateBackendAuthPasswordPolicyConfig(output.passwordPolicy, context)
        : undefined,
    RequiredSignUpAttributes:
      output.requiredSignUpAttributes != null
        ? de_ListOfRequiredSignUpAttributesElement(output.requiredSignUpAttributes, context)
        : undefined,
    SignInMethod: __expectString(output.signInMethod),
    UserPoolName: __expectString(output.userPoolName),
    VerificationMessage:
      output.verificationMessage != null
        ? de_CreateBackendAuthVerificationMessageConfig(output.verificationMessage, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthVerificationMessageConfig
 */
const de_CreateBackendAuthVerificationMessageConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthVerificationMessageConfig => {
  return {
    DeliveryMethod: __expectString(output.deliveryMethod),
    EmailSettings: output.emailSettings != null ? de_EmailSettings(output.emailSettings, context) : undefined,
    SmsSettings: output.smsSettings != null ? de_SmsSettings(output.smsSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EmailSettings
 */
const de_EmailSettings = (output: any, context: __SerdeContext): EmailSettings => {
  return {
    EmailMessage: __expectString(output.emailMessage),
    EmailSubject: __expectString(output.emailSubject),
  } as any;
};

/**
 * deserializeAws_restJson1GetBackendStorageResourceConfig
 */
const de_GetBackendStorageResourceConfig = (output: any, context: __SerdeContext): GetBackendStorageResourceConfig => {
  return {
    BucketName: __expectString(output.bucketName),
    Imported: __expectBoolean(output.imported),
    Permissions: output.permissions != null ? de_BackendStoragePermissions(output.permissions, context) : undefined,
    ServiceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_restJson1ListOf__string
 */
const de_ListOf__string = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ListOfAdditionalConstraintsElement
 */
const de_ListOfAdditionalConstraintsElement = (
  output: any,
  context: __SerdeContext
): (AdditionalConstraintsElement | string)[] => {
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
 * deserializeAws_restJson1ListOfAuthenticatedElement
 */
const de_ListOfAuthenticatedElement = (output: any, context: __SerdeContext): (AuthenticatedElement | string)[] => {
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
 * deserializeAws_restJson1ListOfBackendAPIAuthType
 */
const de_ListOfBackendAPIAuthType = (output: any, context: __SerdeContext): BackendAPIAuthType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BackendAPIAuthType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfBackendJobRespObj
 */
const de_ListOfBackendJobRespObj = (output: any, context: __SerdeContext): BackendJobRespObj[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BackendJobRespObj(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfMfaTypesElement
 */
const de_ListOfMfaTypesElement = (output: any, context: __SerdeContext): (MfaTypesElement | string)[] => {
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
 * deserializeAws_restJson1ListOfOAuthScopesElement
 */
const de_ListOfOAuthScopesElement = (output: any, context: __SerdeContext): (OAuthScopesElement | string)[] => {
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
 * deserializeAws_restJson1ListOfRequiredSignUpAttributesElement
 */
const de_ListOfRequiredSignUpAttributesElement = (
  output: any,
  context: __SerdeContext
): (RequiredSignUpAttributesElement | string)[] => {
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
 * deserializeAws_restJson1ListOfS3BucketInfo
 */
const de_ListOfS3BucketInfo = (output: any, context: __SerdeContext): S3BucketInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_S3BucketInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfUnAuthenticatedElement
 */
const de_ListOfUnAuthenticatedElement = (output: any, context: __SerdeContext): (UnAuthenticatedElement | string)[] => {
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
 * deserializeAws_restJson1LoginAuthConfigReqObj
 */
const de_LoginAuthConfigReqObj = (output: any, context: __SerdeContext): LoginAuthConfigReqObj => {
  return {
    AwsCognitoIdentityPoolId: __expectString(output.aws_cognito_identity_pool_id),
    AwsCognitoRegion: __expectString(output.aws_cognito_region),
    AwsUserPoolsId: __expectString(output.aws_user_pools_id),
    AwsUserPoolsWebClientId: __expectString(output.aws_user_pools_web_client_id),
  } as any;
};

/**
 * deserializeAws_restJson1S3BucketInfo
 */
const de_S3BucketInfo = (output: any, context: __SerdeContext): S3BucketInfo => {
  return {
    CreationDate: __expectString(output.creationDate),
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1Settings
 */
const de_Settings = (output: any, context: __SerdeContext): Settings => {
  return {
    MfaTypes: output.mfaTypes != null ? de_ListOfMfaTypesElement(output.mfaTypes, context) : undefined,
    SmsMessage: __expectString(output.smsMessage),
  } as any;
};

/**
 * deserializeAws_restJson1SmsSettings
 */
const de_SmsSettings = (output: any, context: __SerdeContext): SmsSettings => {
  return {
    SmsMessage: __expectString(output.smsMessage),
  } as any;
};

/**
 * deserializeAws_restJson1SocialProviderSettings
 */
const de_SocialProviderSettings = (output: any, context: __SerdeContext): SocialProviderSettings => {
  return {
    Facebook: output.Facebook != null ? de_BackendAuthSocialProviderConfig(output.Facebook, context) : undefined,
    Google: output.Google != null ? de_BackendAuthSocialProviderConfig(output.Google, context) : undefined,
    LoginWithAmazon:
      output.LoginWithAmazon != null ? de_BackendAuthSocialProviderConfig(output.LoginWithAmazon, context) : undefined,
    SignInWithApple:
      output.SignInWithApple != null ? de_BackendAuthAppleProviderConfig(output.SignInWithApple, context) : undefined,
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
