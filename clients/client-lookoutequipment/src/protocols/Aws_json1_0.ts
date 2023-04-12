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

/**
 * serializeAws_json1_0CreateDatasetCommand
 */
export const se_CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataset");
  let body: any;
  body = JSON.stringify(se_CreateDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateInferenceSchedulerCommand
 */
export const se_CreateInferenceSchedulerCommand = async (
  input: CreateInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInferenceScheduler");
  let body: any;
  body = JSON.stringify(se_CreateInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateLabelCommand
 */
export const se_CreateLabelCommand = async (
  input: CreateLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLabel");
  let body: any;
  body = JSON.stringify(se_CreateLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateLabelGroupCommand
 */
export const se_CreateLabelGroupCommand = async (
  input: CreateLabelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLabelGroup");
  let body: any;
  body = JSON.stringify(se_CreateLabelGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateModelCommand
 */
export const se_CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModel");
  let body: any;
  body = JSON.stringify(se_CreateModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDatasetCommand
 */
export const se_DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataset");
  let body: any;
  body = JSON.stringify(se_DeleteDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteInferenceSchedulerCommand
 */
export const se_DeleteInferenceSchedulerCommand = async (
  input: DeleteInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInferenceScheduler");
  let body: any;
  body = JSON.stringify(se_DeleteInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteLabelCommand
 */
export const se_DeleteLabelCommand = async (
  input: DeleteLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLabel");
  let body: any;
  body = JSON.stringify(se_DeleteLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteLabelGroupCommand
 */
export const se_DeleteLabelGroupCommand = async (
  input: DeleteLabelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLabelGroup");
  let body: any;
  body = JSON.stringify(se_DeleteLabelGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteModelCommand
 */
export const se_DeleteModelCommand = async (
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModel");
  let body: any;
  body = JSON.stringify(se_DeleteModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeDataIngestionJobCommand
 */
export const se_DescribeDataIngestionJobCommand = async (
  input: DescribeDataIngestionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataIngestionJob");
  let body: any;
  body = JSON.stringify(se_DescribeDataIngestionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeDatasetCommand
 */
export const se_DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataset");
  let body: any;
  body = JSON.stringify(se_DescribeDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeInferenceSchedulerCommand
 */
export const se_DescribeInferenceSchedulerCommand = async (
  input: DescribeInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInferenceScheduler");
  let body: any;
  body = JSON.stringify(se_DescribeInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeLabelCommand
 */
export const se_DescribeLabelCommand = async (
  input: DescribeLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLabel");
  let body: any;
  body = JSON.stringify(se_DescribeLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeLabelGroupCommand
 */
export const se_DescribeLabelGroupCommand = async (
  input: DescribeLabelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLabelGroup");
  let body: any;
  body = JSON.stringify(se_DescribeLabelGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeModelCommand
 */
export const se_DescribeModelCommand = async (
  input: DescribeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModel");
  let body: any;
  body = JSON.stringify(se_DescribeModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDataIngestionJobsCommand
 */
export const se_ListDataIngestionJobsCommand = async (
  input: ListDataIngestionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDataIngestionJobs");
  let body: any;
  body = JSON.stringify(se_ListDataIngestionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDatasetsCommand
 */
export const se_ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatasets");
  let body: any;
  body = JSON.stringify(se_ListDatasetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListInferenceEventsCommand
 */
export const se_ListInferenceEventsCommand = async (
  input: ListInferenceEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInferenceEvents");
  let body: any;
  body = JSON.stringify(se_ListInferenceEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListInferenceExecutionsCommand
 */
export const se_ListInferenceExecutionsCommand = async (
  input: ListInferenceExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInferenceExecutions");
  let body: any;
  body = JSON.stringify(se_ListInferenceExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListInferenceSchedulersCommand
 */
export const se_ListInferenceSchedulersCommand = async (
  input: ListInferenceSchedulersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInferenceSchedulers");
  let body: any;
  body = JSON.stringify(se_ListInferenceSchedulersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListLabelGroupsCommand
 */
export const se_ListLabelGroupsCommand = async (
  input: ListLabelGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLabelGroups");
  let body: any;
  body = JSON.stringify(se_ListLabelGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListLabelsCommand
 */
export const se_ListLabelsCommand = async (
  input: ListLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLabels");
  let body: any;
  body = JSON.stringify(se_ListLabelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListModelsCommand
 */
export const se_ListModelsCommand = async (
  input: ListModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModels");
  let body: any;
  body = JSON.stringify(se_ListModelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSensorStatisticsCommand
 */
export const se_ListSensorStatisticsCommand = async (
  input: ListSensorStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSensorStatistics");
  let body: any;
  body = JSON.stringify(se_ListSensorStatisticsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartDataIngestionJobCommand
 */
export const se_StartDataIngestionJobCommand = async (
  input: StartDataIngestionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDataIngestionJob");
  let body: any;
  body = JSON.stringify(se_StartDataIngestionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartInferenceSchedulerCommand
 */
export const se_StartInferenceSchedulerCommand = async (
  input: StartInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartInferenceScheduler");
  let body: any;
  body = JSON.stringify(se_StartInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StopInferenceSchedulerCommand
 */
export const se_StopInferenceSchedulerCommand = async (
  input: StopInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopInferenceScheduler");
  let body: any;
  body = JSON.stringify(se_StopInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateInferenceSchedulerCommand
 */
export const se_UpdateInferenceSchedulerCommand = async (
  input: UpdateInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInferenceScheduler");
  let body: any;
  body = JSON.stringify(se_UpdateInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateLabelGroupCommand
 */
export const se_UpdateLabelGroupCommand = async (
  input: UpdateLabelGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLabelGroup");
  let body: any;
  body = JSON.stringify(se_UpdateLabelGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateDatasetCommand
 */
export const de_CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDatasetResponse(data, context);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateDatasetCommandError
 */
const de_CreateDatasetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0CreateInferenceSchedulerCommand
 */
export const de_CreateInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateInferenceSchedulerResponse(data, context);
  const response: CreateInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateInferenceSchedulerCommandError
 */
const de_CreateInferenceSchedulerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0CreateLabelCommand
 */
export const de_CreateLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLabelResponse(data, context);
  const response: CreateLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateLabelCommandError
 */
const de_CreateLabelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0CreateLabelGroupCommand
 */
export const de_CreateLabelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLabelGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLabelGroupResponse(data, context);
  const response: CreateLabelGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateLabelGroupCommandError
 */
const de_CreateLabelGroupCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0CreateModelCommand
 */
export const de_CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateModelResponse(data, context);
  const response: CreateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateModelCommandError
 */
const de_CreateModelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0DeleteDatasetCommand
 */
export const de_DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDatasetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteDatasetCommandError
 */
const de_DeleteDatasetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0DeleteInferenceSchedulerCommand
 */
export const de_DeleteInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInferenceSchedulerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteInferenceSchedulerCommandError
 */
const de_DeleteInferenceSchedulerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0DeleteLabelCommand
 */
export const de_DeleteLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLabelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteLabelCommandError
 */
const de_DeleteLabelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0DeleteLabelGroupCommand
 */
export const de_DeleteLabelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLabelGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLabelGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteLabelGroupCommandError
 */
const de_DeleteLabelGroupCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0DeleteModelCommand
 */
export const de_DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteModelCommandError
 */
const de_DeleteModelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0DescribeDataIngestionJobCommand
 */
export const de_DescribeDataIngestionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataIngestionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDataIngestionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDataIngestionJobResponse(data, context);
  const response: DescribeDataIngestionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeDataIngestionJobCommandError
 */
const de_DescribeDataIngestionJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0DescribeDatasetCommand
 */
export const de_DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDatasetResponse(data, context);
  const response: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeDatasetCommandError
 */
const de_DescribeDatasetCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0DescribeInferenceSchedulerCommand
 */
export const de_DescribeInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInferenceSchedulerResponse(data, context);
  const response: DescribeInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeInferenceSchedulerCommandError
 */
const de_DescribeInferenceSchedulerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0DescribeLabelCommand
 */
export const de_DescribeLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLabelResponse(data, context);
  const response: DescribeLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeLabelCommandError
 */
const de_DescribeLabelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0DescribeLabelGroupCommand
 */
export const de_DescribeLabelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLabelGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLabelGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLabelGroupResponse(data, context);
  const response: DescribeLabelGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeLabelGroupCommandError
 */
const de_DescribeLabelGroupCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0DescribeModelCommand
 */
export const de_DescribeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelResponse(data, context);
  const response: DescribeModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeModelCommandError
 */
const de_DescribeModelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0ListDataIngestionJobsCommand
 */
export const de_ListDataIngestionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIngestionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDataIngestionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDataIngestionJobsResponse(data, context);
  const response: ListDataIngestionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListDataIngestionJobsCommandError
 */
const de_ListDataIngestionJobsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0ListDatasetsCommand
 */
export const de_ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatasetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatasetsResponse(data, context);
  const response: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListDatasetsCommandError
 */
const de_ListDatasetsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0ListInferenceEventsCommand
 */
export const de_ListInferenceEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInferenceEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInferenceEventsResponse(data, context);
  const response: ListInferenceEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListInferenceEventsCommandError
 */
const de_ListInferenceEventsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0ListInferenceExecutionsCommand
 */
export const de_ListInferenceExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInferenceExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInferenceExecutionsResponse(data, context);
  const response: ListInferenceExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListInferenceExecutionsCommandError
 */
const de_ListInferenceExecutionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0ListInferenceSchedulersCommand
 */
export const de_ListInferenceSchedulersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceSchedulersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInferenceSchedulersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInferenceSchedulersResponse(data, context);
  const response: ListInferenceSchedulersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListInferenceSchedulersCommandError
 */
const de_ListInferenceSchedulersCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0ListLabelGroupsCommand
 */
export const de_ListLabelGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLabelGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLabelGroupsResponse(data, context);
  const response: ListLabelGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListLabelGroupsCommandError
 */
const de_ListLabelGroupsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0ListLabelsCommand
 */
export const de_ListLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLabelsResponse(data, context);
  const response: ListLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListLabelsCommandError
 */
const de_ListLabelsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0ListModelsCommand
 */
export const de_ListModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelsResponse(data, context);
  const response: ListModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListModelsCommandError
 */
const de_ListModelsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0ListSensorStatisticsCommand
 */
export const de_ListSensorStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSensorStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSensorStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSensorStatisticsResponse(data, context);
  const response: ListSensorStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListSensorStatisticsCommandError
 */
const de_ListSensorStatisticsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0ListTagsForResourceCommand
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
 * deserializeAws_json1_0ListTagsForResourceCommandError
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
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0StartDataIngestionJobCommand
 */
export const de_StartDataIngestionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataIngestionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDataIngestionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartDataIngestionJobResponse(data, context);
  const response: StartDataIngestionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0StartDataIngestionJobCommandError
 */
const de_StartDataIngestionJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0StartInferenceSchedulerCommand
 */
export const de_StartInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartInferenceSchedulerResponse(data, context);
  const response: StartInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0StartInferenceSchedulerCommandError
 */
const de_StartInferenceSchedulerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0StopInferenceSchedulerCommand
 */
export const de_StopInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopInferenceSchedulerResponse(data, context);
  const response: StopInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0StopInferenceSchedulerCommandError
 */
const de_StopInferenceSchedulerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0TagResourceCommand
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
 * deserializeAws_json1_0TagResourceCommandError
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
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0UntagResourceCommand
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
 * deserializeAws_json1_0UntagResourceCommandError
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
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0UpdateInferenceSchedulerCommand
 */
export const de_UpdateInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateInferenceSchedulerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateInferenceSchedulerCommandError
 */
const de_UpdateInferenceSchedulerCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0UpdateLabelGroupCommand
 */
export const de_UpdateLabelGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLabelGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLabelGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateLabelGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateLabelGroupCommandError
 */
const de_UpdateLabelGroupCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
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
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0CreateDatasetRequest
 */
const se_CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.DatasetSchema != null && { DatasetSchema: se_DatasetSchema(input.DatasetSchema, context) }),
    ...(input.ServerSideKmsKeyId != null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateInferenceSchedulerRequest
 */
const se_CreateInferenceSchedulerRequest = (input: CreateInferenceSchedulerRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataDelayOffsetInMinutes != null && { DataDelayOffsetInMinutes: input.DataDelayOffsetInMinutes }),
    ...(input.DataInputConfiguration != null && {
      DataInputConfiguration: se_InferenceInputConfiguration(input.DataInputConfiguration, context),
    }),
    ...(input.DataOutputConfiguration != null && {
      DataOutputConfiguration: se_InferenceOutputConfiguration(input.DataOutputConfiguration, context),
    }),
    ...(input.DataUploadFrequency != null && { DataUploadFrequency: input.DataUploadFrequency }),
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    ...(input.ModelName != null && { ModelName: input.ModelName }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.ServerSideKmsKeyId != null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateLabelGroupRequest
 */
const se_CreateLabelGroupRequest = (input: CreateLabelGroupRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.FaultCodes != null && { FaultCodes: se_FaultCodes(input.FaultCodes, context) }),
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateLabelRequest
 */
const se_CreateLabelRequest = (input: CreateLabelRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_0CreateModelRequest
 */
const se_CreateModelRequest = (input: CreateModelRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataPreProcessingConfiguration != null && {
      DataPreProcessingConfiguration: se_DataPreProcessingConfiguration(input.DataPreProcessingConfiguration, context),
    }),
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.DatasetSchema != null && { DatasetSchema: se_DatasetSchema(input.DatasetSchema, context) }),
    ...(input.EvaluationDataEndTime != null && {
      EvaluationDataEndTime: Math.round(input.EvaluationDataEndTime.getTime() / 1000),
    }),
    ...(input.EvaluationDataStartTime != null && {
      EvaluationDataStartTime: Math.round(input.EvaluationDataStartTime.getTime() / 1000),
    }),
    ...(input.LabelsInputConfiguration != null && {
      LabelsInputConfiguration: se_LabelsInputConfiguration(input.LabelsInputConfiguration, context),
    }),
    ...(input.ModelName != null && { ModelName: input.ModelName }),
    ...(input.OffCondition != null && { OffCondition: input.OffCondition }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.ServerSideKmsKeyId != null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TrainingDataEndTime != null && {
      TrainingDataEndTime: Math.round(input.TrainingDataEndTime.getTime() / 1000),
    }),
    ...(input.TrainingDataStartTime != null && {
      TrainingDataStartTime: Math.round(input.TrainingDataStartTime.getTime() / 1000),
    }),
  };
};

/**
 * serializeAws_json1_0DataPreProcessingConfiguration
 */
const se_DataPreProcessingConfiguration = (input: DataPreProcessingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.TargetSamplingRate != null && { TargetSamplingRate: input.TargetSamplingRate }),
  };
};

/**
 * serializeAws_json1_0DatasetSchema
 */
const se_DatasetSchema = (input: DatasetSchema, context: __SerdeContext): any => {
  return {
    ...(input.InlineDataSchema != null && { InlineDataSchema: __LazyJsonString.fromObject(input.InlineDataSchema) }),
  };
};

/**
 * serializeAws_json1_0DeleteDatasetRequest
 */
const se_DeleteDatasetRequest = (input: DeleteDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
  };
};

/**
 * serializeAws_json1_0DeleteInferenceSchedulerRequest
 */
const se_DeleteInferenceSchedulerRequest = (input: DeleteInferenceSchedulerRequest, context: __SerdeContext): any => {
  return {
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

/**
 * serializeAws_json1_0DeleteLabelGroupRequest
 */
const se_DeleteLabelGroupRequest = (input: DeleteLabelGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
  };
};

/**
 * serializeAws_json1_0DeleteLabelRequest
 */
const se_DeleteLabelRequest = (input: DeleteLabelRequest, context: __SerdeContext): any => {
  return {
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
    ...(input.LabelId != null && { LabelId: input.LabelId }),
  };
};

/**
 * serializeAws_json1_0DeleteModelRequest
 */
const se_DeleteModelRequest = (input: DeleteModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ModelName != null && { ModelName: input.ModelName }),
  };
};

/**
 * serializeAws_json1_0DescribeDataIngestionJobRequest
 */
const se_DescribeDataIngestionJobRequest = (input: DescribeDataIngestionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_0DescribeDatasetRequest
 */
const se_DescribeDatasetRequest = (input: DescribeDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
  };
};

/**
 * serializeAws_json1_0DescribeInferenceSchedulerRequest
 */
const se_DescribeInferenceSchedulerRequest = (
  input: DescribeInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

/**
 * serializeAws_json1_0DescribeLabelGroupRequest
 */
const se_DescribeLabelGroupRequest = (input: DescribeLabelGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
  };
};

/**
 * serializeAws_json1_0DescribeLabelRequest
 */
const se_DescribeLabelRequest = (input: DescribeLabelRequest, context: __SerdeContext): any => {
  return {
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
    ...(input.LabelId != null && { LabelId: input.LabelId }),
  };
};

/**
 * serializeAws_json1_0DescribeModelRequest
 */
const se_DescribeModelRequest = (input: DescribeModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ModelName != null && { ModelName: input.ModelName }),
  };
};

/**
 * serializeAws_json1_0FaultCodes
 */
const se_FaultCodes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0InferenceInputConfiguration
 */
const se_InferenceInputConfiguration = (input: InferenceInputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InferenceInputNameConfiguration != null && {
      InferenceInputNameConfiguration: se_InferenceInputNameConfiguration(
        input.InferenceInputNameConfiguration,
        context
      ),
    }),
    ...(input.InputTimeZoneOffset != null && { InputTimeZoneOffset: input.InputTimeZoneOffset }),
    ...(input.S3InputConfiguration != null && {
      S3InputConfiguration: se_InferenceS3InputConfiguration(input.S3InputConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_0InferenceInputNameConfiguration
 */
const se_InferenceInputNameConfiguration = (input: InferenceInputNameConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ComponentTimestampDelimiter != null && {
      ComponentTimestampDelimiter: input.ComponentTimestampDelimiter,
    }),
    ...(input.TimestampFormat != null && { TimestampFormat: input.TimestampFormat }),
  };
};

/**
 * serializeAws_json1_0InferenceOutputConfiguration
 */
const se_InferenceOutputConfiguration = (input: InferenceOutputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3OutputConfiguration != null && {
      S3OutputConfiguration: se_InferenceS3OutputConfiguration(input.S3OutputConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_0InferenceS3InputConfiguration
 */
const se_InferenceS3InputConfiguration = (input: InferenceS3InputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

/**
 * serializeAws_json1_0InferenceS3OutputConfiguration
 */
const se_InferenceS3OutputConfiguration = (input: InferenceS3OutputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

/**
 * serializeAws_json1_0IngestionInputConfiguration
 */
const se_IngestionInputConfiguration = (input: IngestionInputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.S3InputConfiguration != null && {
      S3InputConfiguration: se_IngestionS3InputConfiguration(input.S3InputConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_0IngestionS3InputConfiguration
 */
const se_IngestionS3InputConfiguration = (input: IngestionS3InputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.KeyPattern != null && { KeyPattern: input.KeyPattern }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

/**
 * serializeAws_json1_0LabelsInputConfiguration
 */
const se_LabelsInputConfiguration = (input: LabelsInputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
    ...(input.S3InputConfiguration != null && {
      S3InputConfiguration: se_LabelsS3InputConfiguration(input.S3InputConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_0LabelsS3InputConfiguration
 */
const se_LabelsS3InputConfiguration = (input: LabelsS3InputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

/**
 * serializeAws_json1_0ListDataIngestionJobsRequest
 */
const se_ListDataIngestionJobsRequest = (input: ListDataIngestionJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_0ListDatasetsRequest
 */
const se_ListDatasetsRequest = (input: ListDatasetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetNameBeginsWith != null && { DatasetNameBeginsWith: input.DatasetNameBeginsWith }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListInferenceEventsRequest
 */
const se_ListInferenceEventsRequest = (input: ListInferenceEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    ...(input.IntervalEndTime != null && { IntervalEndTime: Math.round(input.IntervalEndTime.getTime() / 1000) }),
    ...(input.IntervalStartTime != null && { IntervalStartTime: Math.round(input.IntervalStartTime.getTime() / 1000) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListInferenceExecutionsRequest
 */
const se_ListInferenceExecutionsRequest = (input: ListInferenceExecutionsRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_0ListInferenceSchedulersRequest
 */
const se_ListInferenceSchedulersRequest = (input: ListInferenceSchedulersRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_0ListLabelGroupsRequest
 */
const se_ListLabelGroupsRequest = (input: ListLabelGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.LabelGroupNameBeginsWith != null && { LabelGroupNameBeginsWith: input.LabelGroupNameBeginsWith }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListLabelsRequest
 */
const se_ListLabelsRequest = (input: ListLabelsRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_0ListModelsRequest
 */
const se_ListModelsRequest = (input: ListModelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetNameBeginsWith != null && { DatasetNameBeginsWith: input.DatasetNameBeginsWith }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.ModelNameBeginsWith != null && { ModelNameBeginsWith: input.ModelNameBeginsWith }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_0ListSensorStatisticsRequest
 */
const se_ListSensorStatisticsRequest = (input: ListSensorStatisticsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.IngestionJobId != null && { IngestionJobId: input.IngestionJobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0StartDataIngestionJobRequest
 */
const se_StartDataIngestionJobRequest = (input: StartDataIngestionJobRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.IngestionInputConfiguration != null && {
      IngestionInputConfiguration: se_IngestionInputConfiguration(input.IngestionInputConfiguration, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_0StartInferenceSchedulerRequest
 */
const se_StartInferenceSchedulerRequest = (input: StartInferenceSchedulerRequest, context: __SerdeContext): any => {
  return {
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

/**
 * serializeAws_json1_0StopInferenceSchedulerRequest
 */
const se_StopInferenceSchedulerRequest = (input: StopInferenceSchedulerRequest, context: __SerdeContext): any => {
  return {
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateInferenceSchedulerRequest
 */
const se_UpdateInferenceSchedulerRequest = (input: UpdateInferenceSchedulerRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataDelayOffsetInMinutes != null && { DataDelayOffsetInMinutes: input.DataDelayOffsetInMinutes }),
    ...(input.DataInputConfiguration != null && {
      DataInputConfiguration: se_InferenceInputConfiguration(input.DataInputConfiguration, context),
    }),
    ...(input.DataOutputConfiguration != null && {
      DataOutputConfiguration: se_InferenceOutputConfiguration(input.DataOutputConfiguration, context),
    }),
    ...(input.DataUploadFrequency != null && { DataUploadFrequency: input.DataUploadFrequency }),
    ...(input.InferenceSchedulerName != null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_0UpdateLabelGroupRequest
 */
const se_UpdateLabelGroupRequest = (input: UpdateLabelGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.FaultCodes != null && { FaultCodes: se_FaultCodes(input.FaultCodes, context) }),
    ...(input.LabelGroupName != null && { LabelGroupName: input.LabelGroupName }),
  };
};

/**
 * deserializeAws_json1_0AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CategoricalValues
 */
const de_CategoricalValues = (output: any, context: __SerdeContext): CategoricalValues => {
  return {
    NumberOfCategory: __expectInt32(output.NumberOfCategory),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CountPercent
 */
const de_CountPercent = (output: any, context: __SerdeContext): CountPercent => {
  return {
    Count: __expectInt32(output.Count),
    Percentage: __limitedParseFloat32(output.Percentage),
  } as any;
};

/**
 * deserializeAws_json1_0CreateDatasetResponse
 */
const de_CreateDatasetResponse = (output: any, context: __SerdeContext): CreateDatasetResponse => {
  return {
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0CreateInferenceSchedulerResponse
 */
const de_CreateInferenceSchedulerResponse = (
  output: any,
  context: __SerdeContext
): CreateInferenceSchedulerResponse => {
  return {
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0CreateLabelGroupResponse
 */
const de_CreateLabelGroupResponse = (output: any, context: __SerdeContext): CreateLabelGroupResponse => {
  return {
    LabelGroupArn: __expectString(output.LabelGroupArn),
    LabelGroupName: __expectString(output.LabelGroupName),
  } as any;
};

/**
 * deserializeAws_json1_0CreateLabelResponse
 */
const de_CreateLabelResponse = (output: any, context: __SerdeContext): CreateLabelResponse => {
  return {
    LabelId: __expectString(output.LabelId),
  } as any;
};

/**
 * deserializeAws_json1_0CreateModelResponse
 */
const de_CreateModelResponse = (output: any, context: __SerdeContext): CreateModelResponse => {
  return {
    ModelArn: __expectString(output.ModelArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0DataIngestionJobSummaries
 */
const de_DataIngestionJobSummaries = (output: any, context: __SerdeContext): DataIngestionJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataIngestionJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DataIngestionJobSummary
 */
const de_DataIngestionJobSummary = (output: any, context: __SerdeContext): DataIngestionJobSummary => {
  return {
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    IngestionInputConfiguration:
      output.IngestionInputConfiguration != null
        ? de_IngestionInputConfiguration(output.IngestionInputConfiguration, context)
        : undefined,
    JobId: __expectString(output.JobId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0DataPreProcessingConfiguration
 */
const de_DataPreProcessingConfiguration = (output: any, context: __SerdeContext): DataPreProcessingConfiguration => {
  return {
    TargetSamplingRate: __expectString(output.TargetSamplingRate),
  } as any;
};

/**
 * deserializeAws_json1_0DataQualitySummary
 */
const de_DataQualitySummary = (output: any, context: __SerdeContext): DataQualitySummary => {
  return {
    DuplicateTimestamps:
      output.DuplicateTimestamps != null ? de_DuplicateTimestamps(output.DuplicateTimestamps, context) : undefined,
    InsufficientSensorData:
      output.InsufficientSensorData != null
        ? de_InsufficientSensorData(output.InsufficientSensorData, context)
        : undefined,
    InvalidSensorData:
      output.InvalidSensorData != null ? de_InvalidSensorData(output.InvalidSensorData, context) : undefined,
    MissingSensorData:
      output.MissingSensorData != null ? de_MissingSensorData(output.MissingSensorData, context) : undefined,
    UnsupportedTimestamps:
      output.UnsupportedTimestamps != null
        ? de_UnsupportedTimestamps(output.UnsupportedTimestamps, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DatasetSummaries
 */
const de_DatasetSummaries = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DatasetSummary
 */
const de_DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeDataIngestionJobResponse
 */
const de_DescribeDataIngestionJobResponse = (
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
      output.DataQualitySummary != null ? de_DataQualitySummary(output.DataQualitySummary, context) : undefined,
    DataStartTime:
      output.DataStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataStartTime)))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    FailedReason: __expectString(output.FailedReason),
    IngestedDataSize: __expectLong(output.IngestedDataSize),
    IngestedFilesSummary:
      output.IngestedFilesSummary != null ? de_IngestedFilesSummary(output.IngestedFilesSummary, context) : undefined,
    IngestionInputConfiguration:
      output.IngestionInputConfiguration != null
        ? de_IngestionInputConfiguration(output.IngestionInputConfiguration, context)
        : undefined,
    JobId: __expectString(output.JobId),
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
    StatusDetail: __expectString(output.StatusDetail),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeDatasetResponse
 */
const de_DescribeDatasetResponse = (output: any, context: __SerdeContext): DescribeDatasetResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DataEndTime:
      output.DataEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataEndTime)))
        : undefined,
    DataQualitySummary:
      output.DataQualitySummary != null ? de_DataQualitySummary(output.DataQualitySummary, context) : undefined,
    DataStartTime:
      output.DataStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataStartTime)))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    IngestedFilesSummary:
      output.IngestedFilesSummary != null ? de_IngestedFilesSummary(output.IngestedFilesSummary, context) : undefined,
    IngestionInputConfiguration:
      output.IngestionInputConfiguration != null
        ? de_IngestionInputConfiguration(output.IngestionInputConfiguration, context)
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

/**
 * deserializeAws_json1_0DescribeInferenceSchedulerResponse
 */
const de_DescribeInferenceSchedulerResponse = (
  output: any,
  context: __SerdeContext
): DescribeInferenceSchedulerResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DataDelayOffsetInMinutes: __expectLong(output.DataDelayOffsetInMinutes),
    DataInputConfiguration:
      output.DataInputConfiguration != null
        ? de_InferenceInputConfiguration(output.DataInputConfiguration, context)
        : undefined,
    DataOutputConfiguration:
      output.DataOutputConfiguration != null
        ? de_InferenceOutputConfiguration(output.DataOutputConfiguration, context)
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

/**
 * deserializeAws_json1_0DescribeLabelGroupResponse
 */
const de_DescribeLabelGroupResponse = (output: any, context: __SerdeContext): DescribeLabelGroupResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    FaultCodes: output.FaultCodes != null ? de_FaultCodes(output.FaultCodes, context) : undefined,
    LabelGroupArn: __expectString(output.LabelGroupArn),
    LabelGroupName: __expectString(output.LabelGroupName),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeLabelResponse
 */
const de_DescribeLabelResponse = (output: any, context: __SerdeContext): DescribeLabelResponse => {
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

/**
 * deserializeAws_json1_0DescribeModelResponse
 */
const de_DescribeModelResponse = (output: any, context: __SerdeContext): DescribeModelResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DataPreProcessingConfiguration:
      output.DataPreProcessingConfiguration != null
        ? de_DataPreProcessingConfiguration(output.DataPreProcessingConfiguration, context)
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
        ? de_LabelsInputConfiguration(output.LabelsInputConfiguration, context)
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

/**
 * deserializeAws_json1_0DuplicateTimestamps
 */
const de_DuplicateTimestamps = (output: any, context: __SerdeContext): DuplicateTimestamps => {
  return {
    TotalNumberOfDuplicateTimestamps: __expectInt32(output.TotalNumberOfDuplicateTimestamps),
  } as any;
};

/**
 * deserializeAws_json1_0FaultCodes
 */
const de_FaultCodes = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0InferenceEventSummaries
 */
const de_InferenceEventSummaries = (output: any, context: __SerdeContext): InferenceEventSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InferenceEventSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InferenceEventSummary
 */
const de_InferenceEventSummary = (output: any, context: __SerdeContext): InferenceEventSummary => {
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

/**
 * deserializeAws_json1_0InferenceExecutionSummaries
 */
const de_InferenceExecutionSummaries = (output: any, context: __SerdeContext): InferenceExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InferenceExecutionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InferenceExecutionSummary
 */
const de_InferenceExecutionSummary = (output: any, context: __SerdeContext): InferenceExecutionSummary => {
  return {
    CustomerResultObject:
      output.CustomerResultObject != null ? de_S3Object(output.CustomerResultObject, context) : undefined,
    DataEndTime:
      output.DataEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DataEndTime)))
        : undefined,
    DataInputConfiguration:
      output.DataInputConfiguration != null
        ? de_InferenceInputConfiguration(output.DataInputConfiguration, context)
        : undefined,
    DataOutputConfiguration:
      output.DataOutputConfiguration != null
        ? de_InferenceOutputConfiguration(output.DataOutputConfiguration, context)
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

/**
 * deserializeAws_json1_0InferenceInputConfiguration
 */
const de_InferenceInputConfiguration = (output: any, context: __SerdeContext): InferenceInputConfiguration => {
  return {
    InferenceInputNameConfiguration:
      output.InferenceInputNameConfiguration != null
        ? de_InferenceInputNameConfiguration(output.InferenceInputNameConfiguration, context)
        : undefined,
    InputTimeZoneOffset: __expectString(output.InputTimeZoneOffset),
    S3InputConfiguration:
      output.S3InputConfiguration != null
        ? de_InferenceS3InputConfiguration(output.S3InputConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InferenceInputNameConfiguration
 */
const de_InferenceInputNameConfiguration = (output: any, context: __SerdeContext): InferenceInputNameConfiguration => {
  return {
    ComponentTimestampDelimiter: __expectString(output.ComponentTimestampDelimiter),
    TimestampFormat: __expectString(output.TimestampFormat),
  } as any;
};

/**
 * deserializeAws_json1_0InferenceOutputConfiguration
 */
const de_InferenceOutputConfiguration = (output: any, context: __SerdeContext): InferenceOutputConfiguration => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3OutputConfiguration:
      output.S3OutputConfiguration != null
        ? de_InferenceS3OutputConfiguration(output.S3OutputConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InferenceS3InputConfiguration
 */
const de_InferenceS3InputConfiguration = (output: any, context: __SerdeContext): InferenceS3InputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    Prefix: __expectString(output.Prefix),
  } as any;
};

/**
 * deserializeAws_json1_0InferenceS3OutputConfiguration
 */
const de_InferenceS3OutputConfiguration = (output: any, context: __SerdeContext): InferenceS3OutputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    Prefix: __expectString(output.Prefix),
  } as any;
};

/**
 * deserializeAws_json1_0InferenceSchedulerSummaries
 */
const de_InferenceSchedulerSummaries = (output: any, context: __SerdeContext): InferenceSchedulerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InferenceSchedulerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InferenceSchedulerSummary
 */
const de_InferenceSchedulerSummary = (output: any, context: __SerdeContext): InferenceSchedulerSummary => {
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

/**
 * deserializeAws_json1_0IngestedFilesSummary
 */
const de_IngestedFilesSummary = (output: any, context: __SerdeContext): IngestedFilesSummary => {
  return {
    DiscardedFiles: output.DiscardedFiles != null ? de_ListOfDiscardedFiles(output.DiscardedFiles, context) : undefined,
    IngestedNumberOfFiles: __expectInt32(output.IngestedNumberOfFiles),
    TotalNumberOfFiles: __expectInt32(output.TotalNumberOfFiles),
  } as any;
};

/**
 * deserializeAws_json1_0IngestionInputConfiguration
 */
const de_IngestionInputConfiguration = (output: any, context: __SerdeContext): IngestionInputConfiguration => {
  return {
    S3InputConfiguration:
      output.S3InputConfiguration != null
        ? de_IngestionS3InputConfiguration(output.S3InputConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0IngestionS3InputConfiguration
 */
const de_IngestionS3InputConfiguration = (output: any, context: __SerdeContext): IngestionS3InputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    KeyPattern: __expectString(output.KeyPattern),
    Prefix: __expectString(output.Prefix),
  } as any;
};

/**
 * deserializeAws_json1_0InsufficientSensorData
 */
const de_InsufficientSensorData = (output: any, context: __SerdeContext): InsufficientSensorData => {
  return {
    MissingCompleteSensorData:
      output.MissingCompleteSensorData != null
        ? de_MissingCompleteSensorData(output.MissingCompleteSensorData, context)
        : undefined,
    SensorsWithShortDateRange:
      output.SensorsWithShortDateRange != null
        ? de_SensorsWithShortDateRange(output.SensorsWithShortDateRange, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidSensorData
 */
const de_InvalidSensorData = (output: any, context: __SerdeContext): InvalidSensorData => {
  return {
    AffectedSensorCount: __expectInt32(output.AffectedSensorCount),
    TotalNumberOfInvalidValues: __expectInt32(output.TotalNumberOfInvalidValues),
  } as any;
};

/**
 * deserializeAws_json1_0LabelGroupSummaries
 */
const de_LabelGroupSummaries = (output: any, context: __SerdeContext): LabelGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LabelGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LabelGroupSummary
 */
const de_LabelGroupSummary = (output: any, context: __SerdeContext): LabelGroupSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    LabelGroupArn: __expectString(output.LabelGroupArn),
    LabelGroupName: __expectString(output.LabelGroupName),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0LabelsInputConfiguration
 */
const de_LabelsInputConfiguration = (output: any, context: __SerdeContext): LabelsInputConfiguration => {
  return {
    LabelGroupName: __expectString(output.LabelGroupName),
    S3InputConfiguration:
      output.S3InputConfiguration != null
        ? de_LabelsS3InputConfiguration(output.S3InputConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0LabelsS3InputConfiguration
 */
const de_LabelsS3InputConfiguration = (output: any, context: __SerdeContext): LabelsS3InputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    Prefix: __expectString(output.Prefix),
  } as any;
};

/**
 * deserializeAws_json1_0LabelSummaries
 */
const de_LabelSummaries = (output: any, context: __SerdeContext): LabelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LabelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LabelSummary
 */
const de_LabelSummary = (output: any, context: __SerdeContext): LabelSummary => {
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

/**
 * deserializeAws_json1_0LargeTimestampGaps
 */
const de_LargeTimestampGaps = (output: any, context: __SerdeContext): LargeTimestampGaps => {
  return {
    MaxTimestampGapInDays: __expectInt32(output.MaxTimestampGapInDays),
    NumberOfLargeTimestampGaps: __expectInt32(output.NumberOfLargeTimestampGaps),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0ListDataIngestionJobsResponse
 */
const de_ListDataIngestionJobsResponse = (output: any, context: __SerdeContext): ListDataIngestionJobsResponse => {
  return {
    DataIngestionJobSummaries:
      output.DataIngestionJobSummaries != null
        ? de_DataIngestionJobSummaries(output.DataIngestionJobSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListDatasetsResponse
 */
const de_ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return {
    DatasetSummaries:
      output.DatasetSummaries != null ? de_DatasetSummaries(output.DatasetSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListInferenceEventsResponse
 */
const de_ListInferenceEventsResponse = (output: any, context: __SerdeContext): ListInferenceEventsResponse => {
  return {
    InferenceEventSummaries:
      output.InferenceEventSummaries != null
        ? de_InferenceEventSummaries(output.InferenceEventSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListInferenceExecutionsResponse
 */
const de_ListInferenceExecutionsResponse = (output: any, context: __SerdeContext): ListInferenceExecutionsResponse => {
  return {
    InferenceExecutionSummaries:
      output.InferenceExecutionSummaries != null
        ? de_InferenceExecutionSummaries(output.InferenceExecutionSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListInferenceSchedulersResponse
 */
const de_ListInferenceSchedulersResponse = (output: any, context: __SerdeContext): ListInferenceSchedulersResponse => {
  return {
    InferenceSchedulerSummaries:
      output.InferenceSchedulerSummaries != null
        ? de_InferenceSchedulerSummaries(output.InferenceSchedulerSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListLabelGroupsResponse
 */
const de_ListLabelGroupsResponse = (output: any, context: __SerdeContext): ListLabelGroupsResponse => {
  return {
    LabelGroupSummaries:
      output.LabelGroupSummaries != null ? de_LabelGroupSummaries(output.LabelGroupSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListLabelsResponse
 */
const de_ListLabelsResponse = (output: any, context: __SerdeContext): ListLabelsResponse => {
  return {
    LabelSummaries: output.LabelSummaries != null ? de_LabelSummaries(output.LabelSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListModelsResponse
 */
const de_ListModelsResponse = (output: any, context: __SerdeContext): ListModelsResponse => {
  return {
    ModelSummaries: output.ModelSummaries != null ? de_ModelSummaries(output.ModelSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListOfDiscardedFiles
 */
const de_ListOfDiscardedFiles = (output: any, context: __SerdeContext): S3Object[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_S3Object(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ListSensorStatisticsResponse
 */
const de_ListSensorStatisticsResponse = (output: any, context: __SerdeContext): ListSensorStatisticsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SensorStatisticsSummaries:
      output.SensorStatisticsSummaries != null
        ? de_SensorStatisticsSummaries(output.SensorStatisticsSummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0MissingCompleteSensorData
 */
const de_MissingCompleteSensorData = (output: any, context: __SerdeContext): MissingCompleteSensorData => {
  return {
    AffectedSensorCount: __expectInt32(output.AffectedSensorCount),
  } as any;
};

/**
 * deserializeAws_json1_0MissingSensorData
 */
const de_MissingSensorData = (output: any, context: __SerdeContext): MissingSensorData => {
  return {
    AffectedSensorCount: __expectInt32(output.AffectedSensorCount),
    TotalNumberOfMissingValues: __expectInt32(output.TotalNumberOfMissingValues),
  } as any;
};

/**
 * deserializeAws_json1_0ModelSummaries
 */
const de_ModelSummaries = (output: any, context: __SerdeContext): ModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ModelSummary
 */
const de_ModelSummary = (output: any, context: __SerdeContext): ModelSummary => {
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

/**
 * deserializeAws_json1_0MonotonicValues
 */
const de_MonotonicValues = (output: any, context: __SerdeContext): MonotonicValues => {
  return {
    Monotonicity: __expectString(output.Monotonicity),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0MultipleOperatingModes
 */
const de_MultipleOperatingModes = (output: any, context: __SerdeContext): MultipleOperatingModes => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0S3Object
 */
const de_S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

/**
 * deserializeAws_json1_0SensorStatisticsSummaries
 */
const de_SensorStatisticsSummaries = (output: any, context: __SerdeContext): SensorStatisticsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SensorStatisticsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SensorStatisticsSummary
 */
const de_SensorStatisticsSummary = (output: any, context: __SerdeContext): SensorStatisticsSummary => {
  return {
    CategoricalValues:
      output.CategoricalValues != null ? de_CategoricalValues(output.CategoricalValues, context) : undefined,
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
      output.DuplicateTimestamps != null ? de_CountPercent(output.DuplicateTimestamps, context) : undefined,
    InvalidDateEntries:
      output.InvalidDateEntries != null ? de_CountPercent(output.InvalidDateEntries, context) : undefined,
    InvalidValues: output.InvalidValues != null ? de_CountPercent(output.InvalidValues, context) : undefined,
    LargeTimestampGaps:
      output.LargeTimestampGaps != null ? de_LargeTimestampGaps(output.LargeTimestampGaps, context) : undefined,
    MissingValues: output.MissingValues != null ? de_CountPercent(output.MissingValues, context) : undefined,
    MonotonicValues: output.MonotonicValues != null ? de_MonotonicValues(output.MonotonicValues, context) : undefined,
    MultipleOperatingModes:
      output.MultipleOperatingModes != null
        ? de_MultipleOperatingModes(output.MultipleOperatingModes, context)
        : undefined,
    SensorName: __expectString(output.SensorName),
  } as any;
};

/**
 * deserializeAws_json1_0SensorsWithShortDateRange
 */
const de_SensorsWithShortDateRange = (output: any, context: __SerdeContext): SensorsWithShortDateRange => {
  return {
    AffectedSensorCount: __expectInt32(output.AffectedSensorCount),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0StartDataIngestionJobResponse
 */
const de_StartDataIngestionJobResponse = (output: any, context: __SerdeContext): StartDataIngestionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0StartInferenceSchedulerResponse
 */
const de_StartInferenceSchedulerResponse = (output: any, context: __SerdeContext): StartInferenceSchedulerResponse => {
  return {
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0StopInferenceSchedulerResponse
 */
const de_StopInferenceSchedulerResponse = (output: any, context: __SerdeContext): StopInferenceSchedulerResponse => {
  return {
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
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
 * deserializeAws_json1_0TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0UnsupportedTimestamps
 */
const de_UnsupportedTimestamps = (output: any, context: __SerdeContext): UnsupportedTimestamps => {
  return {
    TotalNumberOfUnsupportedTimestamps: __expectInt32(output.TotalNumberOfUnsupportedTimestamps),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `AWSLookoutEquipmentFrontendService.${operation}`,
  };
}

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
