// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  BatchPutPropertyValuesCommandInput,
  BatchPutPropertyValuesCommandOutput,
} from "../commands/BatchPutPropertyValuesCommand";
import {
  CancelMetadataTransferJobCommandInput,
  CancelMetadataTransferJobCommandOutput,
} from "../commands/CancelMetadataTransferJobCommand";
import {
  CreateComponentTypeCommandInput,
  CreateComponentTypeCommandOutput,
} from "../commands/CreateComponentTypeCommand";
import { CreateEntityCommandInput, CreateEntityCommandOutput } from "../commands/CreateEntityCommand";
import {
  CreateMetadataTransferJobCommandInput,
  CreateMetadataTransferJobCommandOutput,
} from "../commands/CreateMetadataTransferJobCommand";
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
import {
  GetMetadataTransferJobCommandInput,
  GetMetadataTransferJobCommandOutput,
} from "../commands/GetMetadataTransferJobCommand";
import { GetPricingPlanCommandInput, GetPricingPlanCommandOutput } from "../commands/GetPricingPlanCommand";
import { GetPropertyValueCommandInput, GetPropertyValueCommandOutput } from "../commands/GetPropertyValueCommand";
import {
  GetPropertyValueHistoryCommandInput,
  GetPropertyValueHistoryCommandOutput,
} from "../commands/GetPropertyValueHistoryCommand";
import { GetSceneCommandInput, GetSceneCommandOutput } from "../commands/GetSceneCommand";
import { GetSyncJobCommandInput, GetSyncJobCommandOutput } from "../commands/GetSyncJobCommand";
import { GetWorkspaceCommandInput, GetWorkspaceCommandOutput } from "../commands/GetWorkspaceCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import { ListComponentTypesCommandInput, ListComponentTypesCommandOutput } from "../commands/ListComponentTypesCommand";
import { ListEntitiesCommandInput, ListEntitiesCommandOutput } from "../commands/ListEntitiesCommand";
import {
  ListMetadataTransferJobsCommandInput,
  ListMetadataTransferJobsCommandOutput,
} from "../commands/ListMetadataTransferJobsCommand";
import { ListPropertiesCommandInput, ListPropertiesCommandOutput } from "../commands/ListPropertiesCommand";
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
  ComponentPropertyGroupRequest,
  ComponentRequest,
  ComponentResponse,
  ComponentTypeSummary,
  ComponentUpdateRequest,
  CompositeComponentRequest,
  CompositeComponentTypeRequest,
  CompositeComponentUpdateRequest,
  ConflictException,
  ConnectorFailureException,
  ConnectorTimeoutException,
  DataConnector,
  DataType,
  DataValue,
  DestinationConfiguration,
  EntityPropertyReference,
  EntitySummary,
  FilterByAsset,
  FilterByAssetModel,
  FilterByComponentType,
  FilterByEntity,
  FunctionRequest,
  InternalServerException,
  InterpolationParameters,
  IotSiteWiseSourceConfiguration,
  IotSiteWiseSourceConfigurationFilter,
  IotTwinMakerDestinationConfiguration,
  IotTwinMakerSourceConfiguration,
  IotTwinMakerSourceConfigurationFilter,
  LambdaFunction,
  ListComponentTypesFilter,
  ListEntitiesFilter,
  ListMetadataTransferJobsFilter,
  MetadataTransferJobSummary,
  OrderBy,
  ParentEntityUpdateRequest,
  PricingPlan,
  PropertyDefinitionRequest,
  PropertyDefinitionResponse,
  PropertyFilter,
  PropertyGroupRequest,
  PropertyLatestValue,
  PropertyRequest,
  PropertyResponse,
  PropertySummary,
  PropertyValue,
  PropertyValueEntry,
  PropertyValueHistory,
  QueryTimeoutException,
  Relationship,
  RelationshipValue,
  ResourceNotFoundException,
  Row,
  S3DestinationConfiguration,
  S3SourceConfiguration,
  SceneSummary,
  ServiceQuotaExceededException,
  SourceConfiguration,
  SyncJobSummary,
  SyncResourceFilter,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/entity-properties");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      entries: (_) => se_Entries(_, context),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelMetadataTransferJobCommand
 */
export const se_CancelMetadataTransferJobCommand = async (
  input: CancelMetadataTransferJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/metadata-transfer-jobs/{metadataTransferJobId}/cancel");
  b.p("metadataTransferJobId", () => input.metadataTransferJobId!, "{metadataTransferJobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateComponentTypeCommand
 */
export const se_CreateComponentTypeCommand = async (
  input: CreateComponentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/component-types/{componentTypeId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("componentTypeId", () => input.componentTypeId!, "{componentTypeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      componentTypeName: [],
      compositeComponentTypes: (_) => _json(_),
      description: [],
      extendsFrom: (_) => _json(_),
      functions: (_) => _json(_),
      isSingleton: [],
      propertyDefinitions: (_) => se_PropertyDefinitionsRequest(_, context),
      propertyGroups: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEntityCommand
 */
export const se_CreateEntityCommand = async (
  input: CreateEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/entities");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      components: (_) => se_ComponentsMapRequest(_, context),
      compositeComponents: (_) => se_CompositeComponentsMapRequest(_, context),
      description: [],
      entityId: [],
      entityName: [],
      parentEntityId: [],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMetadataTransferJobCommand
 */
export const se_CreateMetadataTransferJobCommand = async (
  input: CreateMetadataTransferJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/metadata-transfer-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      destination: (_) => _json(_),
      metadataTransferJobId: [],
      sources: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSceneCommand
 */
export const se_CreateSceneCommand = async (
  input: CreateSceneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/scenes");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      capabilities: (_) => _json(_),
      contentLocation: [],
      description: [],
      sceneId: [],
      sceneMetadata: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSyncJobCommand
 */
export const se_CreateSyncJobCommand = async (
  input: CreateSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/sync-jobs/{syncSource}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("syncSource", () => input.syncSource!, "{syncSource}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      syncRole: [],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkspaceCommand
 */
export const se_CreateWorkspaceCommand = async (
  input: CreateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      role: [],
      s3Location: [],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteComponentTypeCommand
 */
export const se_DeleteComponentTypeCommand = async (
  input: DeleteComponentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/component-types/{componentTypeId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("componentTypeId", () => input.componentTypeId!, "{componentTypeId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEntityCommand
 */
export const se_DeleteEntityCommand = async (
  input: DeleteEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/entities/{entityId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("entityId", () => input.entityId!, "{entityId}", false);
  const query: any = map({
    [_iR]: [() => input.isRecursive !== void 0, () => input[_iR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSceneCommand
 */
export const se_DeleteSceneCommand = async (
  input: DeleteSceneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/scenes/{sceneId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("sceneId", () => input.sceneId!, "{sceneId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSyncJobCommand
 */
export const se_DeleteSyncJobCommand = async (
  input: DeleteSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/sync-jobs/{syncSource}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("syncSource", () => input.syncSource!, "{syncSource}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkspaceCommand
 */
export const se_DeleteWorkspaceCommand = async (
  input: DeleteWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteQueryCommand
 */
export const se_ExecuteQueryCommand = async (
  input: ExecuteQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/queries/execution");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      queryStatement: [],
      workspaceId: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetComponentTypeCommand
 */
export const se_GetComponentTypeCommand = async (
  input: GetComponentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/component-types/{componentTypeId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("componentTypeId", () => input.componentTypeId!, "{componentTypeId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEntityCommand
 */
export const se_GetEntityCommand = async (
  input: GetEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/entities/{entityId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("entityId", () => input.entityId!, "{entityId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMetadataTransferJobCommand
 */
export const se_GetMetadataTransferJobCommand = async (
  input: GetMetadataTransferJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/metadata-transfer-jobs/{metadataTransferJobId}");
  b.p("metadataTransferJobId", () => input.metadataTransferJobId!, "{metadataTransferJobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPricingPlanCommand
 */
export const se_GetPricingPlanCommand = async (
  input: GetPricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/pricingplan");
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPropertyValueCommand
 */
export const se_GetPropertyValueCommand = async (
  input: GetPropertyValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/entity-properties/value");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      componentName: [],
      componentPath: [],
      componentTypeId: [],
      entityId: [],
      maxResults: [],
      nextToken: [],
      propertyGroupName: [],
      selectedProperties: (_) => _json(_),
      tabularConditions: (_) => se_TabularConditions(_, context),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPropertyValueHistoryCommand
 */
export const se_GetPropertyValueHistoryCommand = async (
  input: GetPropertyValueHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/entity-properties/history");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      componentName: [],
      componentPath: [],
      componentTypeId: [],
      endDateTime: (_) => _.getTime() / 1_000,
      endTime: [],
      entityId: [],
      interpolation: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      orderByTime: [],
      propertyFilters: (_) => se_PropertyFilters(_, context),
      selectedProperties: (_) => _json(_),
      startDateTime: (_) => _.getTime() / 1_000,
      startTime: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSceneCommand
 */
export const se_GetSceneCommand = async (
  input: GetSceneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}/scenes/{sceneId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("sceneId", () => input.sceneId!, "{sceneId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSyncJobCommand
 */
export const se_GetSyncJobCommand = async (
  input: GetSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sync-jobs/{syncSource}");
  b.p("syncSource", () => input.syncSource!, "{syncSource}", false);
  const query: any = map({
    [_w]: [, input[_wI]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkspaceCommand
 */
export const se_GetWorkspaceCommand = async (
  input: GetWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workspaces/{workspaceId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListComponentsCommand
 */
export const se_ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/entities/{entityId}/components-list");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("entityId", () => input.entityId!, "{entityId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      componentPath: [],
      maxResults: [],
      nextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListComponentTypesCommand
 */
export const se_ListComponentTypesCommand = async (
  input: ListComponentTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/component-types-list");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEntitiesCommand
 */
export const se_ListEntitiesCommand = async (
  input: ListEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/entities-list");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMetadataTransferJobsCommand
 */
export const se_ListMetadataTransferJobsCommand = async (
  input: ListMetadataTransferJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/metadata-transfer-jobs-list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationType: [],
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sourceType: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPropertiesCommand
 */
export const se_ListPropertiesCommand = async (
  input: ListPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/properties-list");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      componentName: [],
      componentPath: [],
      entityId: [],
      maxResults: [],
      nextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListScenesCommand
 */
export const se_ListScenesCommand = async (
  input: ListScenesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/scenes-list");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSyncJobsCommand
 */
export const se_ListSyncJobsCommand = async (
  input: ListSyncJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/sync-jobs-list");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSyncResourcesCommand
 */
export const se_ListSyncResourcesCommand = async (
  input: ListSyncResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/sync-jobs/{syncSource}/resources-list");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("syncSource", () => input.syncSource!, "{syncSource}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags-list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      resourceARN: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkspacesCommand
 */
export const se_ListWorkspacesCommand = async (
  input: ListWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces-list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceARN: [],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags");
  const query: any = map({
    [_rARN]: [, __expectNonNull(input[_rARN]!, `resourceARN`)],
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateComponentTypeCommand
 */
export const se_UpdateComponentTypeCommand = async (
  input: UpdateComponentTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/component-types/{componentTypeId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("componentTypeId", () => input.componentTypeId!, "{componentTypeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      componentTypeName: [],
      compositeComponentTypes: (_) => _json(_),
      description: [],
      extendsFrom: (_) => _json(_),
      functions: (_) => _json(_),
      isSingleton: [],
      propertyDefinitions: (_) => se_PropertyDefinitionsRequest(_, context),
      propertyGroups: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEntityCommand
 */
export const se_UpdateEntityCommand = async (
  input: UpdateEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/entities/{entityId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("entityId", () => input.entityId!, "{entityId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      componentUpdates: (_) => se_ComponentUpdatesMapRequest(_, context),
      compositeComponentUpdates: (_) => se_CompositeComponentUpdatesMapRequest(_, context),
      description: [],
      entityName: [],
      parentEntityUpdate: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePricingPlanCommand
 */
export const se_UpdatePricingPlanCommand = async (
  input: UpdatePricingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/pricingplan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      bundleNames: (_) => _json(_),
      pricingMode: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSceneCommand
 */
export const se_UpdateSceneCommand = async (
  input: UpdateSceneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}/scenes/{sceneId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  b.p("sceneId", () => input.sceneId!, "{sceneId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      capabilities: (_) => _json(_),
      contentLocation: [],
      description: [],
      sceneMetadata: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkspaceCommand
 */
export const se_UpdateWorkspaceCommand = async (
  input: UpdateWorkspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workspaces/{workspaceId}");
  b.p("workspaceId", () => input.workspaceId!, "{workspaceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      role: [],
      s3Location: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchPutPropertyValuesCommand
 */
export const de_BatchPutPropertyValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutPropertyValuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: (_) => de_ErrorEntries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelMetadataTransferJobCommand
 */
export const de_CancelMetadataTransferJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMetadataTransferJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    metadataTransferJobId: __expectString,
    progress: _json,
    status: _json,
    updateDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateComponentTypeCommand
 */
export const de_CreateComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEntityCommand
 */
export const de_CreateEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    entityId: __expectString,
    state: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMetadataTransferJobCommand
 */
export const de_CreateMetadataTransferJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMetadataTransferJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metadataTransferJobId: __expectString,
    status: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSceneCommand
 */
export const de_CreateSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSyncJobCommand
 */
export const de_CreateSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSyncJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkspaceCommand
 */
export const de_CreateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteComponentTypeCommand
 */
export const de_DeleteComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    state: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEntityCommand
 */
export const de_DeleteEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    state: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSceneCommand
 */
export const de_DeleteSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSyncJobCommand
 */
export const de_DeleteSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSyncJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    state: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkspaceCommand
 */
export const de_DeleteWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteQueryCommand
 */
export const de_ExecuteQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    columnDescriptions: _json,
    nextToken: __expectString,
    rows: (_) => de_Rows(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetComponentTypeCommand
 */
export const de_GetComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    componentTypeId: __expectString,
    componentTypeName: __expectString,
    compositeComponentTypes: _json,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    extendsFrom: _json,
    functions: _json,
    isAbstract: __expectBoolean,
    isSchemaInitialized: __expectBoolean,
    isSingleton: __expectBoolean,
    propertyDefinitions: (_) => de_PropertyDefinitionsResponse(_, context),
    propertyGroups: _json,
    status: _json,
    syncSource: __expectString,
    updateDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEntityCommand
 */
export const de_GetEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    areAllComponentsReturned: __expectBoolean,
    arn: __expectString,
    components: (_) => de_ComponentsMap(_, context),
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    entityId: __expectString,
    entityName: __expectString,
    hasChildEntities: __expectBoolean,
    parentEntityId: __expectString,
    status: _json,
    syncSource: __expectString,
    updateDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMetadataTransferJobCommand
 */
export const de_GetMetadataTransferJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetadataTransferJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    destination: _json,
    metadataTransferJobId: __expectString,
    metadataTransferJobRole: __expectString,
    progress: _json,
    reportUrl: __expectString,
    sources: _json,
    status: _json,
    updateDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPricingPlanCommand
 */
export const de_GetPricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    currentPricingPlan: (_) => de_PricingPlan(_, context),
    pendingPricingPlan: (_) => de_PricingPlan(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPropertyValueCommand
 */
export const de_GetPropertyValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertyValueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    propertyValues: (_) => de_PropertyLatestValueMap(_, context),
    tabularPropertyValues: (_) => de_TabularPropertyValues(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPropertyValueHistoryCommand
 */
export const de_GetPropertyValueHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPropertyValueHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    propertyValues: (_) => de_PropertyValueList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSceneCommand
 */
export const de_GetSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    capabilities: _json,
    contentLocation: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    error: _json,
    generatedSceneMetadata: _json,
    sceneId: __expectString,
    sceneMetadata: _json,
    updateDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSyncJobCommand
 */
export const de_GetSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSyncJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: _json,
    syncRole: __expectString,
    syncSource: __expectString,
    updateDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkspaceCommand
 */
export const de_GetWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    linkedServices: _json,
    role: __expectString,
    s3Location: __expectString,
    updateDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentsCommand
 */
export const de_ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    componentSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentTypesCommand
 */
export const de_ListComponentTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    componentTypeSummaries: (_) => de_ComponentTypeSummaries(_, context),
    maxResults: __expectInt32,
    nextToken: __expectString,
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEntitiesCommand
 */
export const de_ListEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    entitySummaries: (_) => de_EntitySummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMetadataTransferJobsCommand
 */
export const de_ListMetadataTransferJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetadataTransferJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    metadataTransferJobSummaries: (_) => de_MetadataTransferJobSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPropertiesCommand
 */
export const de_ListPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    propertySummaries: (_) => de_PropertySummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListScenesCommand
 */
export const de_ListScenesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScenesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sceneSummaries: (_) => de_SceneSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSyncJobsCommand
 */
export const de_ListSyncJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSyncJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    syncJobSummaries: (_) => de_SyncJobSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSyncResourcesCommand
 */
export const de_ListSyncResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSyncResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    syncResources: (_) => de_SyncResourceSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkspacesCommand
 */
export const de_ListWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkspacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workspaceSummaries: (_) => de_WorkspaceSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateComponentTypeCommand
 */
export const de_UpdateComponentTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    componentTypeId: __expectString,
    state: __expectString,
    workspaceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEntityCommand
 */
export const de_UpdateEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEntityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    state: __expectString,
    updateDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePricingPlanCommand
 */
export const de_UpdatePricingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePricingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    currentPricingPlan: (_) => de_PricingPlan(_, context),
    pendingPricingPlan: (_) => de_PricingPlan(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSceneCommand
 */
export const de_UpdateSceneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSceneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    updateDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkspaceCommand
 */
export const de_UpdateWorkspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkspaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    updateDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.iottwinmaker#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iottwinmaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iottwinmaker#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "QueryTimeoutException":
    case "com.amazonaws.iottwinmaker#QueryTimeoutException":
      throw await de_QueryTimeoutExceptionRes(parsedOutput, context);
    case "ConnectorFailureException":
    case "com.amazonaws.iottwinmaker#ConnectorFailureException":
      throw await de_ConnectorFailureExceptionRes(parsedOutput, context);
    case "ConnectorTimeoutException":
    case "com.amazonaws.iottwinmaker#ConnectorTimeoutException":
      throw await de_ConnectorTimeoutExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.iottwinmaker#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1QueryTimeoutExceptionRes
 */
const de_QueryTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ComponentPropertyGroupRequest omitted.

// se_ComponentPropertyGroupRequests omitted.

/**
 * serializeAws_restJson1ComponentRequest
 */
const se_ComponentRequest = (input: ComponentRequest, context: __SerdeContext): any => {
  return take(input, {
    componentTypeId: [],
    description: [],
    properties: (_) => se_PropertyRequests(_, context),
    propertyGroups: _json,
  });
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
  return take(input, {
    componentTypeId: [],
    description: [],
    propertyGroupUpdates: _json,
    propertyUpdates: (_) => se_PropertyRequests(_, context),
    updateType: [],
  });
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
 * serializeAws_restJson1CompositeComponentRequest
 */
const se_CompositeComponentRequest = (input: CompositeComponentRequest, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    properties: (_) => se_PropertyRequests(_, context),
    propertyGroups: _json,
  });
};

/**
 * serializeAws_restJson1CompositeComponentsMapRequest
 */
const se_CompositeComponentsMapRequest = (
  input: Record<string, CompositeComponentRequest>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_CompositeComponentRequest(value, context);
    return acc;
  }, {});
};

// se_CompositeComponentTypeRequest omitted.

// se_CompositeComponentTypesRequest omitted.

/**
 * serializeAws_restJson1CompositeComponentUpdateRequest
 */
const se_CompositeComponentUpdateRequest = (input: CompositeComponentUpdateRequest, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    propertyGroupUpdates: _json,
    propertyUpdates: (_) => se_PropertyRequests(_, context),
    updateType: [],
  });
};

/**
 * serializeAws_restJson1CompositeComponentUpdatesMapRequest
 */
const se_CompositeComponentUpdatesMapRequest = (
  input: Record<string, CompositeComponentUpdateRequest>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_CompositeComponentUpdateRequest(value, context);
    return acc;
  }, {});
};

// se_Configuration omitted.

// se_DataConnector omitted.

/**
 * serializeAws_restJson1DataType
 */
const se_DataType = (input: DataType, context: __SerdeContext): any => {
  return take(input, {
    allowedValues: (_) => se_DataValueList(_, context),
    nestedType: (_) => se_DataType(_, context),
    relationship: _json,
    type: [],
    unitOfMeasure: [],
  });
};

/**
 * serializeAws_restJson1DataValue
 */
const se_DataValue = (input: DataValue, context: __SerdeContext): any => {
  return take(input, {
    booleanValue: [],
    doubleValue: __serializeFloat,
    expression: [],
    integerValue: [],
    listValue: (_) => se_DataValueList(_, context),
    longValue: [],
    mapValue: (_) => se_DataValueMap(_, context),
    relationshipValue: _json,
    stringValue: [],
  });
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

// se_DestinationConfiguration omitted.

// se_EntityPropertyReference omitted.

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

// se_ExtendsFrom omitted.

// se_ExternalIdProperty omitted.

// se_FilterByAsset omitted.

// se_FilterByAssetModel omitted.

// se_FilterByComponentType omitted.

// se_FilterByEntity omitted.

// se_FunctionRequest omitted.

// se_FunctionsRequest omitted.

// se_InterpolationParameters omitted.

// se_IotSiteWiseSourceConfiguration omitted.

// se_IotSiteWiseSourceConfigurationFilter omitted.

// se_IotSiteWiseSourceConfigurationFilters omitted.

// se_IotTwinMakerDestinationConfiguration omitted.

// se_IotTwinMakerSourceConfiguration omitted.

// se_IotTwinMakerSourceConfigurationFilter omitted.

// se_IotTwinMakerSourceConfigurationFilters omitted.

// se_LambdaFunction omitted.

// se_ListComponentTypesFilter omitted.

// se_ListComponentTypesFilters omitted.

// se_ListEntitiesFilter omitted.

// se_ListEntitiesFilters omitted.

// se_ListMetadataTransferJobsFilter omitted.

// se_ListMetadataTransferJobsFilters omitted.

// se_OrderBy omitted.

// se_OrderByList omitted.

// se_ParentEntityUpdateRequest omitted.

// se_PricingBundles omitted.

/**
 * serializeAws_restJson1PropertyDefinitionRequest
 */
const se_PropertyDefinitionRequest = (input: PropertyDefinitionRequest, context: __SerdeContext): any => {
  return take(input, {
    configuration: _json,
    dataType: (_) => se_DataType(_, context),
    defaultValue: (_) => se_DataValue(_, context),
    displayName: [],
    isExternalId: [],
    isRequiredInEntity: [],
    isStoredExternally: [],
    isTimeSeries: [],
  });
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
  return take(input, {
    operator: [],
    propertyName: [],
    value: (_) => se_DataValue(_, context),
  });
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

// se_PropertyGroupRequest omitted.

// se_PropertyGroupsRequest omitted.

// se_PropertyNames omitted.

/**
 * serializeAws_restJson1PropertyRequest
 */
const se_PropertyRequest = (input: PropertyRequest, context: __SerdeContext): any => {
  return take(input, {
    definition: (_) => se_PropertyDefinitionRequest(_, context),
    updateType: [],
    value: (_) => se_DataValue(_, context),
  });
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
  return take(input, {
    time: [],
    timestamp: (_) => _.getTime() / 1_000,
    value: (_) => se_DataValue(_, context),
  });
};

/**
 * serializeAws_restJson1PropertyValueEntry
 */
const se_PropertyValueEntry = (input: PropertyValueEntry, context: __SerdeContext): any => {
  return take(input, {
    entityPropertyReference: _json,
    propertyValues: (_) => se_PropertyValues(_, context),
  });
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

// se_Relationship omitted.

// se_RelationshipValue omitted.

// se_RequiredProperties omitted.

// se_S3DestinationConfiguration omitted.

// se_S3SourceConfiguration omitted.

// se_SceneCapabilities omitted.

// se_SceneMetadataMap omitted.

// se_SelectedPropertyList omitted.

// se_SourceConfiguration omitted.

// se_SourceConfigurations omitted.

// se_SyncResourceFilter omitted.

// se_SyncResourceFilters omitted.

/**
 * serializeAws_restJson1TabularConditions
 */
const se_TabularConditions = (input: TabularConditions, context: __SerdeContext): any => {
  return take(input, {
    orderBy: _json,
    propertyFilters: (_) => se_PropertyFilters(_, context),
  });
};

// se_TagMap omitted.

/**
 * deserializeAws_restJson1BatchPutPropertyError
 */
const de_BatchPutPropertyError = (output: any, context: __SerdeContext): BatchPutPropertyError => {
  return take(output, {
    entry: (_: any) => de_PropertyValueEntry(_, context),
    errorCode: __expectString,
    errorMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BatchPutPropertyErrorEntry
 */
const de_BatchPutPropertyErrorEntry = (output: any, context: __SerdeContext): BatchPutPropertyErrorEntry => {
  return take(output, {
    errors: (_: any) => de_Errors(_, context),
  }) as any;
};

// de_BundleInformation omitted.

// de_ColumnDescription omitted.

// de_ColumnDescriptions omitted.

// de_ComponentPropertyGroupResponse omitted.

// de_ComponentPropertyGroupResponses omitted.

/**
 * deserializeAws_restJson1ComponentResponse
 */
const de_ComponentResponse = (output: any, context: __SerdeContext): ComponentResponse => {
  return take(output, {
    areAllCompositeComponentsReturned: __expectBoolean,
    areAllPropertiesReturned: __expectBoolean,
    componentName: __expectString,
    componentTypeId: __expectString,
    compositeComponents: _json,
    definedIn: __expectString,
    description: __expectString,
    properties: (_: any) => de_PropertyResponses(_, context),
    propertyGroups: _json,
    status: _json,
    syncSource: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ComponentsMap
 */
const de_ComponentsMap = (output: any, context: __SerdeContext): Record<string, ComponentResponse> => {
  return Object.entries(output).reduce((acc: Record<string, ComponentResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_ComponentResponse(value, context);
    return acc;
  }, {} as Record<string, ComponentResponse>);
};

// de_ComponentSummaries omitted.

// de_ComponentSummary omitted.

/**
 * deserializeAws_restJson1ComponentTypeSummaries
 */
const de_ComponentTypeSummaries = (output: any, context: __SerdeContext): ComponentTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ComponentTypeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentTypeSummary
 */
const de_ComponentTypeSummary = (output: any, context: __SerdeContext): ComponentTypeSummary => {
  return take(output, {
    arn: __expectString,
    componentTypeId: __expectString,
    componentTypeName: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    status: _json,
    updateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_CompositeComponentResponse omitted.

// de_CompositeComponentTypeResponse omitted.

// de_CompositeComponentTypesResponse omitted.

// de_Configuration omitted.

// de_DataConnector omitted.

/**
 * deserializeAws_restJson1DataType
 */
const de_DataType = (output: any, context: __SerdeContext): DataType => {
  return take(output, {
    allowedValues: (_: any) => de_DataValueList(_, context),
    nestedType: (_: any) => de_DataType(_, context),
    relationship: _json,
    type: __expectString,
    unitOfMeasure: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DataValue
 */
const de_DataValue = (output: any, context: __SerdeContext): DataValue => {
  return take(output, {
    booleanValue: __expectBoolean,
    doubleValue: __limitedParseDouble,
    expression: __expectString,
    integerValue: __expectInt32,
    listValue: (_: any) => de_DataValueList(_, context),
    longValue: __expectLong,
    mapValue: (_: any) => de_DataValueMap(_, context),
    relationshipValue: _json,
    stringValue: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DataValueList
 */
const de_DataValueList = (output: any, context: __SerdeContext): DataValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
    acc[key as string] = de_DataValue(value, context);
    return acc;
  }, {} as Record<string, DataValue>);
};

// de_DestinationConfiguration omitted.

// de_EntityPropertyReference omitted.

/**
 * deserializeAws_restJson1EntitySummaries
 */
const de_EntitySummaries = (output: any, context: __SerdeContext): EntitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EntitySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EntitySummary
 */
const de_EntitySummary = (output: any, context: __SerdeContext): EntitySummary => {
  return take(output, {
    arn: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    entityId: __expectString,
    entityName: __expectString,
    hasChildEntities: __expectBoolean,
    parentEntityId: __expectString,
    status: _json,
    updateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ErrorDetails omitted.

/**
 * deserializeAws_restJson1ErrorEntries
 */
const de_ErrorEntries = (output: any, context: __SerdeContext): BatchPutPropertyErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_BatchPutPropertyError(entry, context);
    });
  return retVal;
};

// de_ExtendsFrom omitted.

// de_ExternalIdProperty omitted.

// de_FilterByAsset omitted.

// de_FilterByAssetModel omitted.

// de_FilterByComponentType omitted.

// de_FilterByEntity omitted.

// de_FunctionResponse omitted.

// de_FunctionsResponse omitted.

// de_GeneratedSceneMetadataMap omitted.

// de_IotSiteWiseSourceConfiguration omitted.

// de_IotSiteWiseSourceConfigurationFilter omitted.

// de_IotSiteWiseSourceConfigurationFilters omitted.

// de_IotTwinMakerDestinationConfiguration omitted.

// de_IotTwinMakerSourceConfiguration omitted.

// de_IotTwinMakerSourceConfigurationFilter omitted.

// de_IotTwinMakerSourceConfigurationFilters omitted.

// de_LambdaFunction omitted.

// de_LinkedServices omitted.

// de_MetadataTransferJobProgress omitted.

// de_MetadataTransferJobStatus omitted.

/**
 * deserializeAws_restJson1MetadataTransferJobSummaries
 */
const de_MetadataTransferJobSummaries = (output: any, context: __SerdeContext): MetadataTransferJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetadataTransferJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetadataTransferJobSummary
 */
const de_MetadataTransferJobSummary = (output: any, context: __SerdeContext): MetadataTransferJobSummary => {
  return take(output, {
    arn: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metadataTransferJobId: __expectString,
    progress: _json,
    status: _json,
    updateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_PricingBundles omitted.

/**
 * deserializeAws_restJson1PricingPlan
 */
const de_PricingPlan = (output: any, context: __SerdeContext): PricingPlan => {
  return take(output, {
    billableEntityCount: __expectLong,
    bundleInformation: _json,
    effectiveDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pricingMode: __expectString,
    updateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updateReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PropertyDefinitionResponse
 */
const de_PropertyDefinitionResponse = (output: any, context: __SerdeContext): PropertyDefinitionResponse => {
  return take(output, {
    configuration: _json,
    dataType: (_: any) => de_DataType(_, context),
    defaultValue: (_: any) => de_DataValue(_, context),
    displayName: __expectString,
    isExternalId: __expectBoolean,
    isFinal: __expectBoolean,
    isImported: __expectBoolean,
    isInherited: __expectBoolean,
    isRequiredInEntity: __expectBoolean,
    isStoredExternally: __expectBoolean,
    isTimeSeries: __expectBoolean,
  }) as any;
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
      acc[key as string] = de_PropertyDefinitionResponse(value, context);
      return acc;
    },
    {} as Record<string, PropertyDefinitionResponse>
  );
};

// de_PropertyGroupResponse omitted.

// de_PropertyGroupsResponse omitted.

/**
 * deserializeAws_restJson1PropertyLatestValue
 */
const de_PropertyLatestValue = (output: any, context: __SerdeContext): PropertyLatestValue => {
  return take(output, {
    propertyReference: _json,
    propertyValue: (_: any) => de_DataValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PropertyLatestValueMap
 */
const de_PropertyLatestValueMap = (output: any, context: __SerdeContext): Record<string, PropertyLatestValue> => {
  return Object.entries(output).reduce((acc: Record<string, PropertyLatestValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_PropertyLatestValue(value, context);
    return acc;
  }, {} as Record<string, PropertyLatestValue>);
};

// de_PropertyNames omitted.

/**
 * deserializeAws_restJson1PropertyResponse
 */
const de_PropertyResponse = (output: any, context: __SerdeContext): PropertyResponse => {
  return take(output, {
    areAllPropertyValuesReturned: __expectBoolean,
    definition: (_: any) => de_PropertyDefinitionResponse(_, context),
    value: (_: any) => de_DataValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PropertyResponses
 */
const de_PropertyResponses = (output: any, context: __SerdeContext): Record<string, PropertyResponse> => {
  return Object.entries(output).reduce((acc: Record<string, PropertyResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_PropertyResponse(value, context);
    return acc;
  }, {} as Record<string, PropertyResponse>);
};

/**
 * deserializeAws_restJson1PropertySummaries
 */
const de_PropertySummaries = (output: any, context: __SerdeContext): PropertySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PropertySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PropertySummary
 */
const de_PropertySummary = (output: any, context: __SerdeContext): PropertySummary => {
  return take(output, {
    areAllPropertyValuesReturned: __expectBoolean,
    definition: (_: any) => de_PropertyDefinitionResponse(_, context),
    propertyName: __expectString,
    value: (_: any) => de_DataValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PropertyTableValue
 */
const de_PropertyTableValue = (output: any, context: __SerdeContext): Record<string, DataValue> => {
  return Object.entries(output).reduce((acc: Record<string, DataValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_DataValue(value, context);
    return acc;
  }, {} as Record<string, DataValue>);
};

/**
 * deserializeAws_restJson1PropertyValue
 */
const de_PropertyValue = (output: any, context: __SerdeContext): PropertyValue => {
  return take(output, {
    time: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    value: (_: any) => de_DataValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PropertyValueEntry
 */
const de_PropertyValueEntry = (output: any, context: __SerdeContext): PropertyValueEntry => {
  return take(output, {
    entityPropertyReference: _json,
    propertyValues: (_: any) => de_PropertyValues(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PropertyValueHistory
 */
const de_PropertyValueHistory = (output: any, context: __SerdeContext): PropertyValueHistory => {
  return take(output, {
    entityPropertyReference: _json,
    values: (_: any) => de_Values(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PropertyValueList
 */
const de_PropertyValueList = (output: any, context: __SerdeContext): PropertyValueHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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

// de_Relationship omitted.

// de_RelationshipValue omitted.

// de_RequiredProperties omitted.

/**
 * deserializeAws_restJson1Row
 */
const de_Row = (output: any, context: __SerdeContext): Row => {
  return take(output, {
    rowData: (_: any) => de_RowData(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RowData
 */
const de_RowData = (output: any, context: __SerdeContext): __DocumentType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Row(entry, context);
    });
  return retVal;
};

// de_S3DestinationConfiguration omitted.

// de_S3SourceConfiguration omitted.

// de_SceneCapabilities omitted.

// de_SceneError omitted.

// de_SceneMetadataMap omitted.

/**
 * deserializeAws_restJson1SceneSummaries
 */
const de_SceneSummaries = (output: any, context: __SerdeContext): SceneSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SceneSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SceneSummary
 */
const de_SceneSummary = (output: any, context: __SerdeContext): SceneSummary => {
  return take(output, {
    arn: __expectString,
    contentLocation: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    sceneId: __expectString,
    updateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_SourceConfiguration omitted.

// de_SourceConfigurations omitted.

// de_Status omitted.

// de_SyncJobStatus omitted.

/**
 * deserializeAws_restJson1SyncJobSummaries
 */
const de_SyncJobSummaries = (output: any, context: __SerdeContext): SyncJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SyncJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SyncJobSummary
 */
const de_SyncJobSummary = (output: any, context: __SerdeContext): SyncJobSummary => {
  return take(output, {
    arn: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: _json,
    syncSource: __expectString,
    updateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workspaceId: __expectString,
  }) as any;
};

// de_SyncResourceStatus omitted.

/**
 * deserializeAws_restJson1SyncResourceSummaries
 */
const de_SyncResourceSummaries = (output: any, context: __SerdeContext): SyncResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SyncResourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SyncResourceSummary
 */
const de_SyncResourceSummary = (output: any, context: __SerdeContext): SyncResourceSummary => {
  return take(output, {
    externalId: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    status: _json,
    updateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1TabularPropertyValue
 */
const de_TabularPropertyValue = (output: any, context: __SerdeContext): Record<string, DataValue>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_TabularPropertyValue(entry, context);
    });
  return retVal;
};

// de_TagMap omitted.

/**
 * deserializeAws_restJson1Values
 */
const de_Values = (output: any, context: __SerdeContext): PropertyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_WorkspaceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkspaceSummary
 */
const de_WorkspaceSummary = (output: any, context: __SerdeContext): WorkspaceSummary => {
  return take(output, {
    arn: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    linkedServices: _json,
    updateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workspaceId: __expectString,
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

const _iR = "isRecursive";
const _rARN = "resourceARN";
const _tK = "tagKeys";
const _w = "workspace";
const _wI = "workspaceId";
