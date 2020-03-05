import {
  AssociateEntityToThingCommandInput,
  AssociateEntityToThingCommandOutput
} from "../commands/AssociateEntityToThingCommand";
import {
  CreateFlowTemplateCommandInput,
  CreateFlowTemplateCommandOutput
} from "../commands/CreateFlowTemplateCommand";
import {
  CreateSystemInstanceCommandInput,
  CreateSystemInstanceCommandOutput
} from "../commands/CreateSystemInstanceCommand";
import {
  CreateSystemTemplateCommandInput,
  CreateSystemTemplateCommandOutput
} from "../commands/CreateSystemTemplateCommand";
import {
  DeleteFlowTemplateCommandInput,
  DeleteFlowTemplateCommandOutput
} from "../commands/DeleteFlowTemplateCommand";
import {
  DeleteNamespaceCommandInput,
  DeleteNamespaceCommandOutput
} from "../commands/DeleteNamespaceCommand";
import {
  DeleteSystemInstanceCommandInput,
  DeleteSystemInstanceCommandOutput
} from "../commands/DeleteSystemInstanceCommand";
import {
  DeleteSystemTemplateCommandInput,
  DeleteSystemTemplateCommandOutput
} from "../commands/DeleteSystemTemplateCommand";
import {
  DeploySystemInstanceCommandInput,
  DeploySystemInstanceCommandOutput
} from "../commands/DeploySystemInstanceCommand";
import {
  DeprecateFlowTemplateCommandInput,
  DeprecateFlowTemplateCommandOutput
} from "../commands/DeprecateFlowTemplateCommand";
import {
  DeprecateSystemTemplateCommandInput,
  DeprecateSystemTemplateCommandOutput
} from "../commands/DeprecateSystemTemplateCommand";
import {
  DescribeNamespaceCommandInput,
  DescribeNamespaceCommandOutput
} from "../commands/DescribeNamespaceCommand";
import {
  DissociateEntityFromThingCommandInput,
  DissociateEntityFromThingCommandOutput
} from "../commands/DissociateEntityFromThingCommand";
import {
  GetEntitiesCommandInput,
  GetEntitiesCommandOutput
} from "../commands/GetEntitiesCommand";
import {
  GetFlowTemplateCommandInput,
  GetFlowTemplateCommandOutput
} from "../commands/GetFlowTemplateCommand";
import {
  GetFlowTemplateRevisionsCommandInput,
  GetFlowTemplateRevisionsCommandOutput
} from "../commands/GetFlowTemplateRevisionsCommand";
import {
  GetNamespaceDeletionStatusCommandInput,
  GetNamespaceDeletionStatusCommandOutput
} from "../commands/GetNamespaceDeletionStatusCommand";
import {
  GetSystemInstanceCommandInput,
  GetSystemInstanceCommandOutput
} from "../commands/GetSystemInstanceCommand";
import {
  GetSystemTemplateCommandInput,
  GetSystemTemplateCommandOutput
} from "../commands/GetSystemTemplateCommand";
import {
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput
} from "../commands/GetSystemTemplateRevisionsCommand";
import {
  GetUploadStatusCommandInput,
  GetUploadStatusCommandOutput
} from "../commands/GetUploadStatusCommand";
import {
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput
} from "../commands/ListFlowExecutionMessagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  SearchEntitiesCommandInput,
  SearchEntitiesCommandOutput
} from "../commands/SearchEntitiesCommand";
import {
  SearchFlowExecutionsCommandInput,
  SearchFlowExecutionsCommandOutput
} from "../commands/SearchFlowExecutionsCommand";
import {
  SearchFlowTemplatesCommandInput,
  SearchFlowTemplatesCommandOutput
} from "../commands/SearchFlowTemplatesCommand";
import {
  SearchSystemInstancesCommandInput,
  SearchSystemInstancesCommandOutput
} from "../commands/SearchSystemInstancesCommand";
import {
  SearchSystemTemplatesCommandInput,
  SearchSystemTemplatesCommandOutput
} from "../commands/SearchSystemTemplatesCommand";
import {
  SearchThingsCommandInput,
  SearchThingsCommandOutput
} from "../commands/SearchThingsCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UndeploySystemInstanceCommandInput,
  UndeploySystemInstanceCommandOutput
} from "../commands/UndeploySystemInstanceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateFlowTemplateCommandInput,
  UpdateFlowTemplateCommandOutput
} from "../commands/UpdateFlowTemplateCommand";
import {
  UpdateSystemTemplateCommandInput,
  UpdateSystemTemplateCommandOutput
} from "../commands/UpdateSystemTemplateCommand";
import {
  UploadEntityDefinitionsCommandInput,
  UploadEntityDefinitionsCommandOutput
} from "../commands/UploadEntityDefinitionsCommand";
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
  UploadEntityDefinitionsResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AssociateEntityToThingCommand(
  input: AssociateEntityToThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.AssociateEntityToThing";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateEntityToThingRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateFlowTemplateCommand(
  input: CreateFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.CreateFlowTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateFlowTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateSystemInstanceCommand(
  input: CreateSystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.CreateSystemInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSystemInstanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateSystemTemplateCommand(
  input: CreateSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.CreateSystemTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSystemTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteFlowTemplateCommand(
  input: DeleteFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.DeleteFlowTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteFlowTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteNamespaceCommand(
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.DeleteNamespace";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteNamespaceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteSystemInstanceCommand(
  input: DeleteSystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.DeleteSystemInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSystemInstanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteSystemTemplateCommand(
  input: DeleteSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.DeleteSystemTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSystemTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeploySystemInstanceCommand(
  input: DeploySystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.DeploySystemInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeploySystemInstanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeprecateFlowTemplateCommand(
  input: DeprecateFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.DeprecateFlowTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeprecateFlowTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeprecateSystemTemplateCommand(
  input: DeprecateSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.DeprecateSystemTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeprecateSystemTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeNamespaceCommand(
  input: DescribeNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.DescribeNamespace";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeNamespaceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DissociateEntityFromThingCommand(
  input: DissociateEntityFromThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.DissociateEntityFromThing";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DissociateEntityFromThingRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetEntitiesCommand(
  input: GetEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.GetEntities";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetFlowTemplateCommand(
  input: GetFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.GetFlowTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetFlowTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetFlowTemplateRevisionsCommand(
  input: GetFlowTemplateRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.GetFlowTemplateRevisions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetFlowTemplateRevisionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetNamespaceDeletionStatusCommand(
  input: GetNamespaceDeletionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.GetNamespaceDeletionStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetNamespaceDeletionStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetSystemInstanceCommand(
  input: GetSystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.GetSystemInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSystemInstanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetSystemTemplateCommand(
  input: GetSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.GetSystemTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSystemTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetSystemTemplateRevisionsCommand(
  input: GetSystemTemplateRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.GetSystemTemplateRevisions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSystemTemplateRevisionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetUploadStatusCommand(
  input: GetUploadStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.GetUploadStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetUploadStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListFlowExecutionMessagesCommand(
  input: ListFlowExecutionMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.ListFlowExecutionMessages";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListFlowExecutionMessagesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SearchEntitiesCommand(
  input: SearchEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.SearchEntities";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SearchEntitiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SearchFlowExecutionsCommand(
  input: SearchFlowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.SearchFlowExecutions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SearchFlowExecutionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SearchFlowTemplatesCommand(
  input: SearchFlowTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.SearchFlowTemplates";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SearchFlowTemplatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SearchSystemInstancesCommand(
  input: SearchSystemInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.SearchSystemInstances";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SearchSystemInstancesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SearchSystemTemplatesCommand(
  input: SearchSystemTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.SearchSystemTemplates";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SearchSystemTemplatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SearchThingsCommand(
  input: SearchThingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.SearchThings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SearchThingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UndeploySystemInstanceCommand(
  input: UndeploySystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.UndeploySystemInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UndeploySystemInstanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.UntagResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateFlowTemplateCommand(
  input: UpdateFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "IotThingsGraphFrontEndService.UpdateFlowTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateFlowTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateSystemTemplateCommand(
  input: UpdateSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.UpdateSystemTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSystemTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UploadEntityDefinitionsCommand(
  input: UploadEntityDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "IotThingsGraphFrontEndService.UploadEntityDefinitions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UploadEntityDefinitionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateEntityToThingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEntityToThingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateEntityToThingCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateEntityToThingResponse(
    data,
    context
  );
  const response: AssociateEntityToThingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateEntityToThingResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateEntityToThingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEntityToThingCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateFlowTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateFlowTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFlowTemplateResponse(data, context);
  const response: CreateFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFlowTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateFlowTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.thingsgraph.types#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateSystemInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSystemInstanceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSystemInstanceResponse(data, context);
  const response: CreateSystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSystemInstanceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateSystemInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iot.thingsgraph.types#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateSystemTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSystemTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSystemTemplateResponse(data, context);
  const response: CreateSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSystemTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateSystemTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteFlowTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteFlowTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFlowTemplateResponse(data, context);
  const response: DeleteFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFlowTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteFlowTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteNamespaceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNamespaceResponse(data, context);
  const response: DeleteNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteNamespaceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteNamespaceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteSystemInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSystemInstanceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSystemInstanceResponse(data, context);
  const response: DeleteSystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSystemInstanceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteSystemInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteSystemTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSystemTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSystemTemplateResponse(data, context);
  const response: DeleteSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSystemTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteSystemTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeploySystemInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeploySystemInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeploySystemInstanceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeploySystemInstanceResponse(data, context);
  const response: DeploySystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeploySystemInstanceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeploySystemInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeploySystemInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeprecateFlowTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateFlowTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeprecateFlowTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeprecateFlowTemplateResponse(data, context);
  const response: DeprecateFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeprecateFlowTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeprecateFlowTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateFlowTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeprecateSystemTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateSystemTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeprecateSystemTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeprecateSystemTemplateResponse(
    data,
    context
  );
  const response: DeprecateSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeprecateSystemTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeprecateSystemTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateSystemTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeNamespaceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNamespaceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeNamespaceResponse(data, context);
  const response: DescribeNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeNamespaceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeNamespaceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNamespaceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DissociateEntityFromThingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociateEntityFromThingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DissociateEntityFromThingCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DissociateEntityFromThingResponse(
    data,
    context
  );
  const response: DissociateEntityFromThingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DissociateEntityFromThingResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DissociateEntityFromThingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociateEntityFromThingCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetEntitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEntitiesResponse(data, context);
  const response: GetEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEntitiesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetEntitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetFlowTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetFlowTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFlowTemplateResponse(data, context);
  const response: GetFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFlowTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetFlowTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetFlowTemplateRevisionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateRevisionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetFlowTemplateRevisionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFlowTemplateRevisionsResponse(
    data,
    context
  );
  const response: GetFlowTemplateRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFlowTemplateRevisionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetFlowTemplateRevisionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateRevisionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetNamespaceDeletionStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceDeletionStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetNamespaceDeletionStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNamespaceDeletionStatusResponse(
    data,
    context
  );
  const response: GetNamespaceDeletionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetNamespaceDeletionStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetNamespaceDeletionStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceDeletionStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetSystemInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSystemInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSystemInstanceResponse(data, context);
  const response: GetSystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSystemInstanceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetSystemInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetSystemTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSystemTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSystemTemplateResponse(data, context);
  const response: GetSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSystemTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetSystemTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetSystemTemplateRevisionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateRevisionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSystemTemplateRevisionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSystemTemplateRevisionsResponse(
    data,
    context
  );
  const response: GetSystemTemplateRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSystemTemplateRevisionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetSystemTemplateRevisionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateRevisionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1GetUploadStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetUploadStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUploadStatusResponse(data, context);
  const response: GetUploadStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetUploadStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetUploadStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListFlowExecutionMessagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowExecutionMessagesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListFlowExecutionMessagesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFlowExecutionMessagesResponse(
    data,
    context
  );
  const response: ListFlowExecutionMessagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFlowExecutionMessagesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListFlowExecutionMessagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowExecutionMessagesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1SearchEntitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchEntitiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SearchEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchEntitiesResponse(data, context);
  const response: SearchEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchEntitiesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SearchEntitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchEntitiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1SearchFlowExecutionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowExecutionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SearchFlowExecutionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchFlowExecutionsResponse(data, context);
  const response: SearchFlowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchFlowExecutionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SearchFlowExecutionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowExecutionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1SearchFlowTemplatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowTemplatesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SearchFlowTemplatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchFlowTemplatesResponse(data, context);
  const response: SearchFlowTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchFlowTemplatesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SearchFlowTemplatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowTemplatesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1SearchSystemInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SearchSystemInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchSystemInstancesResponse(data, context);
  const response: SearchSystemInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchSystemInstancesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SearchSystemInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1SearchSystemTemplatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemTemplatesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SearchSystemTemplatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchSystemTemplatesResponse(data, context);
  const response: SearchSystemTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchSystemTemplatesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SearchSystemTemplatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemTemplatesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1SearchThingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchThingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SearchThingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchThingsResponse(data, context);
  const response: SearchThingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchThingsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SearchThingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchThingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UndeploySystemInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeploySystemInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UndeploySystemInstanceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UndeploySystemInstanceResponse(
    data,
    context
  );
  const response: UndeploySystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UndeploySystemInstanceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UndeploySystemInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeploySystemInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UpdateFlowTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateFlowTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFlowTemplateResponse(data, context);
  const response: UpdateFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFlowTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateFlowTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UpdateSystemTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSystemTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateSystemTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSystemTemplateResponse(data, context);
  const response: UpdateSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSystemTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateSystemTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSystemTemplateCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.thingsgraph.types#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UploadEntityDefinitionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadEntityDefinitionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UploadEntityDefinitionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UploadEntityDefinitionsResponse(
    data,
    context
  );
  const response: UploadEntityDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UploadEntityDefinitionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UploadEntityDefinitionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadEntityDefinitionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot.thingsgraph.types#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.thingsgraph.types#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.thingsgraph.types#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_json1_1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalFailureException(
    body,
    context
  );
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    body,
    context
  );
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AssociateEntityToThingRequest = (
  input: AssociateEntityToThingRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.entityId !== undefined) {
    bodyParams["entityId"] = input.entityId;
  }
  if (input.namespaceVersion !== undefined) {
    bodyParams["namespaceVersion"] = input.namespaceVersion;
  }
  if (input.thingName !== undefined) {
    bodyParams["thingName"] = input.thingName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateFlowTemplateRequest = (
  input: CreateFlowTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.compatibleNamespaceVersion !== undefined) {
    bodyParams["compatibleNamespaceVersion"] = input.compatibleNamespaceVersion;
  }
  if (input.definition !== undefined) {
    bodyParams["definition"] = serializeAws_json1_1DefinitionDocument(
      input.definition,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateSystemInstanceRequest = (
  input: CreateSystemInstanceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.definition !== undefined) {
    bodyParams["definition"] = serializeAws_json1_1DefinitionDocument(
      input.definition,
      context
    );
  }
  if (input.flowActionsRoleArn !== undefined) {
    bodyParams["flowActionsRoleArn"] = input.flowActionsRoleArn;
  }
  if (input.greengrassGroupName !== undefined) {
    bodyParams["greengrassGroupName"] = input.greengrassGroupName;
  }
  if (input.metricsConfiguration !== undefined) {
    bodyParams[
      "metricsConfiguration"
    ] = serializeAws_json1_1MetricsConfiguration(
      input.metricsConfiguration,
      context
    );
  }
  if (input.s3BucketName !== undefined) {
    bodyParams["s3BucketName"] = input.s3BucketName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  if (input.target !== undefined) {
    bodyParams["target"] = input.target;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateSystemTemplateRequest = (
  input: CreateSystemTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.compatibleNamespaceVersion !== undefined) {
    bodyParams["compatibleNamespaceVersion"] = input.compatibleNamespaceVersion;
  }
  if (input.definition !== undefined) {
    bodyParams["definition"] = serializeAws_json1_1DefinitionDocument(
      input.definition,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteFlowTemplateRequest = (
  input: DeleteFlowTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteNamespaceRequest = (
  input: DeleteNamespaceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DeleteSystemInstanceRequest = (
  input: DeleteSystemInstanceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteSystemTemplateRequest = (
  input: DeleteSystemTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1DeploySystemInstanceRequest = (
  input: DeploySystemInstanceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1DeprecateFlowTemplateRequest = (
  input: DeprecateFlowTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1DeprecateSystemTemplateRequest = (
  input: DeprecateSystemTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeNamespaceRequest = (
  input: DescribeNamespaceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.namespaceName !== undefined) {
    bodyParams["namespaceName"] = input.namespaceName;
  }
  return bodyParams;
};

const serializeAws_json1_1DissociateEntityFromThingRequest = (
  input: DissociateEntityFromThingRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.entityType !== undefined) {
    bodyParams["entityType"] = input.entityType;
  }
  if (input.thingName !== undefined) {
    bodyParams["thingName"] = input.thingName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetEntitiesRequest = (
  input: GetEntitiesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ids !== undefined) {
    bodyParams["ids"] = serializeAws_json1_1Urns(input.ids, context);
  }
  if (input.namespaceVersion !== undefined) {
    bodyParams["namespaceVersion"] = input.namespaceVersion;
  }
  return bodyParams;
};

const serializeAws_json1_1GetFlowTemplateRequest = (
  input: GetFlowTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.revisionNumber !== undefined) {
    bodyParams["revisionNumber"] = input.revisionNumber;
  }
  return bodyParams;
};

const serializeAws_json1_1GetFlowTemplateRevisionsRequest = (
  input: GetFlowTemplateRevisionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetNamespaceDeletionStatusRequest = (
  input: GetNamespaceDeletionStatusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1GetSystemInstanceRequest = (
  input: GetSystemInstanceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1GetSystemTemplateRequest = (
  input: GetSystemTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.revisionNumber !== undefined) {
    bodyParams["revisionNumber"] = input.revisionNumber;
  }
  return bodyParams;
};

const serializeAws_json1_1GetSystemTemplateRevisionsRequest = (
  input: GetSystemTemplateRevisionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetUploadStatusRequest = (
  input: GetUploadStatusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.uploadId !== undefined) {
    bodyParams["uploadId"] = input.uploadId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListFlowExecutionMessagesRequest = (
  input: ListFlowExecutionMessagesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.flowExecutionId !== undefined) {
    bodyParams["flowExecutionId"] = input.flowExecutionId;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1SearchEntitiesRequest = (
  input: SearchEntitiesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.entityTypes !== undefined) {
    bodyParams["entityTypes"] = serializeAws_json1_1EntityTypes(
      input.entityTypes,
      context
    );
  }
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1EntityFilters(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.namespaceVersion !== undefined) {
    bodyParams["namespaceVersion"] = input.namespaceVersion;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1SearchFlowExecutionsRequest = (
  input: SearchFlowExecutionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.flowExecutionId !== undefined) {
    bodyParams["flowExecutionId"] = input.flowExecutionId;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  if (input.systemInstanceId !== undefined) {
    bodyParams["systemInstanceId"] = input.systemInstanceId;
  }
  return bodyParams;
};

const serializeAws_json1_1SearchFlowTemplatesRequest = (
  input: SearchFlowTemplatesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1FlowTemplateFilters(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1SearchSystemInstancesRequest = (
  input: SearchSystemInstancesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1SystemInstanceFilters(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1SearchSystemTemplatesRequest = (
  input: SearchSystemTemplatesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1SystemTemplateFilters(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1SearchThingsRequest = (
  input: SearchThingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.entityId !== undefined) {
    bodyParams["entityId"] = input.entityId;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.namespaceVersion !== undefined) {
    bodyParams["namespaceVersion"] = input.namespaceVersion;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UndeploySystemInstanceRequest = (
  input: UndeploySystemInstanceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_json1_1TagKeyList(
      input.tagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateFlowTemplateRequest = (
  input: UpdateFlowTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.compatibleNamespaceVersion !== undefined) {
    bodyParams["compatibleNamespaceVersion"] = input.compatibleNamespaceVersion;
  }
  if (input.definition !== undefined) {
    bodyParams["definition"] = serializeAws_json1_1DefinitionDocument(
      input.definition,
      context
    );
  }
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateSystemTemplateRequest = (
  input: UpdateSystemTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.compatibleNamespaceVersion !== undefined) {
    bodyParams["compatibleNamespaceVersion"] = input.compatibleNamespaceVersion;
  }
  if (input.definition !== undefined) {
    bodyParams["definition"] = serializeAws_json1_1DefinitionDocument(
      input.definition,
      context
    );
  }
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1UploadEntityDefinitionsRequest = (
  input: UploadEntityDefinitionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deprecateExistingEntities !== undefined) {
    bodyParams["deprecateExistingEntities"] = input.deprecateExistingEntities;
  }
  if (input.document !== undefined) {
    bodyParams["document"] = serializeAws_json1_1DefinitionDocument(
      input.document,
      context
    );
  }
  if (input.syncWithPublicNamespace !== undefined) {
    bodyParams["syncWithPublicNamespace"] = input.syncWithPublicNamespace;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1DefinitionDocument = (
  input: DefinitionDocument,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.language !== undefined) {
    bodyParams["language"] = input.language;
  }
  if (input.text !== undefined) {
    bodyParams["text"] = input.text;
  }
  return bodyParams;
};

const serializeAws_json1_1Urns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1EntityFilter = (
  input: EntityFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = serializeAws_json1_1EntityFilterValues(
      input.value,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1EntityFilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1EntityFilters = (
  input: Array<EntityFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1EntityFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1EntityTypes = (
  input: Array<EntityType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1FlowTemplateFilter = (
  input: FlowTemplateFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = serializeAws_json1_1FlowTemplateFilterValues(
      input.value,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1FlowTemplateFilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1FlowTemplateFilters = (
  input: Array<FlowTemplateFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1FlowTemplateFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1MetricsConfiguration = (
  input: MetricsConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.cloudMetricEnabled !== undefined) {
    bodyParams["cloudMetricEnabled"] = input.cloudMetricEnabled;
  }
  if (input.metricRuleRoleArn !== undefined) {
    bodyParams["metricRuleRoleArn"] = input.metricRuleRoleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1SystemInstanceFilter = (
  input: SystemInstanceFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = serializeAws_json1_1SystemInstanceFilterValues(
      input.value,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SystemInstanceFilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1SystemInstanceFilters = (
  input: Array<SystemInstanceFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1SystemInstanceFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1SystemTemplateFilter = (
  input: SystemTemplateFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = serializeAws_json1_1SystemTemplateFilterValues(
      input.value,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SystemTemplateFilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1SystemTemplateFilters = (
  input: Array<SystemTemplateFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1SystemTemplateFilter(entry, context));
  }
  return contents;
};

const deserializeAws_json1_1AssociateEntityToThingResponse = (
  output: any,
  context: __SerdeContext
): AssociateEntityToThingResponse => {
  let contents: any = {
    __type: "AssociateEntityToThingResponse"
  };
  return contents;
};

const deserializeAws_json1_1CreateFlowTemplateResponse = (
  output: any,
  context: __SerdeContext
): CreateFlowTemplateResponse => {
  let contents: any = {
    __type: "CreateFlowTemplateResponse",
    summary: undefined
  };
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = deserializeAws_json1_1FlowTemplateSummary(
      output.summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateSystemInstanceResponse = (
  output: any,
  context: __SerdeContext
): CreateSystemInstanceResponse => {
  let contents: any = {
    __type: "CreateSystemInstanceResponse",
    summary: undefined
  };
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = deserializeAws_json1_1SystemInstanceSummary(
      output.summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateSystemTemplateResponse = (
  output: any,
  context: __SerdeContext
): CreateSystemTemplateResponse => {
  let contents: any = {
    __type: "CreateSystemTemplateResponse",
    summary: undefined
  };
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = deserializeAws_json1_1SystemTemplateSummary(
      output.summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteFlowTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeleteFlowTemplateResponse => {
  let contents: any = {
    __type: "DeleteFlowTemplateResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteNamespaceResponse = (
  output: any,
  context: __SerdeContext
): DeleteNamespaceResponse => {
  let contents: any = {
    __type: "DeleteNamespaceResponse",
    namespaceArn: undefined,
    namespaceName: undefined
  };
  if (output.namespaceArn !== undefined && output.namespaceArn !== null) {
    contents.namespaceArn = output.namespaceArn;
  }
  if (output.namespaceName !== undefined && output.namespaceName !== null) {
    contents.namespaceName = output.namespaceName;
  }
  return contents;
};

const deserializeAws_json1_1DeleteSystemInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeleteSystemInstanceResponse => {
  let contents: any = {
    __type: "DeleteSystemInstanceResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteSystemTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeleteSystemTemplateResponse => {
  let contents: any = {
    __type: "DeleteSystemTemplateResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeploySystemInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeploySystemInstanceResponse => {
  let contents: any = {
    __type: "DeploySystemInstanceResponse",
    greengrassDeploymentId: undefined,
    summary: undefined
  };
  if (
    output.greengrassDeploymentId !== undefined &&
    output.greengrassDeploymentId !== null
  ) {
    contents.greengrassDeploymentId = output.greengrassDeploymentId;
  }
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = deserializeAws_json1_1SystemInstanceSummary(
      output.summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeprecateFlowTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeprecateFlowTemplateResponse => {
  let contents: any = {
    __type: "DeprecateFlowTemplateResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeprecateSystemTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeprecateSystemTemplateResponse => {
  let contents: any = {
    __type: "DeprecateSystemTemplateResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeNamespaceResponse = (
  output: any,
  context: __SerdeContext
): DescribeNamespaceResponse => {
  let contents: any = {
    __type: "DescribeNamespaceResponse",
    namespaceArn: undefined,
    namespaceName: undefined,
    namespaceVersion: undefined,
    trackingNamespaceName: undefined,
    trackingNamespaceVersion: undefined
  };
  if (output.namespaceArn !== undefined && output.namespaceArn !== null) {
    contents.namespaceArn = output.namespaceArn;
  }
  if (output.namespaceName !== undefined && output.namespaceName !== null) {
    contents.namespaceName = output.namespaceName;
  }
  if (
    output.namespaceVersion !== undefined &&
    output.namespaceVersion !== null
  ) {
    contents.namespaceVersion = output.namespaceVersion;
  }
  if (
    output.trackingNamespaceName !== undefined &&
    output.trackingNamespaceName !== null
  ) {
    contents.trackingNamespaceName = output.trackingNamespaceName;
  }
  if (
    output.trackingNamespaceVersion !== undefined &&
    output.trackingNamespaceVersion !== null
  ) {
    contents.trackingNamespaceVersion = output.trackingNamespaceVersion;
  }
  return contents;
};

const deserializeAws_json1_1DissociateEntityFromThingResponse = (
  output: any,
  context: __SerdeContext
): DissociateEntityFromThingResponse => {
  let contents: any = {
    __type: "DissociateEntityFromThingResponse"
  };
  return contents;
};

const deserializeAws_json1_1GetEntitiesResponse = (
  output: any,
  context: __SerdeContext
): GetEntitiesResponse => {
  let contents: any = {
    __type: "GetEntitiesResponse",
    descriptions: undefined
  };
  if (output.descriptions !== undefined && output.descriptions !== null) {
    contents.descriptions = deserializeAws_json1_1EntityDescriptions(
      output.descriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetFlowTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetFlowTemplateResponse => {
  let contents: any = {
    __type: "GetFlowTemplateResponse",
    description: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = deserializeAws_json1_1FlowTemplateDescription(
      output.description,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetFlowTemplateRevisionsResponse = (
  output: any,
  context: __SerdeContext
): GetFlowTemplateRevisionsResponse => {
  let contents: any = {
    __type: "GetFlowTemplateRevisionsResponse",
    nextToken: undefined,
    summaries: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.summaries !== undefined && output.summaries !== null) {
    contents.summaries = deserializeAws_json1_1FlowTemplateSummaries(
      output.summaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetNamespaceDeletionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetNamespaceDeletionStatusResponse => {
  let contents: any = {
    __type: "GetNamespaceDeletionStatusResponse",
    errorCode: undefined,
    errorMessage: undefined,
    namespaceArn: undefined,
    namespaceName: undefined,
    status: undefined
  };
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorMessage !== undefined && output.errorMessage !== null) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.namespaceArn !== undefined && output.namespaceArn !== null) {
    contents.namespaceArn = output.namespaceArn;
  }
  if (output.namespaceName !== undefined && output.namespaceName !== null) {
    contents.namespaceName = output.namespaceName;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1GetSystemInstanceResponse = (
  output: any,
  context: __SerdeContext
): GetSystemInstanceResponse => {
  let contents: any = {
    __type: "GetSystemInstanceResponse",
    description: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = deserializeAws_json1_1SystemInstanceDescription(
      output.description,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetSystemTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetSystemTemplateResponse => {
  let contents: any = {
    __type: "GetSystemTemplateResponse",
    description: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = deserializeAws_json1_1SystemTemplateDescription(
      output.description,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetSystemTemplateRevisionsResponse = (
  output: any,
  context: __SerdeContext
): GetSystemTemplateRevisionsResponse => {
  let contents: any = {
    __type: "GetSystemTemplateRevisionsResponse",
    nextToken: undefined,
    summaries: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.summaries !== undefined && output.summaries !== null) {
    contents.summaries = deserializeAws_json1_1SystemTemplateSummaries(
      output.summaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetUploadStatusResponse = (
  output: any,
  context: __SerdeContext
): GetUploadStatusResponse => {
  let contents: any = {
    __type: "GetUploadStatusResponse",
    createdDate: undefined,
    failureReason: undefined,
    namespaceArn: undefined,
    namespaceName: undefined,
    namespaceVersion: undefined,
    uploadId: undefined,
    uploadStatus: undefined
  };
  if (output.createdDate !== undefined && output.createdDate !== null) {
    contents.createdDate = new Date(Math.round(output.createdDate * 1000));
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = deserializeAws_json1_1StringList(
      output.failureReason,
      context
    );
  }
  if (output.namespaceArn !== undefined && output.namespaceArn !== null) {
    contents.namespaceArn = output.namespaceArn;
  }
  if (output.namespaceName !== undefined && output.namespaceName !== null) {
    contents.namespaceName = output.namespaceName;
  }
  if (
    output.namespaceVersion !== undefined &&
    output.namespaceVersion !== null
  ) {
    contents.namespaceVersion = output.namespaceVersion;
  }
  if (output.uploadId !== undefined && output.uploadId !== null) {
    contents.uploadId = output.uploadId;
  }
  if (output.uploadStatus !== undefined && output.uploadStatus !== null) {
    contents.uploadStatus = output.uploadStatus;
  }
  return contents;
};

const deserializeAws_json1_1ListFlowExecutionMessagesResponse = (
  output: any,
  context: __SerdeContext
): ListFlowExecutionMessagesResponse => {
  let contents: any = {
    __type: "ListFlowExecutionMessagesResponse",
    messages: undefined,
    nextToken: undefined
  };
  if (output.messages !== undefined && output.messages !== null) {
    contents.messages = deserializeAws_json1_1FlowExecutionMessages(
      output.messages,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    nextToken: undefined,
    tags: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1SearchEntitiesResponse = (
  output: any,
  context: __SerdeContext
): SearchEntitiesResponse => {
  let contents: any = {
    __type: "SearchEntitiesResponse",
    descriptions: undefined,
    nextToken: undefined
  };
  if (output.descriptions !== undefined && output.descriptions !== null) {
    contents.descriptions = deserializeAws_json1_1EntityDescriptions(
      output.descriptions,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1SearchFlowExecutionsResponse = (
  output: any,
  context: __SerdeContext
): SearchFlowExecutionsResponse => {
  let contents: any = {
    __type: "SearchFlowExecutionsResponse",
    nextToken: undefined,
    summaries: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.summaries !== undefined && output.summaries !== null) {
    contents.summaries = deserializeAws_json1_1FlowExecutionSummaries(
      output.summaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SearchFlowTemplatesResponse = (
  output: any,
  context: __SerdeContext
): SearchFlowTemplatesResponse => {
  let contents: any = {
    __type: "SearchFlowTemplatesResponse",
    nextToken: undefined,
    summaries: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.summaries !== undefined && output.summaries !== null) {
    contents.summaries = deserializeAws_json1_1FlowTemplateSummaries(
      output.summaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SearchSystemInstancesResponse = (
  output: any,
  context: __SerdeContext
): SearchSystemInstancesResponse => {
  let contents: any = {
    __type: "SearchSystemInstancesResponse",
    nextToken: undefined,
    summaries: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.summaries !== undefined && output.summaries !== null) {
    contents.summaries = deserializeAws_json1_1SystemInstanceSummaries(
      output.summaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SearchSystemTemplatesResponse = (
  output: any,
  context: __SerdeContext
): SearchSystemTemplatesResponse => {
  let contents: any = {
    __type: "SearchSystemTemplatesResponse",
    nextToken: undefined,
    summaries: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.summaries !== undefined && output.summaries !== null) {
    contents.summaries = deserializeAws_json1_1SystemTemplateSummaries(
      output.summaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SearchThingsResponse = (
  output: any,
  context: __SerdeContext
): SearchThingsResponse => {
  let contents: any = {
    __type: "SearchThingsResponse",
    nextToken: undefined,
    things: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.things !== undefined && output.things !== null) {
    contents.things = deserializeAws_json1_1Things(output.things, context);
  }
  return contents;
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UndeploySystemInstanceResponse = (
  output: any,
  context: __SerdeContext
): UndeploySystemInstanceResponse => {
  let contents: any = {
    __type: "UndeploySystemInstanceResponse",
    summary: undefined
  };
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = deserializeAws_json1_1SystemInstanceSummary(
      output.summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateFlowTemplateResponse = (
  output: any,
  context: __SerdeContext
): UpdateFlowTemplateResponse => {
  let contents: any = {
    __type: "UpdateFlowTemplateResponse",
    summary: undefined
  };
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = deserializeAws_json1_1FlowTemplateSummary(
      output.summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateSystemTemplateResponse = (
  output: any,
  context: __SerdeContext
): UpdateSystemTemplateResponse => {
  let contents: any = {
    __type: "UpdateSystemTemplateResponse",
    summary: undefined
  };
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = deserializeAws_json1_1SystemTemplateSummary(
      output.summary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UploadEntityDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): UploadEntityDefinitionsResponse => {
  let contents: any = {
    __type: "UploadEntityDefinitionsResponse",
    uploadId: undefined
  };
  if (output.uploadId !== undefined && output.uploadId !== null) {
    contents.uploadId = output.uploadId;
  }
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1DefinitionDocument = (
  output: any,
  context: __SerdeContext
): DefinitionDocument => {
  let contents: any = {
    __type: "DefinitionDocument",
    language: undefined,
    text: undefined
  };
  if (output.language !== undefined && output.language !== null) {
    contents.language = output.language;
  }
  if (output.text !== undefined && output.text !== null) {
    contents.text = output.text;
  }
  return contents;
};

const deserializeAws_json1_1InternalFailureException = (
  output: any,
  context: __SerdeContext
): InternalFailureException => {
  let contents: any = {
    __type: "InternalFailureException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1EntityDescription = (
  output: any,
  context: __SerdeContext
): EntityDescription => {
  let contents: any = {
    __type: "EntityDescription",
    arn: undefined,
    createdAt: undefined,
    definition: undefined,
    id: undefined,
    type: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.definition !== undefined && output.definition !== null) {
    contents.definition = deserializeAws_json1_1DefinitionDocument(
      output.definition,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1EntityDescriptions = (
  output: any,
  context: __SerdeContext
): Array<EntityDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EntityDescription(entry, context)
  );
};

const deserializeAws_json1_1Thing = (
  output: any,
  context: __SerdeContext
): Thing => {
  let contents: any = {
    __type: "Thing",
    thingArn: undefined,
    thingName: undefined
  };
  if (output.thingArn !== undefined && output.thingArn !== null) {
    contents.thingArn = output.thingArn;
  }
  if (output.thingName !== undefined && output.thingName !== null) {
    contents.thingName = output.thingName;
  }
  return contents;
};

const deserializeAws_json1_1Things = (
  output: any,
  context: __SerdeContext
): Array<Thing> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Thing(entry, context)
  );
};

const deserializeAws_json1_1DependencyRevision = (
  output: any,
  context: __SerdeContext
): DependencyRevision => {
  let contents: any = {
    __type: "DependencyRevision",
    id: undefined,
    revisionNumber: undefined
  };
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.revisionNumber !== undefined && output.revisionNumber !== null) {
    contents.revisionNumber = output.revisionNumber;
  }
  return contents;
};

const deserializeAws_json1_1DependencyRevisions = (
  output: any,
  context: __SerdeContext
): Array<DependencyRevision> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DependencyRevision(entry, context)
  );
};

const deserializeAws_json1_1FlowExecutionMessage = (
  output: any,
  context: __SerdeContext
): FlowExecutionMessage => {
  let contents: any = {
    __type: "FlowExecutionMessage",
    eventType: undefined,
    messageId: undefined,
    payload: undefined,
    timestamp: undefined
  };
  if (output.eventType !== undefined && output.eventType !== null) {
    contents.eventType = output.eventType;
  }
  if (output.messageId !== undefined && output.messageId !== null) {
    contents.messageId = output.messageId;
  }
  if (output.payload !== undefined && output.payload !== null) {
    contents.payload = output.payload;
  }
  if (output.timestamp !== undefined && output.timestamp !== null) {
    contents.timestamp = new Date(Math.round(output.timestamp * 1000));
  }
  return contents;
};

const deserializeAws_json1_1FlowExecutionMessages = (
  output: any,
  context: __SerdeContext
): Array<FlowExecutionMessage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FlowExecutionMessage(entry, context)
  );
};

const deserializeAws_json1_1FlowExecutionSummaries = (
  output: any,
  context: __SerdeContext
): Array<FlowExecutionSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FlowExecutionSummary(entry, context)
  );
};

const deserializeAws_json1_1FlowExecutionSummary = (
  output: any,
  context: __SerdeContext
): FlowExecutionSummary => {
  let contents: any = {
    __type: "FlowExecutionSummary",
    createdAt: undefined,
    flowExecutionId: undefined,
    flowTemplateId: undefined,
    status: undefined,
    systemInstanceId: undefined,
    updatedAt: undefined
  };
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.flowExecutionId !== undefined && output.flowExecutionId !== null) {
    contents.flowExecutionId = output.flowExecutionId;
  }
  if (output.flowTemplateId !== undefined && output.flowTemplateId !== null) {
    contents.flowTemplateId = output.flowTemplateId;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (
    output.systemInstanceId !== undefined &&
    output.systemInstanceId !== null
  ) {
    contents.systemInstanceId = output.systemInstanceId;
  }
  if (output.updatedAt !== undefined && output.updatedAt !== null) {
    contents.updatedAt = new Date(Math.round(output.updatedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1FlowTemplateDescription = (
  output: any,
  context: __SerdeContext
): FlowTemplateDescription => {
  let contents: any = {
    __type: "FlowTemplateDescription",
    definition: undefined,
    summary: undefined,
    validatedNamespaceVersion: undefined
  };
  if (output.definition !== undefined && output.definition !== null) {
    contents.definition = deserializeAws_json1_1DefinitionDocument(
      output.definition,
      context
    );
  }
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = deserializeAws_json1_1FlowTemplateSummary(
      output.summary,
      context
    );
  }
  if (
    output.validatedNamespaceVersion !== undefined &&
    output.validatedNamespaceVersion !== null
  ) {
    contents.validatedNamespaceVersion = output.validatedNamespaceVersion;
  }
  return contents;
};

const deserializeAws_json1_1FlowTemplateSummaries = (
  output: any,
  context: __SerdeContext
): Array<FlowTemplateSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FlowTemplateSummary(entry, context)
  );
};

const deserializeAws_json1_1FlowTemplateSummary = (
  output: any,
  context: __SerdeContext
): FlowTemplateSummary => {
  let contents: any = {
    __type: "FlowTemplateSummary",
    arn: undefined,
    createdAt: undefined,
    id: undefined,
    revisionNumber: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.revisionNumber !== undefined && output.revisionNumber !== null) {
    contents.revisionNumber = output.revisionNumber;
  }
  return contents;
};

const deserializeAws_json1_1MetricsConfiguration = (
  output: any,
  context: __SerdeContext
): MetricsConfiguration => {
  let contents: any = {
    __type: "MetricsConfiguration",
    cloudMetricEnabled: undefined,
    metricRuleRoleArn: undefined
  };
  if (
    output.cloudMetricEnabled !== undefined &&
    output.cloudMetricEnabled !== null
  ) {
    contents.cloudMetricEnabled = output.cloudMetricEnabled;
  }
  if (
    output.metricRuleRoleArn !== undefined &&
    output.metricRuleRoleArn !== null
  ) {
    contents.metricRuleRoleArn = output.metricRuleRoleArn;
  }
  return contents;
};

const deserializeAws_json1_1SystemInstanceDescription = (
  output: any,
  context: __SerdeContext
): SystemInstanceDescription => {
  let contents: any = {
    __type: "SystemInstanceDescription",
    definition: undefined,
    flowActionsRoleArn: undefined,
    metricsConfiguration: undefined,
    s3BucketName: undefined,
    summary: undefined,
    validatedDependencyRevisions: undefined,
    validatedNamespaceVersion: undefined
  };
  if (output.definition !== undefined && output.definition !== null) {
    contents.definition = deserializeAws_json1_1DefinitionDocument(
      output.definition,
      context
    );
  }
  if (
    output.flowActionsRoleArn !== undefined &&
    output.flowActionsRoleArn !== null
  ) {
    contents.flowActionsRoleArn = output.flowActionsRoleArn;
  }
  if (
    output.metricsConfiguration !== undefined &&
    output.metricsConfiguration !== null
  ) {
    contents.metricsConfiguration = deserializeAws_json1_1MetricsConfiguration(
      output.metricsConfiguration,
      context
    );
  }
  if (output.s3BucketName !== undefined && output.s3BucketName !== null) {
    contents.s3BucketName = output.s3BucketName;
  }
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = deserializeAws_json1_1SystemInstanceSummary(
      output.summary,
      context
    );
  }
  if (
    output.validatedDependencyRevisions !== undefined &&
    output.validatedDependencyRevisions !== null
  ) {
    contents.validatedDependencyRevisions = deserializeAws_json1_1DependencyRevisions(
      output.validatedDependencyRevisions,
      context
    );
  }
  if (
    output.validatedNamespaceVersion !== undefined &&
    output.validatedNamespaceVersion !== null
  ) {
    contents.validatedNamespaceVersion = output.validatedNamespaceVersion;
  }
  return contents;
};

const deserializeAws_json1_1SystemInstanceSummaries = (
  output: any,
  context: __SerdeContext
): Array<SystemInstanceSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SystemInstanceSummary(entry, context)
  );
};

const deserializeAws_json1_1SystemInstanceSummary = (
  output: any,
  context: __SerdeContext
): SystemInstanceSummary => {
  let contents: any = {
    __type: "SystemInstanceSummary",
    arn: undefined,
    createdAt: undefined,
    greengrassGroupId: undefined,
    greengrassGroupName: undefined,
    greengrassGroupVersionId: undefined,
    id: undefined,
    status: undefined,
    target: undefined,
    updatedAt: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (
    output.greengrassGroupId !== undefined &&
    output.greengrassGroupId !== null
  ) {
    contents.greengrassGroupId = output.greengrassGroupId;
  }
  if (
    output.greengrassGroupName !== undefined &&
    output.greengrassGroupName !== null
  ) {
    contents.greengrassGroupName = output.greengrassGroupName;
  }
  if (
    output.greengrassGroupVersionId !== undefined &&
    output.greengrassGroupVersionId !== null
  ) {
    contents.greengrassGroupVersionId = output.greengrassGroupVersionId;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.target !== undefined && output.target !== null) {
    contents.target = output.target;
  }
  if (output.updatedAt !== undefined && output.updatedAt !== null) {
    contents.updatedAt = new Date(Math.round(output.updatedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1SystemTemplateDescription = (
  output: any,
  context: __SerdeContext
): SystemTemplateDescription => {
  let contents: any = {
    __type: "SystemTemplateDescription",
    definition: undefined,
    summary: undefined,
    validatedNamespaceVersion: undefined
  };
  if (output.definition !== undefined && output.definition !== null) {
    contents.definition = deserializeAws_json1_1DefinitionDocument(
      output.definition,
      context
    );
  }
  if (output.summary !== undefined && output.summary !== null) {
    contents.summary = deserializeAws_json1_1SystemTemplateSummary(
      output.summary,
      context
    );
  }
  if (
    output.validatedNamespaceVersion !== undefined &&
    output.validatedNamespaceVersion !== null
  ) {
    contents.validatedNamespaceVersion = output.validatedNamespaceVersion;
  }
  return contents;
};

const deserializeAws_json1_1SystemTemplateSummaries = (
  output: any,
  context: __SerdeContext
): Array<SystemTemplateSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SystemTemplateSummary(entry, context)
  );
};

const deserializeAws_json1_1SystemTemplateSummary = (
  output: any,
  context: __SerdeContext
): SystemTemplateSummary => {
  let contents: any = {
    __type: "SystemTemplateSummary",
    arn: undefined,
    createdAt: undefined,
    id: undefined,
    revisionNumber: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.revisionNumber !== undefined && output.revisionNumber !== null) {
    contents.revisionNumber = output.revisionNumber;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
