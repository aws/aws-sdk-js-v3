// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AssociateEntityToThingCommandInput,
  AssociateEntityToThingCommandOutput,
} from "../commands/AssociateEntityToThingCommand";
import { CreateFlowTemplateCommandInput, CreateFlowTemplateCommandOutput } from "../commands/CreateFlowTemplateCommand";
import {
  CreateSystemInstanceCommandInput,
  CreateSystemInstanceCommandOutput,
} from "../commands/CreateSystemInstanceCommand";
import {
  CreateSystemTemplateCommandInput,
  CreateSystemTemplateCommandOutput,
} from "../commands/CreateSystemTemplateCommand";
import { DeleteFlowTemplateCommandInput, DeleteFlowTemplateCommandOutput } from "../commands/DeleteFlowTemplateCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "../commands/DeleteNamespaceCommand";
import {
  DeleteSystemInstanceCommandInput,
  DeleteSystemInstanceCommandOutput,
} from "../commands/DeleteSystemInstanceCommand";
import {
  DeleteSystemTemplateCommandInput,
  DeleteSystemTemplateCommandOutput,
} from "../commands/DeleteSystemTemplateCommand";
import {
  DeploySystemInstanceCommandInput,
  DeploySystemInstanceCommandOutput,
} from "../commands/DeploySystemInstanceCommand";
import {
  DeprecateFlowTemplateCommandInput,
  DeprecateFlowTemplateCommandOutput,
} from "../commands/DeprecateFlowTemplateCommand";
import {
  DeprecateSystemTemplateCommandInput,
  DeprecateSystemTemplateCommandOutput,
} from "../commands/DeprecateSystemTemplateCommand";
import { DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput } from "../commands/DescribeNamespaceCommand";
import {
  DissociateEntityFromThingCommandInput,
  DissociateEntityFromThingCommandOutput,
} from "../commands/DissociateEntityFromThingCommand";
import { GetEntitiesCommandInput, GetEntitiesCommandOutput } from "../commands/GetEntitiesCommand";
import { GetFlowTemplateCommandInput, GetFlowTemplateCommandOutput } from "../commands/GetFlowTemplateCommand";
import {
  GetFlowTemplateRevisionsCommandInput,
  GetFlowTemplateRevisionsCommandOutput,
} from "../commands/GetFlowTemplateRevisionsCommand";
import {
  GetNamespaceDeletionStatusCommandInput,
  GetNamespaceDeletionStatusCommandOutput,
} from "../commands/GetNamespaceDeletionStatusCommand";
import { GetSystemInstanceCommandInput, GetSystemInstanceCommandOutput } from "../commands/GetSystemInstanceCommand";
import { GetSystemTemplateCommandInput, GetSystemTemplateCommandOutput } from "../commands/GetSystemTemplateCommand";
import {
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput,
} from "../commands/GetSystemTemplateRevisionsCommand";
import { GetUploadStatusCommandInput, GetUploadStatusCommandOutput } from "../commands/GetUploadStatusCommand";
import {
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput,
} from "../commands/ListFlowExecutionMessagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { SearchEntitiesCommandInput, SearchEntitiesCommandOutput } from "../commands/SearchEntitiesCommand";
import {
  SearchFlowExecutionsCommandInput,
  SearchFlowExecutionsCommandOutput,
} from "../commands/SearchFlowExecutionsCommand";
import {
  SearchFlowTemplatesCommandInput,
  SearchFlowTemplatesCommandOutput,
} from "../commands/SearchFlowTemplatesCommand";
import {
  SearchSystemInstancesCommandInput,
  SearchSystemInstancesCommandOutput,
} from "../commands/SearchSystemInstancesCommand";
import {
  SearchSystemTemplatesCommandInput,
  SearchSystemTemplatesCommandOutput,
} from "../commands/SearchSystemTemplatesCommand";
import { SearchThingsCommandInput, SearchThingsCommandOutput } from "../commands/SearchThingsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  UndeploySystemInstanceCommandInput,
  UndeploySystemInstanceCommandOutput,
} from "../commands/UndeploySystemInstanceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateFlowTemplateCommandInput, UpdateFlowTemplateCommandOutput } from "../commands/UpdateFlowTemplateCommand";
import {
  UpdateSystemTemplateCommandInput,
  UpdateSystemTemplateCommandOutput,
} from "../commands/UpdateSystemTemplateCommand";
import {
  UploadEntityDefinitionsCommandInput,
  UploadEntityDefinitionsCommandOutput,
} from "../commands/UploadEntityDefinitionsCommand";
import { IoTThingsGraphServiceException as __BaseException } from "../models/IoTThingsGraphServiceException";
import {
  AssociateEntityToThingRequest,
  AssociateEntityToThingResponse,
  CreateFlowTemplateRequest,
  CreateFlowTemplateResponse,
  CreateSystemInstanceRequest,
  CreateSystemInstanceResponse,
  CreateSystemTemplateRequest,
  CreateSystemTemplateResponse,
  DefinitionDocument,
  DeleteFlowTemplateRequest,
  DeleteFlowTemplateResponse,
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteSystemInstanceRequest,
  DeleteSystemInstanceResponse,
  DeleteSystemTemplateRequest,
  DeleteSystemTemplateResponse,
  DependencyRevision,
  DeploySystemInstanceRequest,
  DeploySystemInstanceResponse,
  DeprecateFlowTemplateRequest,
  DeprecateFlowTemplateResponse,
  DeprecateSystemTemplateRequest,
  DeprecateSystemTemplateResponse,
  DescribeNamespaceRequest,
  DescribeNamespaceResponse,
  DissociateEntityFromThingRequest,
  DissociateEntityFromThingResponse,
  EntityDescription,
  EntityFilter,
  EntityType,
  FlowExecutionMessage,
  FlowExecutionSummary,
  FlowTemplateDescription,
  FlowTemplateFilter,
  FlowTemplateSummary,
  GetEntitiesRequest,
  GetEntitiesResponse,
  GetFlowTemplateRequest,
  GetFlowTemplateResponse,
  GetFlowTemplateRevisionsRequest,
  GetFlowTemplateRevisionsResponse,
  GetNamespaceDeletionStatusRequest,
  GetNamespaceDeletionStatusResponse,
  GetSystemInstanceRequest,
  GetSystemInstanceResponse,
  GetSystemTemplateRequest,
  GetSystemTemplateResponse,
  GetSystemTemplateRevisionsRequest,
  GetSystemTemplateRevisionsResponse,
  GetUploadStatusRequest,
  GetUploadStatusResponse,
  InternalFailureException,
  InvalidRequestException,
  LimitExceededException,
  ListFlowExecutionMessagesRequest,
  ListFlowExecutionMessagesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MetricsConfiguration,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  SearchEntitiesRequest,
  SearchEntitiesResponse,
  SearchFlowExecutionsRequest,
  SearchFlowExecutionsResponse,
  SearchFlowTemplatesRequest,
  SearchFlowTemplatesResponse,
  SearchSystemInstancesRequest,
  SearchSystemInstancesResponse,
  SearchSystemTemplatesRequest,
  SearchSystemTemplatesResponse,
  SearchThingsRequest,
  SearchThingsResponse,
  SystemInstanceDescription,
  SystemInstanceFilter,
  SystemInstanceSummary,
  SystemTemplateDescription,
  SystemTemplateFilter,
  SystemTemplateSummary,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  Thing,
  ThrottlingException,
  UndeploySystemInstanceRequest,
  UndeploySystemInstanceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateFlowTemplateRequest,
  UpdateFlowTemplateResponse,
  UpdateSystemTemplateRequest,
  UpdateSystemTemplateResponse,
  UploadEntityDefinitionsRequest,
  UploadEntityDefinitionsResponse,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateEntityToThingCommand
 */
export const se_AssociateEntityToThingCommand = async (
  input: AssociateEntityToThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.AssociateEntityToThing",
  };
  let body: any;
  body = JSON.stringify(se_AssociateEntityToThingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFlowTemplateCommand
 */
export const se_CreateFlowTemplateCommand = async (
  input: CreateFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.CreateFlowTemplate",
  };
  let body: any;
  body = JSON.stringify(se_CreateFlowTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSystemInstanceCommand
 */
export const se_CreateSystemInstanceCommand = async (
  input: CreateSystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.CreateSystemInstance",
  };
  let body: any;
  body = JSON.stringify(se_CreateSystemInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSystemTemplateCommand
 */
export const se_CreateSystemTemplateCommand = async (
  input: CreateSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.CreateSystemTemplate",
  };
  let body: any;
  body = JSON.stringify(se_CreateSystemTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFlowTemplateCommand
 */
export const se_DeleteFlowTemplateCommand = async (
  input: DeleteFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.DeleteFlowTemplate",
  };
  let body: any;
  body = JSON.stringify(se_DeleteFlowTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNamespaceCommand
 */
export const se_DeleteNamespaceCommand = async (
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.DeleteNamespace",
  };
  let body: any;
  body = JSON.stringify(se_DeleteNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSystemInstanceCommand
 */
export const se_DeleteSystemInstanceCommand = async (
  input: DeleteSystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.DeleteSystemInstance",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSystemInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSystemTemplateCommand
 */
export const se_DeleteSystemTemplateCommand = async (
  input: DeleteSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.DeleteSystemTemplate",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSystemTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeploySystemInstanceCommand
 */
export const se_DeploySystemInstanceCommand = async (
  input: DeploySystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.DeploySystemInstance",
  };
  let body: any;
  body = JSON.stringify(se_DeploySystemInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeprecateFlowTemplateCommand
 */
export const se_DeprecateFlowTemplateCommand = async (
  input: DeprecateFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.DeprecateFlowTemplate",
  };
  let body: any;
  body = JSON.stringify(se_DeprecateFlowTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeprecateSystemTemplateCommand
 */
export const se_DeprecateSystemTemplateCommand = async (
  input: DeprecateSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.DeprecateSystemTemplate",
  };
  let body: any;
  body = JSON.stringify(se_DeprecateSystemTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeNamespaceCommand
 */
export const se_DescribeNamespaceCommand = async (
  input: DescribeNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.DescribeNamespace",
  };
  let body: any;
  body = JSON.stringify(se_DescribeNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DissociateEntityFromThingCommand
 */
export const se_DissociateEntityFromThingCommand = async (
  input: DissociateEntityFromThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.DissociateEntityFromThing",
  };
  let body: any;
  body = JSON.stringify(se_DissociateEntityFromThingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEntitiesCommand
 */
export const se_GetEntitiesCommand = async (
  input: GetEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.GetEntities",
  };
  let body: any;
  body = JSON.stringify(se_GetEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFlowTemplateCommand
 */
export const se_GetFlowTemplateCommand = async (
  input: GetFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.GetFlowTemplate",
  };
  let body: any;
  body = JSON.stringify(se_GetFlowTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFlowTemplateRevisionsCommand
 */
export const se_GetFlowTemplateRevisionsCommand = async (
  input: GetFlowTemplateRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.GetFlowTemplateRevisions",
  };
  let body: any;
  body = JSON.stringify(se_GetFlowTemplateRevisionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetNamespaceDeletionStatusCommand
 */
export const se_GetNamespaceDeletionStatusCommand = async (
  input: GetNamespaceDeletionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.GetNamespaceDeletionStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetNamespaceDeletionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSystemInstanceCommand
 */
export const se_GetSystemInstanceCommand = async (
  input: GetSystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.GetSystemInstance",
  };
  let body: any;
  body = JSON.stringify(se_GetSystemInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSystemTemplateCommand
 */
export const se_GetSystemTemplateCommand = async (
  input: GetSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.GetSystemTemplate",
  };
  let body: any;
  body = JSON.stringify(se_GetSystemTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSystemTemplateRevisionsCommand
 */
export const se_GetSystemTemplateRevisionsCommand = async (
  input: GetSystemTemplateRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.GetSystemTemplateRevisions",
  };
  let body: any;
  body = JSON.stringify(se_GetSystemTemplateRevisionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUploadStatusCommand
 */
export const se_GetUploadStatusCommand = async (
  input: GetUploadStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.GetUploadStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetUploadStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFlowExecutionMessagesCommand
 */
export const se_ListFlowExecutionMessagesCommand = async (
  input: ListFlowExecutionMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.ListFlowExecutionMessages",
  };
  let body: any;
  body = JSON.stringify(se_ListFlowExecutionMessagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchEntitiesCommand
 */
export const se_SearchEntitiesCommand = async (
  input: SearchEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.SearchEntities",
  };
  let body: any;
  body = JSON.stringify(se_SearchEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchFlowExecutionsCommand
 */
export const se_SearchFlowExecutionsCommand = async (
  input: SearchFlowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.SearchFlowExecutions",
  };
  let body: any;
  body = JSON.stringify(se_SearchFlowExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchFlowTemplatesCommand
 */
export const se_SearchFlowTemplatesCommand = async (
  input: SearchFlowTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.SearchFlowTemplates",
  };
  let body: any;
  body = JSON.stringify(se_SearchFlowTemplatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchSystemInstancesCommand
 */
export const se_SearchSystemInstancesCommand = async (
  input: SearchSystemInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.SearchSystemInstances",
  };
  let body: any;
  body = JSON.stringify(se_SearchSystemInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchSystemTemplatesCommand
 */
export const se_SearchSystemTemplatesCommand = async (
  input: SearchSystemTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.SearchSystemTemplates",
  };
  let body: any;
  body = JSON.stringify(se_SearchSystemTemplatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchThingsCommand
 */
export const se_SearchThingsCommand = async (
  input: SearchThingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.SearchThings",
  };
  let body: any;
  body = JSON.stringify(se_SearchThingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UndeploySystemInstanceCommand
 */
export const se_UndeploySystemInstanceCommand = async (
  input: UndeploySystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.UndeploySystemInstance",
  };
  let body: any;
  body = JSON.stringify(se_UndeploySystemInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFlowTemplateCommand
 */
export const se_UpdateFlowTemplateCommand = async (
  input: UpdateFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.UpdateFlowTemplate",
  };
  let body: any;
  body = JSON.stringify(se_UpdateFlowTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSystemTemplateCommand
 */
export const se_UpdateSystemTemplateCommand = async (
  input: UpdateSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.UpdateSystemTemplate",
  };
  let body: any;
  body = JSON.stringify(se_UpdateSystemTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UploadEntityDefinitionsCommand
 */
export const se_UploadEntityDefinitionsCommand = async (
  input: UploadEntityDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IotThingsGraphFrontEndService.UploadEntityDefinitions",
  };
  let body: any;
  body = JSON.stringify(se_UploadEntityDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateEntityToThingCommand
 */
export const de_AssociateEntityToThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEntityToThingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateEntityToThingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateEntityToThingResponse(data, context);
  const response: AssociateEntityToThingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateEntityToThingCommandError
 */
const de_AssociateEntityToThingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEntityToThingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateFlowTemplateCommand
 */
export const de_CreateFlowTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFlowTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFlowTemplateResponse(data, context);
  const response: CreateFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateFlowTemplateCommandError
 */
const de_CreateFlowTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotthingsgraph#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateSystemInstanceCommand
 */
export const de_CreateSystemInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSystemInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSystemInstanceResponse(data, context);
  const response: CreateSystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSystemInstanceCommandError
 */
const de_CreateSystemInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotthingsgraph#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateSystemTemplateCommand
 */
export const de_CreateSystemTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSystemTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSystemTemplateResponse(data, context);
  const response: CreateSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSystemTemplateCommandError
 */
const de_CreateSystemTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteFlowTemplateCommand
 */
export const de_DeleteFlowTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFlowTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteFlowTemplateResponse(data, context);
  const response: DeleteFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteFlowTemplateCommandError
 */
const de_DeleteFlowTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotthingsgraph#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteNamespaceCommand
 */
export const de_DeleteNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteNamespaceResponse(data, context);
  const response: DeleteNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteNamespaceCommandError
 */
const de_DeleteNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteSystemInstanceCommand
 */
export const de_DeleteSystemInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSystemInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSystemInstanceResponse(data, context);
  const response: DeleteSystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSystemInstanceCommandError
 */
const de_DeleteSystemInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotthingsgraph#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteSystemTemplateCommand
 */
export const de_DeleteSystemTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSystemTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSystemTemplateResponse(data, context);
  const response: DeleteSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSystemTemplateCommandError
 */
const de_DeleteSystemTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotthingsgraph#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeploySystemInstanceCommand
 */
export const de_DeploySystemInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeploySystemInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeploySystemInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeploySystemInstanceResponse(data, context);
  const response: DeploySystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeploySystemInstanceCommandError
 */
const de_DeploySystemInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeploySystemInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotthingsgraph#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeprecateFlowTemplateCommand
 */
export const de_DeprecateFlowTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateFlowTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeprecateFlowTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeprecateFlowTemplateResponse(data, context);
  const response: DeprecateFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeprecateFlowTemplateCommandError
 */
const de_DeprecateFlowTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateFlowTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeprecateSystemTemplateCommand
 */
export const de_DeprecateSystemTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateSystemTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeprecateSystemTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeprecateSystemTemplateResponse(data, context);
  const response: DeprecateSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeprecateSystemTemplateCommandError
 */
const de_DeprecateSystemTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateSystemTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeNamespaceCommand
 */
export const de_DescribeNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeNamespaceResponse(data, context);
  const response: DescribeNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeNamespaceCommandError
 */
const de_DescribeNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DissociateEntityFromThingCommand
 */
export const de_DissociateEntityFromThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociateEntityFromThingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DissociateEntityFromThingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DissociateEntityFromThingResponse(data, context);
  const response: DissociateEntityFromThingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DissociateEntityFromThingCommandError
 */
const de_DissociateEntityFromThingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociateEntityFromThingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetEntitiesCommand
 */
export const de_GetEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEntitiesResponse(data, context);
  const response: GetEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetEntitiesCommandError
 */
const de_GetEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetFlowTemplateCommand
 */
export const de_GetFlowTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFlowTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFlowTemplateResponse(data, context);
  const response: GetFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetFlowTemplateCommandError
 */
const de_GetFlowTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetFlowTemplateRevisionsCommand
 */
export const de_GetFlowTemplateRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFlowTemplateRevisionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFlowTemplateRevisionsResponse(data, context);
  const response: GetFlowTemplateRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetFlowTemplateRevisionsCommandError
 */
const de_GetFlowTemplateRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetNamespaceDeletionStatusCommand
 */
export const de_GetNamespaceDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetNamespaceDeletionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetNamespaceDeletionStatusResponse(data, context);
  const response: GetNamespaceDeletionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetNamespaceDeletionStatusCommandError
 */
const de_GetNamespaceDeletionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceDeletionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSystemInstanceCommand
 */
export const de_GetSystemInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSystemInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSystemInstanceResponse(data, context);
  const response: GetSystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSystemInstanceCommandError
 */
const de_GetSystemInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSystemTemplateCommand
 */
export const de_GetSystemTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSystemTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSystemTemplateResponse(data, context);
  const response: GetSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSystemTemplateCommandError
 */
const de_GetSystemTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSystemTemplateRevisionsCommand
 */
export const de_GetSystemTemplateRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSystemTemplateRevisionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSystemTemplateRevisionsResponse(data, context);
  const response: GetSystemTemplateRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSystemTemplateRevisionsCommandError
 */
const de_GetSystemTemplateRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetUploadStatusCommand
 */
export const de_GetUploadStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUploadStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUploadStatusResponse(data, context);
  const response: GetUploadStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetUploadStatusCommandError
 */
const de_GetUploadStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListFlowExecutionMessagesCommand
 */
export const de_ListFlowExecutionMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowExecutionMessagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFlowExecutionMessagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFlowExecutionMessagesResponse(data, context);
  const response: ListFlowExecutionMessagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFlowExecutionMessagesCommandError
 */
const de_ListFlowExecutionMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowExecutionMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SearchEntitiesCommand
 */
export const de_SearchEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchEntitiesResponse(data, context);
  const response: SearchEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchEntitiesCommandError
 */
const de_SearchEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SearchFlowExecutionsCommand
 */
export const de_SearchFlowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchFlowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchFlowExecutionsResponse(data, context);
  const response: SearchFlowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchFlowExecutionsCommandError
 */
const de_SearchFlowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SearchFlowTemplatesCommand
 */
export const de_SearchFlowTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchFlowTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchFlowTemplatesResponse(data, context);
  const response: SearchFlowTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchFlowTemplatesCommandError
 */
const de_SearchFlowTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SearchSystemInstancesCommand
 */
export const de_SearchSystemInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchSystemInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchSystemInstancesResponse(data, context);
  const response: SearchSystemInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchSystemInstancesCommandError
 */
const de_SearchSystemInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SearchSystemTemplatesCommand
 */
export const de_SearchSystemTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchSystemTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchSystemTemplatesResponse(data, context);
  const response: SearchSystemTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchSystemTemplatesCommandError
 */
const de_SearchSystemTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SearchThingsCommand
 */
export const de_SearchThingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchThingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchThingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchThingsResponse(data, context);
  const response: SearchThingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SearchThingsCommandError
 */
const de_SearchThingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchThingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
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
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UndeploySystemInstanceCommand
 */
export const de_UndeploySystemInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeploySystemInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UndeploySystemInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UndeploySystemInstanceResponse(data, context);
  const response: UndeploySystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UndeploySystemInstanceCommandError
 */
const de_UndeploySystemInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeploySystemInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotthingsgraph#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateFlowTemplateCommand
 */
export const de_UpdateFlowTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFlowTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFlowTemplateResponse(data, context);
  const response: UpdateFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateFlowTemplateCommandError
 */
const de_UpdateFlowTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateSystemTemplateCommand
 */
export const de_UpdateSystemTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSystemTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSystemTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSystemTemplateResponse(data, context);
  const response: UpdateSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSystemTemplateCommandError
 */
const de_UpdateSystemTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSystemTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UploadEntityDefinitionsCommand
 */
export const de_UploadEntityDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadEntityDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UploadEntityDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UploadEntityDefinitionsResponse(data, context);
  const response: UploadEntityDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UploadEntityDefinitionsCommandError
 */
const de_UploadEntityDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadEntityDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalFailureException(body, context);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AssociateEntityToThingRequest
 */
const se_AssociateEntityToThingRequest = (input: AssociateEntityToThingRequest, context: __SerdeContext): any => {
  return {
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.namespaceVersion != null && { namespaceVersion: input.namespaceVersion }),
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

/**
 * serializeAws_json1_1CreateFlowTemplateRequest
 */
const se_CreateFlowTemplateRequest = (input: CreateFlowTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.compatibleNamespaceVersion != null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
    ...(input.definition != null && { definition: se_DefinitionDocument(input.definition, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSystemInstanceRequest
 */
const se_CreateSystemInstanceRequest = (input: CreateSystemInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.definition != null && { definition: se_DefinitionDocument(input.definition, context) }),
    ...(input.flowActionsRoleArn != null && { flowActionsRoleArn: input.flowActionsRoleArn }),
    ...(input.greengrassGroupName != null && { greengrassGroupName: input.greengrassGroupName }),
    ...(input.metricsConfiguration != null && {
      metricsConfiguration: se_MetricsConfiguration(input.metricsConfiguration, context),
    }),
    ...(input.s3BucketName != null && { s3BucketName: input.s3BucketName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.target != null && { target: input.target }),
  };
};

/**
 * serializeAws_json1_1CreateSystemTemplateRequest
 */
const se_CreateSystemTemplateRequest = (input: CreateSystemTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.compatibleNamespaceVersion != null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
    ...(input.definition != null && { definition: se_DefinitionDocument(input.definition, context) }),
  };
};

/**
 * serializeAws_json1_1DefinitionDocument
 */
const se_DefinitionDocument = (input: DefinitionDocument, context: __SerdeContext): any => {
  return {
    ...(input.language != null && { language: input.language }),
    ...(input.text != null && { text: input.text }),
  };
};

/**
 * serializeAws_json1_1DeleteFlowTemplateRequest
 */
const se_DeleteFlowTemplateRequest = (input: DeleteFlowTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1DeleteNamespaceRequest
 */
const se_DeleteNamespaceRequest = (input: DeleteNamespaceRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DeleteSystemInstanceRequest
 */
const se_DeleteSystemInstanceRequest = (input: DeleteSystemInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1DeleteSystemTemplateRequest
 */
const se_DeleteSystemTemplateRequest = (input: DeleteSystemTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1DeploySystemInstanceRequest
 */
const se_DeploySystemInstanceRequest = (input: DeploySystemInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1DeprecateFlowTemplateRequest
 */
const se_DeprecateFlowTemplateRequest = (input: DeprecateFlowTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1DeprecateSystemTemplateRequest
 */
const se_DeprecateSystemTemplateRequest = (input: DeprecateSystemTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1DescribeNamespaceRequest
 */
const se_DescribeNamespaceRequest = (input: DescribeNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.namespaceName != null && { namespaceName: input.namespaceName }),
  };
};

/**
 * serializeAws_json1_1DissociateEntityFromThingRequest
 */
const se_DissociateEntityFromThingRequest = (input: DissociateEntityFromThingRequest, context: __SerdeContext): any => {
  return {
    ...(input.entityType != null && { entityType: input.entityType }),
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

/**
 * serializeAws_json1_1EntityFilter
 */
const se_EntityFilter = (input: EntityFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: se_EntityFilterValues(input.value, context) }),
  };
};

/**
 * serializeAws_json1_1EntityFilters
 */
const se_EntityFilters = (input: EntityFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EntityFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1EntityFilterValues
 */
const se_EntityFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EntityTypes
 */
const se_EntityTypes = (input: (EntityType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FlowTemplateFilter
 */
const se_FlowTemplateFilter = (input: FlowTemplateFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: se_FlowTemplateFilterValues(input.value, context) }),
  };
};

/**
 * serializeAws_json1_1FlowTemplateFilters
 */
const se_FlowTemplateFilters = (input: FlowTemplateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FlowTemplateFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1FlowTemplateFilterValues
 */
const se_FlowTemplateFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetEntitiesRequest
 */
const se_GetEntitiesRequest = (input: GetEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ids != null && { ids: se_Urns(input.ids, context) }),
    ...(input.namespaceVersion != null && { namespaceVersion: input.namespaceVersion }),
  };
};

/**
 * serializeAws_json1_1GetFlowTemplateRequest
 */
const se_GetFlowTemplateRequest = (input: GetFlowTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.revisionNumber != null && { revisionNumber: input.revisionNumber }),
  };
};

/**
 * serializeAws_json1_1GetFlowTemplateRevisionsRequest
 */
const se_GetFlowTemplateRevisionsRequest = (input: GetFlowTemplateRevisionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetNamespaceDeletionStatusRequest
 */
const se_GetNamespaceDeletionStatusRequest = (
  input: GetNamespaceDeletionStatusRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1GetSystemInstanceRequest
 */
const se_GetSystemInstanceRequest = (input: GetSystemInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1GetSystemTemplateRequest
 */
const se_GetSystemTemplateRequest = (input: GetSystemTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.revisionNumber != null && { revisionNumber: input.revisionNumber }),
  };
};

/**
 * serializeAws_json1_1GetSystemTemplateRevisionsRequest
 */
const se_GetSystemTemplateRevisionsRequest = (
  input: GetSystemTemplateRevisionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetUploadStatusRequest
 */
const se_GetUploadStatusRequest = (input: GetUploadStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.uploadId != null && { uploadId: input.uploadId }),
  };
};

/**
 * serializeAws_json1_1ListFlowExecutionMessagesRequest
 */
const se_ListFlowExecutionMessagesRequest = (input: ListFlowExecutionMessagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.flowExecutionId != null && { flowExecutionId: input.flowExecutionId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1MetricsConfiguration
 */
const se_MetricsConfiguration = (input: MetricsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.cloudMetricEnabled != null && { cloudMetricEnabled: input.cloudMetricEnabled }),
    ...(input.metricRuleRoleArn != null && { metricRuleRoleArn: input.metricRuleRoleArn }),
  };
};

/**
 * serializeAws_json1_1SearchEntitiesRequest
 */
const se_SearchEntitiesRequest = (input: SearchEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.entityTypes != null && { entityTypes: se_EntityTypes(input.entityTypes, context) }),
    ...(input.filters != null && { filters: se_EntityFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.namespaceVersion != null && { namespaceVersion: input.namespaceVersion }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1SearchFlowExecutionsRequest
 */
const se_SearchFlowExecutionsRequest = (input: SearchFlowExecutionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.flowExecutionId != null && { flowExecutionId: input.flowExecutionId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.systemInstanceId != null && { systemInstanceId: input.systemInstanceId }),
  };
};

/**
 * serializeAws_json1_1SearchFlowTemplatesRequest
 */
const se_SearchFlowTemplatesRequest = (input: SearchFlowTemplatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.filters != null && { filters: se_FlowTemplateFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1SearchSystemInstancesRequest
 */
const se_SearchSystemInstancesRequest = (input: SearchSystemInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.filters != null && { filters: se_SystemInstanceFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1SearchSystemTemplatesRequest
 */
const se_SearchSystemTemplatesRequest = (input: SearchSystemTemplatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.filters != null && { filters: se_SystemTemplateFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1SearchThingsRequest
 */
const se_SearchThingsRequest = (input: SearchThingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.namespaceVersion != null && { namespaceVersion: input.namespaceVersion }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1SystemInstanceFilter
 */
const se_SystemInstanceFilter = (input: SystemInstanceFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: se_SystemInstanceFilterValues(input.value, context) }),
  };
};

/**
 * serializeAws_json1_1SystemInstanceFilters
 */
const se_SystemInstanceFilters = (input: SystemInstanceFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SystemInstanceFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1SystemInstanceFilterValues
 */
const se_SystemInstanceFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SystemTemplateFilter
 */
const se_SystemTemplateFilter = (input: SystemTemplateFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: se_SystemTemplateFilterValues(input.value, context) }),
  };
};

/**
 * serializeAws_json1_1SystemTemplateFilters
 */
const se_SystemTemplateFilters = (input: SystemTemplateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SystemTemplateFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1SystemTemplateFilterValues
 */
const se_SystemTemplateFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1UndeploySystemInstanceRequest
 */
const se_UndeploySystemInstanceRequest = (input: UndeploySystemInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateFlowTemplateRequest
 */
const se_UpdateFlowTemplateRequest = (input: UpdateFlowTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.compatibleNamespaceVersion != null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
    ...(input.definition != null && { definition: se_DefinitionDocument(input.definition, context) }),
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1UpdateSystemTemplateRequest
 */
const se_UpdateSystemTemplateRequest = (input: UpdateSystemTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.compatibleNamespaceVersion != null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
    ...(input.definition != null && { definition: se_DefinitionDocument(input.definition, context) }),
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1UploadEntityDefinitionsRequest
 */
const se_UploadEntityDefinitionsRequest = (input: UploadEntityDefinitionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.deprecateExistingEntities != null && { deprecateExistingEntities: input.deprecateExistingEntities }),
    ...(input.document != null && { document: se_DefinitionDocument(input.document, context) }),
    ...(input.syncWithPublicNamespace != null && { syncWithPublicNamespace: input.syncWithPublicNamespace }),
  };
};

/**
 * serializeAws_json1_1Urns
 */
const se_Urns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1AssociateEntityToThingResponse
 */
const de_AssociateEntityToThingResponse = (output: any, context: __SerdeContext): AssociateEntityToThingResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateFlowTemplateResponse
 */
const de_CreateFlowTemplateResponse = (output: any, context: __SerdeContext): CreateFlowTemplateResponse => {
  return {
    summary: output.summary != null ? de_FlowTemplateSummary(output.summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateSystemInstanceResponse
 */
const de_CreateSystemInstanceResponse = (output: any, context: __SerdeContext): CreateSystemInstanceResponse => {
  return {
    summary: output.summary != null ? de_SystemInstanceSummary(output.summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateSystemTemplateResponse
 */
const de_CreateSystemTemplateResponse = (output: any, context: __SerdeContext): CreateSystemTemplateResponse => {
  return {
    summary: output.summary != null ? de_SystemTemplateSummary(output.summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DefinitionDocument
 */
const de_DefinitionDocument = (output: any, context: __SerdeContext): DefinitionDocument => {
  return {
    language: __expectString(output.language),
    text: __expectString(output.text),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFlowTemplateResponse
 */
const de_DeleteFlowTemplateResponse = (output: any, context: __SerdeContext): DeleteFlowTemplateResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteNamespaceResponse
 */
const de_DeleteNamespaceResponse = (output: any, context: __SerdeContext): DeleteNamespaceResponse => {
  return {
    namespaceArn: __expectString(output.namespaceArn),
    namespaceName: __expectString(output.namespaceName),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteSystemInstanceResponse
 */
const de_DeleteSystemInstanceResponse = (output: any, context: __SerdeContext): DeleteSystemInstanceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteSystemTemplateResponse
 */
const de_DeleteSystemTemplateResponse = (output: any, context: __SerdeContext): DeleteSystemTemplateResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DependencyRevision
 */
const de_DependencyRevision = (output: any, context: __SerdeContext): DependencyRevision => {
  return {
    id: __expectString(output.id),
    revisionNumber: __expectLong(output.revisionNumber),
  } as any;
};

/**
 * deserializeAws_json1_1DependencyRevisions
 */
const de_DependencyRevisions = (output: any, context: __SerdeContext): DependencyRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DependencyRevision(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeploySystemInstanceResponse
 */
const de_DeploySystemInstanceResponse = (output: any, context: __SerdeContext): DeploySystemInstanceResponse => {
  return {
    greengrassDeploymentId: __expectString(output.greengrassDeploymentId),
    summary: output.summary != null ? de_SystemInstanceSummary(output.summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeprecateFlowTemplateResponse
 */
const de_DeprecateFlowTemplateResponse = (output: any, context: __SerdeContext): DeprecateFlowTemplateResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeprecateSystemTemplateResponse
 */
const de_DeprecateSystemTemplateResponse = (output: any, context: __SerdeContext): DeprecateSystemTemplateResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeNamespaceResponse
 */
const de_DescribeNamespaceResponse = (output: any, context: __SerdeContext): DescribeNamespaceResponse => {
  return {
    namespaceArn: __expectString(output.namespaceArn),
    namespaceName: __expectString(output.namespaceName),
    namespaceVersion: __expectLong(output.namespaceVersion),
    trackingNamespaceName: __expectString(output.trackingNamespaceName),
    trackingNamespaceVersion: __expectLong(output.trackingNamespaceVersion),
  } as any;
};

/**
 * deserializeAws_json1_1DissociateEntityFromThingResponse
 */
const de_DissociateEntityFromThingResponse = (
  output: any,
  context: __SerdeContext
): DissociateEntityFromThingResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EntityDescription
 */
const de_EntityDescription = (output: any, context: __SerdeContext): EntityDescription => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    definition: output.definition != null ? de_DefinitionDocument(output.definition, context) : undefined,
    id: __expectString(output.id),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1EntityDescriptions
 */
const de_EntityDescriptions = (output: any, context: __SerdeContext): EntityDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EntityDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FlowExecutionMessage
 */
const de_FlowExecutionMessage = (output: any, context: __SerdeContext): FlowExecutionMessage => {
  return {
    eventType: __expectString(output.eventType),
    messageId: __expectString(output.messageId),
    payload: __expectString(output.payload),
    timestamp:
      output.timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestamp))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FlowExecutionMessages
 */
const de_FlowExecutionMessages = (output: any, context: __SerdeContext): FlowExecutionMessage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FlowExecutionMessage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FlowExecutionSummaries
 */
const de_FlowExecutionSummaries = (output: any, context: __SerdeContext): FlowExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FlowExecutionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FlowExecutionSummary
 */
const de_FlowExecutionSummary = (output: any, context: __SerdeContext): FlowExecutionSummary => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    flowExecutionId: __expectString(output.flowExecutionId),
    flowTemplateId: __expectString(output.flowTemplateId),
    status: __expectString(output.status),
    systemInstanceId: __expectString(output.systemInstanceId),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FlowTemplateDescription
 */
const de_FlowTemplateDescription = (output: any, context: __SerdeContext): FlowTemplateDescription => {
  return {
    definition: output.definition != null ? de_DefinitionDocument(output.definition, context) : undefined,
    summary: output.summary != null ? de_FlowTemplateSummary(output.summary, context) : undefined,
    validatedNamespaceVersion: __expectLong(output.validatedNamespaceVersion),
  } as any;
};

/**
 * deserializeAws_json1_1FlowTemplateSummaries
 */
const de_FlowTemplateSummaries = (output: any, context: __SerdeContext): FlowTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FlowTemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FlowTemplateSummary
 */
const de_FlowTemplateSummary = (output: any, context: __SerdeContext): FlowTemplateSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    id: __expectString(output.id),
    revisionNumber: __expectLong(output.revisionNumber),
  } as any;
};

/**
 * deserializeAws_json1_1GetEntitiesResponse
 */
const de_GetEntitiesResponse = (output: any, context: __SerdeContext): GetEntitiesResponse => {
  return {
    descriptions: output.descriptions != null ? de_EntityDescriptions(output.descriptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetFlowTemplateResponse
 */
const de_GetFlowTemplateResponse = (output: any, context: __SerdeContext): GetFlowTemplateResponse => {
  return {
    description: output.description != null ? de_FlowTemplateDescription(output.description, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetFlowTemplateRevisionsResponse
 */
const de_GetFlowTemplateRevisionsResponse = (
  output: any,
  context: __SerdeContext
): GetFlowTemplateRevisionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries: output.summaries != null ? de_FlowTemplateSummaries(output.summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetNamespaceDeletionStatusResponse
 */
const de_GetNamespaceDeletionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetNamespaceDeletionStatusResponse => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    namespaceArn: __expectString(output.namespaceArn),
    namespaceName: __expectString(output.namespaceName),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1GetSystemInstanceResponse
 */
const de_GetSystemInstanceResponse = (output: any, context: __SerdeContext): GetSystemInstanceResponse => {
  return {
    description: output.description != null ? de_SystemInstanceDescription(output.description, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSystemTemplateResponse
 */
const de_GetSystemTemplateResponse = (output: any, context: __SerdeContext): GetSystemTemplateResponse => {
  return {
    description: output.description != null ? de_SystemTemplateDescription(output.description, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSystemTemplateRevisionsResponse
 */
const de_GetSystemTemplateRevisionsResponse = (
  output: any,
  context: __SerdeContext
): GetSystemTemplateRevisionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries: output.summaries != null ? de_SystemTemplateSummaries(output.summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetUploadStatusResponse
 */
const de_GetUploadStatusResponse = (output: any, context: __SerdeContext): GetUploadStatusResponse => {
  return {
    createdDate:
      output.createdDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdDate)))
        : undefined,
    failureReason: output.failureReason != null ? de_StringList(output.failureReason, context) : undefined,
    namespaceArn: __expectString(output.namespaceArn),
    namespaceName: __expectString(output.namespaceName),
    namespaceVersion: __expectLong(output.namespaceVersion),
    uploadId: __expectString(output.uploadId),
    uploadStatus: __expectString(output.uploadStatus),
  } as any;
};

/**
 * deserializeAws_json1_1InternalFailureException
 */
const de_InternalFailureException = (output: any, context: __SerdeContext): InternalFailureException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListFlowExecutionMessagesResponse
 */
const de_ListFlowExecutionMessagesResponse = (
  output: any,
  context: __SerdeContext
): ListFlowExecutionMessagesResponse => {
  return {
    messages: output.messages != null ? de_FlowExecutionMessages(output.messages, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricsConfiguration
 */
const de_MetricsConfiguration = (output: any, context: __SerdeContext): MetricsConfiguration => {
  return {
    cloudMetricEnabled: __expectBoolean(output.cloudMetricEnabled),
    metricRuleRoleArn: __expectString(output.metricRuleRoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SearchEntitiesResponse
 */
const de_SearchEntitiesResponse = (output: any, context: __SerdeContext): SearchEntitiesResponse => {
  return {
    descriptions: output.descriptions != null ? de_EntityDescriptions(output.descriptions, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1SearchFlowExecutionsResponse
 */
const de_SearchFlowExecutionsResponse = (output: any, context: __SerdeContext): SearchFlowExecutionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries: output.summaries != null ? de_FlowExecutionSummaries(output.summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SearchFlowTemplatesResponse
 */
const de_SearchFlowTemplatesResponse = (output: any, context: __SerdeContext): SearchFlowTemplatesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries: output.summaries != null ? de_FlowTemplateSummaries(output.summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SearchSystemInstancesResponse
 */
const de_SearchSystemInstancesResponse = (output: any, context: __SerdeContext): SearchSystemInstancesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries: output.summaries != null ? de_SystemInstanceSummaries(output.summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SearchSystemTemplatesResponse
 */
const de_SearchSystemTemplatesResponse = (output: any, context: __SerdeContext): SearchSystemTemplatesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    summaries: output.summaries != null ? de_SystemTemplateSummaries(output.summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SearchThingsResponse
 */
const de_SearchThingsResponse = (output: any, context: __SerdeContext): SearchThingsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    things: output.things != null ? de_Things(output.things, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1SystemInstanceDescription
 */
const de_SystemInstanceDescription = (output: any, context: __SerdeContext): SystemInstanceDescription => {
  return {
    definition: output.definition != null ? de_DefinitionDocument(output.definition, context) : undefined,
    flowActionsRoleArn: __expectString(output.flowActionsRoleArn),
    metricsConfiguration:
      output.metricsConfiguration != null ? de_MetricsConfiguration(output.metricsConfiguration, context) : undefined,
    s3BucketName: __expectString(output.s3BucketName),
    summary: output.summary != null ? de_SystemInstanceSummary(output.summary, context) : undefined,
    validatedDependencyRevisions:
      output.validatedDependencyRevisions != null
        ? de_DependencyRevisions(output.validatedDependencyRevisions, context)
        : undefined,
    validatedNamespaceVersion: __expectLong(output.validatedNamespaceVersion),
  } as any;
};

/**
 * deserializeAws_json1_1SystemInstanceSummaries
 */
const de_SystemInstanceSummaries = (output: any, context: __SerdeContext): SystemInstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SystemInstanceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SystemInstanceSummary
 */
const de_SystemInstanceSummary = (output: any, context: __SerdeContext): SystemInstanceSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    greengrassGroupId: __expectString(output.greengrassGroupId),
    greengrassGroupName: __expectString(output.greengrassGroupName),
    greengrassGroupVersionId: __expectString(output.greengrassGroupVersionId),
    id: __expectString(output.id),
    status: __expectString(output.status),
    target: __expectString(output.target),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SystemTemplateDescription
 */
const de_SystemTemplateDescription = (output: any, context: __SerdeContext): SystemTemplateDescription => {
  return {
    definition: output.definition != null ? de_DefinitionDocument(output.definition, context) : undefined,
    summary: output.summary != null ? de_SystemTemplateSummary(output.summary, context) : undefined,
    validatedNamespaceVersion: __expectLong(output.validatedNamespaceVersion),
  } as any;
};

/**
 * deserializeAws_json1_1SystemTemplateSummaries
 */
const de_SystemTemplateSummaries = (output: any, context: __SerdeContext): SystemTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SystemTemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SystemTemplateSummary
 */
const de_SystemTemplateSummary = (output: any, context: __SerdeContext): SystemTemplateSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    id: __expectString(output.id),
    revisionNumber: __expectLong(output.revisionNumber),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Thing
 */
const de_Thing = (output: any, context: __SerdeContext): Thing => {
  return {
    thingArn: __expectString(output.thingArn),
    thingName: __expectString(output.thingName),
  } as any;
};

/**
 * deserializeAws_json1_1Things
 */
const de_Things = (output: any, context: __SerdeContext): Thing[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Thing(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UndeploySystemInstanceResponse
 */
const de_UndeploySystemInstanceResponse = (output: any, context: __SerdeContext): UndeploySystemInstanceResponse => {
  return {
    summary: output.summary != null ? de_SystemInstanceSummary(output.summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateFlowTemplateResponse
 */
const de_UpdateFlowTemplateResponse = (output: any, context: __SerdeContext): UpdateFlowTemplateResponse => {
  return {
    summary: output.summary != null ? de_FlowTemplateSummary(output.summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSystemTemplateResponse
 */
const de_UpdateSystemTemplateResponse = (output: any, context: __SerdeContext): UpdateSystemTemplateResponse => {
  return {
    summary: output.summary != null ? de_SystemTemplateSummary(output.summary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UploadEntityDefinitionsResponse
 */
const de_UploadEntityDefinitionsResponse = (output: any, context: __SerdeContext): UploadEntityDefinitionsResponse => {
  return {
    uploadId: __expectString(output.uploadId),
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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
