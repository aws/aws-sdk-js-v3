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
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand = async (
  input: AssociateConfigurationItemsToApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeleteImportDataCommand = async (
  input: BatchDeleteImportDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.BatchDeleteImportData"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchDeleteImportDataRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.CreateApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.CreateTags"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationsCommand = async (
  input: DeleteApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.DeleteApplications"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.DeleteTags"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAgentsCommand = async (
  input: DescribeAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.DescribeAgents"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAgentsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConfigurationsCommand = async (
  input: DescribeConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.DescribeConfigurations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeConfigurationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeContinuousExportsCommand = async (
  input: DescribeContinuousExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.DescribeContinuousExports"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeContinuousExportsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExportConfigurationsCommand = async (
  input: DescribeExportConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSPoseidonService_V2015_11_01.DescribeExportConfigurations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeExportConfigurationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExportTasksCommand = async (
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.DescribeExportTasks"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeExportTasksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeImportTasksCommand = async (
  input: DescribeImportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.DescribeImportTasks"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeImportTasksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.DescribeTags"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTagsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand = async (
  input: DisassociateConfigurationItemsFromApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExportConfigurationsCommand = async (
  input: ExportConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.ExportConfigurations"
  };
  return buildHttpRpcRequest(context, headers, "/", undefined, undefined);
};

export const serializeAws_json1_1GetDiscoverySummaryCommand = async (
  input: GetDiscoverySummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.GetDiscoverySummary"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDiscoverySummaryRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListConfigurationsCommand = async (
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.ListConfigurations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListConfigurationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServerNeighborsCommand = async (
  input: ListServerNeighborsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.ListServerNeighbors"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListServerNeighborsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartContinuousExportCommand = async (
  input: StartContinuousExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.StartContinuousExport"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartContinuousExportRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDataCollectionByAgentIdsCommand = async (
  input: StartDataCollectionByAgentIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartDataCollectionByAgentIdsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartExportTaskCommand = async (
  input: StartExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.StartExportTask"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartExportTaskRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartImportTaskCommand = async (
  input: StartImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.StartImportTask"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartImportTaskRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopContinuousExportCommand = async (
  input: StopContinuousExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.StopContinuousExport"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopContinuousExportRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopDataCollectionByAgentIdsCommand = async (
  input: StopDataCollectionByAgentIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopDataCollectionByAgentIdsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSPoseidonService_V2015_11_01.UpdateApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConfigurationItemsToApplicationCommandOutput> => {
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
};

const deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConfigurationItemsToApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1BatchDeleteImportDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImportDataCommandOutput> => {
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
};

const deserializeAws_json1_1BatchDeleteImportDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteImportDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
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
};

const deserializeAws_json1_1CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
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
};

const deserializeAws_json1_1CreateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DeleteApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationsCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentsCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeAgentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationsCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeContinuousExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousExportsCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeContinuousExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeExportConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportConfigurationsCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeExportConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeExportTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeImportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportTasksCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeImportTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput> => {
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
};

const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConfigurationItemsFromApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ExportConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportConfigurationsCommandOutput> => {
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
};

const deserializeAws_json1_1ExportConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1GetDiscoverySummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoverySummaryCommandOutput> => {
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
};

const deserializeAws_json1_1GetDiscoverySummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoverySummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ListConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
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
};

const deserializeAws_json1_1ListConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ListServerNeighborsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerNeighborsCommandOutput> => {
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
};

const deserializeAws_json1_1ListServerNeighborsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerNeighborsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1StartContinuousExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContinuousExportCommandOutput> => {
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
};

const deserializeAws_json1_1StartContinuousExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContinuousExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ConflictErrorException":
      response = {
        ...(await deserializeAws_json1_1ConflictErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1StartDataCollectionByAgentIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataCollectionByAgentIdsCommandOutput> => {
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
};

const deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataCollectionByAgentIdsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1StartExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> => {
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
};

const deserializeAws_json1_1StartExportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1StartImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportTaskCommandOutput> => {
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
};

const deserializeAws_json1_1StartImportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1StopContinuousExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContinuousExportCommandOutput> => {
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
};

const deserializeAws_json1_1StopContinuousExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContinuousExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1StopDataCollectionByAgentIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataCollectionByAgentIdsCommandOutput> => {
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
};

const deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataCollectionByAgentIdsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthorizationErrorException":
    case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
      response = {
        ...(await deserializeAws_json1_1AuthorizationErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalErrorException":
    case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
      response = {
        ...(await deserializeAws_json1_1ServerInternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

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
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AgentIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ApplicationIdsList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest = (
  input: AssociateConfigurationItemsToApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationConfigurationId !== undefined && {
      applicationConfigurationId: input.applicationConfigurationId
    }),
    ...(input.configurationIds !== undefined && {
      configurationIds: serializeAws_json1_1ConfigurationIdList(
        input.configurationIds,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchDeleteImportDataRequest = (
  input: BatchDeleteImportDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.importTaskIds !== undefined && {
      importTaskIds: serializeAws_json1_1ToDeleteIdentifierList(
        input.importTaskIds,
        context
      )
    })
  };
};

const serializeAws_json1_1ConfigurationIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ContinuousExportIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1CreateTagsRequest = (
  input: CreateTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationIds !== undefined && {
      configurationIds: serializeAws_json1_1ConfigurationIdList(
        input.configurationIds,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagSet(input.tags, context)
    })
  };
};

const serializeAws_json1_1DeleteApplicationsRequest = (
  input: DeleteApplicationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationIds !== undefined && {
      configurationIds: serializeAws_json1_1ApplicationIdsList(
        input.configurationIds,
        context
      )
    })
  };
};

const serializeAws_json1_1DeleteTagsRequest = (
  input: DeleteTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationIds !== undefined && {
      configurationIds: serializeAws_json1_1ConfigurationIdList(
        input.configurationIds,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagSet(input.tags, context)
    })
  };
};

const serializeAws_json1_1DescribeAgentsRequest = (
  input: DescribeAgentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.agentIds !== undefined && {
      agentIds: serializeAws_json1_1AgentIds(input.agentIds, context)
    }),
    ...(input.filters !== undefined && {
      filters: serializeAws_json1_1Filters(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeConfigurationsRequest = (
  input: DescribeConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationIds !== undefined && {
      configurationIds: serializeAws_json1_1ConfigurationIdList(
        input.configurationIds,
        context
      )
    })
  };
};

const serializeAws_json1_1DescribeContinuousExportsRequest = (
  input: DescribeContinuousExportsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.exportIds !== undefined && {
      exportIds: serializeAws_json1_1ContinuousExportIds(
        input.exportIds,
        context
      )
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeExportConfigurationsRequest = (
  input: DescribeExportConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.exportIds !== undefined && {
      exportIds: serializeAws_json1_1ExportIds(input.exportIds, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeExportTasksRequest = (
  input: DescribeExportTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.exportIds !== undefined && {
      exportIds: serializeAws_json1_1ExportIds(input.exportIds, context)
    }),
    ...(input.filters !== undefined && {
      filters: serializeAws_json1_1ExportFilters(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeImportTasksFilterList = (
  input: ImportTaskFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ImportTaskFilter(entry, context)
  );
};

const serializeAws_json1_1DescribeImportTasksRequest = (
  input: DescribeImportTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters !== undefined && {
      filters: serializeAws_json1_1DescribeImportTasksFilterList(
        input.filters,
        context
      )
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeTagsRequest = (
  input: DescribeTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters !== undefined && {
      filters: serializeAws_json1_1TagFilters(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest = (
  input: DisassociateConfigurationItemsFromApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationConfigurationId !== undefined && {
      applicationConfigurationId: input.applicationConfigurationId
    }),
    ...(input.configurationIds !== undefined && {
      configurationIds: serializeAws_json1_1ConfigurationIdList(
        input.configurationIds,
        context
      )
    })
  };
};

const serializeAws_json1_1ExportDataFormats = (
  input: (ExportDataFormat | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ExportFilter = (
  input: ExportFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.condition !== undefined && { condition: input.condition }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.values !== undefined && {
      values: serializeAws_json1_1FilterValues(input.values, context)
    })
  };
};

const serializeAws_json1_1ExportFilters = (
  input: ExportFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ExportFilter(entry, context));
};

const serializeAws_json1_1ExportIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  return {
    ...(input.condition !== undefined && { condition: input.condition }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.values !== undefined && {
      values: serializeAws_json1_1FilterValues(input.values, context)
    })
  };
};

const serializeAws_json1_1Filters = (
  input: Filter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Filter(entry, context));
};

const serializeAws_json1_1FilterValues = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1GetDiscoverySummaryRequest = (
  input: GetDiscoverySummaryRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1ImportTaskFilter = (
  input: ImportTaskFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.values !== undefined && {
      values: serializeAws_json1_1ImportTaskFilterValueList(
        input.values,
        context
      )
    })
  };
};

const serializeAws_json1_1ImportTaskFilterValueList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ListConfigurationsRequest = (
  input: ListConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationType !== undefined && {
      configurationType: input.configurationType
    }),
    ...(input.filters !== undefined && {
      filters: serializeAws_json1_1Filters(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.orderBy !== undefined && {
      orderBy: serializeAws_json1_1OrderByList(input.orderBy, context)
    })
  };
};

const serializeAws_json1_1ListServerNeighborsRequest = (
  input: ListServerNeighborsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationId !== undefined && {
      configurationId: input.configurationId
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.neighborConfigurationIds !== undefined && {
      neighborConfigurationIds: serializeAws_json1_1ConfigurationIdList(
        input.neighborConfigurationIds,
        context
      )
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.portInformationNeeded !== undefined && {
      portInformationNeeded: input.portInformationNeeded
    })
  };
};

const serializeAws_json1_1OrderByElement = (
  input: OrderByElement,
  context: __SerdeContext
): any => {
  return {
    ...(input.fieldName !== undefined && { fieldName: input.fieldName }),
    ...(input.sortOrder !== undefined && { sortOrder: input.sortOrder })
  };
};

const serializeAws_json1_1OrderByList = (
  input: OrderByElement[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1OrderByElement(entry, context));
};

const serializeAws_json1_1StartContinuousExportRequest = (
  input: StartContinuousExportRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1StartDataCollectionByAgentIdsRequest = (
  input: StartDataCollectionByAgentIdsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.agentIds !== undefined && {
      agentIds: serializeAws_json1_1AgentIds(input.agentIds, context)
    })
  };
};

const serializeAws_json1_1StartExportTaskRequest = (
  input: StartExportTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime !== undefined && {
      endTime: Math.round(input.endTime.getTime() / 1000)
    }),
    ...(input.exportDataFormat !== undefined && {
      exportDataFormat: serializeAws_json1_1ExportDataFormats(
        input.exportDataFormat,
        context
      )
    }),
    ...(input.filters !== undefined && {
      filters: serializeAws_json1_1ExportFilters(input.filters, context)
    }),
    ...(input.startTime !== undefined && {
      startTime: Math.round(input.startTime.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1StartImportTaskRequest = (
  input: StartImportTaskRequest,
  context: __SerdeContext
): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.importUrl !== undefined && { importUrl: input.importUrl }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1StopContinuousExportRequest = (
  input: StopContinuousExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.exportId !== undefined && { exportId: input.exportId })
  };
};

const serializeAws_json1_1StopDataCollectionByAgentIdsRequest = (
  input: StopDataCollectionByAgentIdsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.agentIds !== undefined && {
      agentIds: serializeAws_json1_1AgentIds(input.agentIds, context)
    })
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.values !== undefined && {
      values: serializeAws_json1_1FilterValues(input.values, context)
    })
  };
};

const serializeAws_json1_1TagFilters = (
  input: TagFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1TagFilter(entry, context));
};

const serializeAws_json1_1TagSet = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1ToDeleteIdentifierList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1UpdateApplicationRequest = (
  input: UpdateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.configurationId !== undefined && {
      configurationId: input.configurationId
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const deserializeAws_json1_1AgentConfigurationStatus = (
  output: any,
  context: __SerdeContext
): AgentConfigurationStatus => {
  return {
    __type: "AgentConfigurationStatus",
    agentId:
      output.agentId !== undefined && output.agentId !== null
        ? output.agentId
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    operationSucceeded:
      output.operationSucceeded !== undefined &&
      output.operationSucceeded !== null
        ? output.operationSucceeded
        : undefined
  } as any;
};

const deserializeAws_json1_1AgentConfigurationStatusList = (
  output: any,
  context: __SerdeContext
): AgentConfigurationStatus[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AgentConfigurationStatus(entry, context)
  );
};

const deserializeAws_json1_1AgentInfo = (
  output: any,
  context: __SerdeContext
): AgentInfo => {
  return {
    __type: "AgentInfo",
    agentId:
      output.agentId !== undefined && output.agentId !== null
        ? output.agentId
        : undefined,
    agentNetworkInfoList:
      output.agentNetworkInfoList !== undefined &&
      output.agentNetworkInfoList !== null
        ? deserializeAws_json1_1AgentNetworkInfoList(
            output.agentNetworkInfoList,
            context
          )
        : undefined,
    agentType:
      output.agentType !== undefined && output.agentType !== null
        ? output.agentType
        : undefined,
    collectionStatus:
      output.collectionStatus !== undefined && output.collectionStatus !== null
        ? output.collectionStatus
        : undefined,
    connectorId:
      output.connectorId !== undefined && output.connectorId !== null
        ? output.connectorId
        : undefined,
    health:
      output.health !== undefined && output.health !== null
        ? output.health
        : undefined,
    hostName:
      output.hostName !== undefined && output.hostName !== null
        ? output.hostName
        : undefined,
    lastHealthPingTime:
      output.lastHealthPingTime !== undefined &&
      output.lastHealthPingTime !== null
        ? output.lastHealthPingTime
        : undefined,
    registeredTime:
      output.registeredTime !== undefined && output.registeredTime !== null
        ? output.registeredTime
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_json1_1AgentNetworkInfo = (
  output: any,
  context: __SerdeContext
): AgentNetworkInfo => {
  return {
    __type: "AgentNetworkInfo",
    ipAddress:
      output.ipAddress !== undefined && output.ipAddress !== null
        ? output.ipAddress
        : undefined,
    macAddress:
      output.macAddress !== undefined && output.macAddress !== null
        ? output.macAddress
        : undefined
  } as any;
};

const deserializeAws_json1_1AgentNetworkInfoList = (
  output: any,
  context: __SerdeContext
): AgentNetworkInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AgentNetworkInfo(entry, context)
  );
};

const deserializeAws_json1_1AgentsInfo = (
  output: any,
  context: __SerdeContext
): AgentInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AgentInfo(entry, context)
  );
};

const deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse = (
  output: any,
  context: __SerdeContext
): AssociateConfigurationItemsToApplicationResponse => {
  return {
    __type: "AssociateConfigurationItemsToApplicationResponse"
  } as any;
};

const deserializeAws_json1_1AuthorizationErrorException = (
  output: any,
  context: __SerdeContext
): AuthorizationErrorException => {
  return {
    __type: "AuthorizationErrorException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchDeleteImportDataError = (
  output: any,
  context: __SerdeContext
): BatchDeleteImportDataError => {
  return {
    __type: "BatchDeleteImportDataError",
    errorCode:
      output.errorCode !== undefined && output.errorCode !== null
        ? output.errorCode
        : undefined,
    errorDescription:
      output.errorDescription !== undefined && output.errorDescription !== null
        ? output.errorDescription
        : undefined,
    importTaskId:
      output.importTaskId !== undefined && output.importTaskId !== null
        ? output.importTaskId
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchDeleteImportDataErrorList = (
  output: any,
  context: __SerdeContext
): BatchDeleteImportDataError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchDeleteImportDataError(entry, context)
  );
};

const deserializeAws_json1_1BatchDeleteImportDataResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteImportDataResponse => {
  return {
    __type: "BatchDeleteImportDataResponse",
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1BatchDeleteImportDataErrorList(
            output.errors,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1Configuration = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1Configurations = (
  output: any,
  context: __SerdeContext
): { [key: string]: string }[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Configuration(entry, context)
  );
};

const deserializeAws_json1_1ConfigurationTag = (
  output: any,
  context: __SerdeContext
): ConfigurationTag => {
  return {
    __type: "ConfigurationTag",
    configurationId:
      output.configurationId !== undefined && output.configurationId !== null
        ? output.configurationId
        : undefined,
    configurationType:
      output.configurationType !== undefined &&
      output.configurationType !== null
        ? output.configurationType
        : undefined,
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    timeOfCreation:
      output.timeOfCreation !== undefined && output.timeOfCreation !== null
        ? new Date(Math.round(output.timeOfCreation * 1000))
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1ConfigurationTagSet = (
  output: any,
  context: __SerdeContext
): ConfigurationTag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ConfigurationTag(entry, context)
  );
};

const deserializeAws_json1_1ConflictErrorException = (
  output: any,
  context: __SerdeContext
): ConflictErrorException => {
  return {
    __type: "ConflictErrorException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ContinuousExportDescription = (
  output: any,
  context: __SerdeContext
): ContinuousExportDescription => {
  return {
    __type: "ContinuousExportDescription",
    dataSource:
      output.dataSource !== undefined && output.dataSource !== null
        ? output.dataSource
        : undefined,
    exportId:
      output.exportId !== undefined && output.exportId !== null
        ? output.exportId
        : undefined,
    s3Bucket:
      output.s3Bucket !== undefined && output.s3Bucket !== null
        ? output.s3Bucket
        : undefined,
    schemaStorageConfig:
      output.schemaStorageConfig !== undefined &&
      output.schemaStorageConfig !== null
        ? deserializeAws_json1_1SchemaStorageConfig(
            output.schemaStorageConfig,
            context
          )
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusDetail:
      output.statusDetail !== undefined && output.statusDetail !== null
        ? output.statusDetail
        : undefined,
    stopTime:
      output.stopTime !== undefined && output.stopTime !== null
        ? new Date(Math.round(output.stopTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1ContinuousExportDescriptions = (
  output: any,
  context: __SerdeContext
): ContinuousExportDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContinuousExportDescription(entry, context)
  );
};

const deserializeAws_json1_1CreateApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationResponse => {
  return {
    __type: "CreateApplicationResponse",
    configurationId:
      output.configurationId !== undefined && output.configurationId !== null
        ? output.configurationId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateTagsResponse = (
  output: any,
  context: __SerdeContext
): CreateTagsResponse => {
  return {
    __type: "CreateTagsResponse"
  } as any;
};

const deserializeAws_json1_1CustomerAgentInfo = (
  output: any,
  context: __SerdeContext
): CustomerAgentInfo => {
  return {
    __type: "CustomerAgentInfo",
    activeAgents:
      output.activeAgents !== undefined && output.activeAgents !== null
        ? output.activeAgents
        : undefined,
    blackListedAgents:
      output.blackListedAgents !== undefined &&
      output.blackListedAgents !== null
        ? output.blackListedAgents
        : undefined,
    healthyAgents:
      output.healthyAgents !== undefined && output.healthyAgents !== null
        ? output.healthyAgents
        : undefined,
    shutdownAgents:
      output.shutdownAgents !== undefined && output.shutdownAgents !== null
        ? output.shutdownAgents
        : undefined,
    totalAgents:
      output.totalAgents !== undefined && output.totalAgents !== null
        ? output.totalAgents
        : undefined,
    unhealthyAgents:
      output.unhealthyAgents !== undefined && output.unhealthyAgents !== null
        ? output.unhealthyAgents
        : undefined,
    unknownAgents:
      output.unknownAgents !== undefined && output.unknownAgents !== null
        ? output.unknownAgents
        : undefined
  } as any;
};

const deserializeAws_json1_1CustomerConnectorInfo = (
  output: any,
  context: __SerdeContext
): CustomerConnectorInfo => {
  return {
    __type: "CustomerConnectorInfo",
    activeConnectors:
      output.activeConnectors !== undefined && output.activeConnectors !== null
        ? output.activeConnectors
        : undefined,
    blackListedConnectors:
      output.blackListedConnectors !== undefined &&
      output.blackListedConnectors !== null
        ? output.blackListedConnectors
        : undefined,
    healthyConnectors:
      output.healthyConnectors !== undefined &&
      output.healthyConnectors !== null
        ? output.healthyConnectors
        : undefined,
    shutdownConnectors:
      output.shutdownConnectors !== undefined &&
      output.shutdownConnectors !== null
        ? output.shutdownConnectors
        : undefined,
    totalConnectors:
      output.totalConnectors !== undefined && output.totalConnectors !== null
        ? output.totalConnectors
        : undefined,
    unhealthyConnectors:
      output.unhealthyConnectors !== undefined &&
      output.unhealthyConnectors !== null
        ? output.unhealthyConnectors
        : undefined,
    unknownConnectors:
      output.unknownConnectors !== undefined &&
      output.unknownConnectors !== null
        ? output.unknownConnectors
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteApplicationsResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationsResponse => {
  return {
    __type: "DeleteApplicationsResponse"
  } as any;
};

const deserializeAws_json1_1DeleteTagsResponse = (
  output: any,
  context: __SerdeContext
): DeleteTagsResponse => {
  return {
    __type: "DeleteTagsResponse"
  } as any;
};

const deserializeAws_json1_1DescribeAgentsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAgentsResponse => {
  return {
    __type: "DescribeAgentsResponse",
    agentsInfo:
      output.agentsInfo !== undefined && output.agentsInfo !== null
        ? deserializeAws_json1_1AgentsInfo(output.agentsInfo, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeConfigurationsAttribute = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1DescribeConfigurationsAttributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: string }[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DescribeConfigurationsAttribute(entry, context)
  );
};

const deserializeAws_json1_1DescribeConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationsResponse => {
  return {
    __type: "DescribeConfigurationsResponse",
    configurations:
      output.configurations !== undefined && output.configurations !== null
        ? deserializeAws_json1_1DescribeConfigurationsAttributes(
            output.configurations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeContinuousExportsResponse = (
  output: any,
  context: __SerdeContext
): DescribeContinuousExportsResponse => {
  return {
    __type: "DescribeContinuousExportsResponse",
    descriptions:
      output.descriptions !== undefined && output.descriptions !== null
        ? deserializeAws_json1_1ContinuousExportDescriptions(
            output.descriptions,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeExportConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeExportConfigurationsResponse => {
  return {
    __type: "DescribeExportConfigurationsResponse",
    exportsInfo:
      output.exportsInfo !== undefined && output.exportsInfo !== null
        ? deserializeAws_json1_1ExportsInfo(output.exportsInfo, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeExportTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeExportTasksResponse => {
  return {
    __type: "DescribeExportTasksResponse",
    exportsInfo:
      output.exportsInfo !== undefined && output.exportsInfo !== null
        ? deserializeAws_json1_1ExportsInfo(output.exportsInfo, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeImportTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeImportTasksResponse => {
  return {
    __type: "DescribeImportTasksResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    tasks:
      output.tasks !== undefined && output.tasks !== null
        ? deserializeAws_json1_1ImportTaskList(output.tasks, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeTagsResponse = (
  output: any,
  context: __SerdeContext
): DescribeTagsResponse => {
  return {
    __type: "DescribeTagsResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1ConfigurationTagSet(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse = (
  output: any,
  context: __SerdeContext
): DisassociateConfigurationItemsFromApplicationResponse => {
  return {
    __type: "DisassociateConfigurationItemsFromApplicationResponse"
  } as any;
};

const deserializeAws_json1_1ExportConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ExportConfigurationsResponse => {
  return {
    __type: "ExportConfigurationsResponse",
    exportId:
      output.exportId !== undefined && output.exportId !== null
        ? output.exportId
        : undefined
  } as any;
};

const deserializeAws_json1_1ExportInfo = (
  output: any,
  context: __SerdeContext
): ExportInfo => {
  return {
    __type: "ExportInfo",
    configurationsDownloadUrl:
      output.configurationsDownloadUrl !== undefined &&
      output.configurationsDownloadUrl !== null
        ? output.configurationsDownloadUrl
        : undefined,
    exportId:
      output.exportId !== undefined && output.exportId !== null
        ? output.exportId
        : undefined,
    exportRequestTime:
      output.exportRequestTime !== undefined &&
      output.exportRequestTime !== null
        ? new Date(Math.round(output.exportRequestTime * 1000))
        : undefined,
    exportStatus:
      output.exportStatus !== undefined && output.exportStatus !== null
        ? output.exportStatus
        : undefined,
    isTruncated:
      output.isTruncated !== undefined && output.isTruncated !== null
        ? output.isTruncated
        : undefined,
    requestedEndTime:
      output.requestedEndTime !== undefined && output.requestedEndTime !== null
        ? new Date(Math.round(output.requestedEndTime * 1000))
        : undefined,
    requestedStartTime:
      output.requestedStartTime !== undefined &&
      output.requestedStartTime !== null
        ? new Date(Math.round(output.requestedStartTime * 1000))
        : undefined,
    statusMessage:
      output.statusMessage !== undefined && output.statusMessage !== null
        ? output.statusMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1ExportsInfo = (
  output: any,
  context: __SerdeContext
): ExportInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExportInfo(entry, context)
  );
};

const deserializeAws_json1_1GetDiscoverySummaryResponse = (
  output: any,
  context: __SerdeContext
): GetDiscoverySummaryResponse => {
  return {
    __type: "GetDiscoverySummaryResponse",
    agentSummary:
      output.agentSummary !== undefined && output.agentSummary !== null
        ? deserializeAws_json1_1CustomerAgentInfo(output.agentSummary, context)
        : undefined,
    applications:
      output.applications !== undefined && output.applications !== null
        ? output.applications
        : undefined,
    connectorSummary:
      output.connectorSummary !== undefined && output.connectorSummary !== null
        ? deserializeAws_json1_1CustomerConnectorInfo(
            output.connectorSummary,
            context
          )
        : undefined,
    servers:
      output.servers !== undefined && output.servers !== null
        ? output.servers
        : undefined,
    serversMappedToApplications:
      output.serversMappedToApplications !== undefined &&
      output.serversMappedToApplications !== null
        ? output.serversMappedToApplications
        : undefined,
    serversMappedtoTags:
      output.serversMappedtoTags !== undefined &&
      output.serversMappedtoTags !== null
        ? output.serversMappedtoTags
        : undefined
  } as any;
};

const deserializeAws_json1_1HomeRegionNotSetException = (
  output: any,
  context: __SerdeContext
): HomeRegionNotSetException => {
  return {
    __type: "HomeRegionNotSetException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ImportTask = (
  output: any,
  context: __SerdeContext
): ImportTask => {
  return {
    __type: "ImportTask",
    applicationImportFailure:
      output.applicationImportFailure !== undefined &&
      output.applicationImportFailure !== null
        ? output.applicationImportFailure
        : undefined,
    applicationImportSuccess:
      output.applicationImportSuccess !== undefined &&
      output.applicationImportSuccess !== null
        ? output.applicationImportSuccess
        : undefined,
    clientRequestToken:
      output.clientRequestToken !== undefined &&
      output.clientRequestToken !== null
        ? output.clientRequestToken
        : undefined,
    errorsAndFailedEntriesZip:
      output.errorsAndFailedEntriesZip !== undefined &&
      output.errorsAndFailedEntriesZip !== null
        ? output.errorsAndFailedEntriesZip
        : undefined,
    importCompletionTime:
      output.importCompletionTime !== undefined &&
      output.importCompletionTime !== null
        ? new Date(Math.round(output.importCompletionTime * 1000))
        : undefined,
    importDeletedTime:
      output.importDeletedTime !== undefined &&
      output.importDeletedTime !== null
        ? new Date(Math.round(output.importDeletedTime * 1000))
        : undefined,
    importRequestTime:
      output.importRequestTime !== undefined &&
      output.importRequestTime !== null
        ? new Date(Math.round(output.importRequestTime * 1000))
        : undefined,
    importTaskId:
      output.importTaskId !== undefined && output.importTaskId !== null
        ? output.importTaskId
        : undefined,
    importUrl:
      output.importUrl !== undefined && output.importUrl !== null
        ? output.importUrl
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    serverImportFailure:
      output.serverImportFailure !== undefined &&
      output.serverImportFailure !== null
        ? output.serverImportFailure
        : undefined,
    serverImportSuccess:
      output.serverImportSuccess !== undefined &&
      output.serverImportSuccess !== null
        ? output.serverImportSuccess
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1ImportTaskList = (
  output: any,
  context: __SerdeContext
): ImportTask[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ImportTask(entry, context)
  );
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    __type: "InvalidParameterValueException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListConfigurationsResponse => {
  return {
    __type: "ListConfigurationsResponse",
    configurations:
      output.configurations !== undefined && output.configurations !== null
        ? deserializeAws_json1_1Configurations(output.configurations, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListServerNeighborsResponse = (
  output: any,
  context: __SerdeContext
): ListServerNeighborsResponse => {
  return {
    __type: "ListServerNeighborsResponse",
    knownDependencyCount:
      output.knownDependencyCount !== undefined &&
      output.knownDependencyCount !== null
        ? output.knownDependencyCount
        : undefined,
    neighbors:
      output.neighbors !== undefined && output.neighbors !== null
        ? deserializeAws_json1_1NeighborDetailsList(output.neighbors, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1NeighborConnectionDetail = (
  output: any,
  context: __SerdeContext
): NeighborConnectionDetail => {
  return {
    __type: "NeighborConnectionDetail",
    connectionsCount:
      output.connectionsCount !== undefined && output.connectionsCount !== null
        ? output.connectionsCount
        : undefined,
    destinationPort:
      output.destinationPort !== undefined && output.destinationPort !== null
        ? output.destinationPort
        : undefined,
    destinationServerId:
      output.destinationServerId !== undefined &&
      output.destinationServerId !== null
        ? output.destinationServerId
        : undefined,
    sourceServerId:
      output.sourceServerId !== undefined && output.sourceServerId !== null
        ? output.sourceServerId
        : undefined,
    transportProtocol:
      output.transportProtocol !== undefined &&
      output.transportProtocol !== null
        ? output.transportProtocol
        : undefined
  } as any;
};

const deserializeAws_json1_1NeighborDetailsList = (
  output: any,
  context: __SerdeContext
): NeighborConnectionDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NeighborConnectionDetail(entry, context)
  );
};

const deserializeAws_json1_1OperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  return {
    __type: "OperationNotPermittedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  return {
    __type: "ResourceInUseException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1SchemaStorageConfig = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1ServerInternalErrorException = (
  output: any,
  context: __SerdeContext
): ServerInternalErrorException => {
  return {
    __type: "ServerInternalErrorException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1StartContinuousExportResponse = (
  output: any,
  context: __SerdeContext
): StartContinuousExportResponse => {
  return {
    __type: "StartContinuousExportResponse",
    dataSource:
      output.dataSource !== undefined && output.dataSource !== null
        ? output.dataSource
        : undefined,
    exportId:
      output.exportId !== undefined && output.exportId !== null
        ? output.exportId
        : undefined,
    s3Bucket:
      output.s3Bucket !== undefined && output.s3Bucket !== null
        ? output.s3Bucket
        : undefined,
    schemaStorageConfig:
      output.schemaStorageConfig !== undefined &&
      output.schemaStorageConfig !== null
        ? deserializeAws_json1_1SchemaStorageConfig(
            output.schemaStorageConfig,
            context
          )
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1StartDataCollectionByAgentIdsResponse = (
  output: any,
  context: __SerdeContext
): StartDataCollectionByAgentIdsResponse => {
  return {
    __type: "StartDataCollectionByAgentIdsResponse",
    agentsConfigurationStatus:
      output.agentsConfigurationStatus !== undefined &&
      output.agentsConfigurationStatus !== null
        ? deserializeAws_json1_1AgentConfigurationStatusList(
            output.agentsConfigurationStatus,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1StartExportTaskResponse = (
  output: any,
  context: __SerdeContext
): StartExportTaskResponse => {
  return {
    __type: "StartExportTaskResponse",
    exportId:
      output.exportId !== undefined && output.exportId !== null
        ? output.exportId
        : undefined
  } as any;
};

const deserializeAws_json1_1StartImportTaskResponse = (
  output: any,
  context: __SerdeContext
): StartImportTaskResponse => {
  return {
    __type: "StartImportTaskResponse",
    task:
      output.task !== undefined && output.task !== null
        ? deserializeAws_json1_1ImportTask(output.task, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1StopContinuousExportResponse = (
  output: any,
  context: __SerdeContext
): StopContinuousExportResponse => {
  return {
    __type: "StopContinuousExportResponse",
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    stopTime:
      output.stopTime !== undefined && output.stopTime !== null
        ? new Date(Math.round(output.stopTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1StopDataCollectionByAgentIdsResponse = (
  output: any,
  context: __SerdeContext
): StopDataCollectionByAgentIdsResponse => {
  return {
    __type: "StopDataCollectionByAgentIdsResponse",
    agentsConfigurationStatus:
      output.agentsConfigurationStatus !== undefined &&
      output.agentsConfigurationStatus !== null
        ? deserializeAws_json1_1AgentConfigurationStatusList(
            output.agentsConfigurationStatus,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateApplicationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationResponse => {
  return {
    __type: "UpdateApplicationResponse"
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
