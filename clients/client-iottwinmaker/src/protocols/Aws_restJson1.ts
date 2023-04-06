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
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
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
import { CreateSyncJobCommandInput, CreateSyncJobCommandOutput } from "../commands/CreateSyncJobCommand";
import { CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput } from "../commands/CreateWorkspaceCommand";
import {
  DeleteComponentTypeCommandInput,
  DeleteComponentTypeCommandOutput,
} from "../commands/DeleteComponentTypeCommand";
import { DeleteEntityCommandInput, DeleteEntityCommandOutput } from "../commands/DeleteEntityCommand";
import { DeleteSceneCommandInput, DeleteSceneCommandOutput } from "../commands/DeleteSceneCommand";
import { DeleteSyncJobCommandInput, DeleteSyncJobCommandOutput } from "../commands/DeleteSyncJobCommand";
import { DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput } from "../commands/DeleteWorkspaceCommand";
import { ExecuteQueryCommandInput, ExecuteQueryCommandOutput } from "../commands/ExecuteQueryCommand";
import { GetComponentTypeCommandInput, GetComponentTypeCommandOutput } from "../commands/GetComponentTypeCommand";
import { GetEntityCommandInput, GetEntityCommandOutput } from "../commands/GetEntityCommand";
import { GetPricingPlanCommandInput, GetPricingPlanCommandOutput } from "../commands/GetPricingPlanCommand";
import { GetPropertyValueCommandInput, GetPropertyValueCommandOutput } from "../commands/GetPropertyValueCommand";
import {
  GetPropertyValueHistoryCommandInput,
  GetPropertyValueHistoryCommandOutput,
} from "../commands/GetPropertyValueHistoryCommand";
import { GetSceneCommandInput, GetSceneCommandOutput } from "../commands/GetSceneCommand";
import { GetSyncJobCommandInput, GetSyncJobCommandOutput } from "../commands/GetSyncJobCommand";
import { GetWorkspaceCommandInput, GetWorkspaceCommandOutput } from "../commands/GetWorkspaceCommand";
import { ListComponentTypesCommandInput, ListComponentTypesCommandOutput } from "../commands/ListComponentTypesCommand";
import { ListEntitiesCommandInput, ListEntitiesCommandOutput } from "../commands/ListEntitiesCommand";
import { ListScenesCommandInput, ListScenesCommandOutput } from "../commands/ListScenesCommand";
import { ListSyncJobsCommandInput, ListSyncJobsCommandOutput } from "../commands/ListSyncJobsCommand";
import { ListSyncResourcesCommandInput, ListSyncResourcesCommandOutput } from "../commands/ListSyncResourcesCommand";
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
import { UpdatePricingPlanCommandInput, UpdatePricingPlanCommandOutput } from "../commands/UpdatePricingPlanCommand";
import { UpdateSceneCommandInput, UpdateSceneCommandOutput } from "../commands/UpdateSceneCommand";
import { UpdateWorkspaceCommandInput, UpdateWorkspaceCommandOutput } from "../commands/UpdateWorkspaceCommand";
import { IoTTwinMakerServiceException as __BaseException } from "../models/IoTTwinMakerServiceException";
import {
  AccessDeniedException,
  BatchPutPropertyError,
  BatchPutPropertyErrorEntry,
  BundleInformation,
  ColumnDescription,
  ComponentPropertyGroupRequest,
  ComponentPropertyGroupResponse,
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
  OrderBy,
  ParentEntityUpdateRequest,
  PricingPlan,
  PropertyDefinitionRequest,
  PropertyDefinitionResponse,
  PropertyFilter,
  PropertyGroupRequest,
  PropertyGroupResponse,
  PropertyLatestValue,
  PropertyRequest,
  PropertyResponse,
  PropertyValue,
  PropertyValueEntry,
  PropertyValueHistory,
  QueryTimeoutException,
  Relationship,
  RelationshipValue,
  ResourceNotFoundException,
  Row,
  SceneSummary,
  ServiceQuotaExceededException,
  Status,
  SyncJobStatus,
  SyncJobSummary,
  SyncResourceFilter,
  SyncResourceStatus,
  SyncResourceSummary,
  TabularConditions,
  ThrottlingException,
  TooManyTagsException,
  ValidationException,
  WorkspaceSummary,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchPutPropertyValuesCommand
 */
export const se_BatchPutPropertyValuesCommand = async (
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
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.entries != null && { entries: se_Entries(input.entries, context) }),
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

/**
 * serializeAws_restJson1CreateComponentTypeCommand
 */
export const se_CreateComponentTypeCommand = async (
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
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "componentTypeId",
    () => input.componentTypeId!,
    "{componentTypeId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.componentTypeName != null && { componentTypeName: input.componentTypeName }),
    ...(input.description != null && { description: input.description }),
    ...(input.extendsFrom != null && { extendsFrom: se_ExtendsFrom(input.extendsFrom, context) }),
    ...(input.functions != null && { functions: se_FunctionsRequest(input.functions, context) }),
    ...(input.isSingleton != null && { isSingleton: input.isSingleton }),
    ...(input.propertyDefinitions != null && {
      propertyDefinitions: se_PropertyDefinitionsRequest(input.propertyDefinitions, context),
    }),
    ...(input.propertyGroups != null && { propertyGroups: se_PropertyGroupsRequest(input.propertyGroups, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1CreateEntityCommand
 */
export const se_CreateEntityCommand = async (
  input: CreateEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/entities";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.components != null && { components: se_ComponentsMapRequest(input.components, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.entityName != null && { entityName: input.entityName }),
    ...(input.parentEntityId != null && { parentEntityId: input.parentEntityId }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1CreateSceneCommand
 */
export const se_CreateSceneCommand = async (
  input: CreateSceneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/scenes";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.capabilities != null && { capabilities: se_SceneCapabilities(input.capabilities, context) }),
    ...(input.contentLocation != null && { contentLocation: input.contentLocation }),
    ...(input.description != null && { description: input.description }),
    ...(input.sceneId != null && { sceneId: input.sceneId }),
    ...(input.sceneMetadata != null && { sceneMetadata: se_SceneMetadataMap(input.sceneMetadata, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1CreateSyncJobCommand
 */
export const se_CreateSyncJobCommand = async (
  input: CreateSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/sync-jobs/{syncSource}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "syncSource", () => input.syncSource!, "{syncSource}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.syncRole != null && { syncRole: input.syncRole }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1CreateWorkspaceCommand
 */
export const se_CreateWorkspaceCommand = async (
  input: CreateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.role != null && { role: input.role }),
    ...(input.s3Location != null && { s3Location: input.s3Location }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1DeleteComponentTypeCommand
 */
export const se_DeleteComponentTypeCommand = async (
  input: DeleteComponentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/component-types/{componentTypeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "componentTypeId",
    () => input.componentTypeId!,
    "{componentTypeId}",
    false
  );
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

/**
 * serializeAws_restJson1DeleteEntityCommand
 */
export const se_DeleteEntityCommand = async (
  input: DeleteEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/entities/{entityId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "entityId", () => input.entityId!, "{entityId}", false);
  const query: any = map({
    isRecursive: [() => input.isRecursive !== void 0, () => input.isRecursive!.toString()],
  });
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

/**
 * serializeAws_restJson1DeleteSceneCommand
 */
export const se_DeleteSceneCommand = async (
  input: DeleteSceneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/scenes/{sceneId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sceneId", () => input.sceneId!, "{sceneId}", false);
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

/**
 * serializeAws_restJson1DeleteSyncJobCommand
 */
export const se_DeleteSyncJobCommand = async (
  input: DeleteSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/sync-jobs/{syncSource}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "syncSource", () => input.syncSource!, "{syncSource}", false);
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

/**
 * serializeAws_restJson1DeleteWorkspaceCommand
 */
export const se_DeleteWorkspaceCommand = async (
  input: DeleteWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
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

/**
 * serializeAws_restJson1ExecuteQueryCommand
 */
export const se_ExecuteQueryCommand = async (
  input: ExecuteQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/queries/execution";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.queryStatement != null && { queryStatement: input.queryStatement }),
    ...(input.workspaceId != null && { workspaceId: input.workspaceId }),
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

/**
 * serializeAws_restJson1GetComponentTypeCommand
 */
export const se_GetComponentTypeCommand = async (
  input: GetComponentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/component-types/{componentTypeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "componentTypeId",
    () => input.componentTypeId!,
    "{componentTypeId}",
    false
  );
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

/**
 * serializeAws_restJson1GetEntityCommand
 */
export const se_GetEntityCommand = async (
  input: GetEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/entities/{entityId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "entityId", () => input.entityId!, "{entityId}", false);
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

/**
 * serializeAws_restJson1GetPricingPlanCommand
 */
export const se_GetPricingPlanCommand = async (
  input: GetPricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pricingplan";
  let body: any;
  body = "";
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

/**
 * serializeAws_restJson1GetPropertyValueCommand
 */
export const se_GetPropertyValueCommand = async (
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
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.componentTypeId != null && { componentTypeId: input.componentTypeId }),
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.propertyGroupName != null && { propertyGroupName: input.propertyGroupName }),
    ...(input.selectedProperties != null && {
      selectedProperties: se_SelectedPropertyList(input.selectedProperties, context),
    }),
    ...(input.tabularConditions != null && {
      tabularConditions: se_TabularConditions(input.tabularConditions, context),
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

/**
 * serializeAws_restJson1GetPropertyValueHistoryCommand
 */
export const se_GetPropertyValueHistoryCommand = async (
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
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.componentTypeId != null && { componentTypeId: input.componentTypeId }),
    ...(input.endDateTime != null && { endDateTime: Math.round(input.endDateTime.getTime() / 1000) }),
    ...(input.endTime != null && { endTime: input.endTime }),
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.interpolation != null && { interpolation: se_InterpolationParameters(input.interpolation, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.orderByTime != null && { orderByTime: input.orderByTime }),
    ...(input.propertyFilters != null && { propertyFilters: se_PropertyFilters(input.propertyFilters, context) }),
    ...(input.selectedProperties != null && {
      selectedProperties: se_SelectedPropertyList(input.selectedProperties, context),
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

/**
 * serializeAws_restJson1GetSceneCommand
 */
export const se_GetSceneCommand = async (
  input: GetSceneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/scenes/{sceneId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sceneId", () => input.sceneId!, "{sceneId}", false);
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

/**
 * serializeAws_restJson1GetSyncJobCommand
 */
export const se_GetSyncJobCommand = async (
  input: GetSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sync-jobs/{syncSource}";
  resolvedPath = __resolvedPath(resolvedPath, input, "syncSource", () => input.syncSource!, "{syncSource}", false);
  const query: any = map({
    workspace: [, input.workspaceId!],
  });
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
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetWorkspaceCommand
 */
export const se_GetWorkspaceCommand = async (
  input: GetWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
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

/**
 * serializeAws_restJson1ListComponentTypesCommand
 */
export const se_ListComponentTypesCommand = async (
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
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_ListComponentTypesFilters(input.filters, context) }),
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

/**
 * serializeAws_restJson1ListEntitiesCommand
 */
export const se_ListEntitiesCommand = async (
  input: ListEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/entities-list";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_ListEntitiesFilters(input.filters, context) }),
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

/**
 * serializeAws_restJson1ListScenesCommand
 */
export const se_ListScenesCommand = async (
  input: ListScenesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/scenes-list";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
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

/**
 * serializeAws_restJson1ListSyncJobsCommand
 */
export const se_ListSyncJobsCommand = async (
  input: ListSyncJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}/sync-jobs-list";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
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

/**
 * serializeAws_restJson1ListSyncResourcesCommand
 */
export const se_ListSyncResourcesCommand = async (
  input: ListSyncResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workspaces/{workspaceId}/sync-jobs/{syncSource}/resources-list";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "syncSource", () => input.syncSource!, "{syncSource}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_SyncResourceFilters(input.filters, context) }),
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
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

/**
 * serializeAws_restJson1ListWorkspacesCommand
 */
export const se_ListWorkspacesCommand = async (
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceARN != null && { resourceARN: input.resourceARN }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceARN: [, __expectNonNull(input.resourceARN!, `resourceARN`)],
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
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

/**
 * serializeAws_restJson1UpdateComponentTypeCommand
 */
export const se_UpdateComponentTypeCommand = async (
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
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "componentTypeId",
    () => input.componentTypeId!,
    "{componentTypeId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.componentTypeName != null && { componentTypeName: input.componentTypeName }),
    ...(input.description != null && { description: input.description }),
    ...(input.extendsFrom != null && { extendsFrom: se_ExtendsFrom(input.extendsFrom, context) }),
    ...(input.functions != null && { functions: se_FunctionsRequest(input.functions, context) }),
    ...(input.isSingleton != null && { isSingleton: input.isSingleton }),
    ...(input.propertyDefinitions != null && {
      propertyDefinitions: se_PropertyDefinitionsRequest(input.propertyDefinitions, context),
    }),
    ...(input.propertyGroups != null && { propertyGroups: se_PropertyGroupsRequest(input.propertyGroups, context) }),
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

/**
 * serializeAws_restJson1UpdateEntityCommand
 */
export const se_UpdateEntityCommand = async (
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
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "entityId", () => input.entityId!, "{entityId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.componentUpdates != null && {
      componentUpdates: se_ComponentUpdatesMapRequest(input.componentUpdates, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.entityName != null && { entityName: input.entityName }),
    ...(input.parentEntityUpdate != null && {
      parentEntityUpdate: se_ParentEntityUpdateRequest(input.parentEntityUpdate, context),
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

/**
 * serializeAws_restJson1UpdatePricingPlanCommand
 */
export const se_UpdatePricingPlanCommand = async (
  input: UpdatePricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pricingplan";
  let body: any;
  body = JSON.stringify({
    ...(input.bundleNames != null && { bundleNames: se_PricingBundles(input.bundleNames, context) }),
    ...(input.pricingMode != null && { pricingMode: input.pricingMode }),
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

/**
 * serializeAws_restJson1UpdateSceneCommand
 */
export const se_UpdateSceneCommand = async (
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
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sceneId", () => input.sceneId!, "{sceneId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.capabilities != null && { capabilities: se_SceneCapabilities(input.capabilities, context) }),
    ...(input.contentLocation != null && { contentLocation: input.contentLocation }),
    ...(input.description != null && { description: input.description }),
    ...(input.sceneMetadata != null && { sceneMetadata: se_SceneMetadataMap(input.sceneMetadata, context) }),
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

/**
 * serializeAws_restJson1UpdateWorkspaceCommand
 */
export const se_UpdateWorkspaceCommand = async (
  input: UpdateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workspaces/{workspaceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workspaceId", () => input.workspaceId!, "{workspaceId}", false);
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

/**
 * deserializeAws_restJson1BatchPutPropertyValuesCommand
 */
export const de_BatchPutPropertyValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutPropertyValuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchPutPropertyValuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_ErrorEntries(data.errorEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutPropertyValuesCommandError
 */
const de_BatchPutPropertyValuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutPropertyValuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1CreateComponentTypeCommand
 */
export const de_CreateComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateComponentTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateComponentTypeCommandError
 */
const de_CreateComponentTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1CreateEntityCommand
 */
export const de_CreateEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateEntityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.entityId != null) {
    contents.entityId = __expectString(data.entityId);
  }
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateEntityCommandError
 */
const de_CreateEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1CreateSceneCommand
 */
export const de_CreateSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSceneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSceneCommandError
 */
const de_CreateSceneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSceneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1CreateSyncJobCommand
 */
export const de_CreateSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSyncJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSyncJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSyncJobCommandError
 */
const de_CreateSyncJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSyncJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1CreateWorkspaceCommand
 */
export const de_CreateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorkspaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkspaceCommandError
 */
const de_CreateWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1DeleteComponentTypeCommand
 */
export const de_DeleteComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteComponentTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteComponentTypeCommandError
 */
const de_DeleteComponentTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1DeleteEntityCommand
 */
export const de_DeleteEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteEntityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEntityCommandError
 */
const de_DeleteEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1DeleteSceneCommand
 */
export const de_DeleteSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSceneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSceneCommandError
 */
const de_DeleteSceneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSceneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1DeleteSyncJobCommand
 */
export const de_DeleteSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSyncJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSyncJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSyncJobCommandError
 */
const de_DeleteSyncJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSyncJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1DeleteWorkspaceCommand
 */
export const de_DeleteWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteWorkspaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkspaceCommandError
 */
const de_DeleteWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1ExecuteQueryCommand
 */
export const de_ExecuteQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExecuteQueryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.columnDescriptions != null) {
    contents.columnDescriptions = de_ColumnDescriptions(data.columnDescriptions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.rows != null) {
    contents.rows = de_Rows(data.rows, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteQueryCommandError
 */
const de_ExecuteQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "QueryTimeoutException":
    case "com.amazonaws.iottwinmaker#QueryTimeoutException":
      throw await de_QueryTimeoutExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1GetComponentTypeCommand
 */
export const de_GetComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetComponentTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.componentTypeId != null) {
    contents.componentTypeId = __expectString(data.componentTypeId);
  }
  if (data.componentTypeName != null) {
    contents.componentTypeName = __expectString(data.componentTypeName);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.extendsFrom != null) {
    contents.extendsFrom = de_ExtendsFrom(data.extendsFrom, context);
  }
  if (data.functions != null) {
    contents.functions = de_FunctionsResponse(data.functions, context);
  }
  if (data.isAbstract != null) {
    contents.isAbstract = __expectBoolean(data.isAbstract);
  }
  if (data.isSchemaInitialized != null) {
    contents.isSchemaInitialized = __expectBoolean(data.isSchemaInitialized);
  }
  if (data.isSingleton != null) {
    contents.isSingleton = __expectBoolean(data.isSingleton);
  }
  if (data.propertyDefinitions != null) {
    contents.propertyDefinitions = de_PropertyDefinitionsResponse(data.propertyDefinitions, context);
  }
  if (data.propertyGroups != null) {
    contents.propertyGroups = de_PropertyGroupsResponse(data.propertyGroups, context);
  }
  if (data.status != null) {
    contents.status = de_Status(data.status, context);
  }
  if (data.syncSource != null) {
    contents.syncSource = __expectString(data.syncSource);
  }
  if (data.updateDateTime != null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  if (data.workspaceId != null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetComponentTypeCommandError
 */
const de_GetComponentTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1GetEntityCommand
 */
export const de_GetEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEntityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.components != null) {
    contents.components = de_ComponentsMap(data.components, context);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.entityId != null) {
    contents.entityId = __expectString(data.entityId);
  }
  if (data.entityName != null) {
    contents.entityName = __expectString(data.entityName);
  }
  if (data.hasChildEntities != null) {
    contents.hasChildEntities = __expectBoolean(data.hasChildEntities);
  }
  if (data.parentEntityId != null) {
    contents.parentEntityId = __expectString(data.parentEntityId);
  }
  if (data.status != null) {
    contents.status = de_Status(data.status, context);
  }
  if (data.syncSource != null) {
    contents.syncSource = __expectString(data.syncSource);
  }
  if (data.updateDateTime != null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  if (data.workspaceId != null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEntityCommandError
 */
const de_GetEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1GetPricingPlanCommand
 */
export const de_GetPricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPricingPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.currentPricingPlan != null) {
    contents.currentPricingPlan = de_PricingPlan(data.currentPricingPlan, context);
  }
  if (data.pendingPricingPlan != null) {
    contents.pendingPricingPlan = de_PricingPlan(data.pendingPricingPlan, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPricingPlanCommandError
 */
const de_GetPricingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPricingPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1GetPropertyValueCommand
 */
export const de_GetPropertyValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertyValueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPropertyValueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.propertyValues != null) {
    contents.propertyValues = de_PropertyLatestValueMap(data.propertyValues, context);
  }
  if (data.tabularPropertyValues != null) {
    contents.tabularPropertyValues = de_TabularPropertyValues(data.tabularPropertyValues, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPropertyValueCommandError
 */
const de_GetPropertyValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertyValueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConnectorFailureException":
    case "com.amazonaws.iottwinmaker#ConnectorFailureException":
      throw await de_ConnectorFailureExceptionRes(parsedOutput, context);
    case "ConnectorTimeoutException":
    case "com.amazonaws.iottwinmaker#ConnectorTimeoutException":
      throw await de_ConnectorTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1GetPropertyValueHistoryCommand
 */
export const de_GetPropertyValueHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertyValueHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPropertyValueHistoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.propertyValues != null) {
    contents.propertyValues = de_PropertyValueList(data.propertyValues, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPropertyValueHistoryCommandError
 */
const de_GetPropertyValueHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertyValueHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConnectorFailureException":
    case "com.amazonaws.iottwinmaker#ConnectorFailureException":
      throw await de_ConnectorFailureExceptionRes(parsedOutput, context);
    case "ConnectorTimeoutException":
    case "com.amazonaws.iottwinmaker#ConnectorTimeoutException":
      throw await de_ConnectorTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1GetSceneCommand
 */
export const de_GetSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSceneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.capabilities != null) {
    contents.capabilities = de_SceneCapabilities(data.capabilities, context);
  }
  if (data.contentLocation != null) {
    contents.contentLocation = __expectString(data.contentLocation);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.generatedSceneMetadata != null) {
    contents.generatedSceneMetadata = de_GeneratedSceneMetadataMap(data.generatedSceneMetadata, context);
  }
  if (data.sceneId != null) {
    contents.sceneId = __expectString(data.sceneId);
  }
  if (data.sceneMetadata != null) {
    contents.sceneMetadata = de_SceneMetadataMap(data.sceneMetadata, context);
  }
  if (data.updateDateTime != null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  if (data.workspaceId != null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSceneCommandError
 */
const de_GetSceneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSceneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1GetSyncJobCommand
 */
export const de_GetSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSyncJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSyncJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.status != null) {
    contents.status = de_SyncJobStatus(data.status, context);
  }
  if (data.syncRole != null) {
    contents.syncRole = __expectString(data.syncRole);
  }
  if (data.syncSource != null) {
    contents.syncSource = __expectString(data.syncSource);
  }
  if (data.updateDateTime != null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  if (data.workspaceId != null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSyncJobCommandError
 */
const de_GetSyncJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSyncJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1GetWorkspaceCommand
 */
export const de_GetWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkspaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.role != null) {
    contents.role = __expectString(data.role);
  }
  if (data.s3Location != null) {
    contents.s3Location = __expectString(data.s3Location);
  }
  if (data.updateDateTime != null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  if (data.workspaceId != null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkspaceCommandError
 */
const de_GetWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1ListComponentTypesCommand
 */
export const de_ListComponentTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListComponentTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentTypeSummaries != null) {
    contents.componentTypeSummaries = de_ComponentTypeSummaries(data.componentTypeSummaries, context);
  }
  if (data.maxResults != null) {
    contents.maxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workspaceId != null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentTypesCommandError
 */
const de_ListComponentTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1ListEntitiesCommand
 */
export const de_ListEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEntitiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.entitySummaries != null) {
    contents.entitySummaries = de_EntitySummaries(data.entitySummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEntitiesCommandError
 */
const de_ListEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1ListScenesCommand
 */
export const de_ListScenesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScenesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListScenesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sceneSummaries != null) {
    contents.sceneSummaries = de_SceneSummaries(data.sceneSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListScenesCommandError
 */
const de_ListScenesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScenesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1ListSyncJobsCommand
 */
export const de_ListSyncJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSyncJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSyncJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.syncJobSummaries != null) {
    contents.syncJobSummaries = de_SyncJobSummaries(data.syncJobSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSyncJobsCommandError
 */
const de_ListSyncJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSyncJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1ListSyncResourcesCommand
 */
export const de_ListSyncResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSyncResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSyncResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.syncResources != null) {
    contents.syncResources = de_SyncResourceSummaries(data.syncResources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSyncResourcesCommandError
 */
const de_ListSyncResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSyncResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
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
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
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
 * deserializeAws_restJson1ListWorkspacesCommand
 */
export const de_ListWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkspacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkspacesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.workspaceSummaries != null) {
    contents.workspaceSummaries = de_WorkspaceSummaries(data.workspaceSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkspacesCommandError
 */
const de_ListWorkspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.iottwinmaker#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
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
 * deserializeAws_restJson1UpdateComponentTypeCommand
 */
export const de_UpdateComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateComponentTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.componentTypeId != null) {
    contents.componentTypeId = __expectString(data.componentTypeId);
  }
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  if (data.workspaceId != null) {
    contents.workspaceId = __expectString(data.workspaceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateComponentTypeCommandError
 */
const de_UpdateComponentTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1UpdateEntityCommand
 */
export const de_UpdateEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateEntityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.state != null) {
    contents.state = __expectString(data.state);
  }
  if (data.updateDateTime != null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEntityCommandError
 */
const de_UpdateEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEntityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1UpdatePricingPlanCommand
 */
export const de_UpdatePricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePricingPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.currentPricingPlan != null) {
    contents.currentPricingPlan = de_PricingPlan(data.currentPricingPlan, context);
  }
  if (data.pendingPricingPlan != null) {
    contents.pendingPricingPlan = de_PricingPlan(data.pendingPricingPlan, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePricingPlanCommandError
 */
const de_UpdatePricingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePricingPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1UpdateSceneCommand
 */
export const de_UpdateSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSceneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.updateDateTime != null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSceneCommandError
 */
const de_UpdateSceneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSceneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
 * deserializeAws_restJson1UpdateWorkspaceCommand
 */
export const de_UpdateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateWorkspaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.updateDateTime != null) {
    contents.updateDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.updateDateTime)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkspaceCommandError
 */
const de_UpdateWorkspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iottwinmaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iottwinmaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iottwinmaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iottwinmaker#ValidationException":
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
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConnectorFailureExceptionRes
 */
const de_ConnectorFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConnectorFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConnectorFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConnectorTimeoutExceptionRes
 */
const de_ConnectorTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConnectorTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConnectorTimeoutException({
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
 * deserializeAws_restJson1QueryTimeoutExceptionRes
 */
const de_QueryTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new QueryTimeoutException({
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
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyTagsException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ComponentPropertyGroupRequest
 */
const se_ComponentPropertyGroupRequest = (input: ComponentPropertyGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.groupType != null && { groupType: input.groupType }),
    ...(input.propertyNames != null && { propertyNames: se_PropertyNames(input.propertyNames, context) }),
    ...(input.updateType != null && { updateType: input.updateType }),
  };
};

/**
 * serializeAws_restJson1ComponentPropertyGroupRequests
 */
const se_ComponentPropertyGroupRequests = (
  input: Record<string, ComponentPropertyGroupRequest>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ComponentPropertyGroupRequest(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ComponentRequest
 */
const se_ComponentRequest = (input: ComponentRequest, context: __SerdeContext): any => {
  return {
    ...(input.componentTypeId != null && { componentTypeId: input.componentTypeId }),
    ...(input.description != null && { description: input.description }),
    ...(input.properties != null && { properties: se_PropertyRequests(input.properties, context) }),
    ...(input.propertyGroups != null && {
      propertyGroups: se_ComponentPropertyGroupRequests(input.propertyGroups, context),
    }),
  };
};

/**
 * serializeAws_restJson1ComponentsMapRequest
 */
const se_ComponentsMapRequest = (input: Record<string, ComponentRequest>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ComponentRequest(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ComponentUpdateRequest
 */
const se_ComponentUpdateRequest = (input: ComponentUpdateRequest, context: __SerdeContext): any => {
  return {
    ...(input.componentTypeId != null && { componentTypeId: input.componentTypeId }),
    ...(input.description != null && { description: input.description }),
    ...(input.propertyGroupUpdates != null && {
      propertyGroupUpdates: se_ComponentPropertyGroupRequests(input.propertyGroupUpdates, context),
    }),
    ...(input.propertyUpdates != null && { propertyUpdates: se_PropertyRequests(input.propertyUpdates, context) }),
    ...(input.updateType != null && { updateType: input.updateType }),
  };
};

/**
 * serializeAws_restJson1ComponentUpdatesMapRequest
 */
const se_ComponentUpdatesMapRequest = (input: Record<string, ComponentUpdateRequest>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ComponentUpdateRequest(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Configuration
 */
const se_Configuration = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DataConnector
 */
const se_DataConnector = (input: DataConnector, context: __SerdeContext): any => {
  return {
    ...(input.isNative != null && { isNative: input.isNative }),
    ...(input.lambda != null && { lambda: se_LambdaFunction(input.lambda, context) }),
  };
};

/**
 * serializeAws_restJson1DataType
 */
const se_DataType = (input: DataType, context: __SerdeContext): any => {
  return {
    ...(input.allowedValues != null && { allowedValues: se_DataValueList(input.allowedValues, context) }),
    ...(input.nestedType != null && { nestedType: se_DataType(input.nestedType, context) }),
    ...(input.relationship != null && { relationship: se_Relationship(input.relationship, context) }),
    ...(input.type != null && { type: input.type }),
    ...(input.unitOfMeasure != null && { unitOfMeasure: input.unitOfMeasure }),
  };
};

/**
 * serializeAws_restJson1DataValue
 */
const se_DataValue = (input: DataValue, context: __SerdeContext): any => {
  return {
    ...(input.booleanValue != null && { booleanValue: input.booleanValue }),
    ...(input.doubleValue != null && { doubleValue: __serializeFloat(input.doubleValue) }),
    ...(input.expression != null && { expression: input.expression }),
    ...(input.integerValue != null && { integerValue: input.integerValue }),
    ...(input.listValue != null && { listValue: se_DataValueList(input.listValue, context) }),
    ...(input.longValue != null && { longValue: input.longValue }),
    ...(input.mapValue != null && { mapValue: se_DataValueMap(input.mapValue, context) }),
    ...(input.relationshipValue != null && {
      relationshipValue: se_RelationshipValue(input.relationshipValue, context),
    }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

/**
 * serializeAws_restJson1DataValueList
 */
const se_DataValueList = (input: DataValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DataValue(entry, context);
    });
};

/**
 * serializeAws_restJson1DataValueMap
 */
const se_DataValueMap = (input: Record<string, DataValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_DataValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1EntityPropertyReference
 */
const se_EntityPropertyReference = (input: EntityPropertyReference, context: __SerdeContext): any => {
  return {
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.externalIdProperty != null && {
      externalIdProperty: se_ExternalIdProperty(input.externalIdProperty, context),
    }),
    ...(input.propertyName != null && { propertyName: input.propertyName }),
  };
};

/**
 * serializeAws_restJson1Entries
 */
const se_Entries = (input: PropertyValueEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PropertyValueEntry(entry, context);
    });
};

/**
 * serializeAws_restJson1ExtendsFrom
 */
const se_ExtendsFrom = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ExternalIdProperty
 */
const se_ExternalIdProperty = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1FunctionRequest
 */
const se_FunctionRequest = (input: FunctionRequest, context: __SerdeContext): any => {
  return {
    ...(input.implementedBy != null && { implementedBy: se_DataConnector(input.implementedBy, context) }),
    ...(input.requiredProperties != null && {
      requiredProperties: se_RequiredProperties(input.requiredProperties, context),
    }),
    ...(input.scope != null && { scope: input.scope }),
  };
};

/**
 * serializeAws_restJson1FunctionsRequest
 */
const se_FunctionsRequest = (input: Record<string, FunctionRequest>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_FunctionRequest(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1InterpolationParameters
 */
const se_InterpolationParameters = (input: InterpolationParameters, context: __SerdeContext): any => {
  return {
    ...(input.interpolationType != null && { interpolationType: input.interpolationType }),
    ...(input.intervalInSeconds != null && { intervalInSeconds: input.intervalInSeconds }),
  };
};

/**
 * serializeAws_restJson1LambdaFunction
 */
const se_LambdaFunction = (input: LambdaFunction, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_restJson1ListComponentTypesFilter
 */
const se_ListComponentTypesFilter = (input: ListComponentTypesFilter, context: __SerdeContext): any => {
  return ListComponentTypesFilter.visit(input, {
    extendsFrom: (value) => ({ extendsFrom: value }),
    isAbstract: (value) => ({ isAbstract: value }),
    namespace: (value) => ({ namespace: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ListComponentTypesFilters
 */
const se_ListComponentTypesFilters = (input: ListComponentTypesFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ListComponentTypesFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1ListEntitiesFilter
 */
const se_ListEntitiesFilter = (input: ListEntitiesFilter, context: __SerdeContext): any => {
  return ListEntitiesFilter.visit(input, {
    componentTypeId: (value) => ({ componentTypeId: value }),
    externalId: (value) => ({ externalId: value }),
    parentEntityId: (value) => ({ parentEntityId: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ListEntitiesFilters
 */
const se_ListEntitiesFilters = (input: ListEntitiesFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ListEntitiesFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1OrderBy
 */
const se_OrderBy = (input: OrderBy, context: __SerdeContext): any => {
  return {
    ...(input.order != null && { order: input.order }),
    ...(input.propertyName != null && { propertyName: input.propertyName }),
  };
};

/**
 * serializeAws_restJson1OrderByList
 */
const se_OrderByList = (input: OrderBy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OrderBy(entry, context);
    });
};

/**
 * serializeAws_restJson1ParentEntityUpdateRequest
 */
const se_ParentEntityUpdateRequest = (input: ParentEntityUpdateRequest, context: __SerdeContext): any => {
  return {
    ...(input.parentEntityId != null && { parentEntityId: input.parentEntityId }),
    ...(input.updateType != null && { updateType: input.updateType }),
  };
};

/**
 * serializeAws_restJson1PricingBundles
 */
const se_PricingBundles = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PropertyDefinitionRequest
 */
const se_PropertyDefinitionRequest = (input: PropertyDefinitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.configuration != null && { configuration: se_Configuration(input.configuration, context) }),
    ...(input.dataType != null && { dataType: se_DataType(input.dataType, context) }),
    ...(input.defaultValue != null && { defaultValue: se_DataValue(input.defaultValue, context) }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.isExternalId != null && { isExternalId: input.isExternalId }),
    ...(input.isRequiredInEntity != null && { isRequiredInEntity: input.isRequiredInEntity }),
    ...(input.isStoredExternally != null && { isStoredExternally: input.isStoredExternally }),
    ...(input.isTimeSeries != null && { isTimeSeries: input.isTimeSeries }),
  };
};

/**
 * serializeAws_restJson1PropertyDefinitionsRequest
 */
const se_PropertyDefinitionsRequest = (
  input: Record<string, PropertyDefinitionRequest>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_PropertyDefinitionRequest(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1PropertyFilter
 */
const se_PropertyFilter = (input: PropertyFilter, context: __SerdeContext): any => {
  return {
    ...(input.operator != null && { operator: input.operator }),
    ...(input.propertyName != null && { propertyName: input.propertyName }),
    ...(input.value != null && { value: se_DataValue(input.value, context) }),
  };
};

/**
 * serializeAws_restJson1PropertyFilters
 */
const se_PropertyFilters = (input: PropertyFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PropertyFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1PropertyGroupRequest
 */
const se_PropertyGroupRequest = (input: PropertyGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.groupType != null && { groupType: input.groupType }),
    ...(input.propertyNames != null && { propertyNames: se_PropertyNames(input.propertyNames, context) }),
  };
};

/**
 * serializeAws_restJson1PropertyGroupsRequest
 */
const se_PropertyGroupsRequest = (input: Record<string, PropertyGroupRequest>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_PropertyGroupRequest(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1PropertyNames
 */
const se_PropertyNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PropertyRequest
 */
const se_PropertyRequest = (input: PropertyRequest, context: __SerdeContext): any => {
  return {
    ...(input.definition != null && { definition: se_PropertyDefinitionRequest(input.definition, context) }),
    ...(input.updateType != null && { updateType: input.updateType }),
    ...(input.value != null && { value: se_DataValue(input.value, context) }),
  };
};

/**
 * serializeAws_restJson1PropertyRequests
 */
const se_PropertyRequests = (input: Record<string, PropertyRequest>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_PropertyRequest(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1PropertyValue
 */
const se_PropertyValue = (input: PropertyValue, context: __SerdeContext): any => {
  return {
    ...(input.time != null && { time: input.time }),
    ...(input.timestamp != null && { timestamp: Math.round(input.timestamp.getTime() / 1000) }),
    ...(input.value != null && { value: se_DataValue(input.value, context) }),
  };
};

/**
 * serializeAws_restJson1PropertyValueEntry
 */
const se_PropertyValueEntry = (input: PropertyValueEntry, context: __SerdeContext): any => {
  return {
    ...(input.entityPropertyReference != null && {
      entityPropertyReference: se_EntityPropertyReference(input.entityPropertyReference, context),
    }),
    ...(input.propertyValues != null && { propertyValues: se_PropertyValues(input.propertyValues, context) }),
  };
};

/**
 * serializeAws_restJson1PropertyValues
 */
const se_PropertyValues = (input: PropertyValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PropertyValue(entry, context);
    });
};

/**
 * serializeAws_restJson1Relationship
 */
const se_Relationship = (input: Relationship, context: __SerdeContext): any => {
  return {
    ...(input.relationshipType != null && { relationshipType: input.relationshipType }),
    ...(input.targetComponentTypeId != null && { targetComponentTypeId: input.targetComponentTypeId }),
  };
};

/**
 * serializeAws_restJson1RelationshipValue
 */
const se_RelationshipValue = (input: RelationshipValue, context: __SerdeContext): any => {
  return {
    ...(input.targetComponentName != null && { targetComponentName: input.targetComponentName }),
    ...(input.targetEntityId != null && { targetEntityId: input.targetEntityId }),
  };
};

/**
 * serializeAws_restJson1RequiredProperties
 */
const se_RequiredProperties = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SceneCapabilities
 */
const se_SceneCapabilities = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SceneMetadataMap
 */
const se_SceneMetadataMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SelectedPropertyList
 */
const se_SelectedPropertyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SyncResourceFilter
 */
const se_SyncResourceFilter = (input: SyncResourceFilter, context: __SerdeContext): any => {
  return SyncResourceFilter.visit(input, {
    externalId: (value) => ({ externalId: value }),
    resourceId: (value) => ({ resourceId: value }),
    resourceType: (value) => ({ resourceType: value }),
    state: (value) => ({ state: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1SyncResourceFilters
 */
const se_SyncResourceFilters = (input: SyncResourceFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SyncResourceFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1TabularConditions
 */
const se_TabularConditions = (input: TabularConditions, context: __SerdeContext): any => {
  return {
    ...(input.orderBy != null && { orderBy: se_OrderByList(input.orderBy, context) }),
    ...(input.propertyFilters != null && { propertyFilters: se_PropertyFilters(input.propertyFilters, context) }),
  };
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
 * deserializeAws_restJson1BatchPutPropertyError
 */
const de_BatchPutPropertyError = (output: any, context: __SerdeContext): BatchPutPropertyError => {
  return {
    entry: output.entry != null ? de_PropertyValueEntry(output.entry, context) : undefined,
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1BatchPutPropertyErrorEntry
 */
const de_BatchPutPropertyErrorEntry = (output: any, context: __SerdeContext): BatchPutPropertyErrorEntry => {
  return {
    errors: output.errors != null ? de_Errors(output.errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BundleInformation
 */
const de_BundleInformation = (output: any, context: __SerdeContext): BundleInformation => {
  return {
    bundleNames: output.bundleNames != null ? de_PricingBundles(output.bundleNames, context) : undefined,
    pricingTier: __expectString(output.pricingTier),
  } as any;
};

/**
 * deserializeAws_restJson1ColumnDescription
 */
const de_ColumnDescription = (output: any, context: __SerdeContext): ColumnDescription => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ColumnDescriptions
 */
const de_ColumnDescriptions = (output: any, context: __SerdeContext): ColumnDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ColumnDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentPropertyGroupResponse
 */
const de_ComponentPropertyGroupResponse = (output: any, context: __SerdeContext): ComponentPropertyGroupResponse => {
  return {
    groupType: __expectString(output.groupType),
    isInherited: __expectBoolean(output.isInherited),
    propertyNames: output.propertyNames != null ? de_PropertyNames(output.propertyNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ComponentPropertyGroupResponses
 */
const de_ComponentPropertyGroupResponses = (
  output: any,
  context: __SerdeContext
): Record<string, ComponentPropertyGroupResponse> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ComponentPropertyGroupResponse>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_ComponentPropertyGroupResponse(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1ComponentResponse
 */
const de_ComponentResponse = (output: any, context: __SerdeContext): ComponentResponse => {
  return {
    componentName: __expectString(output.componentName),
    componentTypeId: __expectString(output.componentTypeId),
    definedIn: __expectString(output.definedIn),
    description: __expectString(output.description),
    properties: output.properties != null ? de_PropertyResponses(output.properties, context) : undefined,
    propertyGroups:
      output.propertyGroups != null ? de_ComponentPropertyGroupResponses(output.propertyGroups, context) : undefined,
    status: output.status != null ? de_Status(output.status, context) : undefined,
    syncSource: __expectString(output.syncSource),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentsMap
 */
const de_ComponentsMap = (output: any, context: __SerdeContext): Record<string, ComponentResponse> => {
  return Object.entries(output).reduce((acc: Record<string, ComponentResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ComponentResponse(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ComponentTypeSummaries
 */
const de_ComponentTypeSummaries = (output: any, context: __SerdeContext): ComponentTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentTypeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentTypeSummary
 */
const de_ComponentTypeSummary = (output: any, context: __SerdeContext): ComponentTypeSummary => {
  return {
    arn: __expectString(output.arn),
    componentTypeId: __expectString(output.componentTypeId),
    componentTypeName: __expectString(output.componentTypeName),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    description: __expectString(output.description),
    status: output.status != null ? de_Status(output.status, context) : undefined,
    updateDateTime:
      output.updateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1DataConnector
 */
const de_DataConnector = (output: any, context: __SerdeContext): DataConnector => {
  return {
    isNative: __expectBoolean(output.isNative),
    lambda: output.lambda != null ? de_LambdaFunction(output.lambda, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DataType
 */
const de_DataType = (output: any, context: __SerdeContext): DataType => {
  return {
    allowedValues: output.allowedValues != null ? de_DataValueList(output.allowedValues, context) : undefined,
    nestedType: output.nestedType != null ? de_DataType(output.nestedType, context) : undefined,
    relationship: output.relationship != null ? de_Relationship(output.relationship, context) : undefined,
    type: __expectString(output.type),
    unitOfMeasure: __expectString(output.unitOfMeasure),
  } as any;
};

/**
 * deserializeAws_restJson1DataValue
 */
const de_DataValue = (output: any, context: __SerdeContext): DataValue => {
  return {
    booleanValue: __expectBoolean(output.booleanValue),
    doubleValue: __limitedParseDouble(output.doubleValue),
    expression: __expectString(output.expression),
    integerValue: __expectInt32(output.integerValue),
    listValue: output.listValue != null ? de_DataValueList(output.listValue, context) : undefined,
    longValue: __expectLong(output.longValue),
    mapValue: output.mapValue != null ? de_DataValueMap(output.mapValue, context) : undefined,
    relationshipValue:
      output.relationshipValue != null ? de_RelationshipValue(output.relationshipValue, context) : undefined,
    stringValue: __expectString(output.stringValue),
  } as any;
};

/**
 * deserializeAws_restJson1DataValueList
 */
const de_DataValueList = (output: any, context: __SerdeContext): DataValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataValueMap
 */
const de_DataValueMap = (output: any, context: __SerdeContext): Record<string, DataValue> => {
  return Object.entries(output).reduce((acc: Record<string, DataValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_DataValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1EntityPropertyReference
 */
const de_EntityPropertyReference = (output: any, context: __SerdeContext): EntityPropertyReference => {
  return {
    componentName: __expectString(output.componentName),
    entityId: __expectString(output.entityId),
    externalIdProperty:
      output.externalIdProperty != null ? de_ExternalIdProperty(output.externalIdProperty, context) : undefined,
    propertyName: __expectString(output.propertyName),
  } as any;
};

/**
 * deserializeAws_restJson1EntitySummaries
 */
const de_EntitySummaries = (output: any, context: __SerdeContext): EntitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EntitySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EntitySummary
 */
const de_EntitySummary = (output: any, context: __SerdeContext): EntitySummary => {
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
    status: output.status != null ? de_Status(output.status, context) : undefined,
    updateDateTime:
      output.updateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ErrorDetails
 */
const de_ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1ErrorEntries
 */
const de_ErrorEntries = (output: any, context: __SerdeContext): BatchPutPropertyErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPutPropertyErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Errors
 */
const de_Errors = (output: any, context: __SerdeContext): BatchPutPropertyError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPutPropertyError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExtendsFrom
 */
const de_ExtendsFrom = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ExternalIdProperty
 */
const de_ExternalIdProperty = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1FunctionResponse
 */
const de_FunctionResponse = (output: any, context: __SerdeContext): FunctionResponse => {
  return {
    implementedBy: output.implementedBy != null ? de_DataConnector(output.implementedBy, context) : undefined,
    isInherited: __expectBoolean(output.isInherited),
    requiredProperties:
      output.requiredProperties != null ? de_RequiredProperties(output.requiredProperties, context) : undefined,
    scope: __expectString(output.scope),
  } as any;
};

/**
 * deserializeAws_restJson1FunctionsResponse
 */
const de_FunctionsResponse = (output: any, context: __SerdeContext): Record<string, FunctionResponse> => {
  return Object.entries(output).reduce((acc: Record<string, FunctionResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_FunctionResponse(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1GeneratedSceneMetadataMap
 */
const de_GeneratedSceneMetadataMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1LambdaFunction
 */
const de_LambdaFunction = (output: any, context: __SerdeContext): LambdaFunction => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

/**
 * deserializeAws_restJson1PricingBundles
 */
const de_PricingBundles = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1PricingPlan
 */
const de_PricingPlan = (output: any, context: __SerdeContext): PricingPlan => {
  return {
    billableEntityCount: __expectLong(output.billableEntityCount),
    bundleInformation:
      output.bundleInformation != null ? de_BundleInformation(output.bundleInformation, context) : undefined,
    effectiveDateTime:
      output.effectiveDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.effectiveDateTime)))
        : undefined,
    pricingMode: __expectString(output.pricingMode),
    updateDateTime:
      output.updateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateDateTime)))
        : undefined,
    updateReason: __expectString(output.updateReason),
  } as any;
};

/**
 * deserializeAws_restJson1PropertyDefinitionResponse
 */
const de_PropertyDefinitionResponse = (output: any, context: __SerdeContext): PropertyDefinitionResponse => {
  return {
    configuration: output.configuration != null ? de_Configuration(output.configuration, context) : undefined,
    dataType: output.dataType != null ? de_DataType(output.dataType, context) : undefined,
    defaultValue: output.defaultValue != null ? de_DataValue(output.defaultValue, context) : undefined,
    displayName: __expectString(output.displayName),
    isExternalId: __expectBoolean(output.isExternalId),
    isFinal: __expectBoolean(output.isFinal),
    isImported: __expectBoolean(output.isImported),
    isInherited: __expectBoolean(output.isInherited),
    isRequiredInEntity: __expectBoolean(output.isRequiredInEntity),
    isStoredExternally: __expectBoolean(output.isStoredExternally),
    isTimeSeries: __expectBoolean(output.isTimeSeries),
  } as any;
};

/**
 * deserializeAws_restJson1PropertyDefinitionsResponse
 */
const de_PropertyDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): Record<string, PropertyDefinitionResponse> => {
  return Object.entries(output).reduce(
    (acc: Record<string, PropertyDefinitionResponse>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_PropertyDefinitionResponse(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1PropertyGroupResponse
 */
const de_PropertyGroupResponse = (output: any, context: __SerdeContext): PropertyGroupResponse => {
  return {
    groupType: __expectString(output.groupType),
    isInherited: __expectBoolean(output.isInherited),
    propertyNames: output.propertyNames != null ? de_PropertyNames(output.propertyNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PropertyGroupsResponse
 */
const de_PropertyGroupsResponse = (output: any, context: __SerdeContext): Record<string, PropertyGroupResponse> => {
  return Object.entries(output).reduce((acc: Record<string, PropertyGroupResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_PropertyGroupResponse(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1PropertyLatestValue
 */
const de_PropertyLatestValue = (output: any, context: __SerdeContext): PropertyLatestValue => {
  return {
    propertyReference:
      output.propertyReference != null ? de_EntityPropertyReference(output.propertyReference, context) : undefined,
    propertyValue: output.propertyValue != null ? de_DataValue(output.propertyValue, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PropertyLatestValueMap
 */
const de_PropertyLatestValueMap = (output: any, context: __SerdeContext): Record<string, PropertyLatestValue> => {
  return Object.entries(output).reduce((acc: Record<string, PropertyLatestValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_PropertyLatestValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1PropertyNames
 */
const de_PropertyNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1PropertyResponse
 */
const de_PropertyResponse = (output: any, context: __SerdeContext): PropertyResponse => {
  return {
    definition: output.definition != null ? de_PropertyDefinitionResponse(output.definition, context) : undefined,
    value: output.value != null ? de_DataValue(output.value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PropertyResponses
 */
const de_PropertyResponses = (output: any, context: __SerdeContext): Record<string, PropertyResponse> => {
  return Object.entries(output).reduce((acc: Record<string, PropertyResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_PropertyResponse(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1PropertyTableValue
 */
const de_PropertyTableValue = (output: any, context: __SerdeContext): Record<string, DataValue> => {
  return Object.entries(output).reduce((acc: Record<string, DataValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_DataValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1PropertyValue
 */
const de_PropertyValue = (output: any, context: __SerdeContext): PropertyValue => {
  return {
    time: __expectString(output.time),
    timestamp:
      output.timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestamp))) : undefined,
    value: output.value != null ? de_DataValue(output.value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PropertyValueEntry
 */
const de_PropertyValueEntry = (output: any, context: __SerdeContext): PropertyValueEntry => {
  return {
    entityPropertyReference:
      output.entityPropertyReference != null
        ? de_EntityPropertyReference(output.entityPropertyReference, context)
        : undefined,
    propertyValues: output.propertyValues != null ? de_PropertyValues(output.propertyValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PropertyValueHistory
 */
const de_PropertyValueHistory = (output: any, context: __SerdeContext): PropertyValueHistory => {
  return {
    entityPropertyReference:
      output.entityPropertyReference != null
        ? de_EntityPropertyReference(output.entityPropertyReference, context)
        : undefined,
    values: output.values != null ? de_Values(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PropertyValueList
 */
const de_PropertyValueList = (output: any, context: __SerdeContext): PropertyValueHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PropertyValueHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PropertyValues
 */
const de_PropertyValues = (output: any, context: __SerdeContext): PropertyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PropertyValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QueryResultValue
 */
const de_QueryResultValue = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_restJson1Relationship
 */
const de_Relationship = (output: any, context: __SerdeContext): Relationship => {
  return {
    relationshipType: __expectString(output.relationshipType),
    targetComponentTypeId: __expectString(output.targetComponentTypeId),
  } as any;
};

/**
 * deserializeAws_restJson1RelationshipValue
 */
const de_RelationshipValue = (output: any, context: __SerdeContext): RelationshipValue => {
  return {
    targetComponentName: __expectString(output.targetComponentName),
    targetEntityId: __expectString(output.targetEntityId),
  } as any;
};

/**
 * deserializeAws_restJson1RequiredProperties
 */
const de_RequiredProperties = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Row
 */
const de_Row = (output: any, context: __SerdeContext): Row => {
  return {
    rowData: output.rowData != null ? de_RowData(output.rowData, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RowData
 */
const de_RowData = (output: any, context: __SerdeContext): __DocumentType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QueryResultValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Rows
 */
const de_Rows = (output: any, context: __SerdeContext): Row[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Row(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SceneCapabilities
 */
const de_SceneCapabilities = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SceneMetadataMap
 */
const de_SceneMetadataMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SceneSummaries
 */
const de_SceneSummaries = (output: any, context: __SerdeContext): SceneSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SceneSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SceneSummary
 */
const de_SceneSummary = (output: any, context: __SerdeContext): SceneSummary => {
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

/**
 * deserializeAws_restJson1Status
 */
const de_Status = (output: any, context: __SerdeContext): Status => {
  return {
    error: output.error != null ? de_ErrorDetails(output.error, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1SyncJobStatus
 */
const de_SyncJobStatus = (output: any, context: __SerdeContext): SyncJobStatus => {
  return {
    error: output.error != null ? de_ErrorDetails(output.error, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1SyncJobSummaries
 */
const de_SyncJobSummaries = (output: any, context: __SerdeContext): SyncJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SyncJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SyncJobSummary
 */
const de_SyncJobSummary = (output: any, context: __SerdeContext): SyncJobSummary => {
  return {
    arn: __expectString(output.arn),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    status: output.status != null ? de_SyncJobStatus(output.status, context) : undefined,
    syncSource: __expectString(output.syncSource),
    updateDateTime:
      output.updateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateDateTime)))
        : undefined,
    workspaceId: __expectString(output.workspaceId),
  } as any;
};

/**
 * deserializeAws_restJson1SyncResourceStatus
 */
const de_SyncResourceStatus = (output: any, context: __SerdeContext): SyncResourceStatus => {
  return {
    error: output.error != null ? de_ErrorDetails(output.error, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1SyncResourceSummaries
 */
const de_SyncResourceSummaries = (output: any, context: __SerdeContext): SyncResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SyncResourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SyncResourceSummary
 */
const de_SyncResourceSummary = (output: any, context: __SerdeContext): SyncResourceSummary => {
  return {
    externalId: __expectString(output.externalId),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
    status: output.status != null ? de_SyncResourceStatus(output.status, context) : undefined,
    updateDateTime:
      output.updateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updateDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TabularPropertyValue
 */
const de_TabularPropertyValue = (output: any, context: __SerdeContext): Record<string, DataValue>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PropertyTableValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TabularPropertyValues
 */
const de_TabularPropertyValues = (output: any, context: __SerdeContext): Record<string, DataValue>[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TabularPropertyValue(entry, context);
    });
  return retVal;
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
 * deserializeAws_restJson1Values
 */
const de_Values = (output: any, context: __SerdeContext): PropertyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PropertyValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkspaceSummaries
 */
const de_WorkspaceSummaries = (output: any, context: __SerdeContext): WorkspaceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkspaceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkspaceSummary
 */
const de_WorkspaceSummary = (output: any, context: __SerdeContext): WorkspaceSummary => {
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
