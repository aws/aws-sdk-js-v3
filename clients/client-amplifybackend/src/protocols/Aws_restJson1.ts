// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  map,
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
  body = JSON.stringify(
    take(input, {
      targetEnvironmentName: [, , `TargetEnvironmentName`],
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
  body = JSON.stringify(
    take(input, {
      appId: [, , `AppId`],
      appName: [, , `AppName`],
      backendEnvironmentName: [, , `BackendEnvironmentName`],
      resourceConfig: [, (_) => _json(_), `ResourceConfig`],
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      backendEnvironmentName: [, , `BackendEnvironmentName`],
      resourceConfig: [, (_) => se_BackendAPIResourceConfig(_, context), `ResourceConfig`],
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      backendEnvironmentName: [, , `BackendEnvironmentName`],
      resourceConfig: [, (_) => se_CreateBackendAuthResourceConfig(_, context), `ResourceConfig`],
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      backendManagerAppId: [, , `BackendManagerAppId`],
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
  body = JSON.stringify(
    take(input, {
      backendEnvironmentName: [, , `BackendEnvironmentName`],
      resourceConfig: [, (_) => se_CreateBackendStorageResourceConfig(_, context), `ResourceConfig`],
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      resourceConfig: [, (_) => se_BackendAPIResourceConfig(_, context), `ResourceConfig`],
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      resourceName: [, , `ResourceName`],
      serviceName: [, , `ServiceName`],
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
  body = JSON.stringify(
    take(input, {
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      backendEnvironmentName: [, , `BackendEnvironmentName`],
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
  body = JSON.stringify(
    take(input, {
      resourceConfig: [, (_) => se_BackendAPIResourceConfig(_, context), `ResourceConfig`],
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      identityPoolId: [, , `IdentityPoolId`],
      nativeClientId: [, , `NativeClientId`],
      userPoolId: [, , `UserPoolId`],
      webClientId: [, , `WebClientId`],
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
  body = JSON.stringify(
    take(input, {
      bucketName: [, , `BucketName`],
      serviceName: [, , `ServiceName`],
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
  body = JSON.stringify(
    take(input, {
      jobId: [, , `JobId`],
      maxResults: [, , `MaxResults`],
      nextToken: [, , `NextToken`],
      operation: [, , `Operation`],
      status: [, , `Status`],
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
  body = JSON.stringify(
    take(input, {
      nextToken: [, , `NextToken`],
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
  body = JSON.stringify(
    take(input, {
      cleanAmplifyApp: [, , `CleanAmplifyApp`],
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
  body = JSON.stringify(
    take(input, {
      resourceConfig: [, (_) => se_BackendAPIResourceConfig(_, context), `ResourceConfig`],
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      resourceConfig: [, (_) => se_UpdateBackendAuthResourceConfig(_, context), `ResourceConfig`],
      resourceName: [, , `ResourceName`],
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
  body = JSON.stringify(
    take(input, {
      loginAuthConfig: [, (_) => se_LoginAuthConfigReqObj(_, context), `LoginAuthConfig`],
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
  body = JSON.stringify(
    take(input, {
      operation: [, , `Operation`],
      status: [, , `Status`],
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
  body = JSON.stringify(
    take(input, {
      resourceConfig: [, (_) => se_UpdateBackendStorageResourceConfig(_, context), `ResourceConfig`],
      resourceName: [, , `ResourceName`],
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    JobId: [, __expectString, `jobId`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    JobId: [, __expectString, `jobId`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    ChallengeCode: [, __expectString, `challengeCode`],
    SessionId: [, __expectString, `sessionId`],
    Ttl: [, __expectString, `ttl`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    JobId: [, __expectString, `jobId`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    IsSuccess: [, __expectBoolean, `isSuccess`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AmplifyFeatureFlags: [, __expectString, `amplifyFeatureFlags`],
    AmplifyMetaConfig: [, __expectString, `amplifyMetaConfig`],
    AppId: [, __expectString, `appId`],
    AppName: [, __expectString, `appName`],
    BackendEnvironmentList: [, _json, `backendEnvironmentList`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    ResourceConfig: [, (_) => de_BackendAPIResourceConfig(_, context), `resourceConfig`],
    ResourceName: [, __expectString, `resourceName`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ModelIntrospectionSchema: [, __expectString, `modelIntrospectionSchema`],
    Models: [, __expectString, `models`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    ResourceConfig: [, (_) => de_CreateBackendAuthResourceConfig(_, context), `resourceConfig`],
    ResourceName: [, __expectString, `resourceName`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    CreateTime: [, __expectString, `createTime`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
    UpdateTime: [, __expectString, `updateTime`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    ResourceConfig: [, (_) => de_GetBackendStorageResourceConfig(_, context), `resourceConfig`],
    ResourceName: [, __expectString, `resourceName`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    ChallengeCode: [, __expectString, `challengeCode`],
    SessionId: [, __expectString, `sessionId`],
    Ttl: [, __expectString, `ttl`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    JobId: [, __expectString, `jobId`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Jobs: [, (_) => de_ListOfBackendJobRespObj(_, context), `jobs`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Buckets: [, (_) => de_ListOfS3BucketInfo(_, context), `buckets`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Error: [, __expectString, `error`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendManagerAppId: [, __expectString, `backendManagerAppId`],
    Error: [, __expectString, `error`],
    LoginAuthConfig: [, (_) => de_LoginAuthConfigReqObj(_, context), `loginAuthConfig`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    CreateTime: [, __expectString, `createTime`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
    UpdateTime: [, __expectString, `updateTime`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    JobId: [, __expectString, `jobId`],
    Status: [, __expectString, `status`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: [, __expectString, `message`],
    ResourceType: [, __expectString, `resourceType`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    LimitType: [, __expectString, `limitType`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  return take(input, {
    cognitoUserPoolId: [, , `CognitoUserPoolId`],
    description: [, , `Description`],
    expirationTime: [, __serializeFloat, `ExpirationTime`],
    openIDAuthTTL: [, , `OpenIDAuthTTL`],
    openIDClientId: [, , `OpenIDClientId`],
    openIDIatTTL: [, , `OpenIDIatTTL`],
    openIDIssueURL: [, , `OpenIDIssueURL`],
    openIDProviderName: [, , `OpenIDProviderName`],
  });
};

/**
 * serializeAws_restJson1BackendAPIAuthType
 */
const se_BackendAPIAuthType = (input: BackendAPIAuthType, context: __SerdeContext): any => {
  return take(input, {
    mode: [, , `Mode`],
    settings: [, (_) => se_BackendAPIAppSyncAuthSettings(_, context), `Settings`],
  });
};

/**
 * serializeAws_restJson1BackendAPIConflictResolution
 */
const se_BackendAPIConflictResolution = (input: BackendAPIConflictResolution, context: __SerdeContext): any => {
  return take(input, {
    resolutionStrategy: [, , `ResolutionStrategy`],
  });
};

/**
 * serializeAws_restJson1BackendAPIResourceConfig
 */
const se_BackendAPIResourceConfig = (input: BackendAPIResourceConfig, context: __SerdeContext): any => {
  return take(input, {
    additionalAuthTypes: [, (_) => se_ListOfBackendAPIAuthType(_, context), `AdditionalAuthTypes`],
    apiName: [, , `ApiName`],
    conflictResolution: [, (_) => se_BackendAPIConflictResolution(_, context), `ConflictResolution`],
    defaultAuthType: [, (_) => se_BackendAPIAuthType(_, context), `DefaultAuthType`],
    service: [, , `Service`],
    transformSchema: [, , `TransformSchema`],
  });
};

/**
 * serializeAws_restJson1BackendAuthAppleProviderConfig
 */
const se_BackendAuthAppleProviderConfig = (input: BackendAuthAppleProviderConfig, context: __SerdeContext): any => {
  return take(input, {
    client_id: [, , `ClientId`],
    key_id: [, , `KeyId`],
    private_key: [, , `PrivateKey`],
    team_id: [, , `TeamId`],
  });
};

/**
 * serializeAws_restJson1BackendAuthSocialProviderConfig
 */
const se_BackendAuthSocialProviderConfig = (input: BackendAuthSocialProviderConfig, context: __SerdeContext): any => {
  return take(input, {
    client_id: [, , `ClientId`],
    client_secret: [, , `ClientSecret`],
  });
};

/**
 * serializeAws_restJson1BackendStoragePermissions
 */
const se_BackendStoragePermissions = (input: BackendStoragePermissions, context: __SerdeContext): any => {
  return take(input, {
    authenticated: [, _json, `Authenticated`],
    unAuthenticated: [, _json, `UnAuthenticated`],
  });
};

/**
 * serializeAws_restJson1CreateBackendAuthForgotPasswordConfig
 */
const se_CreateBackendAuthForgotPasswordConfig = (
  input: CreateBackendAuthForgotPasswordConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    deliveryMethod: [, , `DeliveryMethod`],
    emailSettings: [, (_) => se_EmailSettings(_, context), `EmailSettings`],
    smsSettings: [, (_) => se_SmsSettings(_, context), `SmsSettings`],
  });
};

/**
 * serializeAws_restJson1CreateBackendAuthIdentityPoolConfig
 */
const se_CreateBackendAuthIdentityPoolConfig = (
  input: CreateBackendAuthIdentityPoolConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    identityPoolName: [, , `IdentityPoolName`],
    unauthenticatedLogin: [, , `UnauthenticatedLogin`],
  });
};

/**
 * serializeAws_restJson1CreateBackendAuthMFAConfig
 */
const se_CreateBackendAuthMFAConfig = (input: CreateBackendAuthMFAConfig, context: __SerdeContext): any => {
  return take(input, {
    MFAMode: [],
    settings: [, (_) => se_Settings(_, context), `Settings`],
  });
};

/**
 * serializeAws_restJson1CreateBackendAuthOAuthConfig
 */
const se_CreateBackendAuthOAuthConfig = (input: CreateBackendAuthOAuthConfig, context: __SerdeContext): any => {
  return take(input, {
    domainPrefix: [, , `DomainPrefix`],
    oAuthGrantType: [, , `OAuthGrantType`],
    oAuthScopes: [, _json, `OAuthScopes`],
    redirectSignInURIs: [, _json, `RedirectSignInURIs`],
    redirectSignOutURIs: [, _json, `RedirectSignOutURIs`],
    socialProviderSettings: [, (_) => se_SocialProviderSettings(_, context), `SocialProviderSettings`],
  });
};

/**
 * serializeAws_restJson1CreateBackendAuthPasswordPolicyConfig
 */
const se_CreateBackendAuthPasswordPolicyConfig = (
  input: CreateBackendAuthPasswordPolicyConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    additionalConstraints: [, _json, `AdditionalConstraints`],
    minimumLength: [, __serializeFloat, `MinimumLength`],
  });
};

/**
 * serializeAws_restJson1CreateBackendAuthResourceConfig
 */
const se_CreateBackendAuthResourceConfig = (input: CreateBackendAuthResourceConfig, context: __SerdeContext): any => {
  return take(input, {
    authResources: [, , `AuthResources`],
    identityPoolConfigs: [, (_) => se_CreateBackendAuthIdentityPoolConfig(_, context), `IdentityPoolConfigs`],
    service: [, , `Service`],
    userPoolConfigs: [, (_) => se_CreateBackendAuthUserPoolConfig(_, context), `UserPoolConfigs`],
  });
};

/**
 * serializeAws_restJson1CreateBackendAuthUserPoolConfig
 */
const se_CreateBackendAuthUserPoolConfig = (input: CreateBackendAuthUserPoolConfig, context: __SerdeContext): any => {
  return take(input, {
    forgotPassword: [, (_) => se_CreateBackendAuthForgotPasswordConfig(_, context), `ForgotPassword`],
    mfa: [, (_) => se_CreateBackendAuthMFAConfig(_, context), `Mfa`],
    oAuth: [, (_) => se_CreateBackendAuthOAuthConfig(_, context), `OAuth`],
    passwordPolicy: [, (_) => se_CreateBackendAuthPasswordPolicyConfig(_, context), `PasswordPolicy`],
    requiredSignUpAttributes: [, _json, `RequiredSignUpAttributes`],
    signInMethod: [, , `SignInMethod`],
    userPoolName: [, , `UserPoolName`],
    verificationMessage: [, (_) => se_CreateBackendAuthVerificationMessageConfig(_, context), `VerificationMessage`],
  });
};

/**
 * serializeAws_restJson1CreateBackendAuthVerificationMessageConfig
 */
const se_CreateBackendAuthVerificationMessageConfig = (
  input: CreateBackendAuthVerificationMessageConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    deliveryMethod: [, , `DeliveryMethod`],
    emailSettings: [, (_) => se_EmailSettings(_, context), `EmailSettings`],
    smsSettings: [, (_) => se_SmsSettings(_, context), `SmsSettings`],
  });
};

/**
 * serializeAws_restJson1CreateBackendStorageResourceConfig
 */
const se_CreateBackendStorageResourceConfig = (
  input: CreateBackendStorageResourceConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    bucketName: [, , `BucketName`],
    permissions: [, (_) => se_BackendStoragePermissions(_, context), `Permissions`],
    serviceName: [, , `ServiceName`],
  });
};

/**
 * serializeAws_restJson1EmailSettings
 */
const se_EmailSettings = (input: EmailSettings, context: __SerdeContext): any => {
  return take(input, {
    emailMessage: [, , `EmailMessage`],
    emailSubject: [, , `EmailSubject`],
  });
};

// se_ListOf__string omitted.

// se_ListOfAdditionalConstraintsElement omitted.

// se_ListOfAuthenticatedElement omitted.

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

// se_ListOfMfaTypesElement omitted.

// se_ListOfOAuthScopesElement omitted.

// se_ListOfRequiredSignUpAttributesElement omitted.

// se_ListOfUnAuthenticatedElement omitted.

/**
 * serializeAws_restJson1LoginAuthConfigReqObj
 */
const se_LoginAuthConfigReqObj = (input: LoginAuthConfigReqObj, context: __SerdeContext): any => {
  return take(input, {
    aws_cognito_identity_pool_id: [, , `AwsCognitoIdentityPoolId`],
    aws_cognito_region: [, , `AwsCognitoRegion`],
    aws_user_pools_id: [, , `AwsUserPoolsId`],
    aws_user_pools_web_client_id: [, , `AwsUserPoolsWebClientId`],
  });
};

// se_ResourceConfig omitted.

/**
 * serializeAws_restJson1Settings
 */
const se_Settings = (input: Settings, context: __SerdeContext): any => {
  return take(input, {
    mfaTypes: [, _json, `MfaTypes`],
    smsMessage: [, , `SmsMessage`],
  });
};

/**
 * serializeAws_restJson1SmsSettings
 */
const se_SmsSettings = (input: SmsSettings, context: __SerdeContext): any => {
  return take(input, {
    smsMessage: [, , `SmsMessage`],
  });
};

/**
 * serializeAws_restJson1SocialProviderSettings
 */
const se_SocialProviderSettings = (input: SocialProviderSettings, context: __SerdeContext): any => {
  return take(input, {
    Facebook: (_) => se_BackendAuthSocialProviderConfig(_, context),
    Google: (_) => se_BackendAuthSocialProviderConfig(_, context),
    LoginWithAmazon: (_) => se_BackendAuthSocialProviderConfig(_, context),
    SignInWithApple: (_) => se_BackendAuthAppleProviderConfig(_, context),
  });
};

/**
 * serializeAws_restJson1UpdateBackendAuthForgotPasswordConfig
 */
const se_UpdateBackendAuthForgotPasswordConfig = (
  input: UpdateBackendAuthForgotPasswordConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    deliveryMethod: [, , `DeliveryMethod`],
    emailSettings: [, (_) => se_EmailSettings(_, context), `EmailSettings`],
    smsSettings: [, (_) => se_SmsSettings(_, context), `SmsSettings`],
  });
};

/**
 * serializeAws_restJson1UpdateBackendAuthIdentityPoolConfig
 */
const se_UpdateBackendAuthIdentityPoolConfig = (
  input: UpdateBackendAuthIdentityPoolConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    unauthenticatedLogin: [, , `UnauthenticatedLogin`],
  });
};

/**
 * serializeAws_restJson1UpdateBackendAuthMFAConfig
 */
const se_UpdateBackendAuthMFAConfig = (input: UpdateBackendAuthMFAConfig, context: __SerdeContext): any => {
  return take(input, {
    MFAMode: [],
    settings: [, (_) => se_Settings(_, context), `Settings`],
  });
};

/**
 * serializeAws_restJson1UpdateBackendAuthOAuthConfig
 */
const se_UpdateBackendAuthOAuthConfig = (input: UpdateBackendAuthOAuthConfig, context: __SerdeContext): any => {
  return take(input, {
    domainPrefix: [, , `DomainPrefix`],
    oAuthGrantType: [, , `OAuthGrantType`],
    oAuthScopes: [, _json, `OAuthScopes`],
    redirectSignInURIs: [, _json, `RedirectSignInURIs`],
    redirectSignOutURIs: [, _json, `RedirectSignOutURIs`],
    socialProviderSettings: [, (_) => se_SocialProviderSettings(_, context), `SocialProviderSettings`],
  });
};

/**
 * serializeAws_restJson1UpdateBackendAuthPasswordPolicyConfig
 */
const se_UpdateBackendAuthPasswordPolicyConfig = (
  input: UpdateBackendAuthPasswordPolicyConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    additionalConstraints: [, _json, `AdditionalConstraints`],
    minimumLength: [, __serializeFloat, `MinimumLength`],
  });
};

/**
 * serializeAws_restJson1UpdateBackendAuthResourceConfig
 */
const se_UpdateBackendAuthResourceConfig = (input: UpdateBackendAuthResourceConfig, context: __SerdeContext): any => {
  return take(input, {
    authResources: [, , `AuthResources`],
    identityPoolConfigs: [, (_) => se_UpdateBackendAuthIdentityPoolConfig(_, context), `IdentityPoolConfigs`],
    service: [, , `Service`],
    userPoolConfigs: [, (_) => se_UpdateBackendAuthUserPoolConfig(_, context), `UserPoolConfigs`],
  });
};

/**
 * serializeAws_restJson1UpdateBackendAuthUserPoolConfig
 */
const se_UpdateBackendAuthUserPoolConfig = (input: UpdateBackendAuthUserPoolConfig, context: __SerdeContext): any => {
  return take(input, {
    forgotPassword: [, (_) => se_UpdateBackendAuthForgotPasswordConfig(_, context), `ForgotPassword`],
    mfa: [, (_) => se_UpdateBackendAuthMFAConfig(_, context), `Mfa`],
    oAuth: [, (_) => se_UpdateBackendAuthOAuthConfig(_, context), `OAuth`],
    passwordPolicy: [, (_) => se_UpdateBackendAuthPasswordPolicyConfig(_, context), `PasswordPolicy`],
    verificationMessage: [, (_) => se_UpdateBackendAuthVerificationMessageConfig(_, context), `VerificationMessage`],
  });
};

/**
 * serializeAws_restJson1UpdateBackendAuthVerificationMessageConfig
 */
const se_UpdateBackendAuthVerificationMessageConfig = (
  input: UpdateBackendAuthVerificationMessageConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    deliveryMethod: [, , `DeliveryMethod`],
    emailSettings: [, (_) => se_EmailSettings(_, context), `EmailSettings`],
    smsSettings: [, (_) => se_SmsSettings(_, context), `SmsSettings`],
  });
};

/**
 * serializeAws_restJson1UpdateBackendStorageResourceConfig
 */
const se_UpdateBackendStorageResourceConfig = (
  input: UpdateBackendStorageResourceConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    permissions: [, (_) => se_BackendStoragePermissions(_, context), `Permissions`],
    serviceName: [, , `ServiceName`],
  });
};

/**
 * deserializeAws_restJson1BackendAPIAppSyncAuthSettings
 */
const de_BackendAPIAppSyncAuthSettings = (output: any, context: __SerdeContext): BackendAPIAppSyncAuthSettings => {
  return take(output, {
    CognitoUserPoolId: [, __expectString, `cognitoUserPoolId`],
    Description: [, __expectString, `description`],
    ExpirationTime: [, __limitedParseDouble, `expirationTime`],
    OpenIDAuthTTL: [, __expectString, `openIDAuthTTL`],
    OpenIDClientId: [, __expectString, `openIDClientId`],
    OpenIDIatTTL: [, __expectString, `openIDIatTTL`],
    OpenIDIssueURL: [, __expectString, `openIDIssueURL`],
    OpenIDProviderName: [, __expectString, `openIDProviderName`],
  }) as any;
};

/**
 * deserializeAws_restJson1BackendAPIAuthType
 */
const de_BackendAPIAuthType = (output: any, context: __SerdeContext): BackendAPIAuthType => {
  return take(output, {
    Mode: [, __expectString, `mode`],
    Settings: [, (_: any) => de_BackendAPIAppSyncAuthSettings(_, context), `settings`],
  }) as any;
};

/**
 * deserializeAws_restJson1BackendAPIConflictResolution
 */
const de_BackendAPIConflictResolution = (output: any, context: __SerdeContext): BackendAPIConflictResolution => {
  return take(output, {
    ResolutionStrategy: [, __expectString, `resolutionStrategy`],
  }) as any;
};

/**
 * deserializeAws_restJson1BackendAPIResourceConfig
 */
const de_BackendAPIResourceConfig = (output: any, context: __SerdeContext): BackendAPIResourceConfig => {
  return take(output, {
    AdditionalAuthTypes: [, (_: any) => de_ListOfBackendAPIAuthType(_, context), `additionalAuthTypes`],
    ApiName: [, __expectString, `apiName`],
    ConflictResolution: [, (_: any) => de_BackendAPIConflictResolution(_, context), `conflictResolution`],
    DefaultAuthType: [, (_: any) => de_BackendAPIAuthType(_, context), `defaultAuthType`],
    Service: [, __expectString, `service`],
    TransformSchema: [, __expectString, `transformSchema`],
  }) as any;
};

/**
 * deserializeAws_restJson1BackendAuthAppleProviderConfig
 */
const de_BackendAuthAppleProviderConfig = (output: any, context: __SerdeContext): BackendAuthAppleProviderConfig => {
  return take(output, {
    ClientId: [, __expectString, `client_id`],
    KeyId: [, __expectString, `key_id`],
    PrivateKey: [, __expectString, `private_key`],
    TeamId: [, __expectString, `team_id`],
  }) as any;
};

/**
 * deserializeAws_restJson1BackendAuthSocialProviderConfig
 */
const de_BackendAuthSocialProviderConfig = (output: any, context: __SerdeContext): BackendAuthSocialProviderConfig => {
  return take(output, {
    ClientId: [, __expectString, `client_id`],
    ClientSecret: [, __expectString, `client_secret`],
  }) as any;
};

/**
 * deserializeAws_restJson1BackendJobRespObj
 */
const de_BackendJobRespObj = (output: any, context: __SerdeContext): BackendJobRespObj => {
  return take(output, {
    AppId: [, __expectString, `appId`],
    BackendEnvironmentName: [, __expectString, `backendEnvironmentName`],
    CreateTime: [, __expectString, `createTime`],
    Error: [, __expectString, `error`],
    JobId: [, __expectString, `jobId`],
    Operation: [, __expectString, `operation`],
    Status: [, __expectString, `status`],
    UpdateTime: [, __expectString, `updateTime`],
  }) as any;
};

/**
 * deserializeAws_restJson1BackendStoragePermissions
 */
const de_BackendStoragePermissions = (output: any, context: __SerdeContext): BackendStoragePermissions => {
  return take(output, {
    Authenticated: [, _json, `authenticated`],
    UnAuthenticated: [, _json, `unAuthenticated`],
  }) as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthForgotPasswordConfig
 */
const de_CreateBackendAuthForgotPasswordConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthForgotPasswordConfig => {
  return take(output, {
    DeliveryMethod: [, __expectString, `deliveryMethod`],
    EmailSettings: [, (_: any) => de_EmailSettings(_, context), `emailSettings`],
    SmsSettings: [, (_: any) => de_SmsSettings(_, context), `smsSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthIdentityPoolConfig
 */
const de_CreateBackendAuthIdentityPoolConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthIdentityPoolConfig => {
  return take(output, {
    IdentityPoolName: [, __expectString, `identityPoolName`],
    UnauthenticatedLogin: [, __expectBoolean, `unauthenticatedLogin`],
  }) as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthMFAConfig
 */
const de_CreateBackendAuthMFAConfig = (output: any, context: __SerdeContext): CreateBackendAuthMFAConfig => {
  return take(output, {
    MFAMode: __expectString,
    Settings: [, (_: any) => de_Settings(_, context), `settings`],
  }) as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthOAuthConfig
 */
const de_CreateBackendAuthOAuthConfig = (output: any, context: __SerdeContext): CreateBackendAuthOAuthConfig => {
  return take(output, {
    DomainPrefix: [, __expectString, `domainPrefix`],
    OAuthGrantType: [, __expectString, `oAuthGrantType`],
    OAuthScopes: [, _json, `oAuthScopes`],
    RedirectSignInURIs: [, _json, `redirectSignInURIs`],
    RedirectSignOutURIs: [, _json, `redirectSignOutURIs`],
    SocialProviderSettings: [, (_: any) => de_SocialProviderSettings(_, context), `socialProviderSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthPasswordPolicyConfig
 */
const de_CreateBackendAuthPasswordPolicyConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthPasswordPolicyConfig => {
  return take(output, {
    AdditionalConstraints: [, _json, `additionalConstraints`],
    MinimumLength: [, __limitedParseDouble, `minimumLength`],
  }) as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthResourceConfig
 */
const de_CreateBackendAuthResourceConfig = (output: any, context: __SerdeContext): CreateBackendAuthResourceConfig => {
  return take(output, {
    AuthResources: [, __expectString, `authResources`],
    IdentityPoolConfigs: [, (_: any) => de_CreateBackendAuthIdentityPoolConfig(_, context), `identityPoolConfigs`],
    Service: [, __expectString, `service`],
    UserPoolConfigs: [, (_: any) => de_CreateBackendAuthUserPoolConfig(_, context), `userPoolConfigs`],
  }) as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthUserPoolConfig
 */
const de_CreateBackendAuthUserPoolConfig = (output: any, context: __SerdeContext): CreateBackendAuthUserPoolConfig => {
  return take(output, {
    ForgotPassword: [, (_: any) => de_CreateBackendAuthForgotPasswordConfig(_, context), `forgotPassword`],
    Mfa: [, (_: any) => de_CreateBackendAuthMFAConfig(_, context), `mfa`],
    OAuth: [, (_: any) => de_CreateBackendAuthOAuthConfig(_, context), `oAuth`],
    PasswordPolicy: [, (_: any) => de_CreateBackendAuthPasswordPolicyConfig(_, context), `passwordPolicy`],
    RequiredSignUpAttributes: [, _json, `requiredSignUpAttributes`],
    SignInMethod: [, __expectString, `signInMethod`],
    UserPoolName: [, __expectString, `userPoolName`],
    VerificationMessage: [
      ,
      (_: any) => de_CreateBackendAuthVerificationMessageConfig(_, context),
      `verificationMessage`,
    ],
  }) as any;
};

/**
 * deserializeAws_restJson1CreateBackendAuthVerificationMessageConfig
 */
const de_CreateBackendAuthVerificationMessageConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthVerificationMessageConfig => {
  return take(output, {
    DeliveryMethod: [, __expectString, `deliveryMethod`],
    EmailSettings: [, (_: any) => de_EmailSettings(_, context), `emailSettings`],
    SmsSettings: [, (_: any) => de_SmsSettings(_, context), `smsSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1EmailSettings
 */
const de_EmailSettings = (output: any, context: __SerdeContext): EmailSettings => {
  return take(output, {
    EmailMessage: [, __expectString, `emailMessage`],
    EmailSubject: [, __expectString, `emailSubject`],
  }) as any;
};

/**
 * deserializeAws_restJson1GetBackendStorageResourceConfig
 */
const de_GetBackendStorageResourceConfig = (output: any, context: __SerdeContext): GetBackendStorageResourceConfig => {
  return take(output, {
    BucketName: [, __expectString, `bucketName`],
    Imported: [, __expectBoolean, `imported`],
    Permissions: [, (_: any) => de_BackendStoragePermissions(_, context), `permissions`],
    ServiceName: [, __expectString, `serviceName`],
  }) as any;
};

// de_ListOf__string omitted.

// de_ListOfAdditionalConstraintsElement omitted.

// de_ListOfAuthenticatedElement omitted.

/**
 * deserializeAws_restJson1ListOfBackendAPIAuthType
 */
const de_ListOfBackendAPIAuthType = (output: any, context: __SerdeContext): BackendAPIAuthType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_BackendJobRespObj(entry, context);
    });
  return retVal;
};

// de_ListOfMfaTypesElement omitted.

// de_ListOfOAuthScopesElement omitted.

// de_ListOfRequiredSignUpAttributesElement omitted.

/**
 * deserializeAws_restJson1ListOfS3BucketInfo
 */
const de_ListOfS3BucketInfo = (output: any, context: __SerdeContext): S3BucketInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_S3BucketInfo(entry, context);
    });
  return retVal;
};

// de_ListOfUnAuthenticatedElement omitted.

/**
 * deserializeAws_restJson1LoginAuthConfigReqObj
 */
const de_LoginAuthConfigReqObj = (output: any, context: __SerdeContext): LoginAuthConfigReqObj => {
  return take(output, {
    AwsCognitoIdentityPoolId: [, __expectString, `aws_cognito_identity_pool_id`],
    AwsCognitoRegion: [, __expectString, `aws_cognito_region`],
    AwsUserPoolsId: [, __expectString, `aws_user_pools_id`],
    AwsUserPoolsWebClientId: [, __expectString, `aws_user_pools_web_client_id`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3BucketInfo
 */
const de_S3BucketInfo = (output: any, context: __SerdeContext): S3BucketInfo => {
  return take(output, {
    CreationDate: [, __expectString, `creationDate`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1Settings
 */
const de_Settings = (output: any, context: __SerdeContext): Settings => {
  return take(output, {
    MfaTypes: [, _json, `mfaTypes`],
    SmsMessage: [, __expectString, `smsMessage`],
  }) as any;
};

/**
 * deserializeAws_restJson1SmsSettings
 */
const de_SmsSettings = (output: any, context: __SerdeContext): SmsSettings => {
  return take(output, {
    SmsMessage: [, __expectString, `smsMessage`],
  }) as any;
};

/**
 * deserializeAws_restJson1SocialProviderSettings
 */
const de_SocialProviderSettings = (output: any, context: __SerdeContext): SocialProviderSettings => {
  return take(output, {
    Facebook: (_: any) => de_BackendAuthSocialProviderConfig(_, context),
    Google: (_: any) => de_BackendAuthSocialProviderConfig(_, context),
    LoginWithAmazon: (_: any) => de_BackendAuthSocialProviderConfig(_, context),
    SignInWithApple: (_: any) => de_BackendAuthAppleProviderConfig(_, context),
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
