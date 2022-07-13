// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  BatchPutPropertyValuesCommandInput,
  BatchPutPropertyValuesCommandOutput,
} from "../commands/BatchPutPropertyValuesCommand";
import {
  CreateComponentTypeCommandInput,
  CreateComponentTypeCommandOutput,
} from "../commands/CreateComponentTypeCommand";
import { CreateEntityCommandInput, CreateEntityCommandOutput } from "../commands/CreateEntityCommand";
import { CreateSceneCommandInput, CreateSceneCommandOutput } from "../commands/CreateSceneCommand";
import { CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput } from "../commands/CreateWorkspaceCommand";
import {
  DeleteComponentTypeCommandInput,
  DeleteComponentTypeCommandOutput,
} from "../commands/DeleteComponentTypeCommand";
import { DeleteEntityCommandInput, DeleteEntityCommandOutput } from "../commands/DeleteEntityCommand";
import { DeleteSceneCommandInput, DeleteSceneCommandOutput } from "../commands/DeleteSceneCommand";
import { DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput } from "../commands/DeleteWorkspaceCommand";
import { GetComponentTypeCommandInput, GetComponentTypeCommandOutput } from "../commands/GetComponentTypeCommand";
import { GetEntityCommandInput, GetEntityCommandOutput } from "../commands/GetEntityCommand";
import { GetPropertyValueCommandInput, GetPropertyValueCommandOutput } from "../commands/GetPropertyValueCommand";
import {
  GetPropertyValueHistoryCommandInput,
  GetPropertyValueHistoryCommandOutput,
} from "../commands/GetPropertyValueHistoryCommand";
import { GetSceneCommandInput, GetSceneCommandOutput } from "../commands/GetSceneCommand";
import { GetWorkspaceCommandInput, GetWorkspaceCommandOutput } from "../commands/GetWorkspaceCommand";
import { ListComponentTypesCommandInput, ListComponentTypesCommandOutput } from "../commands/ListComponentTypesCommand";
import { ListEntitiesCommandInput, ListEntitiesCommandOutput } from "../commands/ListEntitiesCommand";
import { ListScenesCommandInput, ListScenesCommandOutput } from "../commands/ListScenesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkspacesCommandInput, ListWorkspacesCommandOutput } from "../commands/ListWorkspacesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateComponentTypeCommandInput,
  UpdateComponentTypeCommandOutput,
} from "../commands/UpdateComponentTypeCommand";
import { UpdateEntityCommandInput, UpdateEntityCommandOutput } from "../commands/UpdateEntityCommand";
import { UpdateSceneCommandInput, UpdateSceneCommandOutput } from "../commands/UpdateSceneCommand";
import { UpdateWorkspaceCommandInput, UpdateWorkspaceCommandOutput } from "../commands/UpdateWorkspaceCommand";
import { IoTTwinMakerServiceException as __BaseException } from "../models/IoTTwinMakerServiceException";
import {
  AccessDeniedException,
  BatchPutPropertyError,
  BatchPutPropertyErrorEntry,
  ComponentRequest,
  ComponentResponse,
  ComponentTypeSummary,
  ComponentUpdateRequest,
  ConflictException,
  ConnectorFailureException,
  ConnectorTimeoutException,
  DataConnector,
  DataType,
  DataValue,
  EntityPropertyReference,
  EntitySummary,
  ErrorDetails,
  FunctionRequest,
  FunctionResponse,
  InternalServerException,
  InterpolationParameters,
  LambdaFunction,
  ListComponentTypesFilter,
  ListEntitiesFilter,
  ParentEntityUpdateRequest,
  PropertyDefinitionRequest,
  PropertyDefinitionResponse,
  PropertyFilter,
  PropertyLatestValue,
  PropertyRequest,
  PropertyResponse,
  PropertyValue,
  PropertyValueEntry,
  PropertyValueHistory,
  Relationship,
  RelationshipValue,
  ResourceNotFoundException,
  SceneSummary,
  ServiceQuotaExceededException,
  Status,
  ThrottlingException,
  TooManyTagsException,
  ValidationException,
  WorkspaceSummary,
} from "../models/models_0";

export const serializeAws_restJson1BatchPutPropertyValuesCommand = async (
  input: BatchPutPropertyValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/entity-properties";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.entries != null && { entries: serializeAws_restJson1Entries(input.entries, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateComponentTypeCommand = async (
  input: CreateComponentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/component-types/{componentTypeId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  if (input.componentTypeId !== undefined) {
    const labelValue: string = input.componentTypeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: componentTypeId.");
    }
    resolvedPath = resolvedPath.replace("{componentTypeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: componentTypeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.extendsFrom != null && { extendsFrom: serializeAws_restJson1ExtendsFrom(input.extendsFrom, context) }),
    ...(input.functions != null && { functions: serializeAws_restJson1FunctionsRequest(input.functions, context) }),
    ...(input.isSingleton != null && { isSingleton: input.isSingleton }),
    ...(input.propertyDefinitions != null && {
      propertyDefinitions: serializeAws_restJson1PropertyDefinitionsRequest(input.propertyDefinitions, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateEntityCommand = async (
  input: CreateEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/entities";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.components != null && {
      components: serializeAws_restJson1ComponentsMapRequest(input.components, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.entityName != null && { entityName: input.entityName }),
    ...(input.parentEntityId != null && { parentEntityId: input.parentEntityId }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateSceneCommand = async (
  input: CreateSceneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/scenes";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.capabilities != null && {
      capabilities: serializeAws_restJson1SceneCapabilities(input.capabilities, context),
    }),
    ...(input.contentLocation != null && { contentLocation: input.contentLocation }),
    ...(input.description != null && { description: input.description }),
    ...(input.sceneId != null && { sceneId: input.sceneId }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateWorkspaceCommand = async (
  input: CreateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.role != null && { role: input.role }),
    ...(input.s3Location != null && { s3Location: input.s3Location }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteComponentTypeCommand = async (
  input: DeleteComponentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/component-types/{componentTypeId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  if (input.componentTypeId !== undefined) {
    const labelValue: string = input.componentTypeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: componentTypeId.");
    }
    resolvedPath = resolvedPath.replace("{componentTypeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: componentTypeId.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteEntityCommand = async (
  input: DeleteEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/entities/{entityId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  if (input.entityId !== undefined) {
    const labelValue: string = input.entityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: entityId.");
    }
    resolvedPath = resolvedPath.replace("{entityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: entityId.");
  }
  const query: any = {
    ...(input.isRecursive !== undefined && { isRecursive: input.isRecursive.toString() }),
  };
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteSceneCommand = async (
  input: DeleteSceneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/scenes/{sceneId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  if (input.sceneId !== undefined) {
    const labelValue: string = input.sceneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sceneId.");
    }
    resolvedPath = resolvedPath.replace("{sceneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sceneId.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteWorkspaceCommand = async (
  input: DeleteWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetComponentTypeCommand = async (
  input: GetComponentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/component-types/{componentTypeId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  if (input.componentTypeId !== undefined) {
    const labelValue: string = input.componentTypeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: componentTypeId.");
    }
    resolvedPath = resolvedPath.replace("{componentTypeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: componentTypeId.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetEntityCommand = async (
  input: GetEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/entities/{entityId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  if (input.entityId !== undefined) {
    const labelValue: string = input.entityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: entityId.");
    }
    resolvedPath = resolvedPath.replace("{entityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: entityId.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetPropertyValueCommand = async (
  input: GetPropertyValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/entity-properties/value";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.componentTypeId != null && { componentTypeId: input.componentTypeId }),
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.selectedProperties != null && {
      selectedProperties: serializeAws_restJson1SelectedPropertyList(input.selectedProperties, context),
    }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetPropertyValueHistoryCommand = async (
  input: GetPropertyValueHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/entity-properties/history";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.componentTypeId != null && { componentTypeId: input.componentTypeId }),
    ...(input.endDateTime != null && { endDateTime: Math.round(input.endDateTime.getTime() / 1000) }),
    ...(input.endTime != null && { endTime: input.endTime }),
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.interpolation != null && {
      interpolation: serializeAws_restJson1InterpolationParameters(input.interpolation, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.orderByTime != null && { orderByTime: input.orderByTime }),
    ...(input.propertyFilters != null && {
      propertyFilters: serializeAws_restJson1PropertyFilters(input.propertyFilters, context),
    }),
    ...(input.selectedProperties != null && {
      selectedProperties: serializeAws_restJson1SelectedPropertyList(input.selectedProperties, context),
    }),
    ...(input.startDateTime != null && { startDateTime: Math.round(input.startDateTime.getTime() / 1000) }),
    ...(input.startTime != null && { startTime: input.startTime }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetSceneCommand = async (
  input: GetSceneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/scenes/{sceneId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  if (input.sceneId !== undefined) {
    const labelValue: string = input.sceneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sceneId.");
    }
    resolvedPath = resolvedPath.replace("{sceneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sceneId.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetWorkspaceCommand = async (
  input: GetWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListComponentTypesCommand = async (
  input: ListComponentTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/component-types-list";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: serializeAws_restJson1ListComponentTypesFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListEntitiesCommand = async (
  input: ListEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/entities-list";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: serializeAws_restJson1ListEntitiesFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListScenesCommand = async (
  input: ListScenesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/scenes-list";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags-list";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceARN != null && { resourceARN: input.resourceARN }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListWorkspacesCommand = async (
  input: ListWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces-list";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceARN != null && { resourceARN: input.resourceARN }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    ...(input.resourceARN !== undefined && { resourceARN: input.resourceARN }),
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
  };
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateComponentTypeCommand = async (
  input: UpdateComponentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/component-types/{componentTypeId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  if (input.componentTypeId !== undefined) {
    const labelValue: string = input.componentTypeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: componentTypeId.");
    }
    resolvedPath = resolvedPath.replace("{componentTypeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: componentTypeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.extendsFrom != null && { extendsFrom: serializeAws_restJson1ExtendsFrom(input.extendsFrom, context) }),
    ...(input.functions != null && { functions: serializeAws_restJson1FunctionsRequest(input.functions, context) }),
    ...(input.isSingleton != null && { isSingleton: input.isSingleton }),
    ...(input.propertyDefinitions != null && {
      propertyDefinitions: serializeAws_restJson1PropertyDefinitionsRequest(input.propertyDefinitions, context),
    }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateEntityCommand = async (
  input: UpdateEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/entities/{entityId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  if (input.entityId !== undefined) {
    const labelValue: string = input.entityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: entityId.");
    }
    resolvedPath = resolvedPath.replace("{entityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: entityId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.componentUpdates != null && {
      componentUpdates: serializeAws_restJson1ComponentUpdatesMapRequest(input.componentUpdates, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.entityName != null && { entityName: input.entityName }),
    ...(input.parentEntityUpdate != null && {
      parentEntityUpdate: serializeAws_restJson1ParentEntityUpdateRequest(input.parentEntityUpdate, context),
    }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSceneCommand = async (
  input: UpdateSceneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/scenes/{sceneId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  if (input.sceneId !== undefined) {
    const labelValue: string = input.sceneId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sceneId.");
    }
    resolvedPath = resolvedPath.replace("{sceneId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sceneId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.capabilities != null && {
      capabilities: serializeAws_restJson1SceneCapabilities(input.capabilities, context),
    }),
    ...(input.contentLocation != null && { contentLocation: input.contentLocation }),
    ...(input.description != null && { description: input.description }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateWorkspaceCommand = async (
  input: UpdateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}";
  if (input.workspaceId !== undefined) {
    const labelValue: string = input.workspaceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workspaceId.");
    }
    resolvedPath = resolvedPath.replace("{workspaceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workspaceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.role != null && { role: input.role }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1BatchPutPropertyValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutPropertyValuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchPutPropertyValuesCommandError(output, context);
  }
  const contents: BatchPutPropertyValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    errorEntries: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries !== undefined && data.errorEntries !== null) {
    contents.errorEntries = deserializeAws_restJson1ErrorEntries(data.errorEntries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchPutPropertyValuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutPropertyValuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateComponentTypeCommandError(output, context);
  }
  const contents: CreateComponentTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    creationDateTime: undefined,
    state: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.state !== undefined && data.state !== null) {
    contents.state = __expectString(data.state);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateComponentTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEntityCommandError(output, context);
  }
  const contents: CreateEntityCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    creationDateTime: undefined,
    entityId: undefined,
    state: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.entityId !== undefined && data.entityId !== null) {
    contents.entityId = __expectString(data.entityId);
  }
  if (data.state !== undefined && data.state !== null) {
    contents.state = __expectString(data.state);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSceneCommandError(output, context);
  }
  const contents: CreateSceneCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    creationDateTime: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSceneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSceneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorkspaceCommandError(output, context);
  }
  const contents: CreateWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    creationDateTime: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteComponentTypeCommandError(output, context);
  }
  const contents: DeleteComponentTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    state: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.state !== undefined && data.state !== null) {
    contents.state = __expectString(data.state);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteComponentTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEntityCommandError(output, context);
  }
  const contents: DeleteEntityCommandOutput = {
    $metadata: deserializeMetadata(output),
    state: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.state !== undefined && data.state !== null) {
    contents.state = __expectString(data.state);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSceneCommandError(output, context);
  }
  const contents: DeleteSceneCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSceneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSceneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWorkspaceCommandError(output, context);
  }
  const contents: DeleteWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetComponentTypeCommandError(output, context);
  }
  const contents: GetComponentTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    componentTypeId: undefined,
    creationDateTime: undefined,
    description: undefined,
    extendsFrom: undefined,
    functions: undefined,
    isAbstract: undefined,
    isSchemaInitialized: undefined,
    isSingleton: undefined,
    propertyDefinitions: undefined,
    status: undefined,
    updateDateTime: undefined,
    workspaceId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.componentTypeId !== undefined && data.componentTypeId !== null) {
    contents.componentTypeId = __expectString(data.componentTypeId);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.extendsFrom !== undefined && data.extendsFrom !== null) {
    contents.extendsFrom = deserializeAws_restJson1ExtendsFrom(data.extendsFrom, context);
  }
  if (data.functions !== undefined && data.functions !== null) {
    contents.functions = deserializeAws_restJson1FunctionsResponse(data.functions, context);
  }
  if (data.isAbstract !== undefined && data.isAbstract !== null) {
    contents.isAbstract = __expectBoolean(data.isAbstract);
  }
  if (data.isSchemaInitialized !== undefined && data.isSchemaInitialized !== null) {
    contents.isSchemaInitialized = __expectBoolean(data.isSchemaInitialized);
  }
  if (data.isSingleton !== undefined && data.isSingleton !== null) {
    contents.isSingleton = __expectBoolean(data.isSingleton);
  }
  if (data.propertyDefinitions !== undefined && data.propertyDefinitions !== null) {
    contents.propertyDefinitions = deserializeAws_restJson1PropertyDefinitionsResponse(
      data.propertyDefinitions,
      context
    );
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = deserializeAws_restJson1Status(data.status, context);
  }
  if (data.updateDateTime !== undefined && data.updateDateTime !== null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  if (data.workspaceId !== undefined && data.workspaceId !== null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetComponentTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEntityCommandError(output, context);
  }
  const contents: GetEntityCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    components: undefined,
    creationDateTime: undefined,
    description: undefined,
    entityId: undefined,
    entityName: undefined,
    hasChildEntities: undefined,
    parentEntityId: undefined,
    status: undefined,
    updateDateTime: undefined,
    workspaceId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.components !== undefined && data.components !== null) {
    contents.components = deserializeAws_restJson1ComponentsMap(data.components, context);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.entityId !== undefined && data.entityId !== null) {
    contents.entityId = __expectString(data.entityId);
  }
  if (data.entityName !== undefined && data.entityName !== null) {
    contents.entityName = __expectString(data.entityName);
  }
  if (data.hasChildEntities !== undefined && data.hasChildEntities !== null) {
    contents.hasChildEntities = __expectBoolean(data.hasChildEntities);
  }
  if (data.parentEntityId !== undefined && data.parentEntityId !== null) {
    contents.parentEntityId = __expectString(data.parentEntityId);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = deserializeAws_restJson1Status(data.status, context);
  }
  if (data.updateDateTime !== undefined && data.updateDateTime !== null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  if (data.workspaceId !== undefined && data.workspaceId !== null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPropertyValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertyValueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPropertyValueCommandError(output, context);
  }
  const contents: GetPropertyValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    propertyValues: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.propertyValues !== undefined && data.propertyValues !== null) {
    contents.propertyValues = deserializeAws_restJson1PropertyLatestValueMap(data.propertyValues, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPropertyValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertyValueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConnectorFailureException":
    case "com.amazonaws.iottwinmaker#ConnectorFailureException":
      throw await deserializeAws_restJson1ConnectorFailureExceptionResponse(parsedOutput, context);
    case "ConnectorTimeoutException":
    case "com.amazonaws.iottwinmaker#ConnectorTimeoutException":
      throw await deserializeAws_restJson1ConnectorTimeoutExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPropertyValueHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertyValueHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPropertyValueHistoryCommandError(output, context);
  }
  const contents: GetPropertyValueHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    propertyValues: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.propertyValues !== undefined && data.propertyValues !== null) {
    contents.propertyValues = deserializeAws_restJson1PropertyValueList(data.propertyValues, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPropertyValueHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertyValueHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConnectorFailureException":
    case "com.amazonaws.iottwinmaker#ConnectorFailureException":
      throw await deserializeAws_restJson1ConnectorFailureExceptionResponse(parsedOutput, context);
    case "ConnectorTimeoutException":
    case "com.amazonaws.iottwinmaker#ConnectorTimeoutException":
      throw await deserializeAws_restJson1ConnectorTimeoutExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSceneCommandError(output, context);
  }
  const contents: GetSceneCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    capabilities: undefined,
    contentLocation: undefined,
    creationDateTime: undefined,
    description: undefined,
    sceneId: undefined,
    updateDateTime: undefined,
    workspaceId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.capabilities !== undefined && data.capabilities !== null) {
    contents.capabilities = deserializeAws_restJson1SceneCapabilities(data.capabilities, context);
  }
  if (data.contentLocation !== undefined && data.contentLocation !== null) {
    contents.contentLocation = __expectString(data.contentLocation);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.sceneId !== undefined && data.sceneId !== null) {
    contents.sceneId = __expectString(data.sceneId);
  }
  if (data.updateDateTime !== undefined && data.updateDateTime !== null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  if (data.workspaceId !== undefined && data.workspaceId !== null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSceneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSceneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkspaceCommandError(output, context);
  }
  const contents: GetWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    creationDateTime: undefined,
    description: undefined,
    role: undefined,
    s3Location: undefined,
    updateDateTime: undefined,
    workspaceId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.role !== undefined && data.role !== null) {
    contents.role = __expectString(data.role);
  }
  if (data.s3Location !== undefined && data.s3Location !== null) {
    contents.s3Location = __expectString(data.s3Location);
  }
  if (data.updateDateTime !== undefined && data.updateDateTime !== null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  if (data.workspaceId !== undefined && data.workspaceId !== null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListComponentTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListComponentTypesCommandError(output, context);
  }
  const contents: ListComponentTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    componentTypeSummaries: undefined,
    maxResults: undefined,
    nextToken: undefined,
    workspaceId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentTypeSummaries !== undefined && data.componentTypeSummaries !== null) {
    contents.componentTypeSummaries = deserializeAws_restJson1ComponentTypeSummaries(
      data.componentTypeSummaries,
      context
    );
  }
  if (data.maxResults !== undefined && data.maxResults !== null) {
    contents.maxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workspaceId !== undefined && data.workspaceId !== null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListComponentTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEntitiesCommandError(output, context);
  }
  const contents: ListEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    entitySummaries: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entitySummaries !== undefined && data.entitySummaries !== null) {
    contents.entitySummaries = deserializeAws_restJson1EntitySummaries(data.entitySummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListScenesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScenesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListScenesCommandError(output, context);
  }
  const contents: ListScenesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    sceneSummaries: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sceneSummaries !== undefined && data.sceneSummaries !== null) {
    contents.sceneSummaries = deserializeAws_restJson1SceneSummaries(data.sceneSummaries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListScenesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScenesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
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

export const deserializeAws_restJson1ListWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkspacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorkspacesCommandError(output, context);
  }
  const contents: ListWorkspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    workspaceSummaries: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workspaceSummaries !== undefined && data.workspaceSummaries !== null) {
    contents.workspaceSummaries = deserializeAws_restJson1WorkspaceSummaries(data.workspaceSummaries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWorkspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.iottwinmaker#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
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

export const deserializeAws_restJson1UpdateComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateComponentTypeCommandError(output, context);
  }
  const contents: UpdateComponentTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    componentTypeId: undefined,
    state: undefined,
    workspaceId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.componentTypeId !== undefined && data.componentTypeId !== null) {
    contents.componentTypeId = __expectString(data.componentTypeId);
  }
  if (data.state !== undefined && data.state !== null) {
    contents.state = __expectString(data.state);
  }
  if (data.workspaceId !== undefined && data.workspaceId !== null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateComponentTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEntityCommandError(output, context);
  }
  const contents: UpdateEntityCommandOutput = {
    $metadata: deserializeMetadata(output),
    state: undefined,
    updateDateTime: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.state !== undefined && data.state !== null) {
    contents.state = __expectString(data.state);
  }
  if (data.updateDateTime !== undefined && data.updateDateTime !== null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEntityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSceneCommandError(output, context);
  }
  const contents: UpdateSceneCommandOutput = {
    $metadata: deserializeMetadata(output),
    updateDateTime: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.updateDateTime !== undefined && data.updateDateTime !== null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSceneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSceneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWorkspaceCommandError(output, context);
  }
  const contents: UpdateWorkspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    updateDateTime: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.updateDateTime !== undefined && data.updateDateTime !== null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConnectorFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConnectorFailureException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConnectorFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConnectorTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConnectorTimeoutException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConnectorTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ComponentRequest = (input: ComponentRequest, context: __SerdeContext): any => {
  return {
    ...(input.componentTypeId != null && { componentTypeId: input.componentTypeId }),
    ...(input.description != null && { description: input.description }),
    ...(input.properties != null && { properties: serializeAws_restJson1PropertyRequests(input.properties, context) }),
  };
};

const serializeAws_restJson1ComponentsMapRequest = (
  input: Record<string, ComponentRequest>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ComponentRequest(value, context),
    };
  }, {});
};

const serializeAws_restJson1ComponentUpdateRequest = (input: ComponentUpdateRequest, context: __SerdeContext): any => {
  return {
    ...(input.componentTypeId != null && { componentTypeId: input.componentTypeId }),
    ...(input.description != null && { description: input.description }),
    ...(input.propertyUpdates != null && {
      propertyUpdates: serializeAws_restJson1PropertyRequests(input.propertyUpdates, context),
    }),
    ...(input.updateType != null && { updateType: input.updateType }),
  };
};

const serializeAws_restJson1ComponentUpdatesMapRequest = (
  input: Record<string, ComponentUpdateRequest>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ComponentUpdateRequest(value, context),
    };
  }, {});
};

const serializeAws_restJson1Configuration = (input: Record<string, string>, context: __SerdeContext): any => {
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

const serializeAws_restJson1DataConnector = (input: DataConnector, context: __SerdeContext): any => {
  return {
    ...(input.isNative != null && { isNative: input.isNative }),
    ...(input.lambda != null && { lambda: serializeAws_restJson1LambdaFunction(input.lambda, context) }),
  };
};

const serializeAws_restJson1DataType = (input: DataType, context: __SerdeContext): any => {
  return {
    ...(input.allowedValues != null && {
      allowedValues: serializeAws_restJson1DataValueList(input.allowedValues, context),
    }),
    ...(input.nestedType != null && { nestedType: serializeAws_restJson1DataType(input.nestedType, context) }),
    ...(input.relationship != null && {
      relationship: serializeAws_restJson1Relationship(input.relationship, context),
    }),
    ...(input.type != null && { type: input.type }),
    ...(input.unitOfMeasure != null && { unitOfMeasure: input.unitOfMeasure }),
  };
};

const serializeAws_restJson1DataValue = (input: DataValue, context: __SerdeContext): any => {
  return {
    ...(input.booleanValue != null && { booleanValue: input.booleanValue }),
    ...(input.doubleValue != null && { doubleValue: __serializeFloat(input.doubleValue) }),
    ...(input.expression != null && { expression: input.expression }),
    ...(input.integerValue != null && { integerValue: input.integerValue }),
    ...(input.listValue != null && { listValue: serializeAws_restJson1DataValueList(input.listValue, context) }),
    ...(input.longValue != null && { longValue: input.longValue }),
    ...(input.mapValue != null && { mapValue: serializeAws_restJson1DataValueMap(input.mapValue, context) }),
    ...(input.relationshipValue != null && {
      relationshipValue: serializeAws_restJson1RelationshipValue(input.relationshipValue, context),
    }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

const serializeAws_restJson1DataValueList = (input: DataValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DataValue(entry, context);
    });
};

const serializeAws_restJson1DataValueMap = (input: Record<string, DataValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1DataValue(value, context),
    };
  }, {});
};

const serializeAws_restJson1EntityPropertyReference = (
  input: EntityPropertyReference,
  context: __SerdeContext
): any => {
  return {
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.externalIdProperty != null && {
      externalIdProperty: serializeAws_restJson1ExternalIdProperty(input.externalIdProperty, context),
    }),
    ...(input.propertyName != null && { propertyName: input.propertyName }),
  };
};

const serializeAws_restJson1Entries = (input: PropertyValueEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1PropertyValueEntry(entry, context);
    });
};

const serializeAws_restJson1ExtendsFrom = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ExternalIdProperty = (input: Record<string, string>, context: __SerdeContext): any => {
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

const serializeAws_restJson1FunctionRequest = (input: FunctionRequest, context: __SerdeContext): any => {
  return {
    ...(input.implementedBy != null && {
      implementedBy: serializeAws_restJson1DataConnector(input.implementedBy, context),
    }),
    ...(input.requiredProperties != null && {
      requiredProperties: serializeAws_restJson1RequiredProperties(input.requiredProperties, context),
    }),
    ...(input.scope != null && { scope: input.scope }),
  };
};

const serializeAws_restJson1FunctionsRequest = (
  input: Record<string, FunctionRequest>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1FunctionRequest(value, context),
    };
  }, {});
};

const serializeAws_restJson1InterpolationParameters = (
  input: InterpolationParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.interpolationType != null && { interpolationType: input.interpolationType }),
    ...(input.intervalInSeconds != null && { intervalInSeconds: input.intervalInSeconds }),
  };
};

const serializeAws_restJson1LambdaFunction = (input: LambdaFunction, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

const serializeAws_restJson1ListComponentTypesFilter = (
  input: ListComponentTypesFilter,
  context: __SerdeContext
): any => {
  return ListComponentTypesFilter.visit(input, {
    extendsFrom: (value) => ({ extendsFrom: value }),
    isAbstract: (value) => ({ isAbstract: value }),
    namespace: (value) => ({ namespace: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ListComponentTypesFilters = (
  input: ListComponentTypesFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ListComponentTypesFilter(entry, context);
    });
};

const serializeAws_restJson1ListEntitiesFilter = (input: ListEntitiesFilter, context: __SerdeContext): any => {
  return ListEntitiesFilter.visit(input, {
    componentTypeId: (value) => ({ componentTypeId: value }),
    externalId: (value) => ({ externalId: value }),
    parentEntityId: (value) => ({ parentEntityId: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ListEntitiesFilters = (input: ListEntitiesFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ListEntitiesFilter(entry, context);
    });
};

const serializeAws_restJson1ParentEntityUpdateRequest = (
  input: ParentEntityUpdateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.parentEntityId != null && { parentEntityId: input.parentEntityId }),
    ...(input.updateType != null && { updateType: input.updateType }),
  };
};

const serializeAws_restJson1PropertyDefinitionRequest = (
  input: PropertyDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configuration != null && {
      configuration: serializeAws_restJson1Configuration(input.configuration, context),
    }),
    ...(input.dataType != null && { dataType: serializeAws_restJson1DataType(input.dataType, context) }),
    ...(input.defaultValue != null && { defaultValue: serializeAws_restJson1DataValue(input.defaultValue, context) }),
    ...(input.isExternalId != null && { isExternalId: input.isExternalId }),
    ...(input.isRequiredInEntity != null && { isRequiredInEntity: input.isRequiredInEntity }),
    ...(input.isStoredExternally != null && { isStoredExternally: input.isStoredExternally }),
    ...(input.isTimeSeries != null && { isTimeSeries: input.isTimeSeries }),
  };
};

const serializeAws_restJson1PropertyDefinitionsRequest = (
  input: Record<string, PropertyDefinitionRequest>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1PropertyDefinitionRequest(value, context),
    };
  }, {});
};

const serializeAws_restJson1PropertyFilter = (input: PropertyFilter, context: __SerdeContext): any => {
  return {
    ...(input.operator != null && { operator: input.operator }),
    ...(input.propertyName != null && { propertyName: input.propertyName }),
    ...(input.value != null && { value: serializeAws_restJson1DataValue(input.value, context) }),
  };
};

const serializeAws_restJson1PropertyFilters = (input: PropertyFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1PropertyFilter(entry, context);
    });
};

const serializeAws_restJson1PropertyRequest = (input: PropertyRequest, context: __SerdeContext): any => {
  return {
    ...(input.definition != null && {
      definition: serializeAws_restJson1PropertyDefinitionRequest(input.definition, context),
    }),
    ...(input.updateType != null && { updateType: input.updateType }),
    ...(input.value != null && { value: serializeAws_restJson1DataValue(input.value, context) }),
  };
};

const serializeAws_restJson1PropertyRequests = (
  input: Record<string, PropertyRequest>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1PropertyRequest(value, context),
    };
  }, {});
};

const serializeAws_restJson1PropertyValue = (input: PropertyValue, context: __SerdeContext): any => {
  return {
    ...(input.time != null && { time: input.time }),
    ...(input.timestamp != null && { timestamp: Math.round(input.timestamp.getTime() / 1000) }),
    ...(input.value != null && { value: serializeAws_restJson1DataValue(input.value, context) }),
  };
};

const serializeAws_restJson1PropertyValueEntry = (input: PropertyValueEntry, context: __SerdeContext): any => {
  return {
    ...(input.entityPropertyReference != null && {
      entityPropertyReference: serializeAws_restJson1EntityPropertyReference(input.entityPropertyReference, context),
    }),
    ...(input.propertyValues != null && {
      propertyValues: serializeAws_restJson1PropertyValues(input.propertyValues, context),
    }),
  };
};

const serializeAws_restJson1PropertyValues = (input: PropertyValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1PropertyValue(entry, context);
    });
};

const serializeAws_restJson1Relationship = (input: Relationship, context: __SerdeContext): any => {
  return {
    ...(input.relationshipType != null && { relationshipType: input.relationshipType }),
    ...(input.targetComponentTypeId != null && { targetComponentTypeId: input.targetComponentTypeId }),
  };
};

const serializeAws_restJson1RelationshipValue = (input: RelationshipValue, context: __SerdeContext): any => {
  return {
    ...(input.targetComponentName != null && { targetComponentName: input.targetComponentName }),
    ...(input.targetEntityId != null && { targetEntityId: input.targetEntityId }),
  };
};

const serializeAws_restJson1RequiredProperties = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SceneCapabilities = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SelectedPropertyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
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

const deserializeAws_restJson1BatchPutPropertyError = (output: any, context: __SerdeContext): BatchPutPropertyError => {
  return {
    entry: output.entry != null ? deserializeAws_restJson1PropertyValueEntry(output.entry, context) : undefined,
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

const deserializeAws_restJson1BatchPutPropertyErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchPutPropertyErrorEntry => {
  return {
    errors: output.errors != null ? deserializeAws_restJson1Errors(output.errors, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentResponse = (output: any, context: __SerdeContext): ComponentResponse => {
  return {
    componentName: __expectString(output.componentName),
    componentTypeId: __expectString(output.componentTypeId),
    definedIn: __expectString(output.definedIn),
    description: __expectString(output.description),
    properties:
      output.properties != null ? deserializeAws_restJson1PropertyResponses(output.properties, context) : undefined,
    status: output.status != null ? deserializeAws_restJson1Status(output.status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentsMap = (
  output: any,
  context: __SerdeContext
): Record<string, ComponentResponse> => {
  return Object.entries(output).reduce((acc: Record<string, ComponentResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ComponentResponse(value, context),
    };
  }, {});
};

const deserializeAws_restJson1ComponentTypeSummaries = (
  output: any,
  context: __SerdeContext
): ComponentTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentTypeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentTypeSummary = (output: any, context: __SerdeContext): ComponentTypeSummary => {
  return {
    arn: __expectString(output.arn),
    componentTypeId: __expectString(output.componentTypeId),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    description: __expectString(output.description),
    status: output.status != null ? deserializeAws_restJson1Status(output.status, context) : undefined,
    updateDateTime:
      output.updateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateDateTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1Configuration = (output: any, context: __SerdeContext): Record<string, string> => {
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

const deserializeAws_restJson1DataConnector = (output: any, context: __SerdeContext): DataConnector => {
  return {
    isNative: __expectBoolean(output.isNative),
    lambda: output.lambda != null ? deserializeAws_restJson1LambdaFunction(output.lambda, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DataType = (output: any, context: __SerdeContext): DataType => {
  return {
    allowedValues:
      output.allowedValues != null ? deserializeAws_restJson1DataValueList(output.allowedValues, context) : undefined,
    nestedType: output.nestedType != null ? deserializeAws_restJson1DataType(output.nestedType, context) : undefined,
    relationship:
      output.relationship != null ? deserializeAws_restJson1Relationship(output.relationship, context) : undefined,
    type: __expectString(output.type),
    unitOfMeasure: __expectString(output.unitOfMeasure),
  } as any;
};

const deserializeAws_restJson1DataValue = (output: any, context: __SerdeContext): DataValue => {
  return {
    booleanValue: __expectBoolean(output.booleanValue),
    doubleValue: __limitedParseDouble(output.doubleValue),
    expression: __expectString(output.expression),
    integerValue: __expectInt32(output.integerValue),
    listValue: output.listValue != null ? deserializeAws_restJson1DataValueList(output.listValue, context) : undefined,
    longValue: __expectLong(output.longValue),
    mapValue: output.mapValue != null ? deserializeAws_restJson1DataValueMap(output.mapValue, context) : undefined,
    relationshipValue:
      output.relationshipValue != null
        ? deserializeAws_restJson1RelationshipValue(output.relationshipValue, context)
        : undefined,
    stringValue: __expectString(output.stringValue),
  } as any;
};

const deserializeAws_restJson1DataValueList = (output: any, context: __SerdeContext): DataValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataValueMap = (output: any, context: __SerdeContext): Record<string, DataValue> => {
  return Object.entries(output).reduce((acc: Record<string, DataValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1DataValue(value, context),
    };
  }, {});
};

const deserializeAws_restJson1EntityPropertyReference = (
  output: any,
  context: __SerdeContext
): EntityPropertyReference => {
  return {
    componentName: __expectString(output.componentName),
    entityId: __expectString(output.entityId),
    externalIdProperty:
      output.externalIdProperty != null
        ? deserializeAws_restJson1ExternalIdProperty(output.externalIdProperty, context)
        : undefined,
    propertyName: __expectString(output.propertyName),
  } as any;
};

const deserializeAws_restJson1EntitySummaries = (output: any, context: __SerdeContext): EntitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EntitySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EntitySummary = (output: any, context: __SerdeContext): EntitySummary => {
  return {
    arn: __expectString(output.arn),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    description: __expectString(output.description),
    entityId: __expectString(output.entityId),
    entityName: __expectString(output.entityName),
    hasChildEntities: __expectBoolean(output.hasChildEntities),
    parentEntityId: __expectString(output.parentEntityId),
    status: output.status != null ? deserializeAws_restJson1Status(output.status, context) : undefined,
    updateDateTime:
      output.updateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateDateTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1ErrorEntries = (output: any, context: __SerdeContext): BatchPutPropertyErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchPutPropertyErrorEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Errors = (output: any, context: __SerdeContext): BatchPutPropertyError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchPutPropertyError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExtendsFrom = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ExternalIdProperty = (output: any, context: __SerdeContext): Record<string, string> => {
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

const deserializeAws_restJson1FunctionResponse = (output: any, context: __SerdeContext): FunctionResponse => {
  return {
    implementedBy:
      output.implementedBy != null ? deserializeAws_restJson1DataConnector(output.implementedBy, context) : undefined,
    isInherited: __expectBoolean(output.isInherited),
    requiredProperties:
      output.requiredProperties != null
        ? deserializeAws_restJson1RequiredProperties(output.requiredProperties, context)
        : undefined,
    scope: __expectString(output.scope),
  } as any;
};

const deserializeAws_restJson1FunctionsResponse = (
  output: any,
  context: __SerdeContext
): Record<string, FunctionResponse> => {
  return Object.entries(output).reduce((acc: Record<string, FunctionResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1FunctionResponse(value, context),
    };
  }, {});
};

const deserializeAws_restJson1LambdaFunction = (output: any, context: __SerdeContext): LambdaFunction => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

const deserializeAws_restJson1PropertyDefinitionResponse = (
  output: any,
  context: __SerdeContext
): PropertyDefinitionResponse => {
  return {
    configuration:
      output.configuration != null ? deserializeAws_restJson1Configuration(output.configuration, context) : undefined,
    dataType: output.dataType != null ? deserializeAws_restJson1DataType(output.dataType, context) : undefined,
    defaultValue:
      output.defaultValue != null ? deserializeAws_restJson1DataValue(output.defaultValue, context) : undefined,
    isExternalId: __expectBoolean(output.isExternalId),
    isFinal: __expectBoolean(output.isFinal),
    isImported: __expectBoolean(output.isImported),
    isInherited: __expectBoolean(output.isInherited),
    isRequiredInEntity: __expectBoolean(output.isRequiredInEntity),
    isStoredExternally: __expectBoolean(output.isStoredExternally),
    isTimeSeries: __expectBoolean(output.isTimeSeries),
  } as any;
};

const deserializeAws_restJson1PropertyDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): Record<string, PropertyDefinitionResponse> => {
  return Object.entries(output).reduce(
    (acc: Record<string, PropertyDefinitionResponse>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1PropertyDefinitionResponse(value, context),
      };
    },
    {}
  );
};

const deserializeAws_restJson1PropertyLatestValue = (output: any, context: __SerdeContext): PropertyLatestValue => {
  return {
    propertyReference:
      output.propertyReference != null
        ? deserializeAws_restJson1EntityPropertyReference(output.propertyReference, context)
        : undefined,
    propertyValue:
      output.propertyValue != null ? deserializeAws_restJson1DataValue(output.propertyValue, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PropertyLatestValueMap = (
  output: any,
  context: __SerdeContext
): Record<string, PropertyLatestValue> => {
  return Object.entries(output).reduce((acc: Record<string, PropertyLatestValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1PropertyLatestValue(value, context),
    };
  }, {});
};

const deserializeAws_restJson1PropertyResponse = (output: any, context: __SerdeContext): PropertyResponse => {
  return {
    definition:
      output.definition != null
        ? deserializeAws_restJson1PropertyDefinitionResponse(output.definition, context)
        : undefined,
    value: output.value != null ? deserializeAws_restJson1DataValue(output.value, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PropertyResponses = (
  output: any,
  context: __SerdeContext
): Record<string, PropertyResponse> => {
  return Object.entries(output).reduce((acc: Record<string, PropertyResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1PropertyResponse(value, context),
    };
  }, {});
};

const deserializeAws_restJson1PropertyValue = (output: any, context: __SerdeContext): PropertyValue => {
  return {
    time: __expectString(output.time),
    timestamp:
      output.timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestamp))) : undefined,
    value: output.value != null ? deserializeAws_restJson1DataValue(output.value, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PropertyValueEntry = (output: any, context: __SerdeContext): PropertyValueEntry => {
  return {
    entityPropertyReference:
      output.entityPropertyReference != null
        ? deserializeAws_restJson1EntityPropertyReference(output.entityPropertyReference, context)
        : undefined,
    propertyValues:
      output.propertyValues != null
        ? deserializeAws_restJson1PropertyValues(output.propertyValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PropertyValueHistory = (output: any, context: __SerdeContext): PropertyValueHistory => {
  return {
    entityPropertyReference:
      output.entityPropertyReference != null
        ? deserializeAws_restJson1EntityPropertyReference(output.entityPropertyReference, context)
        : undefined,
    values: output.values != null ? deserializeAws_restJson1Values(output.values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PropertyValueList = (output: any, context: __SerdeContext): PropertyValueHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PropertyValueHistory(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PropertyValues = (output: any, context: __SerdeContext): PropertyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PropertyValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Relationship = (output: any, context: __SerdeContext): Relationship => {
  return {
    relationshipType: __expectString(output.relationshipType),
    targetComponentTypeId: __expectString(output.targetComponentTypeId),
  } as any;
};

const deserializeAws_restJson1RelationshipValue = (output: any, context: __SerdeContext): RelationshipValue => {
  return {
    targetComponentName: __expectString(output.targetComponentName),
    targetEntityId: __expectString(output.targetEntityId),
  } as any;
};

const deserializeAws_restJson1RequiredProperties = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SceneCapabilities = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SceneSummaries = (output: any, context: __SerdeContext): SceneSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SceneSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SceneSummary = (output: any, context: __SerdeContext): SceneSummary => {
  return {
    arn: __expectString(output.arn),
    contentLocation: __expectString(output.contentLocation),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    description: __expectString(output.description),
    sceneId: __expectString(output.sceneId),
    updateDateTime:
      output.updateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateDateTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1Status = (output: any, context: __SerdeContext): Status => {
  return {
    error: output.error != null ? deserializeAws_restJson1ErrorDetails(output.error, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
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

const deserializeAws_restJson1Values = (output: any, context: __SerdeContext): PropertyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PropertyValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorkspaceSummaries = (output: any, context: __SerdeContext): WorkspaceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorkspaceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorkspaceSummary = (output: any, context: __SerdeContext): WorkspaceSummary => {
  return {
    arn: __expectString(output.arn),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    description: __expectString(output.description),
    updateDateTime:
      output.updateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateDateTime)))
        : undefined,
    workspaceId: __expectString(output.workspaceId),
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
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
