// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  LazyJsonString as __LazyJsonString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import {
  CreateInferenceSchedulerCommandInput,
  CreateInferenceSchedulerCommandOutput,
} from "../commands/CreateInferenceSchedulerCommand";
import { CreateLabelCommandInput, CreateLabelCommandOutput } from "../commands/CreateLabelCommand";
import { CreateLabelGroupCommandInput, CreateLabelGroupCommandOutput } from "../commands/CreateLabelGroupCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "../commands/CreateModelCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import {
  DeleteInferenceSchedulerCommandInput,
  DeleteInferenceSchedulerCommandOutput,
} from "../commands/DeleteInferenceSchedulerCommand";
import { DeleteLabelCommandInput, DeleteLabelCommandOutput } from "../commands/DeleteLabelCommand";
import { DeleteLabelGroupCommandInput, DeleteLabelGroupCommandOutput } from "../commands/DeleteLabelGroupCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "../commands/DeleteModelCommand";
import {
  DescribeDataIngestionJobCommandInput,
  DescribeDataIngestionJobCommandOutput,
} from "../commands/DescribeDataIngestionJobCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import {
  DescribeInferenceSchedulerCommandInput,
  DescribeInferenceSchedulerCommandOutput,
} from "../commands/DescribeInferenceSchedulerCommand";
import { DescribeLabelCommandInput, DescribeLabelCommandOutput } from "../commands/DescribeLabelCommand";
import { DescribeLabelGroupCommandInput, DescribeLabelGroupCommandOutput } from "../commands/DescribeLabelGroupCommand";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "../commands/DescribeModelCommand";
import {
  ListDataIngestionJobsCommandInput,
  ListDataIngestionJobsCommandOutput,
} from "../commands/ListDataIngestionJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import {
  ListInferenceEventsCommandInput,
  ListInferenceEventsCommandOutput,
} from "../commands/ListInferenceEventsCommand";
import {
  ListInferenceExecutionsCommandInput,
  ListInferenceExecutionsCommandOutput,
} from "../commands/ListInferenceExecutionsCommand";
import {
  ListInferenceSchedulersCommandInput,
  ListInferenceSchedulersCommandOutput,
} from "../commands/ListInferenceSchedulersCommand";
import { ListLabelGroupsCommandInput, ListLabelGroupsCommandOutput } from "../commands/ListLabelGroupsCommand";
import { ListLabelsCommandInput, ListLabelsCommandOutput } from "../commands/ListLabelsCommand";
import { ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import {
  ListSensorStatisticsCommandInput,
  ListSensorStatisticsCommandOutput,
} from "../commands/ListSensorStatisticsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartDataIngestionJobCommandInput,
  StartDataIngestionJobCommandOutput,
} from "../commands/StartDataIngestionJobCommand";
import {
  StartInferenceSchedulerCommandInput,
  StartInferenceSchedulerCommandOutput,
} from "../commands/StartInferenceSchedulerCommand";
import {
  StopInferenceSchedulerCommandInput,
  StopInferenceSchedulerCommandOutput,
} from "../commands/StopInferenceSchedulerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateInferenceSchedulerCommandInput,
  UpdateInferenceSchedulerCommandOutput,
} from "../commands/UpdateInferenceSchedulerCommand";
import { UpdateLabelGroupCommandInput, UpdateLabelGroupCommandOutput } from "../commands/UpdateLabelGroupCommand";
import { LookoutEquipmentServiceException as __BaseException } from "../models/LookoutEquipmentServiceException";
import {
  AccessDeniedException,
  CategoricalValues,
  ConflictException,
  CountPercent,
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateInferenceSchedulerRequest,
  CreateInferenceSchedulerResponse,
  CreateLabelGroupRequest,
  CreateLabelGroupResponse,
  CreateLabelRequest,
  CreateLabelResponse,
  CreateModelRequest,
  CreateModelResponse,
  DataIngestionJobSummary,
  DataPreProcessingConfiguration,
  DataQualitySummary,
  DatasetSchema,
  DatasetSummary,
  DeleteDatasetRequest,
  DeleteInferenceSchedulerRequest,
  DeleteLabelGroupRequest,
  DeleteLabelRequest,
  DeleteModelRequest,
  DescribeDataIngestionJobRequest,
  DescribeDataIngestionJobResponse,
  DescribeDatasetRequest,
  DescribeDatasetResponse,
  DescribeInferenceSchedulerRequest,
  DescribeInferenceSchedulerResponse,
  DescribeLabelGroupRequest,
  DescribeLabelGroupResponse,
  DescribeLabelRequest,
  DescribeLabelResponse,
  DescribeModelRequest,
  DescribeModelResponse,
  DuplicateTimestamps,
  InferenceEventSummary,
  InferenceExecutionSummary,
  InferenceInputConfiguration,
  InferenceInputNameConfiguration,
  InferenceOutputConfiguration,
  InferenceS3InputConfiguration,
  InferenceS3OutputConfiguration,
  InferenceSchedulerSummary,
  IngestedFilesSummary,
  IngestionInputConfiguration,
  IngestionS3InputConfiguration,
  InsufficientSensorData,
  InternalServerException,
  InvalidSensorData,
  LabelGroupSummary,
  LabelsInputConfiguration,
  LabelsS3InputConfiguration,
  LabelSummary,
  LargeTimestampGaps,
  ListDataIngestionJobsRequest,
  ListDataIngestionJobsResponse,
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListInferenceEventsRequest,
  ListInferenceEventsResponse,
  ListInferenceExecutionsRequest,
  ListInferenceExecutionsResponse,
  ListInferenceSchedulersRequest,
  ListInferenceSchedulersResponse,
  ListLabelGroupsRequest,
  ListLabelGroupsResponse,
  ListLabelsRequest,
  ListLabelsResponse,
  ListModelsRequest,
  ListModelsResponse,
  ListSensorStatisticsRequest,
  ListSensorStatisticsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MissingCompleteSensorData,
  MissingSensorData,
  ModelSummary,
  MonotonicValues,
  MultipleOperatingModes,
  ResourceNotFoundException,
  S3Object,
  SensorStatisticsSummary,
  SensorsWithShortDateRange,
  ServiceQuotaExceededException,
  StartDataIngestionJobRequest,
  StartDataIngestionJobResponse,
  StartInferenceSchedulerRequest,
  StartInferenceSchedulerResponse,
  StopInferenceSchedulerRequest,
  StopInferenceSchedulerResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  ThrottlingException,
  UnsupportedTimestamps,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateInferenceSchedulerRequest,
  UpdateLabelGroupRequest,
  ValidationException,
} from "../models/models_0";

export const serializeAws_json1_0CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.CreateDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateInferenceSchedulerCommand = async (
  input: CreateInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.CreateInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateLabelCommand = async (
  input: CreateLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.CreateLabel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateLabelGroupCommand = async (
  input: CreateLabelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.CreateLabelGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateLabelGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.CreateModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DeleteDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteInferenceSchedulerCommand = async (
  input: DeleteInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteLabelCommand = async (
  input: DeleteLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DeleteLabel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteLabelGroupCommand = async (
  input: DeleteLabelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DeleteLabelGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteLabelGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteModelCommand = async (
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DeleteModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeDataIngestionJobCommand = async (
  input: DescribeDataIngestionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeDataIngestionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeInferenceSchedulerCommand = async (
  input: DescribeInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeLabelCommand = async (
  input: DescribeLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeLabel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeLabelGroupCommand = async (
  input: DescribeLabelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeLabelGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeLabelGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeModelCommand = async (
  input: DescribeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListDataIngestionJobsCommand = async (
  input: ListDataIngestionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListDataIngestionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListDataIngestionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListDatasets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListDatasetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListInferenceEventsCommand = async (
  input: ListInferenceEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListInferenceEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListInferenceEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListInferenceExecutionsCommand = async (
  input: ListInferenceExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListInferenceExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListInferenceExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListInferenceSchedulersCommand = async (
  input: ListInferenceSchedulersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListInferenceSchedulers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListInferenceSchedulersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListLabelGroupsCommand = async (
  input: ListLabelGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListLabelGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListLabelGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListLabelsCommand = async (
  input: ListLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListLabels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListModelsCommand = async (
  input: ListModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListModels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListModelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListSensorStatisticsCommand = async (
  input: ListSensorStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListSensorStatistics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListSensorStatisticsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartDataIngestionJobCommand = async (
  input: StartDataIngestionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.StartDataIngestionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartDataIngestionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartInferenceSchedulerCommand = async (
  input: StartInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.StartInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StopInferenceSchedulerCommand = async (
  input: StopInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.StopInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StopInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateInferenceSchedulerCommand = async (
  input: UpdateInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateLabelGroupCommand = async (
  input: UpdateLabelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.UpdateLabelGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateLabelGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateDatasetResponse(data, context);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateInferenceSchedulerResponse(data, context);
  const response: CreateInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateLabelResponse(data, context);
  const response: CreateLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateLabelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateLabelGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateLabelGroupResponse(data, context);
  const response: CreateLabelGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateLabelGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateModelResponse(data, context);
  const response: CreateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteDatasetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteInferenceSchedulerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteLabelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteLabelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteLabelGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLabelGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteLabelGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteModelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeDataIngestionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataIngestionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeDataIngestionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeDataIngestionJobResponse(data, context);
  const response: DescribeDataIngestionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeDataIngestionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataIngestionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeDatasetResponse(data, context);
  const response: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeInferenceSchedulerResponse(data, context);
  const response: DescribeInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeLabelResponse(data, context);
  const response: DescribeLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeLabelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLabelGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeLabelGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeLabelGroupResponse(data, context);
  const response: DescribeLabelGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeLabelGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLabelGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeModelResponse(data, context);
  const response: DescribeModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListDataIngestionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIngestionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListDataIngestionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListDataIngestionJobsResponse(data, context);
  const response: ListDataIngestionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListDataIngestionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIngestionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListDatasetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListDatasetsResponse(data, context);
  const response: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListInferenceEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListInferenceEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListInferenceEventsResponse(data, context);
  const response: ListInferenceEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListInferenceEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListInferenceExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListInferenceExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListInferenceExecutionsResponse(data, context);
  const response: ListInferenceExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListInferenceExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListInferenceSchedulersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceSchedulersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListInferenceSchedulersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListInferenceSchedulersResponse(data, context);
  const response: ListInferenceSchedulersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListInferenceSchedulersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceSchedulersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListLabelGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListLabelGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListLabelGroupsResponse(data, context);
  const response: ListLabelGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListLabelGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListLabelsResponse(data, context);
  const response: ListLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListModelsResponse(data, context);
  const response: ListModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListSensorStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSensorStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListSensorStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListSensorStatisticsResponse(data, context);
  const response: ListSensorStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListSensorStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSensorStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
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
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0StartDataIngestionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataIngestionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartDataIngestionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartDataIngestionJobResponse(data, context);
  const response: StartDataIngestionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartDataIngestionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataIngestionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0StartInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartInferenceSchedulerResponse(data, context);
  const response: StartInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0StopInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StopInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StopInferenceSchedulerResponse(data, context);
  const response: StopInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StopInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
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
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
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
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateInferenceSchedulerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateLabelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLabelGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateLabelGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateLabelGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateLabelGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLabelGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.DatasetSchema != null && {
      DatasetSchema: serializeAws_json1_0DatasetSchema(input.DatasetSchema, context),
    }),
    ...(input.ServerSideKmsKeyId != null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateInferenceSchedulerRequest = (
  input: CreateInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataDelayOffsetInMinutes != null && { DataDelayOffsetInMinutes: input.DataDelayOffsetInMinutes }),
    ...(input.DataInputConfiguration != null && {
      DataInputConfiguration: serializeAws_json1_0InferenceInputConfiguration(input.DataInputConfiguration, context),
    }),
    ...(input.DataOutputConfiguration != null && {
      DataOutputConfiguration: serializeAws_json1_0InferenceOutputConfiguration(input.DataOutputConfiguration, context),
    }),
    ...(input.DataUploadFrequency != null && { DataUploadFrequency: input.DataUploadFrequency }),
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    ...(input.ModelName != null && { ModelName: input.ModelName }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.ServerSideKmsKeyId != null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateLabelGroupRequest = (input: CreateLabelGroupRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.FaultCodes != null && { FaultCodes: serializeAws_json1_0FaultCodes(input.FaultCodes, context) }),
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateLabelRequest = (input: CreateLabelRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.Equipment != null && { Equipment: input.Equipment }),
    ...(input.FaultCode != null && { FaultCode: input.FaultCode }),
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
    ...(input.Notes != null && { Notes: input.Notes }),
    ...(input.Rating != null && { Rating: input.Rating }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_0CreateModelRequest = (input: CreateModelRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataPreProcessingConfiguration != null && {
      DataPreProcessingConfiguration: serializeAws_json1_0DataPreProcessingConfiguration(
        input.DataPreProcessingConfiguration,
        context
      ),
    }),
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.DatasetSchema != null && {
      DatasetSchema: serializeAws_json1_0DatasetSchema(input.DatasetSchema, context),
    }),
    ...(input.EvaluationDataEndTime != null && {
      EvaluationDataEndTime: Math.round(input.EvaluationDataEndTime.getTime() / 1000),
    }),
    ...(input.EvaluationDataStartTime != null && {
      EvaluationDataStartTime: Math.round(input.EvaluationDataStartTime.getTime() / 1000),
    }),
    ...(input.LabelsInputConfiguration != null && {
      LabelsInputConfiguration: serializeAws_json1_0LabelsInputConfiguration(input.LabelsInputConfiguration, context),
    }),
    ...(input.ModelName != null && { ModelName: input.ModelName }),
    ...(input.OffCondition != null && { OffCondition: input.OffCondition }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.ServerSideKmsKeyId != null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    ...(input.TrainingDataEndTime != null && {
      TrainingDataEndTime: Math.round(input.TrainingDataEndTime.getTime() / 1000),
    }),
    ...(input.TrainingDataStartTime != null && {
      TrainingDataStartTime: Math.round(input.TrainingDataStartTime.getTime() / 1000),
    }),
  };
};

const serializeAws_json1_0DataPreProcessingConfiguration = (
  input: DataPreProcessingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetSamplingRate != null && { TargetSamplingRate: input.TargetSamplingRate }),
  };
};

const serializeAws_json1_0DatasetSchema = (input: DatasetSchema, context: __SerdeContext): any => {
  return {
    ...(input.InlineDataSchema != null && { InlineDataSchema: __LazyJsonString.fromObject(input.InlineDataSchema) }),
  };
};

const serializeAws_json1_0DeleteDatasetRequest = (input: DeleteDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
  };
};

const serializeAws_json1_0DeleteInferenceSchedulerRequest = (
  input: DeleteInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

const serializeAws_json1_0DeleteLabelGroupRequest = (input: DeleteLabelGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
  };
};

const serializeAws_json1_0DeleteLabelRequest = (input: DeleteLabelRequest, context: __SerdeContext): any => {
  return {
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
    ...(input.LabelId != null && { LabelId: input.LabelId }),
  };
};

const serializeAws_json1_0DeleteModelRequest = (input: DeleteModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ModelName != null && { ModelName: input.ModelName }),
  };
};

const serializeAws_json1_0DescribeDataIngestionJobRequest = (
  input: DescribeDataIngestionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_0DescribeDatasetRequest = (input: DescribeDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
  };
};

const serializeAws_json1_0DescribeInferenceSchedulerRequest = (
  input: DescribeInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

const serializeAws_json1_0DescribeLabelGroupRequest = (
  input: DescribeLabelGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
  };
};

const serializeAws_json1_0DescribeLabelRequest = (input: DescribeLabelRequest, context: __SerdeContext): any => {
  return {
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
    ...(input.LabelId != null && { LabelId: input.LabelId }),
  };
};

const serializeAws_json1_0DescribeModelRequest = (input: DescribeModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ModelName != null && { ModelName: input.ModelName }),
  };
};

const serializeAws_json1_0FaultCodes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0InferenceInputConfiguration = (
  input: InferenceInputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceInputNameConfiguration != null && {
      InferenceInputNameConfiguration: serializeAws_json1_0InferenceInputNameConfiguration(
        input.InferenceInputNameConfiguration,
        context
      ),
    }),
    ...(input.InputTimeZoneOffset != null && { InputTimeZoneOffset: input.InputTimeZoneOffset }),
    ...(input.S3InputConfiguration != null && {
      S3InputConfiguration: serializeAws_json1_0InferenceS3InputConfiguration(input.S3InputConfiguration, context),
    }),
  };
};

const serializeAws_json1_0InferenceInputNameConfiguration = (
  input: InferenceInputNameConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComponentTimestampDelimiter != null && {
      ComponentTimestampDelimiter: input.ComponentTimestampDelimiter,
    }),
    ...(input.TimestampFormat != null && { TimestampFormat: input.TimestampFormat }),
  };
};

const serializeAws_json1_0InferenceOutputConfiguration = (
  input: InferenceOutputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3OutputConfiguration != null && {
      S3OutputConfiguration: serializeAws_json1_0InferenceS3OutputConfiguration(input.S3OutputConfiguration, context),
    }),
  };
};

const serializeAws_json1_0InferenceS3InputConfiguration = (
  input: InferenceS3InputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

const serializeAws_json1_0InferenceS3OutputConfiguration = (
  input: InferenceS3OutputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

const serializeAws_json1_0IngestionInputConfiguration = (
  input: IngestionInputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3InputConfiguration != null && {
      S3InputConfiguration: serializeAws_json1_0IngestionS3InputConfiguration(input.S3InputConfiguration, context),
    }),
  };
};

const serializeAws_json1_0IngestionS3InputConfiguration = (
  input: IngestionS3InputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.KeyPattern != null && { KeyPattern: input.KeyPattern }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

const serializeAws_json1_0LabelsInputConfiguration = (
  input: LabelsInputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
    ...(input.S3InputConfiguration != null && {
      S3InputConfiguration: serializeAws_json1_0LabelsS3InputConfiguration(input.S3InputConfiguration, context),
    }),
  };
};

const serializeAws_json1_0LabelsS3InputConfiguration = (
  input: LabelsS3InputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

const serializeAws_json1_0ListDataIngestionJobsRequest = (
  input: ListDataIngestionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_0ListDatasetsRequest = (input: ListDatasetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetNameBeginsWith != null && { DatasetNameBeginsWith: input.DatasetNameBeginsWith }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListInferenceEventsRequest = (
  input: ListInferenceEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    ...(input.IntervalEndTime != null && { IntervalEndTime: Math.round(input.IntervalEndTime.getTime() / 1000) }),
    ...(input.IntervalStartTime != null && { IntervalStartTime: Math.round(input.IntervalStartTime.getTime() / 1000) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListInferenceExecutionsRequest = (
  input: ListInferenceExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataEndTimeBefore != null && { DataEndTimeBefore: Math.round(input.DataEndTimeBefore.getTime() / 1000) }),
    ...(input.DataStartTimeAfter != null && {
      DataStartTimeAfter: Math.round(input.DataStartTimeAfter.getTime() / 1000),
    }),
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_0ListInferenceSchedulersRequest = (
  input: ListInferenceSchedulersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerNameBeginsWith != null && {
      InferenceSchedulerNameBeginsWith: input.InferenceSchedulerNameBeginsWith,
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.ModelName != null && { ModelName: input.ModelName }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_0ListLabelGroupsRequest = (input: ListLabelGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.LabelGroupNameBeginsWith != null && { LabelGroupNameBeginsWith: input.LabelGroupNameBeginsWith }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListLabelsRequest = (input: ListLabelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Equipment != null && { Equipment: input.Equipment }),
    ...(input.FaultCode != null && { FaultCode: input.FaultCode }),
    ...(input.IntervalEndTime != null && { IntervalEndTime: Math.round(input.IntervalEndTime.getTime() / 1000) }),
    ...(input.IntervalStartTime != null && { IntervalStartTime: Math.round(input.IntervalStartTime.getTime() / 1000) }),
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListModelsRequest = (input: ListModelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetNameBeginsWith != null && { DatasetNameBeginsWith: input.DatasetNameBeginsWith }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.ModelNameBeginsWith != null && { ModelNameBeginsWith: input.ModelNameBeginsWith }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_0ListSensorStatisticsRequest = (
  input: ListSensorStatisticsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.IngestionJobId != null && { IngestionJobId: input.IngestionJobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0StartDataIngestionJobRequest = (
  input: StartDataIngestionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.IngestionInputConfiguration != null && {
      IngestionInputConfiguration: serializeAws_json1_0IngestionInputConfiguration(
        input.IngestionInputConfiguration,
        context
      ),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_0StartInferenceSchedulerRequest = (
  input: StartInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

const serializeAws_json1_0StopInferenceSchedulerRequest = (
  input: StopInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateInferenceSchedulerRequest = (
  input: UpdateInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataDelayOffsetInMinutes != null && { DataDelayOffsetInMinutes: input.DataDelayOffsetInMinutes }),
    ...(input.DataInputConfiguration != null && {
      DataInputConfiguration: serializeAws_json1_0InferenceInputConfiguration(input.DataInputConfiguration, context),
    }),
    ...(input.DataOutputConfiguration != null && {
      DataOutputConfiguration: serializeAws_json1_0InferenceOutputConfiguration(input.DataOutputConfiguration, context),
    }),
    ...(input.DataUploadFrequency != null && { DataUploadFrequency: input.DataUploadFrequency }),
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_0UpdateLabelGroupRequest = (input: UpdateLabelGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.FaultCodes != null && { FaultCodes: serializeAws_json1_0FaultCodes(input.FaultCodes, context) }),
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
  };
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CategoricalValues = (output: any, context: __SerdeContext): CategoricalValues => {
  return {
    NumberOfCategory: __expectInt32(output.NumberOfCategory),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CountPercent = (output: any, context: __SerdeContext): CountPercent => {
  return {
    Count: __expectInt32(output.Count),
    Percentage: __limitedParseFloat32(output.Percentage),
  } as any;
};

const deserializeAws_json1_0CreateDatasetResponse = (output: any, context: __SerdeContext): CreateDatasetResponse => {
  return {
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0CreateInferenceSchedulerResponse = (
  output: any,
  context: __SerdeContext
): CreateInferenceSchedulerResponse => {
  return {
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0CreateLabelGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateLabelGroupResponse => {
  return {
    LabelGroupArn: __expectString(output.LabelGroupArn),
    LabelGroupName: __expectString(output.LabelGroupName),
  } as any;
};

const deserializeAws_json1_0CreateLabelResponse = (output: any, context: __SerdeContext): CreateLabelResponse => {
  return {
    LabelId: __expectString(output.LabelId),
  } as any;
};

const deserializeAws_json1_0CreateModelResponse = (output: any, context: __SerdeContext): CreateModelResponse => {
  return {
    ModelArn: __expectString(output.ModelArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0DataIngestionJobSummaries = (
  output: any,
  context: __SerdeContext
): DataIngestionJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0DataIngestionJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0DataIngestionJobSummary = (
  output: any,
  context: __SerdeContext
): DataIngestionJobSummary => {
  return {
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    IngestionInputConfiguration:
      output.IngestionInputConfiguration != null
        ? deserializeAws_json1_0IngestionInputConfiguration(output.IngestionInputConfiguration, context)
        : undefined,
    JobId: __expectString(output.JobId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0DataPreProcessingConfiguration = (
  output: any,
  context: __SerdeContext
): DataPreProcessingConfiguration => {
  return {
    TargetSamplingRate: __expectString(output.TargetSamplingRate),
  } as any;
};

const deserializeAws_json1_0DataQualitySummary = (output: any, context: __SerdeContext): DataQualitySummary => {
  return {
    DuplicateTimestamps:
      output.DuplicateTimestamps != null
        ? deserializeAws_json1_0DuplicateTimestamps(output.DuplicateTimestamps, context)
        : undefined,
    InsufficientSensorData:
      output.InsufficientSensorData != null
        ? deserializeAws_json1_0InsufficientSensorData(output.InsufficientSensorData, context)
        : undefined,
    InvalidSensorData:
      output.InvalidSensorData != null
        ? deserializeAws_json1_0InvalidSensorData(output.InvalidSensorData, context)
        : undefined,
    MissingSensorData:
      output.MissingSensorData != null
        ? deserializeAws_json1_0MissingSensorData(output.MissingSensorData, context)
        : undefined,
    UnsupportedTimestamps:
      output.UnsupportedTimestamps != null
        ? deserializeAws_json1_0UnsupportedTimestamps(output.UnsupportedTimestamps, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DatasetSummaries = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0DatasetSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0DescribeDataIngestionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataIngestionJobResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DataEndTime:
      output.DataEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataEndTime)))
        : undefined,
    DataQualitySummary:
      output.DataQualitySummary != null
        ? deserializeAws_json1_0DataQualitySummary(output.DataQualitySummary, context)
        : undefined,
    DataStartTime:
      output.DataStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataStartTime)))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    FailedReason: __expectString(output.FailedReason),
    IngestedDataSize: __expectLong(output.IngestedDataSize),
    IngestedFilesSummary:
      output.IngestedFilesSummary != null
        ? deserializeAws_json1_0IngestedFilesSummary(output.IngestedFilesSummary, context)
        : undefined,
    IngestionInputConfiguration:
      output.IngestionInputConfiguration != null
        ? deserializeAws_json1_0IngestionInputConfiguration(output.IngestionInputConfiguration, context)
        : undefined,
    JobId: __expectString(output.JobId),
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
    StatusDetail: __expectString(output.StatusDetail),
  } as any;
};

const deserializeAws_json1_0DescribeDatasetResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DataEndTime:
      output.DataEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataEndTime)))
        : undefined,
    DataQualitySummary:
      output.DataQualitySummary != null
        ? deserializeAws_json1_0DataQualitySummary(output.DataQualitySummary, context)
        : undefined,
    DataStartTime:
      output.DataStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataStartTime)))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    IngestedFilesSummary:
      output.IngestedFilesSummary != null
        ? deserializeAws_json1_0IngestedFilesSummary(output.IngestedFilesSummary, context)
        : undefined,
    IngestionInputConfiguration:
      output.IngestionInputConfiguration != null
        ? deserializeAws_json1_0IngestionInputConfiguration(output.IngestionInputConfiguration, context)
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    RoleArn: __expectString(output.RoleArn),
    Schema: output.Schema != null ? new __LazyJsonString(output.Schema) : undefined,
    ServerSideKmsKeyId: __expectString(output.ServerSideKmsKeyId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0DescribeInferenceSchedulerResponse = (
  output: any,
  context: __SerdeContext
): DescribeInferenceSchedulerResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DataDelayOffsetInMinutes: __expectLong(output.DataDelayOffsetInMinutes),
    DataInputConfiguration:
      output.DataInputConfiguration != null
        ? deserializeAws_json1_0InferenceInputConfiguration(output.DataInputConfiguration, context)
        : undefined,
    DataOutputConfiguration:
      output.DataOutputConfiguration != null
        ? deserializeAws_json1_0InferenceOutputConfiguration(output.DataOutputConfiguration, context)
        : undefined,
    DataUploadFrequency: __expectString(output.DataUploadFrequency),
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    LatestInferenceResult: __expectString(output.LatestInferenceResult),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    RoleArn: __expectString(output.RoleArn),
    ServerSideKmsKeyId: __expectString(output.ServerSideKmsKeyId),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeLabelGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeLabelGroupResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    FaultCodes: output.FaultCodes != null ? deserializeAws_json1_0FaultCodes(output.FaultCodes, context) : undefined,
    LabelGroupArn: __expectString(output.LabelGroupArn),
    LabelGroupName: __expectString(output.LabelGroupName),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeLabelResponse = (output: any, context: __SerdeContext): DescribeLabelResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    Equipment: __expectString(output.Equipment),
    FaultCode: __expectString(output.FaultCode),
    LabelGroupArn: __expectString(output.LabelGroupArn),
    LabelGroupName: __expectString(output.LabelGroupName),
    LabelId: __expectString(output.LabelId),
    Notes: __expectString(output.Notes),
    Rating: __expectString(output.Rating),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeModelResponse = (output: any, context: __SerdeContext): DescribeModelResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DataPreProcessingConfiguration:
      output.DataPreProcessingConfiguration != null
        ? deserializeAws_json1_0DataPreProcessingConfiguration(output.DataPreProcessingConfiguration, context)
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    EvaluationDataEndTime:
      output.EvaluationDataEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EvaluationDataEndTime)))
        : undefined,
    EvaluationDataStartTime:
      output.EvaluationDataStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EvaluationDataStartTime)))
        : undefined,
    FailedReason: __expectString(output.FailedReason),
    LabelsInputConfiguration:
      output.LabelsInputConfiguration != null
        ? deserializeAws_json1_0LabelsInputConfiguration(output.LabelsInputConfiguration, context)
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    ModelArn: __expectString(output.ModelArn),
    ModelMetrics: output.ModelMetrics != null ? new __LazyJsonString(output.ModelMetrics) : undefined,
    ModelName: __expectString(output.ModelName),
    OffCondition: __expectString(output.OffCondition),
    RoleArn: __expectString(output.RoleArn),
    Schema: output.Schema != null ? new __LazyJsonString(output.Schema) : undefined,
    ServerSideKmsKeyId: __expectString(output.ServerSideKmsKeyId),
    Status: __expectString(output.Status),
    TrainingDataEndTime:
      output.TrainingDataEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TrainingDataEndTime)))
        : undefined,
    TrainingDataStartTime:
      output.TrainingDataStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TrainingDataStartTime)))
        : undefined,
    TrainingExecutionEndTime:
      output.TrainingExecutionEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TrainingExecutionEndTime)))
        : undefined,
    TrainingExecutionStartTime:
      output.TrainingExecutionStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TrainingExecutionStartTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_0DuplicateTimestamps = (output: any, context: __SerdeContext): DuplicateTimestamps => {
  return {
    TotalNumberOfDuplicateTimestamps: __expectInt32(output.TotalNumberOfDuplicateTimestamps),
  } as any;
};

const deserializeAws_json1_0FaultCodes = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0InferenceEventSummaries = (
  output: any,
  context: __SerdeContext
): InferenceEventSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0InferenceEventSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0InferenceEventSummary = (output: any, context: __SerdeContext): InferenceEventSummary => {
  return {
    Diagnostics: __expectString(output.Diagnostics),
    EventDurationInSeconds: __expectLong(output.EventDurationInSeconds),
    EventEndTime:
      output.EventEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventEndTime)))
        : undefined,
    EventStartTime:
      output.EventStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventStartTime)))
        : undefined,
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
  } as any;
};

const deserializeAws_json1_0InferenceExecutionSummaries = (
  output: any,
  context: __SerdeContext
): InferenceExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0InferenceExecutionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0InferenceExecutionSummary = (
  output: any,
  context: __SerdeContext
): InferenceExecutionSummary => {
  return {
    CustomerResultObject:
      output.CustomerResultObject != null
        ? deserializeAws_json1_0S3Object(output.CustomerResultObject, context)
        : undefined,
    DataEndTime:
      output.DataEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataEndTime)))
        : undefined,
    DataInputConfiguration:
      output.DataInputConfiguration != null
        ? deserializeAws_json1_0InferenceInputConfiguration(output.DataInputConfiguration, context)
        : undefined,
    DataOutputConfiguration:
      output.DataOutputConfiguration != null
        ? deserializeAws_json1_0InferenceOutputConfiguration(output.DataOutputConfiguration, context)
        : undefined,
    DataStartTime:
      output.DataStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataStartTime)))
        : undefined,
    FailedReason: __expectString(output.FailedReason),
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    ScheduledStartTime:
      output.ScheduledStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ScheduledStartTime)))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0InferenceInputConfiguration = (
  output: any,
  context: __SerdeContext
): InferenceInputConfiguration => {
  return {
    InferenceInputNameConfiguration:
      output.InferenceInputNameConfiguration != null
        ? deserializeAws_json1_0InferenceInputNameConfiguration(output.InferenceInputNameConfiguration, context)
        : undefined,
    InputTimeZoneOffset: __expectString(output.InputTimeZoneOffset),
    S3InputConfiguration:
      output.S3InputConfiguration != null
        ? deserializeAws_json1_0InferenceS3InputConfiguration(output.S3InputConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0InferenceInputNameConfiguration = (
  output: any,
  context: __SerdeContext
): InferenceInputNameConfiguration => {
  return {
    ComponentTimestampDelimiter: __expectString(output.ComponentTimestampDelimiter),
    TimestampFormat: __expectString(output.TimestampFormat),
  } as any;
};

const deserializeAws_json1_0InferenceOutputConfiguration = (
  output: any,
  context: __SerdeContext
): InferenceOutputConfiguration => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3OutputConfiguration:
      output.S3OutputConfiguration != null
        ? deserializeAws_json1_0InferenceS3OutputConfiguration(output.S3OutputConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0InferenceS3InputConfiguration = (
  output: any,
  context: __SerdeContext
): InferenceS3InputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_json1_0InferenceS3OutputConfiguration = (
  output: any,
  context: __SerdeContext
): InferenceS3OutputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_json1_0InferenceSchedulerSummaries = (
  output: any,
  context: __SerdeContext
): InferenceSchedulerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0InferenceSchedulerSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0InferenceSchedulerSummary = (
  output: any,
  context: __SerdeContext
): InferenceSchedulerSummary => {
  return {
    DataDelayOffsetInMinutes: __expectLong(output.DataDelayOffsetInMinutes),
    DataUploadFrequency: __expectString(output.DataUploadFrequency),
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    LatestInferenceResult: __expectString(output.LatestInferenceResult),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0IngestedFilesSummary = (output: any, context: __SerdeContext): IngestedFilesSummary => {
  return {
    DiscardedFiles:
      output.DiscardedFiles != null
        ? deserializeAws_json1_0ListOfDiscardedFiles(output.DiscardedFiles, context)
        : undefined,
    IngestedNumberOfFiles: __expectInt32(output.IngestedNumberOfFiles),
    TotalNumberOfFiles: __expectInt32(output.TotalNumberOfFiles),
  } as any;
};

const deserializeAws_json1_0IngestionInputConfiguration = (
  output: any,
  context: __SerdeContext
): IngestionInputConfiguration => {
  return {
    S3InputConfiguration:
      output.S3InputConfiguration != null
        ? deserializeAws_json1_0IngestionS3InputConfiguration(output.S3InputConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0IngestionS3InputConfiguration = (
  output: any,
  context: __SerdeContext
): IngestionS3InputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    KeyPattern: __expectString(output.KeyPattern),
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_json1_0InsufficientSensorData = (output: any, context: __SerdeContext): InsufficientSensorData => {
  return {
    MissingCompleteSensorData:
      output.MissingCompleteSensorData != null
        ? deserializeAws_json1_0MissingCompleteSensorData(output.MissingCompleteSensorData, context)
        : undefined,
    SensorsWithShortDateRange:
      output.SensorsWithShortDateRange != null
        ? deserializeAws_json1_0SensorsWithShortDateRange(output.SensorsWithShortDateRange, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidSensorData = (output: any, context: __SerdeContext): InvalidSensorData => {
  return {
    AffectedSensorCount: __expectInt32(output.AffectedSensorCount),
    TotalNumberOfInvalidValues: __expectInt32(output.TotalNumberOfInvalidValues),
  } as any;
};

const deserializeAws_json1_0LabelGroupSummaries = (output: any, context: __SerdeContext): LabelGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0LabelGroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0LabelGroupSummary = (output: any, context: __SerdeContext): LabelGroupSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    LabelGroupArn: __expectString(output.LabelGroupArn),
    LabelGroupName: __expectString(output.LabelGroupName),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_0LabelsInputConfiguration = (
  output: any,
  context: __SerdeContext
): LabelsInputConfiguration => {
  return {
    LabelGroupName: __expectString(output.LabelGroupName),
    S3InputConfiguration:
      output.S3InputConfiguration != null
        ? deserializeAws_json1_0LabelsS3InputConfiguration(output.S3InputConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0LabelsS3InputConfiguration = (
  output: any,
  context: __SerdeContext
): LabelsS3InputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_json1_0LabelSummaries = (output: any, context: __SerdeContext): LabelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0LabelSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0LabelSummary = (output: any, context: __SerdeContext): LabelSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    Equipment: __expectString(output.Equipment),
    FaultCode: __expectString(output.FaultCode),
    LabelGroupArn: __expectString(output.LabelGroupArn),
    LabelGroupName: __expectString(output.LabelGroupName),
    LabelId: __expectString(output.LabelId),
    Rating: __expectString(output.Rating),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

const deserializeAws_json1_0LargeTimestampGaps = (output: any, context: __SerdeContext): LargeTimestampGaps => {
  return {
    MaxTimestampGapInDays: __expectInt32(output.MaxTimestampGapInDays),
    NumberOfLargeTimestampGaps: __expectInt32(output.NumberOfLargeTimestampGaps),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0ListDataIngestionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDataIngestionJobsResponse => {
  return {
    DataIngestionJobSummaries:
      output.DataIngestionJobSummaries != null
        ? deserializeAws_json1_0DataIngestionJobSummaries(output.DataIngestionJobSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return {
    DatasetSummaries:
      output.DatasetSummaries != null
        ? deserializeAws_json1_0DatasetSummaries(output.DatasetSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListInferenceEventsResponse = (
  output: any,
  context: __SerdeContext
): ListInferenceEventsResponse => {
  return {
    InferenceEventSummaries:
      output.InferenceEventSummaries != null
        ? deserializeAws_json1_0InferenceEventSummaries(output.InferenceEventSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListInferenceExecutionsResponse = (
  output: any,
  context: __SerdeContext
): ListInferenceExecutionsResponse => {
  return {
    InferenceExecutionSummaries:
      output.InferenceExecutionSummaries != null
        ? deserializeAws_json1_0InferenceExecutionSummaries(output.InferenceExecutionSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListInferenceSchedulersResponse = (
  output: any,
  context: __SerdeContext
): ListInferenceSchedulersResponse => {
  return {
    InferenceSchedulerSummaries:
      output.InferenceSchedulerSummaries != null
        ? deserializeAws_json1_0InferenceSchedulerSummaries(output.InferenceSchedulerSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListLabelGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListLabelGroupsResponse => {
  return {
    LabelGroupSummaries:
      output.LabelGroupSummaries != null
        ? deserializeAws_json1_0LabelGroupSummaries(output.LabelGroupSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListLabelsResponse = (output: any, context: __SerdeContext): ListLabelsResponse => {
  return {
    LabelSummaries:
      output.LabelSummaries != null ? deserializeAws_json1_0LabelSummaries(output.LabelSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListModelsResponse = (output: any, context: __SerdeContext): ListModelsResponse => {
  return {
    ModelSummaries:
      output.ModelSummaries != null ? deserializeAws_json1_0ModelSummaries(output.ModelSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListOfDiscardedFiles = (output: any, context: __SerdeContext): S3Object[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0S3Object(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ListSensorStatisticsResponse = (
  output: any,
  context: __SerdeContext
): ListSensorStatisticsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SensorStatisticsSummaries:
      output.SensorStatisticsSummaries != null
        ? deserializeAws_json1_0SensorStatisticsSummaries(output.SensorStatisticsSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0MissingCompleteSensorData = (
  output: any,
  context: __SerdeContext
): MissingCompleteSensorData => {
  return {
    AffectedSensorCount: __expectInt32(output.AffectedSensorCount),
  } as any;
};

const deserializeAws_json1_0MissingSensorData = (output: any, context: __SerdeContext): MissingSensorData => {
  return {
    AffectedSensorCount: __expectInt32(output.AffectedSensorCount),
    TotalNumberOfMissingValues: __expectInt32(output.TotalNumberOfMissingValues),
  } as any;
};

const deserializeAws_json1_0ModelSummaries = (output: any, context: __SerdeContext): ModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ModelSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ModelSummary = (output: any, context: __SerdeContext): ModelSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0MonotonicValues = (output: any, context: __SerdeContext): MonotonicValues => {
  return {
    Monotonicity: __expectString(output.Monotonicity),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0MultipleOperatingModes = (output: any, context: __SerdeContext): MultipleOperatingModes => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_json1_0SensorStatisticsSummaries = (
  output: any,
  context: __SerdeContext
): SensorStatisticsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SensorStatisticsSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0SensorStatisticsSummary = (
  output: any,
  context: __SerdeContext
): SensorStatisticsSummary => {
  return {
    CategoricalValues:
      output.CategoricalValues != null
        ? deserializeAws_json1_0CategoricalValues(output.CategoricalValues, context)
        : undefined,
    ComponentName: __expectString(output.ComponentName),
    DataEndTime:
      output.DataEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataEndTime)))
        : undefined,
    DataExists: __expectBoolean(output.DataExists),
    DataStartTime:
      output.DataStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataStartTime)))
        : undefined,
    DuplicateTimestamps:
      output.DuplicateTimestamps != null
        ? deserializeAws_json1_0CountPercent(output.DuplicateTimestamps, context)
        : undefined,
    InvalidDateEntries:
      output.InvalidDateEntries != null
        ? deserializeAws_json1_0CountPercent(output.InvalidDateEntries, context)
        : undefined,
    InvalidValues:
      output.InvalidValues != null ? deserializeAws_json1_0CountPercent(output.InvalidValues, context) : undefined,
    LargeTimestampGaps:
      output.LargeTimestampGaps != null
        ? deserializeAws_json1_0LargeTimestampGaps(output.LargeTimestampGaps, context)
        : undefined,
    MissingValues:
      output.MissingValues != null ? deserializeAws_json1_0CountPercent(output.MissingValues, context) : undefined,
    MonotonicValues:
      output.MonotonicValues != null
        ? deserializeAws_json1_0MonotonicValues(output.MonotonicValues, context)
        : undefined,
    MultipleOperatingModes:
      output.MultipleOperatingModes != null
        ? deserializeAws_json1_0MultipleOperatingModes(output.MultipleOperatingModes, context)
        : undefined,
    SensorName: __expectString(output.SensorName),
  } as any;
};

const deserializeAws_json1_0SensorsWithShortDateRange = (
  output: any,
  context: __SerdeContext
): SensorsWithShortDateRange => {
  return {
    AffectedSensorCount: __expectInt32(output.AffectedSensorCount),
  } as any;
};

const deserializeAws_json1_0ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0StartDataIngestionJobResponse = (
  output: any,
  context: __SerdeContext
): StartDataIngestionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0StartInferenceSchedulerResponse = (
  output: any,
  context: __SerdeContext
): StartInferenceSchedulerResponse => {
  return {
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0StopInferenceSchedulerResponse = (
  output: any,
  context: __SerdeContext
): StopInferenceSchedulerResponse => {
  return {
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0UnsupportedTimestamps = (output: any, context: __SerdeContext): UnsupportedTimestamps => {
  return {
    TotalNumberOfUnsupportedTimestamps: __expectInt32(output.TotalNumberOfUnsupportedTimestamps),
  } as any;
};

const deserializeAws_json1_0UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
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
