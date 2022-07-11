// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseRfc3339DateTime as __parseRfc3339DateTime,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateComponentCommandInput, CreateComponentCommandOutput } from "../commands/CreateComponentCommand";
import { CreateThemeCommandInput, CreateThemeCommandOutput } from "../commands/CreateThemeCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "../commands/DeleteComponentCommand";
import { DeleteThemeCommandInput, DeleteThemeCommandOutput } from "../commands/DeleteThemeCommand";
import {
  ExchangeCodeForTokenCommandInput,
  ExchangeCodeForTokenCommandOutput,
} from "../commands/ExchangeCodeForTokenCommand";
import { ExportComponentsCommandInput, ExportComponentsCommandOutput } from "../commands/ExportComponentsCommand";
import { ExportThemesCommandInput, ExportThemesCommandOutput } from "../commands/ExportThemesCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "../commands/GetComponentCommand";
import { GetThemeCommandInput, GetThemeCommandOutput } from "../commands/GetThemeCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import { ListThemesCommandInput, ListThemesCommandOutput } from "../commands/ListThemesCommand";
import { RefreshTokenCommandInput, RefreshTokenCommandOutput } from "../commands/RefreshTokenCommand";
import { UpdateComponentCommandInput, UpdateComponentCommandOutput } from "../commands/UpdateComponentCommand";
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
  CreateThemeData,
  ExchangeCodeForTokenRequestBody,
  FormBindingElement,
  InternalServerException,
  InvalidParameterException,
  MutationActionSetStateParameter,
  Predicate,
  RefreshTokenRequestBody,
  ResourceConflictException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SortProperty,
  Theme,
  ThemeSummary,
  ThemeValue,
  ThemeValues,
  UpdateComponentData,
  UpdateThemeData,
} from "../models/models_0";

export const serializeAws_restJson1CreateComponentCommand = async (
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
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
  let body: any;
  if (input.componentToCreate !== undefined) {
    body = serializeAws_restJson1CreateComponentData(input.componentToCreate, context);
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

export const serializeAws_restJson1CreateThemeCommand = async (
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
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
  let body: any;
  if (input.themeToCreate !== undefined) {
    body = serializeAws_restJson1CreateThemeData(input.themeToCreate, context);
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

export const serializeAws_restJson1DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/components/{id}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
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

export const serializeAws_restJson1DeleteThemeCommand = async (
  input: DeleteThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/themes/{id}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
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

export const serializeAws_restJson1ExchangeCodeForTokenCommand = async (
  input: ExchangeCodeForTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tokens/{provider}";
  if (input.provider !== undefined) {
    const labelValue: string = input.provider;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: provider.");
    }
    resolvedPath = resolvedPath.replace("{provider}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: provider.");
  }
  let body: any;
  if (input.request !== undefined) {
    body = serializeAws_restJson1ExchangeCodeForTokenRequestBody(input.request, context);
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

export const serializeAws_restJson1ExportComponentsCommand = async (
  input: ExportComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/export/app/{appId}/environment/{environmentName}/components";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
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

export const serializeAws_restJson1ExportThemesCommand = async (
  input: ExportThemesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/export/app/{appId}/environment/{environmentName}/themes";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
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

export const serializeAws_restJson1GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/components/{id}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
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

export const serializeAws_restJson1GetThemeCommand = async (
  input: GetThemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/themes/{id}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
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

export const serializeAws_restJson1ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/components";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListThemesCommand = async (
  input: ListThemesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app/{appId}/environment/{environmentName}/themes";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1RefreshTokenCommand = async (
  input: RefreshTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tokens/{provider}/refresh";
  if (input.provider !== undefined) {
    const labelValue: string = input.provider;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: provider.");
    }
    resolvedPath = resolvedPath.replace("{provider}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: provider.");
  }
  let body: any;
  if (input.refreshTokenBody !== undefined) {
    body = serializeAws_restJson1RefreshTokenRequestBody(input.refreshTokenBody, context);
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

export const serializeAws_restJson1UpdateComponentCommand = async (
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
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
  let body: any;
  if (input.updatedComponent !== undefined) {
    body = serializeAws_restJson1UpdateComponentData(input.updatedComponent, context);
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

export const serializeAws_restJson1UpdateThemeCommand = async (
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
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
  let body: any;
  if (input.updatedTheme !== undefined) {
    body = serializeAws_restJson1UpdateThemeData(input.updatedTheme, context);
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

export const deserializeAws_restJson1CreateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateComponentCommandError(output, context);
  }
  const contents: CreateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    entity: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.entity = deserializeAws_restJson1Component(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.amplifyuibuilder#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.amplifyuibuilder#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateThemeCommandError(output, context);
  }
  const contents: CreateThemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    entity: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.entity = deserializeAws_restJson1Theme(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.amplifyuibuilder#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.amplifyuibuilder#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteComponentCommandError(output, context);
  }
  const contents: DeleteComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplifyuibuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteThemeCommandError(output, context);
  }
  const contents: DeleteThemeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplifyuibuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ExchangeCodeForTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExchangeCodeForTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExchangeCodeForTokenCommandError(output, context);
  }
  const contents: ExchangeCodeForTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    accessToken: undefined,
    expiresIn: undefined,
    refreshToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessToken !== undefined && data.accessToken !== null) {
    contents.accessToken = __expectString(data.accessToken);
  }
  if (data.expiresIn !== undefined && data.expiresIn !== null) {
    contents.expiresIn = __expectInt32(data.expiresIn);
  }
  if (data.refreshToken !== undefined && data.refreshToken !== null) {
    contents.refreshToken = __expectString(data.refreshToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExchangeCodeForTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExchangeCodeForTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ExportComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportComponentsCommandError(output, context);
  }
  const contents: ExportComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    entities: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entities !== undefined && data.entities !== null) {
    contents.entities = deserializeAws_restJson1ComponentList(data.entities, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExportComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ExportThemesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportThemesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportThemesCommandError(output, context);
  }
  const contents: ExportThemesCommandOutput = {
    $metadata: deserializeMetadata(output),
    entities: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entities !== undefined && data.entities !== null) {
    contents.entities = deserializeAws_restJson1ThemeList(data.entities, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExportThemesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportThemesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetComponentCommandError(output, context);
  }
  const contents: GetComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    component: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.component = deserializeAws_restJson1Component(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplifyuibuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetThemeCommandError(output, context);
  }
  const contents: GetThemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    theme: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.theme = deserializeAws_restJson1Theme(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.amplifyuibuilder#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListComponentsCommandError(output, context);
  }
  const contents: ListComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    entities: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entities !== undefined && data.entities !== null) {
    contents.entities = deserializeAws_restJson1ComponentSummaryList(data.entities, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListThemesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListThemesCommandError(output, context);
  }
  const contents: ListThemesCommandOutput = {
    $metadata: deserializeMetadata(output),
    entities: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entities !== undefined && data.entities !== null) {
    contents.entities = deserializeAws_restJson1ThemeSummaryList(data.entities, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListThemesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThemesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1RefreshTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RefreshTokenCommandError(output, context);
  }
  const contents: RefreshTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    accessToken: undefined,
    expiresIn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessToken !== undefined && data.accessToken !== null) {
    contents.accessToken = __expectString(data.accessToken);
  }
  if (data.expiresIn !== undefined && data.expiresIn !== null) {
    contents.expiresIn = __expectInt32(data.expiresIn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RefreshTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateComponentCommandError(output, context);
  }
  const contents: UpdateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    entity: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.entity = deserializeAws_restJson1Component(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.amplifyuibuilder#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateThemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateThemeCommandError(output, context);
  }
  const contents: UpdateThemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    entity: undefined,
  };
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.entity = deserializeAws_restJson1Theme(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateThemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.amplifyuibuilder#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.amplifyuibuilder#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.amplifyuibuilder#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ActionParameters = (input: ActionParameters, context: __SerdeContext): any => {
  return {
    ...(input.anchor != undefined && { anchor: serializeAws_restJson1ComponentProperty(input.anchor, context) }),
    ...(input.fields != undefined && { fields: serializeAws_restJson1ComponentProperties(input.fields, context) }),
    ...(input.global != undefined && { global: serializeAws_restJson1ComponentProperty(input.global, context) }),
    ...(input.id != undefined && { id: serializeAws_restJson1ComponentProperty(input.id, context) }),
    ...(input.model != undefined && { model: input.model }),
    ...(input.state != undefined && {
      state: serializeAws_restJson1MutationActionSetStateParameter(input.state, context),
    }),
    ...(input.target != undefined && { target: serializeAws_restJson1ComponentProperty(input.target, context) }),
    ...(input.type != undefined && { type: serializeAws_restJson1ComponentProperty(input.type, context) }),
    ...(input.url != undefined && { url: serializeAws_restJson1ComponentProperty(input.url, context) }),
  };
};

const serializeAws_restJson1ComponentBindingProperties = (
  input: Record<string, ComponentBindingPropertiesValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ComponentBindingPropertiesValue(value, context),
    };
  }, {});
};

const serializeAws_restJson1ComponentBindingPropertiesValue = (
  input: ComponentBindingPropertiesValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.bindingProperties != undefined && {
      bindingProperties: serializeAws_restJson1ComponentBindingPropertiesValueProperties(
        input.bindingProperties,
        context
      ),
    }),
    ...(input.defaultValue != undefined && { defaultValue: input.defaultValue }),
    ...(input.type != undefined && { type: input.type }),
  };
};

const serializeAws_restJson1ComponentBindingPropertiesValueProperties = (
  input: ComponentBindingPropertiesValueProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket != undefined && { bucket: input.bucket }),
    ...(input.defaultValue != undefined && { defaultValue: input.defaultValue }),
    ...(input.field != undefined && { field: input.field }),
    ...(input.key != undefined && { key: input.key }),
    ...(input.model != undefined && { model: input.model }),
    ...(input.predicates != undefined && {
      predicates: serializeAws_restJson1PredicateList(input.predicates, context),
    }),
    ...(input.userAttribute != undefined && { userAttribute: input.userAttribute }),
  };
};

const serializeAws_restJson1ComponentChild = (input: ComponentChild, context: __SerdeContext): any => {
  return {
    ...(input.children != undefined && { children: serializeAws_restJson1ComponentChildList(input.children, context) }),
    ...(input.componentType != undefined && { componentType: input.componentType }),
    ...(input.events != undefined && { events: serializeAws_restJson1ComponentEvents(input.events, context) }),
    ...(input.name != undefined && { name: input.name }),
    ...(input.properties != undefined && {
      properties: serializeAws_restJson1ComponentProperties(input.properties, context),
    }),
    ...(input.sourceId != undefined && { sourceId: input.sourceId }),
  };
};

const serializeAws_restJson1ComponentChildList = (input: ComponentChild[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ComponentChild(entry, context);
    });
};

const serializeAws_restJson1ComponentCollectionProperties = (
  input: Record<string, ComponentDataConfiguration>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ComponentDataConfiguration(value, context),
    };
  }, {});
};

const serializeAws_restJson1ComponentConditionProperty = (
  input: ComponentConditionProperty,
  context: __SerdeContext
): any => {
  return {
    ...(input.else != undefined && { else: serializeAws_restJson1ComponentProperty(input.else, context) }),
    ...(input.field != undefined && { field: input.field }),
    ...(input.operand != undefined && { operand: input.operand }),
    ...(input.operandType != undefined && { operandType: input.operandType }),
    ...(input.operator != undefined && { operator: input.operator }),
    ...(input.property != undefined && { property: input.property }),
    ...(input.then != undefined && { then: serializeAws_restJson1ComponentProperty(input.then, context) }),
  };
};

const serializeAws_restJson1ComponentDataConfiguration = (
  input: ComponentDataConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.identifiers != undefined && {
      identifiers: serializeAws_restJson1IdentifierList(input.identifiers, context),
    }),
    ...(input.model != undefined && { model: input.model }),
    ...(input.predicate != undefined && { predicate: serializeAws_restJson1Predicate(input.predicate, context) }),
    ...(input.sort != undefined && { sort: serializeAws_restJson1SortPropertyList(input.sort, context) }),
  };
};

const serializeAws_restJson1ComponentEvent = (input: ComponentEvent, context: __SerdeContext): any => {
  return {
    ...(input.action != undefined && { action: input.action }),
    ...(input.bindingEvent != undefined && { bindingEvent: input.bindingEvent }),
    ...(input.parameters != undefined && {
      parameters: serializeAws_restJson1ActionParameters(input.parameters, context),
    }),
  };
};

const serializeAws_restJson1ComponentEvents = (input: Record<string, ComponentEvent>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ComponentEvent(value, context),
    };
  }, {});
};

const serializeAws_restJson1ComponentOverrides = (
  input: Record<string, Record<string, string>>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ComponentOverridesValue(value, context),
    };
  }, {});
};

const serializeAws_restJson1ComponentOverridesValue = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1ComponentProperties = (
  input: Record<string, ComponentProperty>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ComponentProperty(value, context),
    };
  }, {});
};

const serializeAws_restJson1ComponentProperty = (input: ComponentProperty, context: __SerdeContext): any => {
  return {
    ...(input.bindingProperties != undefined && {
      bindingProperties: serializeAws_restJson1ComponentPropertyBindingProperties(input.bindingProperties, context),
    }),
    ...(input.bindings != undefined && { bindings: serializeAws_restJson1FormBindings(input.bindings, context) }),
    ...(input.collectionBindingProperties != undefined && {
      collectionBindingProperties: serializeAws_restJson1ComponentPropertyBindingProperties(
        input.collectionBindingProperties,
        context
      ),
    }),
    ...(input.componentName != undefined && { componentName: input.componentName }),
    ...(input.concat != undefined && { concat: serializeAws_restJson1ComponentPropertyList(input.concat, context) }),
    ...(input.condition != undefined && {
      condition: serializeAws_restJson1ComponentConditionProperty(input.condition, context),
    }),
    ...(input.configured != undefined && { configured: input.configured }),
    ...(input.defaultValue != undefined && { defaultValue: input.defaultValue }),
    ...(input.event != undefined && { event: input.event }),
    ...(input.importedValue != undefined && { importedValue: input.importedValue }),
    ...(input.model != undefined && { model: input.model }),
    ...(input.property != undefined && { property: input.property }),
    ...(input.type != undefined && { type: input.type }),
    ...(input.userAttribute != undefined && { userAttribute: input.userAttribute }),
    ...(input.value != undefined && { value: input.value }),
  };
};

const serializeAws_restJson1ComponentPropertyBindingProperties = (
  input: ComponentPropertyBindingProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.field != undefined && { field: input.field }),
    ...(input.property != undefined && { property: input.property }),
  };
};

const serializeAws_restJson1ComponentPropertyList = (input: ComponentProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ComponentProperty(entry, context);
    });
};

const serializeAws_restJson1ComponentVariant = (input: ComponentVariant, context: __SerdeContext): any => {
  return {
    ...(input.overrides != undefined && {
      overrides: serializeAws_restJson1ComponentOverrides(input.overrides, context),
    }),
    ...(input.variantValues != undefined && {
      variantValues: serializeAws_restJson1ComponentVariantValues(input.variantValues, context),
    }),
  };
};

const serializeAws_restJson1ComponentVariants = (input: ComponentVariant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ComponentVariant(entry, context);
    });
};

const serializeAws_restJson1ComponentVariantValues = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1CreateComponentData = (input: CreateComponentData, context: __SerdeContext): any => {
  return {
    ...(input.bindingProperties != undefined && {
      bindingProperties: serializeAws_restJson1ComponentBindingProperties(input.bindingProperties, context),
    }),
    ...(input.children != undefined && { children: serializeAws_restJson1ComponentChildList(input.children, context) }),
    ...(input.collectionProperties != undefined && {
      collectionProperties: serializeAws_restJson1ComponentCollectionProperties(input.collectionProperties, context),
    }),
    ...(input.componentType != undefined && { componentType: input.componentType }),
    ...(input.events != undefined && { events: serializeAws_restJson1ComponentEvents(input.events, context) }),
    ...(input.name != undefined && { name: input.name }),
    ...(input.overrides != undefined && {
      overrides: serializeAws_restJson1ComponentOverrides(input.overrides, context),
    }),
    ...(input.properties != undefined && {
      properties: serializeAws_restJson1ComponentProperties(input.properties, context),
    }),
    ...(input.schemaVersion != undefined && { schemaVersion: input.schemaVersion }),
    ...(input.sourceId != undefined && { sourceId: input.sourceId }),
    ...(input.tags != undefined && { tags: serializeAws_restJson1Tags(input.tags, context) }),
    ...(input.variants != undefined && { variants: serializeAws_restJson1ComponentVariants(input.variants, context) }),
  };
};

const serializeAws_restJson1CreateThemeData = (input: CreateThemeData, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.overrides != undefined && { overrides: serializeAws_restJson1ThemeValuesList(input.overrides, context) }),
    ...(input.tags != undefined && { tags: serializeAws_restJson1Tags(input.tags, context) }),
    ...(input.values != undefined && { values: serializeAws_restJson1ThemeValuesList(input.values, context) }),
  };
};

const serializeAws_restJson1ExchangeCodeForTokenRequestBody = (
  input: ExchangeCodeForTokenRequestBody,
  context: __SerdeContext
): any => {
  return {
    ...(input.code != undefined && { code: input.code }),
    ...(input.redirectUri != undefined && { redirectUri: input.redirectUri }),
  };
};

const serializeAws_restJson1FormBindingElement = (input: FormBindingElement, context: __SerdeContext): any => {
  return {
    ...(input.element != undefined && { element: input.element }),
    ...(input.property != undefined && { property: input.property }),
  };
};

const serializeAws_restJson1FormBindings = (
  input: Record<string, FormBindingElement>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1FormBindingElement(value, context),
    };
  }, {});
};

const serializeAws_restJson1IdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1MutationActionSetStateParameter = (
  input: MutationActionSetStateParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.componentName != undefined && { componentName: input.componentName }),
    ...(input.property != undefined && { property: input.property }),
    ...(input.set != undefined && { set: serializeAws_restJson1ComponentProperty(input.set, context) }),
  };
};

const serializeAws_restJson1Predicate = (input: Predicate, context: __SerdeContext): any => {
  return {
    ...(input.and != undefined && { and: serializeAws_restJson1PredicateList(input.and, context) }),
    ...(input.field != undefined && { field: input.field }),
    ...(input.operand != undefined && { operand: input.operand }),
    ...(input.operator != undefined && { operator: input.operator }),
    ...(input.or != undefined && { or: serializeAws_restJson1PredicateList(input.or, context) }),
  };
};

const serializeAws_restJson1PredicateList = (input: Predicate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Predicate(entry, context);
    });
};

const serializeAws_restJson1RefreshTokenRequestBody = (
  input: RefreshTokenRequestBody,
  context: __SerdeContext
): any => {
  return {
    ...(input.token != undefined && { token: input.token }),
  };
};

const serializeAws_restJson1SortProperty = (input: SortProperty, context: __SerdeContext): any => {
  return {
    ...(input.direction != undefined && { direction: input.direction }),
    ...(input.field != undefined && { field: input.field }),
  };
};

const serializeAws_restJson1SortPropertyList = (input: SortProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SortProperty(entry, context);
    });
};

const serializeAws_restJson1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1ThemeValue = (input: ThemeValue, context: __SerdeContext): any => {
  return {
    ...(input.children != undefined && { children: serializeAws_restJson1ThemeValuesList(input.children, context) }),
    ...(input.value != undefined && { value: input.value }),
  };
};

const serializeAws_restJson1ThemeValues = (input: ThemeValues, context: __SerdeContext): any => {
  return {
    ...(input.key != undefined && { key: input.key }),
    ...(input.value != undefined && { value: serializeAws_restJson1ThemeValue(input.value, context) }),
  };
};

const serializeAws_restJson1ThemeValuesList = (input: ThemeValues[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ThemeValues(entry, context);
    });
};

const serializeAws_restJson1UpdateComponentData = (input: UpdateComponentData, context: __SerdeContext): any => {
  return {
    ...(input.bindingProperties != undefined && {
      bindingProperties: serializeAws_restJson1ComponentBindingProperties(input.bindingProperties, context),
    }),
    ...(input.children != undefined && { children: serializeAws_restJson1ComponentChildList(input.children, context) }),
    ...(input.collectionProperties != undefined && {
      collectionProperties: serializeAws_restJson1ComponentCollectionProperties(input.collectionProperties, context),
    }),
    ...(input.componentType != undefined && { componentType: input.componentType }),
    ...(input.events != undefined && { events: serializeAws_restJson1ComponentEvents(input.events, context) }),
    ...(input.id != undefined && { id: input.id }),
    ...(input.name != undefined && { name: input.name }),
    ...(input.overrides != undefined && {
      overrides: serializeAws_restJson1ComponentOverrides(input.overrides, context),
    }),
    ...(input.properties != undefined && {
      properties: serializeAws_restJson1ComponentProperties(input.properties, context),
    }),
    ...(input.schemaVersion != undefined && { schemaVersion: input.schemaVersion }),
    ...(input.sourceId != undefined && { sourceId: input.sourceId }),
    ...(input.variants != undefined && { variants: serializeAws_restJson1ComponentVariants(input.variants, context) }),
  };
};

const serializeAws_restJson1UpdateThemeData = (input: UpdateThemeData, context: __SerdeContext): any => {
  return {
    ...(input.id != undefined && { id: input.id }),
    ...(input.name != undefined && { name: input.name }),
    ...(input.overrides != undefined && { overrides: serializeAws_restJson1ThemeValuesList(input.overrides, context) }),
    ...(input.values != undefined && { values: serializeAws_restJson1ThemeValuesList(input.values, context) }),
  };
};

const deserializeAws_restJson1ActionParameters = (output: any, context: __SerdeContext): ActionParameters => {
  return {
    anchor: output.anchor != undefined ? deserializeAws_restJson1ComponentProperty(output.anchor, context) : undefined,
    fields:
      output.fields != undefined ? deserializeAws_restJson1ComponentProperties(output.fields, context) : undefined,
    global: output.global != undefined ? deserializeAws_restJson1ComponentProperty(output.global, context) : undefined,
    id: output.id != undefined ? deserializeAws_restJson1ComponentProperty(output.id, context) : undefined,
    model: __expectString(output.model),
    state:
      output.state != undefined
        ? deserializeAws_restJson1MutationActionSetStateParameter(output.state, context)
        : undefined,
    target: output.target != undefined ? deserializeAws_restJson1ComponentProperty(output.target, context) : undefined,
    type: output.type != undefined ? deserializeAws_restJson1ComponentProperty(output.type, context) : undefined,
    url: output.url != undefined ? deserializeAws_restJson1ComponentProperty(output.url, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Component = (output: any, context: __SerdeContext): Component => {
  return {
    appId: __expectString(output.appId),
    bindingProperties:
      output.bindingProperties != undefined
        ? deserializeAws_restJson1ComponentBindingProperties(output.bindingProperties, context)
        : undefined,
    children:
      output.children != undefined ? deserializeAws_restJson1ComponentChildList(output.children, context) : undefined,
    collectionProperties:
      output.collectionProperties != undefined
        ? deserializeAws_restJson1ComponentCollectionProperties(output.collectionProperties, context)
        : undefined,
    componentType: __expectString(output.componentType),
    createdAt: output.createdAt != undefined ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    environmentName: __expectString(output.environmentName),
    events: output.events != undefined ? deserializeAws_restJson1ComponentEvents(output.events, context) : undefined,
    id: __expectString(output.id),
    modifiedAt: output.modifiedAt != undefined ? __expectNonNull(__parseRfc3339DateTime(output.modifiedAt)) : undefined,
    name: __expectString(output.name),
    overrides:
      output.overrides != undefined ? deserializeAws_restJson1ComponentOverrides(output.overrides, context) : undefined,
    properties:
      output.properties != undefined
        ? deserializeAws_restJson1ComponentProperties(output.properties, context)
        : undefined,
    schemaVersion: __expectString(output.schemaVersion),
    sourceId: __expectString(output.sourceId),
    tags: output.tags != undefined ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    variants:
      output.variants != undefined ? deserializeAws_restJson1ComponentVariants(output.variants, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentBindingProperties = (
  output: any,
  context: __SerdeContext
): Record<string, ComponentBindingPropertiesValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ComponentBindingPropertiesValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1ComponentBindingPropertiesValue(value, context),
      };
    },
    {}
  );
};

const deserializeAws_restJson1ComponentBindingPropertiesValue = (
  output: any,
  context: __SerdeContext
): ComponentBindingPropertiesValue => {
  return {
    bindingProperties:
      output.bindingProperties != undefined
        ? deserializeAws_restJson1ComponentBindingPropertiesValueProperties(output.bindingProperties, context)
        : undefined,
    defaultValue: __expectString(output.defaultValue),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ComponentBindingPropertiesValueProperties = (
  output: any,
  context: __SerdeContext
): ComponentBindingPropertiesValueProperties => {
  return {
    bucket: __expectString(output.bucket),
    defaultValue: __expectString(output.defaultValue),
    field: __expectString(output.field),
    key: __expectString(output.key),
    model: __expectString(output.model),
    predicates:
      output.predicates != undefined ? deserializeAws_restJson1PredicateList(output.predicates, context) : undefined,
    userAttribute: __expectString(output.userAttribute),
  } as any;
};

const deserializeAws_restJson1ComponentChild = (output: any, context: __SerdeContext): ComponentChild => {
  return {
    children:
      output.children != undefined ? deserializeAws_restJson1ComponentChildList(output.children, context) : undefined,
    componentType: __expectString(output.componentType),
    events: output.events != undefined ? deserializeAws_restJson1ComponentEvents(output.events, context) : undefined,
    name: __expectString(output.name),
    properties:
      output.properties != undefined
        ? deserializeAws_restJson1ComponentProperties(output.properties, context)
        : undefined,
    sourceId: __expectString(output.sourceId),
  } as any;
};

const deserializeAws_restJson1ComponentChildList = (output: any, context: __SerdeContext): ComponentChild[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentChild(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentCollectionProperties = (
  output: any,
  context: __SerdeContext
): Record<string, ComponentDataConfiguration> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ComponentDataConfiguration>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1ComponentDataConfiguration(value, context),
      };
    },
    {}
  );
};

const deserializeAws_restJson1ComponentConditionProperty = (
  output: any,
  context: __SerdeContext
): ComponentConditionProperty => {
  return {
    else: output.else != undefined ? deserializeAws_restJson1ComponentProperty(output.else, context) : undefined,
    field: __expectString(output.field),
    operand: __expectString(output.operand),
    operandType: __expectString(output.operandType),
    operator: __expectString(output.operator),
    property: __expectString(output.property),
    then: output.then != undefined ? deserializeAws_restJson1ComponentProperty(output.then, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentDataConfiguration = (
  output: any,
  context: __SerdeContext
): ComponentDataConfiguration => {
  return {
    identifiers:
      output.identifiers != undefined ? deserializeAws_restJson1IdentifierList(output.identifiers, context) : undefined,
    model: __expectString(output.model),
    predicate: output.predicate != undefined ? deserializeAws_restJson1Predicate(output.predicate, context) : undefined,
    sort: output.sort != undefined ? deserializeAws_restJson1SortPropertyList(output.sort, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentEvent = (output: any, context: __SerdeContext): ComponentEvent => {
  return {
    action: __expectString(output.action),
    bindingEvent: __expectString(output.bindingEvent),
    parameters:
      output.parameters != undefined ? deserializeAws_restJson1ActionParameters(output.parameters, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentEvents = (
  output: any,
  context: __SerdeContext
): Record<string, ComponentEvent> => {
  return Object.entries(output).reduce((acc: Record<string, ComponentEvent>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ComponentEvent(value, context),
    };
  }, {});
};

const deserializeAws_restJson1ComponentList = (output: any, context: __SerdeContext): Component[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Component(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentOverrides = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, string>> => {
  return Object.entries(output).reduce((acc: Record<string, Record<string, string>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ComponentOverridesValue(value, context),
    };
  }, {});
};

const deserializeAws_restJson1ComponentOverridesValue = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1ComponentProperties = (
  output: any,
  context: __SerdeContext
): Record<string, ComponentProperty> => {
  return Object.entries(output).reduce((acc: Record<string, ComponentProperty>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ComponentProperty(value, context),
    };
  }, {});
};

const deserializeAws_restJson1ComponentProperty = (output: any, context: __SerdeContext): ComponentProperty => {
  return {
    bindingProperties:
      output.bindingProperties != undefined
        ? deserializeAws_restJson1ComponentPropertyBindingProperties(output.bindingProperties, context)
        : undefined,
    bindings: output.bindings != undefined ? deserializeAws_restJson1FormBindings(output.bindings, context) : undefined,
    collectionBindingProperties:
      output.collectionBindingProperties != undefined
        ? deserializeAws_restJson1ComponentPropertyBindingProperties(output.collectionBindingProperties, context)
        : undefined,
    componentName: __expectString(output.componentName),
    concat:
      output.concat != undefined ? deserializeAws_restJson1ComponentPropertyList(output.concat, context) : undefined,
    condition:
      output.condition != undefined
        ? deserializeAws_restJson1ComponentConditionProperty(output.condition, context)
        : undefined,
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

const deserializeAws_restJson1ComponentPropertyBindingProperties = (
  output: any,
  context: __SerdeContext
): ComponentPropertyBindingProperties => {
  return {
    field: __expectString(output.field),
    property: __expectString(output.property),
  } as any;
};

const deserializeAws_restJson1ComponentPropertyList = (output: any, context: __SerdeContext): ComponentProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentProperty(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentSummary = (output: any, context: __SerdeContext): ComponentSummary => {
  return {
    appId: __expectString(output.appId),
    componentType: __expectString(output.componentType),
    environmentName: __expectString(output.environmentName),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ComponentSummaryList = (output: any, context: __SerdeContext): ComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentVariant = (output: any, context: __SerdeContext): ComponentVariant => {
  return {
    overrides:
      output.overrides != undefined ? deserializeAws_restJson1ComponentOverrides(output.overrides, context) : undefined,
    variantValues:
      output.variantValues != undefined
        ? deserializeAws_restJson1ComponentVariantValues(output.variantValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentVariants = (output: any, context: __SerdeContext): ComponentVariant[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentVariant(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentVariantValues = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1FormBindingElement = (output: any, context: __SerdeContext): FormBindingElement => {
  return {
    element: __expectString(output.element),
    property: __expectString(output.property),
  } as any;
};

const deserializeAws_restJson1FormBindings = (
  output: any,
  context: __SerdeContext
): Record<string, FormBindingElement> => {
  return Object.entries(output).reduce((acc: Record<string, FormBindingElement>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1FormBindingElement(value, context),
    };
  }, {});
};

const deserializeAws_restJson1IdentifierList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1MutationActionSetStateParameter = (
  output: any,
  context: __SerdeContext
): MutationActionSetStateParameter => {
  return {
    componentName: __expectString(output.componentName),
    property: __expectString(output.property),
    set: output.set != undefined ? deserializeAws_restJson1ComponentProperty(output.set, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Predicate = (output: any, context: __SerdeContext): Predicate => {
  return {
    and: output.and != undefined ? deserializeAws_restJson1PredicateList(output.and, context) : undefined,
    field: __expectString(output.field),
    operand: __expectString(output.operand),
    operator: __expectString(output.operator),
    or: output.or != undefined ? deserializeAws_restJson1PredicateList(output.or, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PredicateList = (output: any, context: __SerdeContext): Predicate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Predicate(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SortProperty = (output: any, context: __SerdeContext): SortProperty => {
  return {
    direction: __expectString(output.direction),
    field: __expectString(output.field),
  } as any;
};

const deserializeAws_restJson1SortPropertyList = (output: any, context: __SerdeContext): SortProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SortProperty(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Theme = (output: any, context: __SerdeContext): Theme => {
  return {
    appId: __expectString(output.appId),
    createdAt: output.createdAt != undefined ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    environmentName: __expectString(output.environmentName),
    id: __expectString(output.id),
    modifiedAt: output.modifiedAt != undefined ? __expectNonNull(__parseRfc3339DateTime(output.modifiedAt)) : undefined,
    name: __expectString(output.name),
    overrides:
      output.overrides != undefined ? deserializeAws_restJson1ThemeValuesList(output.overrides, context) : undefined,
    tags: output.tags != undefined ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    values: output.values != undefined ? deserializeAws_restJson1ThemeValuesList(output.values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ThemeList = (output: any, context: __SerdeContext): Theme[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Theme(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ThemeSummary = (output: any, context: __SerdeContext): ThemeSummary => {
  return {
    appId: __expectString(output.appId),
    environmentName: __expectString(output.environmentName),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ThemeSummaryList = (output: any, context: __SerdeContext): ThemeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThemeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ThemeValue = (output: any, context: __SerdeContext): ThemeValue => {
  return {
    children:
      output.children != undefined ? deserializeAws_restJson1ThemeValuesList(output.children, context) : undefined,
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1ThemeValues = (output: any, context: __SerdeContext): ThemeValues => {
  return {
    key: __expectString(output.key),
    value: output.value != undefined ? deserializeAws_restJson1ThemeValue(output.value, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ThemeValuesList = (output: any, context: __SerdeContext): ThemeValues[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThemeValues(entry, context);
    });
  return retVal;
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
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
};
