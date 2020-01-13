import {
  AssociateConfigurationItemsToApplicationCommandInput,
  AssociateConfigurationItemsToApplicationCommandOutput
} from "../commands/AssociateConfigurationItemsToApplicationCommand";
import {
  BatchDeleteImportDataCommandInput,
  BatchDeleteImportDataCommandOutput
} from "../commands/BatchDeleteImportDataCommand";
import {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput
} from "../commands/CreateApplicationCommand";
import {
  CreateTagsCommandInput,
  CreateTagsCommandOutput
} from "../commands/CreateTagsCommand";
import {
  DeleteApplicationsCommandInput,
  DeleteApplicationsCommandOutput
} from "../commands/DeleteApplicationsCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "../commands/DeleteTagsCommand";
import {
  DescribeAgentsCommandInput,
  DescribeAgentsCommandOutput
} from "../commands/DescribeAgentsCommand";
import {
  DescribeConfigurationsCommandInput,
  DescribeConfigurationsCommandOutput
} from "../commands/DescribeConfigurationsCommand";
import {
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput
} from "../commands/DescribeContinuousExportsCommand";
import {
  DescribeExportConfigurationsCommandInput,
  DescribeExportConfigurationsCommandOutput
} from "../commands/DescribeExportConfigurationsCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput
} from "../commands/DescribeExportTasksCommand";
import {
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput
} from "../commands/DescribeImportTasksCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "../commands/DescribeTagsCommand";
import {
  DisassociateConfigurationItemsFromApplicationCommandInput,
  DisassociateConfigurationItemsFromApplicationCommandOutput
} from "../commands/DisassociateConfigurationItemsFromApplicationCommand";
import {
  ExportConfigurationsCommandInput,
  ExportConfigurationsCommandOutput
} from "../commands/ExportConfigurationsCommand";
import {
  GetDiscoverySummaryCommandInput,
  GetDiscoverySummaryCommandOutput
} from "../commands/GetDiscoverySummaryCommand";
import {
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput
} from "../commands/ListConfigurationsCommand";
import {
  ListServerNeighborsCommandInput,
  ListServerNeighborsCommandOutput
} from "../commands/ListServerNeighborsCommand";
import {
  StartContinuousExportCommandInput,
  StartContinuousExportCommandOutput
} from "../commands/StartContinuousExportCommand";
import {
  StartDataCollectionByAgentIdsCommandInput,
  StartDataCollectionByAgentIdsCommandOutput
} from "../commands/StartDataCollectionByAgentIdsCommand";
import {
  StartExportTaskCommandInput,
  StartExportTaskCommandOutput
} from "../commands/StartExportTaskCommand";
import {
  StartImportTaskCommandInput,
  StartImportTaskCommandOutput
} from "../commands/StartImportTaskCommand";
import {
  StopContinuousExportCommandInput,
  StopContinuousExportCommandOutput
} from "../commands/StopContinuousExportCommand";
import {
  StopDataCollectionByAgentIdsCommandInput,
  StopDataCollectionByAgentIdsCommandOutput
} from "../commands/StopDataCollectionByAgentIdsCommand";
import {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput
} from "../commands/UpdateApplicationCommand";
import {
  AgentConfigurationStatus,
  AgentInfo,
  AgentNetworkInfo,
  AssociateConfigurationItemsToApplicationRequest,
  AssociateConfigurationItemsToApplicationResponse,
  AuthorizationErrorException,
  BatchDeleteImportDataError,
  BatchDeleteImportDataRequest,
  BatchDeleteImportDataResponse,
  ConfigurationTag,
  ConflictErrorException,
  ContinuousExportDescription,
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateTagsRequest,
  CreateTagsResponse,
  CustomerAgentInfo,
  CustomerConnectorInfo,
  DeleteApplicationsRequest,
  DeleteApplicationsResponse,
  DeleteTagsRequest,
  DeleteTagsResponse,
  DescribeAgentsRequest,
  DescribeAgentsResponse,
  DescribeConfigurationsRequest,
  DescribeConfigurationsResponse,
  DescribeContinuousExportsRequest,
  DescribeContinuousExportsResponse,
  DescribeExportConfigurationsRequest,
  DescribeExportConfigurationsResponse,
  DescribeExportTasksRequest,
  DescribeExportTasksResponse,
  DescribeImportTasksRequest,
  DescribeImportTasksResponse,
  DescribeTagsRequest,
  DescribeTagsResponse,
  DisassociateConfigurationItemsFromApplicationRequest,
  DisassociateConfigurationItemsFromApplicationResponse,
  ExportConfigurationsResponse,
  ExportDataFormat,
  ExportFilter,
  ExportInfo,
  Filter,
  GetDiscoverySummaryRequest,
  GetDiscoverySummaryResponse,
  HomeRegionNotSetException,
  ImportTask,
  ImportTaskFilter,
  InvalidParameterException,
  InvalidParameterValueException,
  ListConfigurationsRequest,
  ListConfigurationsResponse,
  ListServerNeighborsRequest,
  ListServerNeighborsResponse,
  NeighborConnectionDetail,
  OperationNotPermittedException,
  OrderByElement,
  ResourceInUseException,
  ResourceNotFoundException,
  ServerInternalErrorException,
  StartContinuousExportRequest,
  StartContinuousExportResponse,
  StartDataCollectionByAgentIdsRequest,
  StartDataCollectionByAgentIdsResponse,
  StartExportTaskRequest,
  StartExportTaskResponse,
  StartImportTaskRequest,
  StartImportTaskResponse,
  StopContinuousExportRequest,
  StopContinuousExportResponse,
  StopDataCollectionByAgentIdsRequest,
  StopDataCollectionByAgentIdsResponse,
  Tag,
  TagFilter,
  UpdateApplicationRequest,
  UpdateApplicationResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand(
  input: AssociateConfigurationItemsToApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication";
  let body: any = {};
  const wrappedBody: any = {
    AssociateConfigurationItemsToApplicationRequest: serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AssociateConfigurationItemsToApplication",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1BatchDeleteImportDataCommand(
  input: BatchDeleteImportDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.BatchDeleteImportData";
  let body: any = {};
  const wrappedBody: any = {
    BatchDeleteImportDataRequest: serializeAws_json1_1BatchDeleteImportDataRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchDeleteImportData",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateApplicationCommand(
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.CreateApplication";
  let body: any = {};
  const wrappedBody: any = {
    CreateApplicationRequest: serializeAws_json1_1CreateApplicationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateApplication",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateTagsCommand(
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.CreateTags";
  let body: any = {};
  const wrappedBody: any = {
    CreateTagsRequest: serializeAws_json1_1CreateTagsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteApplicationsCommand(
  input: DeleteApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.DeleteApplications";
  let body: any = {};
  const wrappedBody: any = {
    DeleteApplicationsRequest: serializeAws_json1_1DeleteApplicationsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteApplications",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteTagsCommand(
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.DeleteTags";
  let body: any = {};
  const wrappedBody: any = {
    DeleteTagsRequest: serializeAws_json1_1DeleteTagsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeAgentsCommand(
  input: DescribeAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.DescribeAgents";
  let body: any = {};
  const wrappedBody: any = {
    DescribeAgentsRequest: serializeAws_json1_1DescribeAgentsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeAgents",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeConfigurationsCommand(
  input: DescribeConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.DescribeConfigurations";
  let body: any = {};
  const wrappedBody: any = {
    DescribeConfigurationsRequest: serializeAws_json1_1DescribeConfigurationsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeConfigurations",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeContinuousExportsCommand(
  input: DescribeContinuousExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.DescribeContinuousExports";
  let body: any = {};
  const wrappedBody: any = {
    DescribeContinuousExportsRequest: serializeAws_json1_1DescribeContinuousExportsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeContinuousExports",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeExportConfigurationsCommand(
  input: DescribeExportConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.DescribeExportConfigurations";
  let body: any = {};
  const wrappedBody: any = {
    DescribeExportConfigurationsRequest: serializeAws_json1_1DescribeExportConfigurationsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeExportConfigurations",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeExportTasksCommand(
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.DescribeExportTasks";
  let body: any = {};
  const wrappedBody: any = {
    DescribeExportTasksRequest: serializeAws_json1_1DescribeExportTasksRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeExportTasks",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeImportTasksCommand(
  input: DescribeImportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.DescribeImportTasks";
  let body: any = {};
  const wrappedBody: any = {
    DescribeImportTasksRequest: serializeAws_json1_1DescribeImportTasksRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeImportTasks",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeTagsCommand(
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.DescribeTags";
  let body: any = {};
  const wrappedBody: any = {
    DescribeTagsRequest: serializeAws_json1_1DescribeTagsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand(
  input: DisassociateConfigurationItemsFromApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication";
  let body: any = {};
  const wrappedBody: any = {
    DisassociateConfigurationItemsFromApplicationRequest: serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisassociateConfigurationItemsFromApplication",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ExportConfigurationsCommand(
  input: ExportConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.ExportConfigurations";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ExportConfigurations",
    headers: headers
  });
}

export async function serializeAws_json1_1GetDiscoverySummaryCommand(
  input: GetDiscoverySummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.GetDiscoverySummary";
  let body: any = {};
  const wrappedBody: any = {
    GetDiscoverySummaryRequest: serializeAws_json1_1GetDiscoverySummaryRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDiscoverySummary",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListConfigurationsCommand(
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.ListConfigurations";
  let body: any = {};
  const wrappedBody: any = {
    ListConfigurationsRequest: serializeAws_json1_1ListConfigurationsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListConfigurations",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListServerNeighborsCommand(
  input: ListServerNeighborsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.ListServerNeighbors";
  let body: any = {};
  const wrappedBody: any = {
    ListServerNeighborsRequest: serializeAws_json1_1ListServerNeighborsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListServerNeighbors",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartContinuousExportCommand(
  input: StartContinuousExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.StartContinuousExport";
  let body: any = {};
  const wrappedBody: any = {
    StartContinuousExportRequest: serializeAws_json1_1StartContinuousExportRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartContinuousExport",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartDataCollectionByAgentIdsCommand(
  input: StartDataCollectionByAgentIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds";
  let body: any = {};
  const wrappedBody: any = {
    StartDataCollectionByAgentIdsRequest: serializeAws_json1_1StartDataCollectionByAgentIdsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartDataCollectionByAgentIds",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartExportTaskCommand(
  input: StartExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.StartExportTask";
  let body: any = {};
  const wrappedBody: any = {
    StartExportTaskRequest: serializeAws_json1_1StartExportTaskRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartExportTask",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartImportTaskCommand(
  input: StartImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.StartImportTask";
  let body: any = {};
  const wrappedBody: any = {
    StartImportTaskRequest: serializeAws_json1_1StartImportTaskRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartImportTask",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StopContinuousExportCommand(
  input: StopContinuousExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.StopContinuousExport";
  let body: any = {};
  const wrappedBody: any = {
    StopContinuousExportRequest: serializeAws_json1_1StopContinuousExportRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopContinuousExport",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StopDataCollectionByAgentIdsCommand(
  input: StopDataCollectionByAgentIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds";
  let body: any = {};
  const wrappedBody: any = {
    StopDataCollectionByAgentIdsRequest: serializeAws_json1_1StopDataCollectionByAgentIdsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopDataCollectionByAgentIds",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateApplicationCommand(
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPoseidonService_V2015_11_01.UpdateApplication";
  let body: any = {};
  const wrappedBody: any = {
    UpdateApplicationRequest: serializeAws_json1_1UpdateApplicationRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateApplication",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConfigurationItemsToApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse(
    data,
    context
  );
  const response: AssociateConfigurationItemsToApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateConfigurationItemsToApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConfigurationItemsToApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1BatchDeleteImportDataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImportDataCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchDeleteImportDataCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteImportDataResponse(data, context);
  const response: BatchDeleteImportDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDeleteImportDataResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchDeleteImportDataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImportDataCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTagsResponse(data, context);
  const response: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteApplicationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationsResponse(data, context);
  const response: DeleteApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApplicationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteApplicationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTagsResponse(data, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeAgentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAgentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAgentsResponse(data, context);
  const response: DescribeAgentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAgentsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAgentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeConfigurationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConfigurationsResponse(
    data,
    context
  );
  const response: DescribeConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeConfigurationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeContinuousExportsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousExportsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeContinuousExportsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeContinuousExportsResponse(
    data,
    context
  );
  const response: DescribeContinuousExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeContinuousExportsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeContinuousExportsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousExportsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.awsposeidon.V2015_11_01#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeExportConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportConfigurationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeExportConfigurationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExportConfigurationsResponse(
    data,
    context
  );
  const response: DescribeExportConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeExportConfigurationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeExportConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportConfigurationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeExportTasksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeExportTasksCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExportTasksResponse(data, context);
  const response: DescribeExportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeExportTasksResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeExportTasksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeImportTasksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportTasksCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeImportTasksCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeImportTasksResponse(data, context);
  const response: DescribeImportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeImportTasksResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeImportTasksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportTasksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTagsResponse(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse(
    data,
    context
  );
  const response: DisassociateConfigurationItemsFromApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateConfigurationItemsFromApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ExportConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportConfigurationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ExportConfigurationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExportConfigurationsResponse(data, context);
  const response: ExportConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExportConfigurationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ExportConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportConfigurationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.awsposeidon.V2015_11_01#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1GetDiscoverySummaryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoverySummaryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDiscoverySummaryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDiscoverySummaryResponse(data, context);
  const response: GetDiscoverySummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDiscoverySummaryResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDiscoverySummaryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoverySummaryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListConfigurationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListConfigurationsResponse(data, context);
  const response: ListConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigurationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListServerNeighborsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerNeighborsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListServerNeighborsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServerNeighborsResponse(data, context);
  const response: ListServerNeighborsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListServerNeighborsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListServerNeighborsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerNeighborsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1StartContinuousExportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContinuousExportCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartContinuousExportCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartContinuousExportResponse(data, context);
  const response: StartContinuousExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartContinuousExportResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartContinuousExportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContinuousExportCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ConflictErrorException":
      response = await deserializeAws_json1_1ConflictErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.awsposeidon.V2015_11_01#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1StartDataCollectionByAgentIdsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataCollectionByAgentIdsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDataCollectionByAgentIdsResponse(
    data,
    context
  );
  const response: StartDataCollectionByAgentIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDataCollectionByAgentIdsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataCollectionByAgentIdsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1StartExportTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartExportTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartExportTaskResponse(data, context);
  const response: StartExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartExportTaskResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartExportTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.awsposeidon.V2015_11_01#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1StartImportTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportTaskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartImportTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartImportTaskResponse(data, context);
  const response: StartImportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartImportTaskResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartImportTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportTaskCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1StopContinuousExportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContinuousExportCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopContinuousExportCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopContinuousExportResponse(data, context);
  const response: StopContinuousExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopContinuousExportResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopContinuousExportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContinuousExportCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.awsposeidon.V2015_11_01#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1StopDataCollectionByAgentIdsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataCollectionByAgentIdsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopDataCollectionByAgentIdsResponse(
    data,
    context
  );
  const response: StopDataCollectionByAgentIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopDataCollectionByAgentIdsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataCollectionByAgentIdsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UpdateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#AuthorizationErrorException":
      response = await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.awsposeidon.V2015_11_01#HomeRegionNotSetException":
      response = await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsposeidon.V2015_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.awsposeidon.V2015_11_01#ServerInternalErrorException":
      response = await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.awsposeidon.V2015_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_json1_1AuthorizationErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AuthorizationErrorException(
    body,
    context
  );
  const contents: AuthorizationErrorException = {
    name: "AuthorizationErrorException",
    __type: "AuthorizationErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ConflictErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictErrorException(
    body,
    context
  );
  const contents: ConflictErrorException = {
    name: "ConflictErrorException",
    __type: "ConflictErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1HomeRegionNotSetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HomeRegionNotSetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HomeRegionNotSetException(
    body,
    context
  );
  const contents: HomeRegionNotSetException = {
    name: "HomeRegionNotSetException",
    __type: "HomeRegionNotSetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    __type: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(
    body,
    context
  );
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    __type: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotPermittedException(
    body,
    context
  );
  const contents: OperationNotPermittedException = {
    name: "OperationNotPermittedException",
    __type: "OperationNotPermittedException",
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
    __type: "ResourceInUseException",
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
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServerInternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerInternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerInternalErrorException(
    body,
    context
  );
  const contents: ServerInternalErrorException = {
    name: "ServerInternalErrorException",
    __type: "ServerInternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AgentIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ApplicationIdsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest = (
  input: AssociateConfigurationItemsToApplicationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.applicationConfigurationId !== undefined) {
    bodyParams["applicationConfigurationId"] = input.applicationConfigurationId;
  }
  if (input.configurationIds !== undefined) {
    bodyParams["configurationIds"] = serializeAws_json1_1ConfigurationIdList(
      input.configurationIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchDeleteImportDataRequest = (
  input: BatchDeleteImportDataRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.importTaskIds !== undefined) {
    bodyParams["importTaskIds"] = serializeAws_json1_1ToDeleteIdentifierList(
      input.importTaskIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ConfigurationIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ContinuousExportIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateTagsRequest = (
  input: CreateTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.configurationIds !== undefined) {
    bodyParams["configurationIds"] = serializeAws_json1_1ConfigurationIdList(
      input.configurationIds,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagSet(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteApplicationsRequest = (
  input: DeleteApplicationsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.configurationIds !== undefined) {
    bodyParams["configurationIds"] = serializeAws_json1_1ApplicationIdsList(
      input.configurationIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteTagsRequest = (
  input: DeleteTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.configurationIds !== undefined) {
    bodyParams["configurationIds"] = serializeAws_json1_1ConfigurationIdList(
      input.configurationIds,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagSet(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAgentsRequest = (
  input: DescribeAgentsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.agentIds !== undefined) {
    bodyParams["agentIds"] = serializeAws_json1_1AgentIds(
      input.agentIds,
      context
    );
  }
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1Filters(input.filters, context);
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeConfigurationsRequest = (
  input: DescribeConfigurationsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.configurationIds !== undefined) {
    bodyParams["configurationIds"] = serializeAws_json1_1ConfigurationIdList(
      input.configurationIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeContinuousExportsRequest = (
  input: DescribeContinuousExportsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.exportIds !== undefined) {
    bodyParams["exportIds"] = serializeAws_json1_1ContinuousExportIds(
      input.exportIds,
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

const serializeAws_json1_1DescribeExportConfigurationsRequest = (
  input: DescribeExportConfigurationsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.exportIds !== undefined) {
    bodyParams["exportIds"] = serializeAws_json1_1ExportIds(
      input.exportIds,
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

const serializeAws_json1_1DescribeExportTasksRequest = (
  input: DescribeExportTasksRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.exportIds !== undefined) {
    bodyParams["exportIds"] = serializeAws_json1_1ExportIds(
      input.exportIds,
      context
    );
  }
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1ExportFilters(
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

const serializeAws_json1_1DescribeImportTasksFilterList = (
  input: Array<ImportTaskFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ImportTaskFilter(entry, context)
  );
};

const serializeAws_json1_1DescribeImportTasksRequest = (
  input: DescribeImportTasksRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1DescribeImportTasksFilterList(
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

const serializeAws_json1_1DescribeTagsRequest = (
  input: DescribeTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1TagFilters(
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

const serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest = (
  input: DisassociateConfigurationItemsFromApplicationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.applicationConfigurationId !== undefined) {
    bodyParams["applicationConfigurationId"] = input.applicationConfigurationId;
  }
  if (input.configurationIds !== undefined) {
    bodyParams["configurationIds"] = serializeAws_json1_1ConfigurationIdList(
      input.configurationIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ExportDataFormats = (
  input: Array<ExportDataFormat | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ExportFilter = (
  input: ExportFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.condition !== undefined) {
    bodyParams["condition"] = input.condition;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_json1_1FilterValues(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ExportFilters = (
  input: Array<ExportFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ExportFilter(entry, context)
  );
};

const serializeAws_json1_1ExportIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.condition !== undefined) {
    bodyParams["condition"] = input.condition;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_json1_1FilterValues(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1FilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1Filters = (
  input: Array<Filter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Filter(entry, context));
};

const serializeAws_json1_1GetDiscoverySummaryRequest = (
  input: GetDiscoverySummaryRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1ImportTaskFilter = (
  input: ImportTaskFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_json1_1ImportTaskFilterValueList(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ImportTaskFilterValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ListConfigurationsRequest = (
  input: ListConfigurationsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.configurationType !== undefined) {
    bodyParams["configurationType"] = input.configurationType;
  }
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1Filters(input.filters, context);
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.orderBy !== undefined) {
    bodyParams["orderBy"] = serializeAws_json1_1OrderByList(
      input.orderBy,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListServerNeighborsRequest = (
  input: ListServerNeighborsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.configurationId !== undefined) {
    bodyParams["configurationId"] = input.configurationId;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.neighborConfigurationIds !== undefined) {
    bodyParams[
      "neighborConfigurationIds"
    ] = serializeAws_json1_1ConfigurationIdList(
      input.neighborConfigurationIds,
      context
    );
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.portInformationNeeded !== undefined) {
    bodyParams["portInformationNeeded"] = input.portInformationNeeded;
  }
  return bodyParams;
};

const serializeAws_json1_1OrderByElement = (
  input: OrderByElement,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.fieldName !== undefined) {
    bodyParams["fieldName"] = input.fieldName;
  }
  if (input.sortOrder !== undefined) {
    bodyParams["sortOrder"] = input.sortOrder;
  }
  return bodyParams;
};

const serializeAws_json1_1OrderByList = (
  input: Array<OrderByElement>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1OrderByElement(entry, context)
  );
};

const serializeAws_json1_1StartContinuousExportRequest = (
  input: StartContinuousExportRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1StartDataCollectionByAgentIdsRequest = (
  input: StartDataCollectionByAgentIdsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.agentIds !== undefined) {
    bodyParams["agentIds"] = serializeAws_json1_1AgentIds(
      input.agentIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1StartExportTaskRequest = (
  input: StartExportTaskRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.exportDataFormat !== undefined) {
    bodyParams["exportDataFormat"] = serializeAws_json1_1ExportDataFormats(
      input.exportDataFormat,
      context
    );
  }
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1ExportFilters(
      input.filters,
      context
    );
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1StartImportTaskRequest = (
  input: StartImportTaskRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.importUrl !== undefined) {
    bodyParams["importUrl"] = input.importUrl;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1StopContinuousExportRequest = (
  input: StopContinuousExportRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.exportId !== undefined) {
    bodyParams["exportId"] = input.exportId;
  }
  return bodyParams;
};

const serializeAws_json1_1StopDataCollectionByAgentIdsRequest = (
  input: StopDataCollectionByAgentIdsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.agentIds !== undefined) {
    bodyParams["agentIds"] = serializeAws_json1_1AgentIds(
      input.agentIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_json1_1FilterValues(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1TagFilters = (
  input: Array<TagFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1TagFilter(entry, context)
  );
};

const serializeAws_json1_1TagSet = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1ToDeleteIdentifierList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1UpdateApplicationRequest = (
  input: UpdateApplicationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.configurationId !== undefined) {
    bodyParams["configurationId"] = input.configurationId;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const deserializeAws_json1_1AgentConfigurationStatus = (
  output: any,
  context: __SerdeContext
): AgentConfigurationStatus => {
  let contents: any = {
    __type: "AgentConfigurationStatus",
    agentId: undefined,
    description: undefined,
    operationSucceeded: undefined
  };
  if (output.agentId !== undefined) {
    contents.agentId = output.agentId;
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.operationSucceeded !== undefined) {
    contents.operationSucceeded = output.operationSucceeded;
  }
  return contents;
};

const deserializeAws_json1_1AgentConfigurationStatusList = (
  output: any,
  context: __SerdeContext
): Array<AgentConfigurationStatus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AgentConfigurationStatus(entry, context)
  );
};

const deserializeAws_json1_1AgentInfo = (
  output: any,
  context: __SerdeContext
): AgentInfo => {
  let contents: any = {
    __type: "AgentInfo",
    agentId: undefined,
    agentNetworkInfoList: undefined,
    agentType: undefined,
    collectionStatus: undefined,
    connectorId: undefined,
    health: undefined,
    hostName: undefined,
    lastHealthPingTime: undefined,
    registeredTime: undefined,
    version: undefined
  };
  if (output.agentId !== undefined) {
    contents.agentId = output.agentId;
  }
  if (output.agentNetworkInfoList !== undefined) {
    contents.agentNetworkInfoList = deserializeAws_json1_1AgentNetworkInfoList(
      output.agentNetworkInfoList,
      context
    );
  }
  if (output.agentType !== undefined) {
    contents.agentType = output.agentType;
  }
  if (output.collectionStatus !== undefined) {
    contents.collectionStatus = output.collectionStatus;
  }
  if (output.connectorId !== undefined) {
    contents.connectorId = output.connectorId;
  }
  if (output.health !== undefined) {
    contents.health = output.health;
  }
  if (output.hostName !== undefined) {
    contents.hostName = output.hostName;
  }
  if (output.lastHealthPingTime !== undefined) {
    contents.lastHealthPingTime = output.lastHealthPingTime;
  }
  if (output.registeredTime !== undefined) {
    contents.registeredTime = output.registeredTime;
  }
  if (output.version !== undefined) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_json1_1AgentNetworkInfo = (
  output: any,
  context: __SerdeContext
): AgentNetworkInfo => {
  let contents: any = {
    __type: "AgentNetworkInfo",
    ipAddress: undefined,
    macAddress: undefined
  };
  if (output.ipAddress !== undefined) {
    contents.ipAddress = output.ipAddress;
  }
  if (output.macAddress !== undefined) {
    contents.macAddress = output.macAddress;
  }
  return contents;
};

const deserializeAws_json1_1AgentNetworkInfoList = (
  output: any,
  context: __SerdeContext
): Array<AgentNetworkInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AgentNetworkInfo(entry, context)
  );
};

const deserializeAws_json1_1AgentsInfo = (
  output: any,
  context: __SerdeContext
): Array<AgentInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AgentInfo(entry, context)
  );
};

const deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse = (
  output: any,
  context: __SerdeContext
): AssociateConfigurationItemsToApplicationResponse => {
  let contents: any = {
    __type: "AssociateConfigurationItemsToApplicationResponse"
  };
  return contents;
};

const deserializeAws_json1_1AuthorizationErrorException = (
  output: any,
  context: __SerdeContext
): AuthorizationErrorException => {
  let contents: any = {
    __type: "AuthorizationErrorException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1BatchDeleteImportDataError = (
  output: any,
  context: __SerdeContext
): BatchDeleteImportDataError => {
  let contents: any = {
    __type: "BatchDeleteImportDataError",
    errorCode: undefined,
    errorDescription: undefined,
    importTaskId: undefined
  };
  if (output.errorCode !== undefined) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorDescription !== undefined) {
    contents.errorDescription = output.errorDescription;
  }
  if (output.importTaskId !== undefined) {
    contents.importTaskId = output.importTaskId;
  }
  return contents;
};

const deserializeAws_json1_1BatchDeleteImportDataErrorList = (
  output: any,
  context: __SerdeContext
): Array<BatchDeleteImportDataError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchDeleteImportDataError(entry, context)
  );
};

const deserializeAws_json1_1BatchDeleteImportDataResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteImportDataResponse => {
  let contents: any = {
    __type: "BatchDeleteImportDataResponse",
    errors: undefined
  };
  if (output.errors !== undefined) {
    contents.errors = deserializeAws_json1_1BatchDeleteImportDataErrorList(
      output.errors,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Configuration = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1ConfigurationTag = (
  output: any,
  context: __SerdeContext
): ConfigurationTag => {
  let contents: any = {
    __type: "ConfigurationTag",
    configurationId: undefined,
    configurationType: undefined,
    key: undefined,
    timeOfCreation: undefined,
    value: undefined
  };
  if (output.configurationId !== undefined) {
    contents.configurationId = output.configurationId;
  }
  if (output.configurationType !== undefined) {
    contents.configurationType = output.configurationType;
  }
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.timeOfCreation !== undefined) {
    contents.timeOfCreation = new Date(
      output.timeOfCreation % 1 != 0
        ? Math.round(output.timeOfCreation * 1000)
        : output.timeOfCreation
    );
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1ConfigurationTagSet = (
  output: any,
  context: __SerdeContext
): Array<ConfigurationTag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ConfigurationTag(entry, context)
  );
};

const deserializeAws_json1_1Configurations = (
  output: any,
  context: __SerdeContext
): Array<{ [key: string]: string }> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Configuration(entry, context)
  );
};

const deserializeAws_json1_1ConflictErrorException = (
  output: any,
  context: __SerdeContext
): ConflictErrorException => {
  let contents: any = {
    __type: "ConflictErrorException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ContinuousExportDescription = (
  output: any,
  context: __SerdeContext
): ContinuousExportDescription => {
  let contents: any = {
    __type: "ContinuousExportDescription",
    dataSource: undefined,
    exportId: undefined,
    s3Bucket: undefined,
    schemaStorageConfig: undefined,
    startTime: undefined,
    status: undefined,
    statusDetail: undefined,
    stopTime: undefined
  };
  if (output.dataSource !== undefined) {
    contents.dataSource = output.dataSource;
  }
  if (output.exportId !== undefined) {
    contents.exportId = output.exportId;
  }
  if (output.s3Bucket !== undefined) {
    contents.s3Bucket = output.s3Bucket;
  }
  if (output.schemaStorageConfig !== undefined) {
    contents.schemaStorageConfig = deserializeAws_json1_1SchemaStorageConfig(
      output.schemaStorageConfig,
      context
    );
  }
  if (output.startTime !== undefined) {
    contents.startTime = new Date(
      output.startTime % 1 != 0
        ? Math.round(output.startTime * 1000)
        : output.startTime
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.statusDetail !== undefined) {
    contents.statusDetail = output.statusDetail;
  }
  if (output.stopTime !== undefined) {
    contents.stopTime = new Date(
      output.stopTime % 1 != 0
        ? Math.round(output.stopTime * 1000)
        : output.stopTime
    );
  }
  return contents;
};

const deserializeAws_json1_1ContinuousExportDescriptions = (
  output: any,
  context: __SerdeContext
): Array<ContinuousExportDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContinuousExportDescription(entry, context)
  );
};

const deserializeAws_json1_1CreateApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationResponse => {
  let contents: any = {
    __type: "CreateApplicationResponse",
    configurationId: undefined
  };
  if (output.configurationId !== undefined) {
    contents.configurationId = output.configurationId;
  }
  return contents;
};

const deserializeAws_json1_1CreateTagsResponse = (
  output: any,
  context: __SerdeContext
): CreateTagsResponse => {
  let contents: any = {
    __type: "CreateTagsResponse"
  };
  return contents;
};

const deserializeAws_json1_1CustomerAgentInfo = (
  output: any,
  context: __SerdeContext
): CustomerAgentInfo => {
  let contents: any = {
    __type: "CustomerAgentInfo",
    activeAgents: undefined,
    blackListedAgents: undefined,
    healthyAgents: undefined,
    shutdownAgents: undefined,
    totalAgents: undefined,
    unhealthyAgents: undefined,
    unknownAgents: undefined
  };
  if (output.activeAgents !== undefined) {
    contents.activeAgents = output.activeAgents;
  }
  if (output.blackListedAgents !== undefined) {
    contents.blackListedAgents = output.blackListedAgents;
  }
  if (output.healthyAgents !== undefined) {
    contents.healthyAgents = output.healthyAgents;
  }
  if (output.shutdownAgents !== undefined) {
    contents.shutdownAgents = output.shutdownAgents;
  }
  if (output.totalAgents !== undefined) {
    contents.totalAgents = output.totalAgents;
  }
  if (output.unhealthyAgents !== undefined) {
    contents.unhealthyAgents = output.unhealthyAgents;
  }
  if (output.unknownAgents !== undefined) {
    contents.unknownAgents = output.unknownAgents;
  }
  return contents;
};

const deserializeAws_json1_1CustomerConnectorInfo = (
  output: any,
  context: __SerdeContext
): CustomerConnectorInfo => {
  let contents: any = {
    __type: "CustomerConnectorInfo",
    activeConnectors: undefined,
    blackListedConnectors: undefined,
    healthyConnectors: undefined,
    shutdownConnectors: undefined,
    totalConnectors: undefined,
    unhealthyConnectors: undefined,
    unknownConnectors: undefined
  };
  if (output.activeConnectors !== undefined) {
    contents.activeConnectors = output.activeConnectors;
  }
  if (output.blackListedConnectors !== undefined) {
    contents.blackListedConnectors = output.blackListedConnectors;
  }
  if (output.healthyConnectors !== undefined) {
    contents.healthyConnectors = output.healthyConnectors;
  }
  if (output.shutdownConnectors !== undefined) {
    contents.shutdownConnectors = output.shutdownConnectors;
  }
  if (output.totalConnectors !== undefined) {
    contents.totalConnectors = output.totalConnectors;
  }
  if (output.unhealthyConnectors !== undefined) {
    contents.unhealthyConnectors = output.unhealthyConnectors;
  }
  if (output.unknownConnectors !== undefined) {
    contents.unknownConnectors = output.unknownConnectors;
  }
  return contents;
};

const deserializeAws_json1_1DeleteApplicationsResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationsResponse => {
  let contents: any = {
    __type: "DeleteApplicationsResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteTagsResponse = (
  output: any,
  context: __SerdeContext
): DeleteTagsResponse => {
  let contents: any = {
    __type: "DeleteTagsResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeAgentsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAgentsResponse => {
  let contents: any = {
    __type: "DescribeAgentsResponse",
    agentsInfo: undefined,
    nextToken: undefined
  };
  if (output.agentsInfo !== undefined) {
    contents.agentsInfo = deserializeAws_json1_1AgentsInfo(
      output.agentsInfo,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeConfigurationsAttribute = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1DescribeConfigurationsAttributes = (
  output: any,
  context: __SerdeContext
): Array<{ [key: string]: string }> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DescribeConfigurationsAttribute(entry, context)
  );
};

const deserializeAws_json1_1DescribeConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationsResponse => {
  let contents: any = {
    __type: "DescribeConfigurationsResponse",
    configurations: undefined
  };
  if (output.configurations !== undefined) {
    contents.configurations = deserializeAws_json1_1DescribeConfigurationsAttributes(
      output.configurations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeContinuousExportsResponse = (
  output: any,
  context: __SerdeContext
): DescribeContinuousExportsResponse => {
  let contents: any = {
    __type: "DescribeContinuousExportsResponse",
    descriptions: undefined,
    nextToken: undefined
  };
  if (output.descriptions !== undefined) {
    contents.descriptions = deserializeAws_json1_1ContinuousExportDescriptions(
      output.descriptions,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeExportConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeExportConfigurationsResponse => {
  let contents: any = {
    __type: "DescribeExportConfigurationsResponse",
    exportsInfo: undefined,
    nextToken: undefined
  };
  if (output.exportsInfo !== undefined) {
    contents.exportsInfo = deserializeAws_json1_1ExportsInfo(
      output.exportsInfo,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeExportTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeExportTasksResponse => {
  let contents: any = {
    __type: "DescribeExportTasksResponse",
    exportsInfo: undefined,
    nextToken: undefined
  };
  if (output.exportsInfo !== undefined) {
    contents.exportsInfo = deserializeAws_json1_1ExportsInfo(
      output.exportsInfo,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeImportTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeImportTasksResponse => {
  let contents: any = {
    __type: "DescribeImportTasksResponse",
    nextToken: undefined,
    tasks: undefined
  };
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.tasks !== undefined) {
    contents.tasks = deserializeAws_json1_1ImportTaskList(
      output.tasks,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeTagsResponse = (
  output: any,
  context: __SerdeContext
): DescribeTagsResponse => {
  let contents: any = {
    __type: "DescribeTagsResponse",
    nextToken: undefined,
    tags: undefined
  };
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_json1_1ConfigurationTagSet(
      output.tags,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse = (
  output: any,
  context: __SerdeContext
): DisassociateConfigurationItemsFromApplicationResponse => {
  let contents: any = {
    __type: "DisassociateConfigurationItemsFromApplicationResponse"
  };
  return contents;
};

const deserializeAws_json1_1ExportConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ExportConfigurationsResponse => {
  let contents: any = {
    __type: "ExportConfigurationsResponse",
    exportId: undefined
  };
  if (output.exportId !== undefined) {
    contents.exportId = output.exportId;
  }
  return contents;
};

const deserializeAws_json1_1ExportInfo = (
  output: any,
  context: __SerdeContext
): ExportInfo => {
  let contents: any = {
    __type: "ExportInfo",
    configurationsDownloadUrl: undefined,
    exportId: undefined,
    exportRequestTime: undefined,
    exportStatus: undefined,
    isTruncated: undefined,
    requestedEndTime: undefined,
    requestedStartTime: undefined,
    statusMessage: undefined
  };
  if (output.configurationsDownloadUrl !== undefined) {
    contents.configurationsDownloadUrl = output.configurationsDownloadUrl;
  }
  if (output.exportId !== undefined) {
    contents.exportId = output.exportId;
  }
  if (output.exportRequestTime !== undefined) {
    contents.exportRequestTime = new Date(
      output.exportRequestTime % 1 != 0
        ? Math.round(output.exportRequestTime * 1000)
        : output.exportRequestTime
    );
  }
  if (output.exportStatus !== undefined) {
    contents.exportStatus = output.exportStatus;
  }
  if (output.isTruncated !== undefined) {
    contents.isTruncated = output.isTruncated;
  }
  if (output.requestedEndTime !== undefined) {
    contents.requestedEndTime = new Date(
      output.requestedEndTime % 1 != 0
        ? Math.round(output.requestedEndTime * 1000)
        : output.requestedEndTime
    );
  }
  if (output.requestedStartTime !== undefined) {
    contents.requestedStartTime = new Date(
      output.requestedStartTime % 1 != 0
        ? Math.round(output.requestedStartTime * 1000)
        : output.requestedStartTime
    );
  }
  if (output.statusMessage !== undefined) {
    contents.statusMessage = output.statusMessage;
  }
  return contents;
};

const deserializeAws_json1_1ExportsInfo = (
  output: any,
  context: __SerdeContext
): Array<ExportInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExportInfo(entry, context)
  );
};

const deserializeAws_json1_1GetDiscoverySummaryResponse = (
  output: any,
  context: __SerdeContext
): GetDiscoverySummaryResponse => {
  let contents: any = {
    __type: "GetDiscoverySummaryResponse",
    agentSummary: undefined,
    applications: undefined,
    connectorSummary: undefined,
    servers: undefined,
    serversMappedToApplications: undefined,
    serversMappedtoTags: undefined
  };
  if (output.agentSummary !== undefined) {
    contents.agentSummary = deserializeAws_json1_1CustomerAgentInfo(
      output.agentSummary,
      context
    );
  }
  if (output.applications !== undefined) {
    contents.applications = output.applications;
  }
  if (output.connectorSummary !== undefined) {
    contents.connectorSummary = deserializeAws_json1_1CustomerConnectorInfo(
      output.connectorSummary,
      context
    );
  }
  if (output.servers !== undefined) {
    contents.servers = output.servers;
  }
  if (output.serversMappedToApplications !== undefined) {
    contents.serversMappedToApplications = output.serversMappedToApplications;
  }
  if (output.serversMappedtoTags !== undefined) {
    contents.serversMappedtoTags = output.serversMappedtoTags;
  }
  return contents;
};

const deserializeAws_json1_1HomeRegionNotSetException = (
  output: any,
  context: __SerdeContext
): HomeRegionNotSetException => {
  let contents: any = {
    __type: "HomeRegionNotSetException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ImportTask = (
  output: any,
  context: __SerdeContext
): ImportTask => {
  let contents: any = {
    __type: "ImportTask",
    applicationImportFailure: undefined,
    applicationImportSuccess: undefined,
    clientRequestToken: undefined,
    errorsAndFailedEntriesZip: undefined,
    importCompletionTime: undefined,
    importDeletedTime: undefined,
    importRequestTime: undefined,
    importTaskId: undefined,
    importUrl: undefined,
    name: undefined,
    serverImportFailure: undefined,
    serverImportSuccess: undefined,
    status: undefined
  };
  if (output.applicationImportFailure !== undefined) {
    contents.applicationImportFailure = output.applicationImportFailure;
  }
  if (output.applicationImportSuccess !== undefined) {
    contents.applicationImportSuccess = output.applicationImportSuccess;
  }
  if (output.clientRequestToken !== undefined) {
    contents.clientRequestToken = output.clientRequestToken;
  }
  if (output.errorsAndFailedEntriesZip !== undefined) {
    contents.errorsAndFailedEntriesZip = output.errorsAndFailedEntriesZip;
  }
  if (output.importCompletionTime !== undefined) {
    contents.importCompletionTime = new Date(
      output.importCompletionTime % 1 != 0
        ? Math.round(output.importCompletionTime * 1000)
        : output.importCompletionTime
    );
  }
  if (output.importDeletedTime !== undefined) {
    contents.importDeletedTime = new Date(
      output.importDeletedTime % 1 != 0
        ? Math.round(output.importDeletedTime * 1000)
        : output.importDeletedTime
    );
  }
  if (output.importRequestTime !== undefined) {
    contents.importRequestTime = new Date(
      output.importRequestTime % 1 != 0
        ? Math.round(output.importRequestTime * 1000)
        : output.importRequestTime
    );
  }
  if (output.importTaskId !== undefined) {
    contents.importTaskId = output.importTaskId;
  }
  if (output.importUrl !== undefined) {
    contents.importUrl = output.importUrl;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.serverImportFailure !== undefined) {
    contents.serverImportFailure = output.serverImportFailure;
  }
  if (output.serverImportSuccess !== undefined) {
    contents.serverImportSuccess = output.serverImportSuccess;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1ImportTaskList = (
  output: any,
  context: __SerdeContext
): Array<ImportTask> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImportTask(entry, context)
  );
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  let contents: any = {
    __type: "InvalidParameterValueException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListConfigurationsResponse => {
  let contents: any = {
    __type: "ListConfigurationsResponse",
    configurations: undefined,
    nextToken: undefined
  };
  if (output.configurations !== undefined) {
    contents.configurations = deserializeAws_json1_1Configurations(
      output.configurations,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListServerNeighborsResponse = (
  output: any,
  context: __SerdeContext
): ListServerNeighborsResponse => {
  let contents: any = {
    __type: "ListServerNeighborsResponse",
    knownDependencyCount: undefined,
    neighbors: undefined,
    nextToken: undefined
  };
  if (output.knownDependencyCount !== undefined) {
    contents.knownDependencyCount = output.knownDependencyCount;
  }
  if (output.neighbors !== undefined) {
    contents.neighbors = deserializeAws_json1_1NeighborDetailsList(
      output.neighbors,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1NeighborConnectionDetail = (
  output: any,
  context: __SerdeContext
): NeighborConnectionDetail => {
  let contents: any = {
    __type: "NeighborConnectionDetail",
    connectionsCount: undefined,
    destinationPort: undefined,
    destinationServerId: undefined,
    sourceServerId: undefined,
    transportProtocol: undefined
  };
  if (output.connectionsCount !== undefined) {
    contents.connectionsCount = output.connectionsCount;
  }
  if (output.destinationPort !== undefined) {
    contents.destinationPort = output.destinationPort;
  }
  if (output.destinationServerId !== undefined) {
    contents.destinationServerId = output.destinationServerId;
  }
  if (output.sourceServerId !== undefined) {
    contents.sourceServerId = output.sourceServerId;
  }
  if (output.transportProtocol !== undefined) {
    contents.transportProtocol = output.transportProtocol;
  }
  return contents;
};

const deserializeAws_json1_1NeighborDetailsList = (
  output: any,
  context: __SerdeContext
): Array<NeighborConnectionDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NeighborConnectionDetail(entry, context)
  );
};

const deserializeAws_json1_1OperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  let contents: any = {
    __type: "OperationNotPermittedException",
    message: undefined
  };
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SchemaStorageConfig = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1ServerInternalErrorException = (
  output: any,
  context: __SerdeContext
): ServerInternalErrorException => {
  let contents: any = {
    __type: "ServerInternalErrorException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1StartContinuousExportResponse = (
  output: any,
  context: __SerdeContext
): StartContinuousExportResponse => {
  let contents: any = {
    __type: "StartContinuousExportResponse",
    dataSource: undefined,
    exportId: undefined,
    s3Bucket: undefined,
    schemaStorageConfig: undefined,
    startTime: undefined
  };
  if (output.dataSource !== undefined) {
    contents.dataSource = output.dataSource;
  }
  if (output.exportId !== undefined) {
    contents.exportId = output.exportId;
  }
  if (output.s3Bucket !== undefined) {
    contents.s3Bucket = output.s3Bucket;
  }
  if (output.schemaStorageConfig !== undefined) {
    contents.schemaStorageConfig = deserializeAws_json1_1SchemaStorageConfig(
      output.schemaStorageConfig,
      context
    );
  }
  if (output.startTime !== undefined) {
    contents.startTime = new Date(
      output.startTime % 1 != 0
        ? Math.round(output.startTime * 1000)
        : output.startTime
    );
  }
  return contents;
};

const deserializeAws_json1_1StartDataCollectionByAgentIdsResponse = (
  output: any,
  context: __SerdeContext
): StartDataCollectionByAgentIdsResponse => {
  let contents: any = {
    __type: "StartDataCollectionByAgentIdsResponse",
    agentsConfigurationStatus: undefined
  };
  if (output.agentsConfigurationStatus !== undefined) {
    contents.agentsConfigurationStatus = deserializeAws_json1_1AgentConfigurationStatusList(
      output.agentsConfigurationStatus,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StartExportTaskResponse = (
  output: any,
  context: __SerdeContext
): StartExportTaskResponse => {
  let contents: any = {
    __type: "StartExportTaskResponse",
    exportId: undefined
  };
  if (output.exportId !== undefined) {
    contents.exportId = output.exportId;
  }
  return contents;
};

const deserializeAws_json1_1StartImportTaskResponse = (
  output: any,
  context: __SerdeContext
): StartImportTaskResponse => {
  let contents: any = {
    __type: "StartImportTaskResponse",
    task: undefined
  };
  if (output.task !== undefined) {
    contents.task = deserializeAws_json1_1ImportTask(output.task, context);
  }
  return contents;
};

const deserializeAws_json1_1StopContinuousExportResponse = (
  output: any,
  context: __SerdeContext
): StopContinuousExportResponse => {
  let contents: any = {
    __type: "StopContinuousExportResponse",
    startTime: undefined,
    stopTime: undefined
  };
  if (output.startTime !== undefined) {
    contents.startTime = new Date(
      output.startTime % 1 != 0
        ? Math.round(output.startTime * 1000)
        : output.startTime
    );
  }
  if (output.stopTime !== undefined) {
    contents.stopTime = new Date(
      output.stopTime % 1 != 0
        ? Math.round(output.stopTime * 1000)
        : output.stopTime
    );
  }
  return contents;
};

const deserializeAws_json1_1StopDataCollectionByAgentIdsResponse = (
  output: any,
  context: __SerdeContext
): StopDataCollectionByAgentIdsResponse => {
  let contents: any = {
    __type: "StopDataCollectionByAgentIdsResponse",
    agentsConfigurationStatus: undefined
  };
  if (output.agentsConfigurationStatus !== undefined) {
    contents.agentsConfigurationStatus = deserializeAws_json1_1AgentConfigurationStatusList(
      output.agentsConfigurationStatus,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateApplicationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationResponse => {
  let contents: any = {
    __type: "UpdateApplicationResponse"
  };
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
  return context.streamCollector(streamBody) || new Uint8Array();
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
