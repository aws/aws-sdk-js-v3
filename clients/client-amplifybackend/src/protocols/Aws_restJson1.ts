import { CloneBackendCommandInput, CloneBackendCommandOutput } from "../commands/CloneBackendCommand";
import { CreateBackendAPICommandInput, CreateBackendAPICommandOutput } from "../commands/CreateBackendAPICommand";
import { CreateBackendAuthCommandInput, CreateBackendAuthCommandOutput } from "../commands/CreateBackendAuthCommand";
import { CreateBackendCommandInput, CreateBackendCommandOutput } from "../commands/CreateBackendCommand";
import {
  CreateBackendConfigCommandInput,
  CreateBackendConfigCommandOutput,
} from "../commands/CreateBackendConfigCommand";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "../commands/CreateTokenCommand";
import { DeleteBackendAPICommandInput, DeleteBackendAPICommandOutput } from "../commands/DeleteBackendAPICommand";
import { DeleteBackendAuthCommandInput, DeleteBackendAuthCommandOutput } from "../commands/DeleteBackendAuthCommand";
import { DeleteBackendCommandInput, DeleteBackendCommandOutput } from "../commands/DeleteBackendCommand";
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
import { GetTokenCommandInput, GetTokenCommandOutput } from "../commands/GetTokenCommand";
import { ImportBackendAuthCommandInput, ImportBackendAuthCommandOutput } from "../commands/ImportBackendAuthCommand";
import { ListBackendJobsCommandInput, ListBackendJobsCommandOutput } from "../commands/ListBackendJobsCommand";
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
  AdditionalConstraintsElement,
  BackendAPIAppSyncAuthSettings,
  BackendAPIAuthType,
  BackendAPIConflictResolution,
  BackendAPIResourceConfig,
  BackendAuthAppleProviderConfig,
  BackendAuthSocialProviderConfig,
  BackendJobRespObj,
  BadRequestException,
  CreateBackendAuthForgotPasswordConfig,
  CreateBackendAuthIdentityPoolConfig,
  CreateBackendAuthMFAConfig,
  CreateBackendAuthOAuthConfig,
  CreateBackendAuthPasswordPolicyConfig,
  CreateBackendAuthResourceConfig,
  CreateBackendAuthUserPoolConfig,
  EmailSettings,
  GatewayTimeoutException,
  LoginAuthConfigReqObj,
  MfaTypesElement,
  NotFoundException,
  OAuthScopesElement,
  RequiredSignUpAttributesElement,
  ResourceConfig,
  Settings,
  SmsSettings,
  SocialProviderSettings,
  TooManyRequestsException,
  UpdateBackendAuthForgotPasswordConfig,
  UpdateBackendAuthIdentityPoolConfig,
  UpdateBackendAuthMFAConfig,
  UpdateBackendAuthOAuthConfig,
  UpdateBackendAuthPasswordPolicyConfig,
  UpdateBackendAuthResourceConfig,
  UpdateBackendAuthUserPoolConfig,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1CloneBackendCommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.TargetEnvironmentName !== undefined &&
      input.TargetEnvironmentName !== null && { targetEnvironmentName: input.TargetEnvironmentName }),
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

export const serializeAws_restJson1CreateBackendCommand = async (
  input: CreateBackendCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend";
  let body: any;
  body = JSON.stringify({
    ...(input.AppId !== undefined && input.AppId !== null && { appId: input.AppId }),
    ...(input.AppName !== undefined && input.AppName !== null && { appName: input.AppName }),
    ...(input.BackendEnvironmentName !== undefined &&
      input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }),
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1ResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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

export const serializeAws_restJson1CreateBackendAPICommand = async (
  input: CreateBackendAPICommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/api";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BackendEnvironmentName !== undefined &&
      input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }),
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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

export const serializeAws_restJson1CreateBackendAuthCommand = async (
  input: CreateBackendAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/auth";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BackendEnvironmentName !== undefined &&
      input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }),
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1CreateBackendAuthResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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

export const serializeAws_restJson1CreateBackendConfigCommand = async (
  input: CreateBackendConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/config";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BackendManagerAppId !== undefined &&
      input.BackendManagerAppId !== null && { backendManagerAppId: input.BackendManagerAppId }),
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

export const serializeAws_restJson1CreateTokenCommand = async (
  input: CreateTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/challenge";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
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

export const serializeAws_restJson1DeleteBackendCommand = async (
  input: DeleteBackendCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/environments/{BackendEnvironmentName}/remove";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
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

export const serializeAws_restJson1DeleteBackendAPICommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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

export const serializeAws_restJson1DeleteBackendAuthCommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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

export const serializeAws_restJson1DeleteTokenCommand = async (
  input: DeleteTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/challenge/{SessionId}/remove";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.SessionId !== undefined) {
    const labelValue: string = input.SessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SessionId.");
    }
    resolvedPath = resolvedPath.replace("{SessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SessionId.");
  }
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

export const serializeAws_restJson1GenerateBackendAPIModelsCommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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

export const serializeAws_restJson1GetBackendCommand = async (
  input: GetBackendCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/details";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BackendEnvironmentName !== undefined &&
      input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }),
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

export const serializeAws_restJson1GetBackendAPICommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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

export const serializeAws_restJson1GetBackendAPIModelsCommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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

export const serializeAws_restJson1GetBackendAuthCommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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

export const serializeAws_restJson1GetBackendJobCommand = async (
  input: GetBackendJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backend/{AppId}/job/{BackendEnvironmentName}/{JobId}";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
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

export const serializeAws_restJson1GetTokenCommand = async (
  input: GetTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/challenge/{SessionId}";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.SessionId !== undefined) {
    const labelValue: string = input.SessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SessionId.");
    }
    resolvedPath = resolvedPath.replace("{SessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SessionId.");
  }
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

export const serializeAws_restJson1ImportBackendAuthCommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.IdentityPoolId !== undefined &&
      input.IdentityPoolId !== null && { identityPoolId: input.IdentityPoolId }),
    ...(input.NativeClientId !== undefined &&
      input.NativeClientId !== null && { nativeClientId: input.NativeClientId }),
    ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { userPoolId: input.UserPoolId }),
    ...(input.WebClientId !== undefined && input.WebClientId !== null && { webClientId: input.WebClientId }),
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

export const serializeAws_restJson1ListBackendJobsCommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.JobId !== undefined && input.JobId !== null && { jobId: input.JobId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { nextToken: input.NextToken }),
    ...(input.Operation !== undefined && input.Operation !== null && { operation: input.Operation }),
    ...(input.Status !== undefined && input.Status !== null && { status: input.Status }),
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

export const serializeAws_restJson1RemoveAllBackendsCommand = async (
  input: RemoveAllBackendsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/remove";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CleanAmplifyApp !== undefined &&
      input.CleanAmplifyApp !== null && { cleanAmplifyApp: input.CleanAmplifyApp }),
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

export const serializeAws_restJson1RemoveBackendConfigCommand = async (
  input: RemoveBackendConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/config/remove";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
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

export const serializeAws_restJson1UpdateBackendAPICommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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

export const serializeAws_restJson1UpdateBackendAuthCommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1UpdateBackendAuthResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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

export const serializeAws_restJson1UpdateBackendConfigCommand = async (
  input: UpdateBackendConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backend/{AppId}/config/update";
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.LoginAuthConfig !== undefined &&
      input.LoginAuthConfig !== null && {
        loginAuthConfig: serializeAws_restJson1LoginAuthConfigReqObj(input.LoginAuthConfig, context),
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

export const serializeAws_restJson1UpdateBackendJobCommand = async (
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
  if (input.AppId !== undefined) {
    const labelValue: string = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue: string = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace("{BackendEnvironmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Operation !== undefined && input.Operation !== null && { operation: input.Operation }),
    ...(input.Status !== undefined && input.Status !== null && { status: input.Status }),
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

export const deserializeAws_restJson1CloneBackendCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneBackendCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CloneBackendCommandError(output, context);
  }
  const contents: CloneBackendCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CloneBackendCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloneBackendCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateBackendCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackendCommandError(output, context);
  }
  const contents: CreateBackendCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBackendCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateBackendAPICommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendAPICommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackendAPICommandError(output, context);
  }
  const contents: CreateBackendAPICommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBackendAPICommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendAPICommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateBackendAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackendAuthCommandError(output, context);
  }
  const contents: CreateBackendAuthCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBackendAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateBackendConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackendConfigCommandError(output, context);
  }
  const contents: CreateBackendConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    JobId: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBackendConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTokenCommandError(output, context);
  }
  const contents: CreateTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    ChallengeCode: undefined,
    SessionId: undefined,
    Ttl: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.challengeCode !== undefined && data.challengeCode !== null) {
    contents.ChallengeCode = __expectString(data.challengeCode);
  }
  if (data.sessionId !== undefined && data.sessionId !== null) {
    contents.SessionId = __expectString(data.sessionId);
  }
  if (data.ttl !== undefined && data.ttl !== null) {
    contents.Ttl = __expectString(data.ttl);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteBackendCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackendCommandError(output, context);
  }
  const contents: DeleteBackendCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBackendCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteBackendAPICommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendAPICommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackendAPICommandError(output, context);
  }
  const contents: DeleteBackendAPICommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBackendAPICommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendAPICommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteBackendAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackendAuthCommandError(output, context);
  }
  const contents: DeleteBackendAuthCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBackendAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTokenCommandError(output, context);
  }
  const contents: DeleteTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    IsSuccess: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.isSuccess !== undefined && data.isSuccess !== null) {
    contents.IsSuccess = __expectBoolean(data.isSuccess);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GenerateBackendAPIModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateBackendAPIModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GenerateBackendAPIModelsCommandError(output, context);
  }
  const contents: GenerateBackendAPIModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GenerateBackendAPIModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateBackendAPIModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetBackendCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackendCommandError(output, context);
  }
  const contents: GetBackendCommandOutput = {
    $metadata: deserializeMetadata(output),
    AmplifyMetaConfig: undefined,
    AppId: undefined,
    AppName: undefined,
    BackendEnvironmentList: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.amplifyMetaConfig !== undefined && data.amplifyMetaConfig !== null) {
    contents.AmplifyMetaConfig = __expectString(data.amplifyMetaConfig);
  }
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.appName !== undefined && data.appName !== null) {
    contents.AppName = __expectString(data.appName);
  }
  if (data.backendEnvironmentList !== undefined && data.backendEnvironmentList !== null) {
    contents.BackendEnvironmentList = deserializeAws_restJson1ListOf__string(data.backendEnvironmentList, context);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackendCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetBackendAPICommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAPICommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackendAPICommandError(output, context);
  }
  const contents: GetBackendAPICommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    ResourceConfig: undefined,
    ResourceName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.resourceConfig !== undefined && data.resourceConfig !== null) {
    contents.ResourceConfig = deserializeAws_restJson1BackendAPIResourceConfig(data.resourceConfig, context);
  }
  if (data.resourceName !== undefined && data.resourceName !== null) {
    contents.ResourceName = __expectString(data.resourceName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackendAPICommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAPICommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetBackendAPIModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAPIModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackendAPIModelsCommandError(output, context);
  }
  const contents: GetBackendAPIModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Models: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.models !== undefined && data.models !== null) {
    contents.Models = __expectString(data.models);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackendAPIModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAPIModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetBackendAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackendAuthCommandError(output, context);
  }
  const contents: GetBackendAuthCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    ResourceConfig: undefined,
    ResourceName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.resourceConfig !== undefined && data.resourceConfig !== null) {
    contents.ResourceConfig = deserializeAws_restJson1CreateBackendAuthResourceConfig(data.resourceConfig, context);
  }
  if (data.resourceName !== undefined && data.resourceName !== null) {
    contents.ResourceName = __expectString(data.resourceName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackendAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetBackendJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackendJobCommandError(output, context);
  }
  const contents: GetBackendJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    CreateTime: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
    UpdateTime: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.createTime !== undefined && data.createTime !== null) {
    contents.CreateTime = __expectString(data.createTime);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  if (data.updateTime !== undefined && data.updateTime !== null) {
    contents.UpdateTime = __expectString(data.updateTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackendJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTokenCommandError(output, context);
  }
  const contents: GetTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    ChallengeCode: undefined,
    SessionId: undefined,
    Ttl: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.challengeCode !== undefined && data.challengeCode !== null) {
    contents.ChallengeCode = __expectString(data.challengeCode);
  }
  if (data.sessionId !== undefined && data.sessionId !== null) {
    contents.SessionId = __expectString(data.sessionId);
  }
  if (data.ttl !== undefined && data.ttl !== null) {
    contents.Ttl = __expectString(data.ttl);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ImportBackendAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportBackendAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportBackendAuthCommandError(output, context);
  }
  const contents: ImportBackendAuthCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ImportBackendAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportBackendAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListBackendJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackendJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackendJobsCommandError(output, context);
  }
  const contents: ListBackendJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Jobs: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.Jobs = deserializeAws_restJson1ListOfBackendJobRespObj(data.jobs, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBackendJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackendJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RemoveAllBackendsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllBackendsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveAllBackendsCommandError(output, context);
  }
  const contents: RemoveAllBackendsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveAllBackendsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAllBackendsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RemoveBackendConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveBackendConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveBackendConfigCommandError(output, context);
  }
  const contents: RemoveBackendConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    Error: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveBackendConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveBackendConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateBackendAPICommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendAPICommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBackendAPICommandError(output, context);
  }
  const contents: UpdateBackendAPICommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBackendAPICommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendAPICommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateBackendAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendAuthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBackendAuthCommandError(output, context);
  }
  const contents: UpdateBackendAuthCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBackendAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateBackendConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBackendConfigCommandError(output, context);
  }
  const contents: UpdateBackendConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendManagerAppId: undefined,
    Error: undefined,
    LoginAuthConfig: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendManagerAppId !== undefined && data.backendManagerAppId !== null) {
    contents.BackendManagerAppId = __expectString(data.backendManagerAppId);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.loginAuthConfig !== undefined && data.loginAuthConfig !== null) {
    contents.LoginAuthConfig = deserializeAws_restJson1LoginAuthConfigReqObj(data.loginAuthConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBackendConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateBackendJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBackendJobCommandError(output, context);
  }
  const contents: UpdateBackendJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    CreateTime: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
    UpdateTime: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = __expectString(data.appId);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = __expectString(data.backendEnvironmentName);
  }
  if (data.createTime !== undefined && data.createTime !== null) {
    contents.CreateTime = __expectString(data.createTime);
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = __expectString(data.error);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = __expectString(data.jobId);
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = __expectString(data.operation);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  if (data.updateTime !== undefined && data.updateTime !== null) {
    contents.UpdateTime = __expectString(data.updateTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBackendJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackendJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1GatewayTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GatewayTimeoutException> => {
  const contents: GatewayTimeoutException = {
    name: "GatewayTimeoutException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.ResourceType = __expectString(data.resourceType);
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    LimitType: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.limitType !== undefined && data.limitType !== null) {
    contents.LimitType = __expectString(data.limitType);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1BackendAPIAppSyncAuthSettings = (
  input: BackendAPIAppSyncAuthSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CognitoUserPoolId !== undefined &&
      input.CognitoUserPoolId !== null && { cognitoUserPoolId: input.CognitoUserPoolId }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.ExpirationTime !== undefined &&
      input.ExpirationTime !== null && { expirationTime: __serializeFloat(input.ExpirationTime) }),
    ...(input.OpenIDAuthTTL !== undefined && input.OpenIDAuthTTL !== null && { openIDAuthTTL: input.OpenIDAuthTTL }),
    ...(input.OpenIDClientId !== undefined &&
      input.OpenIDClientId !== null && { openIDClientId: input.OpenIDClientId }),
    ...(input.OpenIDIatTTL !== undefined && input.OpenIDIatTTL !== null && { openIDIatTTL: input.OpenIDIatTTL }),
    ...(input.OpenIDIssueURL !== undefined &&
      input.OpenIDIssueURL !== null && { openIDIssueURL: input.OpenIDIssueURL }),
    ...(input.OpenIDProviderName !== undefined &&
      input.OpenIDProviderName !== null && { openIDProviderName: input.OpenIDProviderName }),
  };
};

const serializeAws_restJson1BackendAPIAuthType = (input: BackendAPIAuthType, context: __SerdeContext): any => {
  return {
    ...(input.Mode !== undefined && input.Mode !== null && { mode: input.Mode }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && {
        settings: serializeAws_restJson1BackendAPIAppSyncAuthSettings(input.Settings, context),
      }),
  };
};

const serializeAws_restJson1BackendAPIConflictResolution = (
  input: BackendAPIConflictResolution,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolutionStrategy !== undefined &&
      input.ResolutionStrategy !== null && { resolutionStrategy: input.ResolutionStrategy }),
  };
};

const serializeAws_restJson1BackendAPIResourceConfig = (
  input: BackendAPIResourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalAuthTypes !== undefined &&
      input.AdditionalAuthTypes !== null && {
        additionalAuthTypes: serializeAws_restJson1ListOfBackendAPIAuthType(input.AdditionalAuthTypes, context),
      }),
    ...(input.ApiName !== undefined && input.ApiName !== null && { apiName: input.ApiName }),
    ...(input.ConflictResolution !== undefined &&
      input.ConflictResolution !== null && {
        conflictResolution: serializeAws_restJson1BackendAPIConflictResolution(input.ConflictResolution, context),
      }),
    ...(input.DefaultAuthType !== undefined &&
      input.DefaultAuthType !== null && {
        defaultAuthType: serializeAws_restJson1BackendAPIAuthType(input.DefaultAuthType, context),
      }),
    ...(input.Service !== undefined && input.Service !== null && { service: input.Service }),
    ...(input.TransformSchema !== undefined &&
      input.TransformSchema !== null && { transformSchema: input.TransformSchema }),
  };
};

const serializeAws_restJson1BackendAuthAppleProviderConfig = (
  input: BackendAuthAppleProviderConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientId !== undefined && input.ClientId !== null && { client_id: input.ClientId }),
    ...(input.KeyId !== undefined && input.KeyId !== null && { key_id: input.KeyId }),
    ...(input.PrivateKey !== undefined && input.PrivateKey !== null && { private_key: input.PrivateKey }),
    ...(input.TeamId !== undefined && input.TeamId !== null && { team_id: input.TeamId }),
  };
};

const serializeAws_restJson1BackendAuthSocialProviderConfig = (
  input: BackendAuthSocialProviderConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientId !== undefined && input.ClientId !== null && { client_id: input.ClientId }),
    ...(input.ClientSecret !== undefined && input.ClientSecret !== null && { client_secret: input.ClientSecret }),
  };
};

const serializeAws_restJson1CreateBackendAuthForgotPasswordConfig = (
  input: CreateBackendAuthForgotPasswordConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryMethod !== undefined &&
      input.DeliveryMethod !== null && { deliveryMethod: input.DeliveryMethod }),
    ...(input.EmailSettings !== undefined &&
      input.EmailSettings !== null && {
        emailSettings: serializeAws_restJson1EmailSettings(input.EmailSettings, context),
      }),
    ...(input.SmsSettings !== undefined &&
      input.SmsSettings !== null && { smsSettings: serializeAws_restJson1SmsSettings(input.SmsSettings, context) }),
  };
};

const serializeAws_restJson1CreateBackendAuthIdentityPoolConfig = (
  input: CreateBackendAuthIdentityPoolConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityPoolName !== undefined &&
      input.IdentityPoolName !== null && { identityPoolName: input.IdentityPoolName }),
    ...(input.UnauthenticatedLogin !== undefined &&
      input.UnauthenticatedLogin !== null && { unauthenticatedLogin: input.UnauthenticatedLogin }),
  };
};

const serializeAws_restJson1CreateBackendAuthMFAConfig = (
  input: CreateBackendAuthMFAConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.MFAMode !== undefined && input.MFAMode !== null && { MFAMode: input.MFAMode }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && { settings: serializeAws_restJson1Settings(input.Settings, context) }),
  };
};

const serializeAws_restJson1CreateBackendAuthOAuthConfig = (
  input: CreateBackendAuthOAuthConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainPrefix !== undefined && input.DomainPrefix !== null && { domainPrefix: input.DomainPrefix }),
    ...(input.OAuthGrantType !== undefined &&
      input.OAuthGrantType !== null && { oAuthGrantType: input.OAuthGrantType }),
    ...(input.OAuthScopes !== undefined &&
      input.OAuthScopes !== null && {
        oAuthScopes: serializeAws_restJson1ListOfOAuthScopesElement(input.OAuthScopes, context),
      }),
    ...(input.RedirectSignInURIs !== undefined &&
      input.RedirectSignInURIs !== null && {
        redirectSignInURIs: serializeAws_restJson1ListOf__string(input.RedirectSignInURIs, context),
      }),
    ...(input.RedirectSignOutURIs !== undefined &&
      input.RedirectSignOutURIs !== null && {
        redirectSignOutURIs: serializeAws_restJson1ListOf__string(input.RedirectSignOutURIs, context),
      }),
    ...(input.SocialProviderSettings !== undefined &&
      input.SocialProviderSettings !== null && {
        socialProviderSettings: serializeAws_restJson1SocialProviderSettings(input.SocialProviderSettings, context),
      }),
  };
};

const serializeAws_restJson1CreateBackendAuthPasswordPolicyConfig = (
  input: CreateBackendAuthPasswordPolicyConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalConstraints !== undefined &&
      input.AdditionalConstraints !== null && {
        additionalConstraints: serializeAws_restJson1ListOfAdditionalConstraintsElement(
          input.AdditionalConstraints,
          context
        ),
      }),
    ...(input.MinimumLength !== undefined &&
      input.MinimumLength !== null && { minimumLength: __serializeFloat(input.MinimumLength) }),
  };
};

const serializeAws_restJson1CreateBackendAuthResourceConfig = (
  input: CreateBackendAuthResourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthResources !== undefined && input.AuthResources !== null && { authResources: input.AuthResources }),
    ...(input.IdentityPoolConfigs !== undefined &&
      input.IdentityPoolConfigs !== null && {
        identityPoolConfigs: serializeAws_restJson1CreateBackendAuthIdentityPoolConfig(
          input.IdentityPoolConfigs,
          context
        ),
      }),
    ...(input.Service !== undefined && input.Service !== null && { service: input.Service }),
    ...(input.UserPoolConfigs !== undefined &&
      input.UserPoolConfigs !== null && {
        userPoolConfigs: serializeAws_restJson1CreateBackendAuthUserPoolConfig(input.UserPoolConfigs, context),
      }),
  };
};

const serializeAws_restJson1CreateBackendAuthUserPoolConfig = (
  input: CreateBackendAuthUserPoolConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForgotPassword !== undefined &&
      input.ForgotPassword !== null && {
        forgotPassword: serializeAws_restJson1CreateBackendAuthForgotPasswordConfig(input.ForgotPassword, context),
      }),
    ...(input.Mfa !== undefined &&
      input.Mfa !== null && { mfa: serializeAws_restJson1CreateBackendAuthMFAConfig(input.Mfa, context) }),
    ...(input.OAuth !== undefined &&
      input.OAuth !== null && { oAuth: serializeAws_restJson1CreateBackendAuthOAuthConfig(input.OAuth, context) }),
    ...(input.PasswordPolicy !== undefined &&
      input.PasswordPolicy !== null && {
        passwordPolicy: serializeAws_restJson1CreateBackendAuthPasswordPolicyConfig(input.PasswordPolicy, context),
      }),
    ...(input.RequiredSignUpAttributes !== undefined &&
      input.RequiredSignUpAttributes !== null && {
        requiredSignUpAttributes: serializeAws_restJson1ListOfRequiredSignUpAttributesElement(
          input.RequiredSignUpAttributes,
          context
        ),
      }),
    ...(input.SignInMethod !== undefined && input.SignInMethod !== null && { signInMethod: input.SignInMethod }),
    ...(input.UserPoolName !== undefined && input.UserPoolName !== null && { userPoolName: input.UserPoolName }),
  };
};

const serializeAws_restJson1EmailSettings = (input: EmailSettings, context: __SerdeContext): any => {
  return {
    ...(input.EmailMessage !== undefined && input.EmailMessage !== null && { emailMessage: input.EmailMessage }),
    ...(input.EmailSubject !== undefined && input.EmailSubject !== null && { emailSubject: input.EmailSubject }),
  };
};

const serializeAws_restJson1ListOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ListOfAdditionalConstraintsElement = (
  input: (AdditionalConstraintsElement | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ListOfBackendAPIAuthType = (input: BackendAPIAuthType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1BackendAPIAuthType(entry, context);
    });
};

const serializeAws_restJson1ListOfMfaTypesElement = (
  input: (MfaTypesElement | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ListOfOAuthScopesElement = (
  input: (OAuthScopesElement | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ListOfRequiredSignUpAttributesElement = (
  input: (RequiredSignUpAttributesElement | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1LoginAuthConfigReqObj = (input: LoginAuthConfigReqObj, context: __SerdeContext): any => {
  return {
    ...(input.AwsCognitoIdentityPoolId !== undefined &&
      input.AwsCognitoIdentityPoolId !== null && { aws_cognito_identity_pool_id: input.AwsCognitoIdentityPoolId }),
    ...(input.AwsCognitoRegion !== undefined &&
      input.AwsCognitoRegion !== null && { aws_cognito_region: input.AwsCognitoRegion }),
    ...(input.AwsUserPoolsId !== undefined &&
      input.AwsUserPoolsId !== null && { aws_user_pools_id: input.AwsUserPoolsId }),
    ...(input.AwsUserPoolsWebClientId !== undefined &&
      input.AwsUserPoolsWebClientId !== null && { aws_user_pools_web_client_id: input.AwsUserPoolsWebClientId }),
  };
};

const serializeAws_restJson1ResourceConfig = (input: ResourceConfig, context: __SerdeContext): any => {
  return {};
};

const serializeAws_restJson1Settings = (input: Settings, context: __SerdeContext): any => {
  return {
    ...(input.MfaTypes !== undefined &&
      input.MfaTypes !== null && { mfaTypes: serializeAws_restJson1ListOfMfaTypesElement(input.MfaTypes, context) }),
    ...(input.SmsMessage !== undefined && input.SmsMessage !== null && { smsMessage: input.SmsMessage }),
  };
};

const serializeAws_restJson1SmsSettings = (input: SmsSettings, context: __SerdeContext): any => {
  return {
    ...(input.SmsMessage !== undefined && input.SmsMessage !== null && { smsMessage: input.SmsMessage }),
  };
};

const serializeAws_restJson1SocialProviderSettings = (input: SocialProviderSettings, context: __SerdeContext): any => {
  return {
    ...(input.Facebook !== undefined &&
      input.Facebook !== null && {
        Facebook: serializeAws_restJson1BackendAuthSocialProviderConfig(input.Facebook, context),
      }),
    ...(input.Google !== undefined &&
      input.Google !== null && {
        Google: serializeAws_restJson1BackendAuthSocialProviderConfig(input.Google, context),
      }),
    ...(input.LoginWithAmazon !== undefined &&
      input.LoginWithAmazon !== null && {
        LoginWithAmazon: serializeAws_restJson1BackendAuthSocialProviderConfig(input.LoginWithAmazon, context),
      }),
    ...(input.SignInWithApple !== undefined &&
      input.SignInWithApple !== null && {
        SignInWithApple: serializeAws_restJson1BackendAuthAppleProviderConfig(input.SignInWithApple, context),
      }),
  };
};

const serializeAws_restJson1UpdateBackendAuthForgotPasswordConfig = (
  input: UpdateBackendAuthForgotPasswordConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryMethod !== undefined &&
      input.DeliveryMethod !== null && { deliveryMethod: input.DeliveryMethod }),
    ...(input.EmailSettings !== undefined &&
      input.EmailSettings !== null && {
        emailSettings: serializeAws_restJson1EmailSettings(input.EmailSettings, context),
      }),
    ...(input.SmsSettings !== undefined &&
      input.SmsSettings !== null && { smsSettings: serializeAws_restJson1SmsSettings(input.SmsSettings, context) }),
  };
};

const serializeAws_restJson1UpdateBackendAuthIdentityPoolConfig = (
  input: UpdateBackendAuthIdentityPoolConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.UnauthenticatedLogin !== undefined &&
      input.UnauthenticatedLogin !== null && { unauthenticatedLogin: input.UnauthenticatedLogin }),
  };
};

const serializeAws_restJson1UpdateBackendAuthMFAConfig = (
  input: UpdateBackendAuthMFAConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.MFAMode !== undefined && input.MFAMode !== null && { MFAMode: input.MFAMode }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && { settings: serializeAws_restJson1Settings(input.Settings, context) }),
  };
};

const serializeAws_restJson1UpdateBackendAuthOAuthConfig = (
  input: UpdateBackendAuthOAuthConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainPrefix !== undefined && input.DomainPrefix !== null && { domainPrefix: input.DomainPrefix }),
    ...(input.OAuthGrantType !== undefined &&
      input.OAuthGrantType !== null && { oAuthGrantType: input.OAuthGrantType }),
    ...(input.OAuthScopes !== undefined &&
      input.OAuthScopes !== null && {
        oAuthScopes: serializeAws_restJson1ListOfOAuthScopesElement(input.OAuthScopes, context),
      }),
    ...(input.RedirectSignInURIs !== undefined &&
      input.RedirectSignInURIs !== null && {
        redirectSignInURIs: serializeAws_restJson1ListOf__string(input.RedirectSignInURIs, context),
      }),
    ...(input.RedirectSignOutURIs !== undefined &&
      input.RedirectSignOutURIs !== null && {
        redirectSignOutURIs: serializeAws_restJson1ListOf__string(input.RedirectSignOutURIs, context),
      }),
    ...(input.SocialProviderSettings !== undefined &&
      input.SocialProviderSettings !== null && {
        socialProviderSettings: serializeAws_restJson1SocialProviderSettings(input.SocialProviderSettings, context),
      }),
  };
};

const serializeAws_restJson1UpdateBackendAuthPasswordPolicyConfig = (
  input: UpdateBackendAuthPasswordPolicyConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalConstraints !== undefined &&
      input.AdditionalConstraints !== null && {
        additionalConstraints: serializeAws_restJson1ListOfAdditionalConstraintsElement(
          input.AdditionalConstraints,
          context
        ),
      }),
    ...(input.MinimumLength !== undefined &&
      input.MinimumLength !== null && { minimumLength: __serializeFloat(input.MinimumLength) }),
  };
};

const serializeAws_restJson1UpdateBackendAuthResourceConfig = (
  input: UpdateBackendAuthResourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthResources !== undefined && input.AuthResources !== null && { authResources: input.AuthResources }),
    ...(input.IdentityPoolConfigs !== undefined &&
      input.IdentityPoolConfigs !== null && {
        identityPoolConfigs: serializeAws_restJson1UpdateBackendAuthIdentityPoolConfig(
          input.IdentityPoolConfigs,
          context
        ),
      }),
    ...(input.Service !== undefined && input.Service !== null && { service: input.Service }),
    ...(input.UserPoolConfigs !== undefined &&
      input.UserPoolConfigs !== null && {
        userPoolConfigs: serializeAws_restJson1UpdateBackendAuthUserPoolConfig(input.UserPoolConfigs, context),
      }),
  };
};

const serializeAws_restJson1UpdateBackendAuthUserPoolConfig = (
  input: UpdateBackendAuthUserPoolConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForgotPassword !== undefined &&
      input.ForgotPassword !== null && {
        forgotPassword: serializeAws_restJson1UpdateBackendAuthForgotPasswordConfig(input.ForgotPassword, context),
      }),
    ...(input.Mfa !== undefined &&
      input.Mfa !== null && { mfa: serializeAws_restJson1UpdateBackendAuthMFAConfig(input.Mfa, context) }),
    ...(input.OAuth !== undefined &&
      input.OAuth !== null && { oAuth: serializeAws_restJson1UpdateBackendAuthOAuthConfig(input.OAuth, context) }),
    ...(input.PasswordPolicy !== undefined &&
      input.PasswordPolicy !== null && {
        passwordPolicy: serializeAws_restJson1UpdateBackendAuthPasswordPolicyConfig(input.PasswordPolicy, context),
      }),
  };
};

const deserializeAws_restJson1BackendAPIAppSyncAuthSettings = (
  output: any,
  context: __SerdeContext
): BackendAPIAppSyncAuthSettings => {
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

const deserializeAws_restJson1BackendAPIAuthType = (output: any, context: __SerdeContext): BackendAPIAuthType => {
  return {
    Mode: __expectString(output.mode),
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1BackendAPIAppSyncAuthSettings(output.settings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BackendAPIConflictResolution = (
  output: any,
  context: __SerdeContext
): BackendAPIConflictResolution => {
  return {
    ResolutionStrategy: __expectString(output.resolutionStrategy),
  } as any;
};

const deserializeAws_restJson1BackendAPIResourceConfig = (
  output: any,
  context: __SerdeContext
): BackendAPIResourceConfig => {
  return {
    AdditionalAuthTypes:
      output.additionalAuthTypes !== undefined && output.additionalAuthTypes !== null
        ? deserializeAws_restJson1ListOfBackendAPIAuthType(output.additionalAuthTypes, context)
        : undefined,
    ApiName: __expectString(output.apiName),
    ConflictResolution:
      output.conflictResolution !== undefined && output.conflictResolution !== null
        ? deserializeAws_restJson1BackendAPIConflictResolution(output.conflictResolution, context)
        : undefined,
    DefaultAuthType:
      output.defaultAuthType !== undefined && output.defaultAuthType !== null
        ? deserializeAws_restJson1BackendAPIAuthType(output.defaultAuthType, context)
        : undefined,
    Service: __expectString(output.service),
    TransformSchema: __expectString(output.transformSchema),
  } as any;
};

const deserializeAws_restJson1BackendAuthAppleProviderConfig = (
  output: any,
  context: __SerdeContext
): BackendAuthAppleProviderConfig => {
  return {
    ClientId: __expectString(output.client_id),
    KeyId: __expectString(output.key_id),
    PrivateKey: __expectString(output.private_key),
    TeamId: __expectString(output.team_id),
  } as any;
};

const deserializeAws_restJson1BackendAuthSocialProviderConfig = (
  output: any,
  context: __SerdeContext
): BackendAuthSocialProviderConfig => {
  return {
    ClientId: __expectString(output.client_id),
    ClientSecret: __expectString(output.client_secret),
  } as any;
};

const deserializeAws_restJson1BackendJobRespObj = (output: any, context: __SerdeContext): BackendJobRespObj => {
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

const deserializeAws_restJson1CreateBackendAuthForgotPasswordConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthForgotPasswordConfig => {
  return {
    DeliveryMethod: __expectString(output.deliveryMethod),
    EmailSettings:
      output.emailSettings !== undefined && output.emailSettings !== null
        ? deserializeAws_restJson1EmailSettings(output.emailSettings, context)
        : undefined,
    SmsSettings:
      output.smsSettings !== undefined && output.smsSettings !== null
        ? deserializeAws_restJson1SmsSettings(output.smsSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CreateBackendAuthIdentityPoolConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthIdentityPoolConfig => {
  return {
    IdentityPoolName: __expectString(output.identityPoolName),
    UnauthenticatedLogin: __expectBoolean(output.unauthenticatedLogin),
  } as any;
};

const deserializeAws_restJson1CreateBackendAuthMFAConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthMFAConfig => {
  return {
    MFAMode: __expectString(output.MFAMode),
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1Settings(output.settings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CreateBackendAuthOAuthConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthOAuthConfig => {
  return {
    DomainPrefix: __expectString(output.domainPrefix),
    OAuthGrantType: __expectString(output.oAuthGrantType),
    OAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1ListOfOAuthScopesElement(output.oAuthScopes, context)
        : undefined,
    RedirectSignInURIs:
      output.redirectSignInURIs !== undefined && output.redirectSignInURIs !== null
        ? deserializeAws_restJson1ListOf__string(output.redirectSignInURIs, context)
        : undefined,
    RedirectSignOutURIs:
      output.redirectSignOutURIs !== undefined && output.redirectSignOutURIs !== null
        ? deserializeAws_restJson1ListOf__string(output.redirectSignOutURIs, context)
        : undefined,
    SocialProviderSettings:
      output.socialProviderSettings !== undefined && output.socialProviderSettings !== null
        ? deserializeAws_restJson1SocialProviderSettings(output.socialProviderSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CreateBackendAuthPasswordPolicyConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthPasswordPolicyConfig => {
  return {
    AdditionalConstraints:
      output.additionalConstraints !== undefined && output.additionalConstraints !== null
        ? deserializeAws_restJson1ListOfAdditionalConstraintsElement(output.additionalConstraints, context)
        : undefined,
    MinimumLength: __limitedParseDouble(output.minimumLength),
  } as any;
};

const deserializeAws_restJson1CreateBackendAuthResourceConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthResourceConfig => {
  return {
    AuthResources: __expectString(output.authResources),
    IdentityPoolConfigs:
      output.identityPoolConfigs !== undefined && output.identityPoolConfigs !== null
        ? deserializeAws_restJson1CreateBackendAuthIdentityPoolConfig(output.identityPoolConfigs, context)
        : undefined,
    Service: __expectString(output.service),
    UserPoolConfigs:
      output.userPoolConfigs !== undefined && output.userPoolConfigs !== null
        ? deserializeAws_restJson1CreateBackendAuthUserPoolConfig(output.userPoolConfigs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CreateBackendAuthUserPoolConfig = (
  output: any,
  context: __SerdeContext
): CreateBackendAuthUserPoolConfig => {
  return {
    ForgotPassword:
      output.forgotPassword !== undefined && output.forgotPassword !== null
        ? deserializeAws_restJson1CreateBackendAuthForgotPasswordConfig(output.forgotPassword, context)
        : undefined,
    Mfa:
      output.mfa !== undefined && output.mfa !== null
        ? deserializeAws_restJson1CreateBackendAuthMFAConfig(output.mfa, context)
        : undefined,
    OAuth:
      output.oAuth !== undefined && output.oAuth !== null
        ? deserializeAws_restJson1CreateBackendAuthOAuthConfig(output.oAuth, context)
        : undefined,
    PasswordPolicy:
      output.passwordPolicy !== undefined && output.passwordPolicy !== null
        ? deserializeAws_restJson1CreateBackendAuthPasswordPolicyConfig(output.passwordPolicy, context)
        : undefined,
    RequiredSignUpAttributes:
      output.requiredSignUpAttributes !== undefined && output.requiredSignUpAttributes !== null
        ? deserializeAws_restJson1ListOfRequiredSignUpAttributesElement(output.requiredSignUpAttributes, context)
        : undefined,
    SignInMethod: __expectString(output.signInMethod),
    UserPoolName: __expectString(output.userPoolName),
  } as any;
};

const deserializeAws_restJson1EmailSettings = (output: any, context: __SerdeContext): EmailSettings => {
  return {
    EmailMessage: __expectString(output.emailMessage),
    EmailSubject: __expectString(output.emailSubject),
  } as any;
};

const deserializeAws_restJson1ListOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ListOfAdditionalConstraintsElement = (
  output: any,
  context: __SerdeContext
): (AdditionalConstraintsElement | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ListOfBackendAPIAuthType = (
  output: any,
  context: __SerdeContext
): BackendAPIAuthType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackendAPIAuthType(entry, context);
    });
};

const deserializeAws_restJson1ListOfBackendJobRespObj = (output: any, context: __SerdeContext): BackendJobRespObj[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackendJobRespObj(entry, context);
    });
};

const deserializeAws_restJson1ListOfMfaTypesElement = (
  output: any,
  context: __SerdeContext
): (MfaTypesElement | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ListOfOAuthScopesElement = (
  output: any,
  context: __SerdeContext
): (OAuthScopesElement | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ListOfRequiredSignUpAttributesElement = (
  output: any,
  context: __SerdeContext
): (RequiredSignUpAttributesElement | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1LoginAuthConfigReqObj = (output: any, context: __SerdeContext): LoginAuthConfigReqObj => {
  return {
    AwsCognitoIdentityPoolId: __expectString(output.aws_cognito_identity_pool_id),
    AwsCognitoRegion: __expectString(output.aws_cognito_region),
    AwsUserPoolsId: __expectString(output.aws_user_pools_id),
    AwsUserPoolsWebClientId: __expectString(output.aws_user_pools_web_client_id),
  } as any;
};

const deserializeAws_restJson1Settings = (output: any, context: __SerdeContext): Settings => {
  return {
    MfaTypes:
      output.mfaTypes !== undefined && output.mfaTypes !== null
        ? deserializeAws_restJson1ListOfMfaTypesElement(output.mfaTypes, context)
        : undefined,
    SmsMessage: __expectString(output.smsMessage),
  } as any;
};

const deserializeAws_restJson1SmsSettings = (output: any, context: __SerdeContext): SmsSettings => {
  return {
    SmsMessage: __expectString(output.smsMessage),
  } as any;
};

const deserializeAws_restJson1SocialProviderSettings = (
  output: any,
  context: __SerdeContext
): SocialProviderSettings => {
  return {
    Facebook:
      output.Facebook !== undefined && output.Facebook !== null
        ? deserializeAws_restJson1BackendAuthSocialProviderConfig(output.Facebook, context)
        : undefined,
    Google:
      output.Google !== undefined && output.Google !== null
        ? deserializeAws_restJson1BackendAuthSocialProviderConfig(output.Google, context)
        : undefined,
    LoginWithAmazon:
      output.LoginWithAmazon !== undefined && output.LoginWithAmazon !== null
        ? deserializeAws_restJson1BackendAuthSocialProviderConfig(output.LoginWithAmazon, context)
        : undefined,
    SignInWithApple:
      output.SignInWithApple !== undefined && output.SignInWithApple !== null
        ? deserializeAws_restJson1BackendAuthAppleProviderConfig(output.SignInWithApple, context)
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
