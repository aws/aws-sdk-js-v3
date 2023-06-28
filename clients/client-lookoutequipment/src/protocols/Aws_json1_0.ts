// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  ConflictException,
  CountPercent,
  CreateDatasetRequest,
  CreateInferenceSchedulerRequest,
  CreateLabelGroupRequest,
  CreateLabelRequest,
  CreateModelRequest,
  DataPreProcessingConfiguration,
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
  InferenceEventSummary,
  InferenceExecutionSummary,
  InferenceInputConfiguration,
  InferenceInputNameConfiguration,
  InferenceOutputConfiguration,
  InferenceS3InputConfiguration,
  InferenceS3OutputConfiguration,
  IngestionInputConfiguration,
  IngestionS3InputConfiguration,
  InternalServerException,
  LabelGroupSummary,
  LabelsInputConfiguration,
  LabelsS3InputConfiguration,
  LabelSummary,
  ListDataIngestionJobsRequest,
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListInferenceEventsRequest,
  ListInferenceEventsResponse,
  ListInferenceExecutionsRequest,
  ListInferenceExecutionsResponse,
  ListInferenceSchedulersRequest,
  ListLabelGroupsRequest,
  ListLabelGroupsResponse,
  ListLabelsRequest,
  ListLabelsResponse,
  ListModelsRequest,
  ListModelsResponse,
  ListSensorStatisticsRequest,
  ListSensorStatisticsResponse,
  ListTagsForResourceRequest,
  ModelSummary,
  ResourceNotFoundException,
  SensorStatisticsSummary,
  ServiceQuotaExceededException,
  StartDataIngestionJobRequest,
  StartInferenceSchedulerRequest,
  StopInferenceSchedulerRequest,
  Tag,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLabelGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDataIngestionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListInferenceSchedulersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartDataIngestionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DatasetName: [],
    DatasetSchema: (_) => se_DatasetSchema(_, context),
    ServerSideKmsKeyId: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateInferenceSchedulerRequest
 */
const se_CreateInferenceSchedulerRequest = (input: CreateInferenceSchedulerRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataDelayOffsetInMinutes: [],
    DataInputConfiguration: _json,
    DataOutputConfiguration: _json,
    DataUploadFrequency: [],
    InferenceSchedulerName: [],
    ModelName: [],
    RoleArn: [],
    ServerSideKmsKeyId: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateLabelGroupRequest
 */
const se_CreateLabelGroupRequest = (input: CreateLabelGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FaultCodes: _json,
    LabelGroupName: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateLabelRequest
 */
const se_CreateLabelRequest = (input: CreateLabelRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    EndTime: (_) => Math.round(_.getTime() / 1000),
    Equipment: [],
    FaultCode: [],
    LabelGroupName: [],
    Notes: [],
    Rating: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_0CreateModelRequest
 */
const se_CreateModelRequest = (input: CreateModelRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataPreProcessingConfiguration: _json,
    DatasetName: [],
    DatasetSchema: (_) => se_DatasetSchema(_, context),
    EvaluationDataEndTime: (_) => Math.round(_.getTime() / 1000),
    EvaluationDataStartTime: (_) => Math.round(_.getTime() / 1000),
    LabelsInputConfiguration: _json,
    ModelName: [],
    OffCondition: [],
    RoleArn: [],
    ServerSideKmsKeyId: [],
    Tags: _json,
    TrainingDataEndTime: (_) => Math.round(_.getTime() / 1000),
    TrainingDataStartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_DataPreProcessingConfiguration omitted.

/**
 * serializeAws_json1_0DatasetSchema
 */
const se_DatasetSchema = (input: DatasetSchema, context: __SerdeContext): any => {
  return take(input, {
    InlineDataSchema: __LazyJsonString.fromObject,
  });
};

// se_DeleteDatasetRequest omitted.

// se_DeleteInferenceSchedulerRequest omitted.

// se_DeleteLabelGroupRequest omitted.

// se_DeleteLabelRequest omitted.

// se_DeleteModelRequest omitted.

// se_DescribeDataIngestionJobRequest omitted.

// se_DescribeDatasetRequest omitted.

// se_DescribeInferenceSchedulerRequest omitted.

// se_DescribeLabelGroupRequest omitted.

// se_DescribeLabelRequest omitted.

// se_DescribeModelRequest omitted.

// se_FaultCodes omitted.

// se_InferenceInputConfiguration omitted.

// se_InferenceInputNameConfiguration omitted.

// se_InferenceOutputConfiguration omitted.

// se_InferenceS3InputConfiguration omitted.

// se_InferenceS3OutputConfiguration omitted.

// se_IngestionInputConfiguration omitted.

// se_IngestionS3InputConfiguration omitted.

// se_LabelsInputConfiguration omitted.

// se_LabelsS3InputConfiguration omitted.

// se_ListDataIngestionJobsRequest omitted.

// se_ListDatasetsRequest omitted.

/**
 * serializeAws_json1_0ListInferenceEventsRequest
 */
const se_ListInferenceEventsRequest = (input: ListInferenceEventsRequest, context: __SerdeContext): any => {
  return take(input, {
    InferenceSchedulerName: [],
    IntervalEndTime: (_) => Math.round(_.getTime() / 1000),
    IntervalStartTime: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_0ListInferenceExecutionsRequest
 */
const se_ListInferenceExecutionsRequest = (input: ListInferenceExecutionsRequest, context: __SerdeContext): any => {
  return take(input, {
    DataEndTimeBefore: (_) => Math.round(_.getTime() / 1000),
    DataStartTimeAfter: (_) => Math.round(_.getTime() / 1000),
    InferenceSchedulerName: [],
    MaxResults: [],
    NextToken: [],
    Status: [],
  });
};

// se_ListInferenceSchedulersRequest omitted.

// se_ListLabelGroupsRequest omitted.

/**
 * serializeAws_json1_0ListLabelsRequest
 */
const se_ListLabelsRequest = (input: ListLabelsRequest, context: __SerdeContext): any => {
  return take(input, {
    Equipment: [],
    FaultCode: [],
    IntervalEndTime: (_) => Math.round(_.getTime() / 1000),
    IntervalStartTime: (_) => Math.round(_.getTime() / 1000),
    LabelGroupName: [],
    MaxResults: [],
    NextToken: [],
  });
};

// se_ListModelsRequest omitted.

// se_ListSensorStatisticsRequest omitted.

// se_ListTagsForResourceRequest omitted.

/**
 * serializeAws_json1_0StartDataIngestionJobRequest
 */
const se_StartDataIngestionJobRequest = (input: StartDataIngestionJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DatasetName: [],
    IngestionInputConfiguration: _json,
    RoleArn: [],
  });
};

// se_StartInferenceSchedulerRequest omitted.

// se_StopInferenceSchedulerRequest omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateInferenceSchedulerRequest omitted.

// se_UpdateLabelGroupRequest omitted.

// de_AccessDeniedException omitted.

// de_CategoricalValues omitted.

// de_ConflictException omitted.

/**
 * deserializeAws_json1_0CountPercent
 */
const de_CountPercent = (output: any, context: __SerdeContext): CountPercent => {
  return take(output, {
    Count: __expectInt32,
    Percentage: __limitedParseFloat32,
  }) as any;
};

// de_CreateDatasetResponse omitted.

// de_CreateInferenceSchedulerResponse omitted.

// de_CreateLabelGroupResponse omitted.

// de_CreateLabelResponse omitted.

// de_CreateModelResponse omitted.

// de_DataIngestionJobSummaries omitted.

// de_DataIngestionJobSummary omitted.

// de_DataPreProcessingConfiguration omitted.

// de_DataQualitySummary omitted.

/**
 * deserializeAws_json1_0DatasetSummaries
 */
const de_DatasetSummaries = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DatasetSummary
 */
const de_DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetArn: __expectString,
    DatasetName: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeDataIngestionJobResponse
 */
const de_DescribeDataIngestionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataIngestionJobResponse => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataQualitySummary: _json,
    DataStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetArn: __expectString,
    FailedReason: __expectString,
    IngestedDataSize: __expectLong,
    IngestedFilesSummary: _json,
    IngestionInputConfiguration: _json,
    JobId: __expectString,
    RoleArn: __expectString,
    Status: __expectString,
    StatusDetail: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeDatasetResponse
 */
const de_DescribeDatasetResponse = (output: any, context: __SerdeContext): DescribeDatasetResponse => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataQualitySummary: _json,
    DataStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetArn: __expectString,
    DatasetName: __expectString,
    IngestedFilesSummary: _json,
    IngestionInputConfiguration: _json,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RoleArn: __expectString,
    Schema: (_: any) => new __LazyJsonString(_),
    ServerSideKmsKeyId: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeInferenceSchedulerResponse
 */
const de_DescribeInferenceSchedulerResponse = (
  output: any,
  context: __SerdeContext
): DescribeInferenceSchedulerResponse => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataDelayOffsetInMinutes: __expectLong,
    DataInputConfiguration: _json,
    DataOutputConfiguration: _json,
    DataUploadFrequency: __expectString,
    InferenceSchedulerArn: __expectString,
    InferenceSchedulerName: __expectString,
    LatestInferenceResult: __expectString,
    ModelArn: __expectString,
    ModelName: __expectString,
    RoleArn: __expectString,
    ServerSideKmsKeyId: __expectString,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeLabelGroupResponse
 */
const de_DescribeLabelGroupResponse = (output: any, context: __SerdeContext): DescribeLabelGroupResponse => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FaultCodes: _json,
    LabelGroupArn: __expectString,
    LabelGroupName: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeLabelResponse
 */
const de_DescribeLabelResponse = (output: any, context: __SerdeContext): DescribeLabelResponse => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Equipment: __expectString,
    FaultCode: __expectString,
    LabelGroupArn: __expectString,
    LabelGroupName: __expectString,
    LabelId: __expectString,
    Notes: __expectString,
    Rating: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeModelResponse
 */
const de_DescribeModelResponse = (output: any, context: __SerdeContext): DescribeModelResponse => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataPreProcessingConfiguration: _json,
    DatasetArn: __expectString,
    DatasetName: __expectString,
    EvaluationDataEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluationDataStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailedReason: __expectString,
    LabelsInputConfiguration: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelArn: __expectString,
    ModelMetrics: (_: any) => new __LazyJsonString(_),
    ModelName: __expectString,
    OffCondition: __expectString,
    RoleArn: __expectString,
    Schema: (_: any) => new __LazyJsonString(_),
    ServerSideKmsKeyId: __expectString,
    Status: __expectString,
    TrainingDataEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingDataStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingExecutionEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingExecutionStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DuplicateTimestamps omitted.

// de_FaultCodes omitted.

/**
 * deserializeAws_json1_0InferenceEventSummaries
 */
const de_InferenceEventSummaries = (output: any, context: __SerdeContext): InferenceEventSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceEventSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InferenceEventSummary
 */
const de_InferenceEventSummary = (output: any, context: __SerdeContext): InferenceEventSummary => {
  return take(output, {
    Diagnostics: __expectString,
    EventDurationInSeconds: __expectLong,
    EventEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InferenceSchedulerArn: __expectString,
    InferenceSchedulerName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0InferenceExecutionSummaries
 */
const de_InferenceExecutionSummaries = (output: any, context: __SerdeContext): InferenceExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceExecutionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InferenceExecutionSummary
 */
const de_InferenceExecutionSummary = (output: any, context: __SerdeContext): InferenceExecutionSummary => {
  return take(output, {
    CustomerResultObject: _json,
    DataEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataInputConfiguration: _json,
    DataOutputConfiguration: _json,
    DataStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailedReason: __expectString,
    InferenceSchedulerArn: __expectString,
    InferenceSchedulerName: __expectString,
    ModelArn: __expectString,
    ModelName: __expectString,
    ScheduledStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

// de_InferenceInputConfiguration omitted.

// de_InferenceInputNameConfiguration omitted.

// de_InferenceOutputConfiguration omitted.

// de_InferenceS3InputConfiguration omitted.

// de_InferenceS3OutputConfiguration omitted.

// de_InferenceSchedulerSummaries omitted.

// de_InferenceSchedulerSummary omitted.

// de_IngestedFilesSummary omitted.

// de_IngestionInputConfiguration omitted.

// de_IngestionS3InputConfiguration omitted.

// de_InsufficientSensorData omitted.

// de_InternalServerException omitted.

// de_InvalidSensorData omitted.

/**
 * deserializeAws_json1_0LabelGroupSummaries
 */
const de_LabelGroupSummaries = (output: any, context: __SerdeContext): LabelGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LabelGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LabelGroupSummary
 */
const de_LabelGroupSummary = (output: any, context: __SerdeContext): LabelGroupSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LabelGroupArn: __expectString,
    LabelGroupName: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_LabelsInputConfiguration omitted.

// de_LabelsS3InputConfiguration omitted.

/**
 * deserializeAws_json1_0LabelSummaries
 */
const de_LabelSummaries = (output: any, context: __SerdeContext): LabelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LabelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LabelSummary
 */
const de_LabelSummary = (output: any, context: __SerdeContext): LabelSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Equipment: __expectString,
    FaultCode: __expectString,
    LabelGroupArn: __expectString,
    LabelGroupName: __expectString,
    LabelId: __expectString,
    Rating: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_LargeTimestampGaps omitted.

// de_ListDataIngestionJobsResponse omitted.

/**
 * deserializeAws_json1_0ListDatasetsResponse
 */
const de_ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return take(output, {
    DatasetSummaries: (_: any) => de_DatasetSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListInferenceEventsResponse
 */
const de_ListInferenceEventsResponse = (output: any, context: __SerdeContext): ListInferenceEventsResponse => {
  return take(output, {
    InferenceEventSummaries: (_: any) => de_InferenceEventSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListInferenceExecutionsResponse
 */
const de_ListInferenceExecutionsResponse = (output: any, context: __SerdeContext): ListInferenceExecutionsResponse => {
  return take(output, {
    InferenceExecutionSummaries: (_: any) => de_InferenceExecutionSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListInferenceSchedulersResponse omitted.

/**
 * deserializeAws_json1_0ListLabelGroupsResponse
 */
const de_ListLabelGroupsResponse = (output: any, context: __SerdeContext): ListLabelGroupsResponse => {
  return take(output, {
    LabelGroupSummaries: (_: any) => de_LabelGroupSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListLabelsResponse
 */
const de_ListLabelsResponse = (output: any, context: __SerdeContext): ListLabelsResponse => {
  return take(output, {
    LabelSummaries: (_: any) => de_LabelSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListModelsResponse
 */
const de_ListModelsResponse = (output: any, context: __SerdeContext): ListModelsResponse => {
  return take(output, {
    ModelSummaries: (_: any) => de_ModelSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListOfDiscardedFiles omitted.

/**
 * deserializeAws_json1_0ListSensorStatisticsResponse
 */
const de_ListSensorStatisticsResponse = (output: any, context: __SerdeContext): ListSensorStatisticsResponse => {
  return take(output, {
    NextToken: __expectString,
    SensorStatisticsSummaries: (_: any) => de_SensorStatisticsSummaries(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_MissingCompleteSensorData omitted.

// de_MissingSensorData omitted.

/**
 * deserializeAws_json1_0ModelSummaries
 */
const de_ModelSummaries = (output: any, context: __SerdeContext): ModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ModelSummary
 */
const de_ModelSummary = (output: any, context: __SerdeContext): ModelSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetArn: __expectString,
    DatasetName: __expectString,
    ModelArn: __expectString,
    ModelName: __expectString,
    Status: __expectString,
  }) as any;
};

// de_MonotonicValues omitted.

// de_MultipleOperatingModes omitted.

// de_ResourceNotFoundException omitted.

// de_S3Object omitted.

/**
 * deserializeAws_json1_0SensorStatisticsSummaries
 */
const de_SensorStatisticsSummaries = (output: any, context: __SerdeContext): SensorStatisticsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SensorStatisticsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SensorStatisticsSummary
 */
const de_SensorStatisticsSummary = (output: any, context: __SerdeContext): SensorStatisticsSummary => {
  return take(output, {
    CategoricalValues: _json,
    ComponentName: __expectString,
    DataEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataExists: __expectBoolean,
    DataStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DuplicateTimestamps: (_: any) => de_CountPercent(_, context),
    InvalidDateEntries: (_: any) => de_CountPercent(_, context),
    InvalidValues: (_: any) => de_CountPercent(_, context),
    LargeTimestampGaps: _json,
    MissingValues: (_: any) => de_CountPercent(_, context),
    MonotonicValues: _json,
    MultipleOperatingModes: _json,
    SensorName: __expectString,
  }) as any;
};

// de_SensorsWithShortDateRange omitted.

// de_ServiceQuotaExceededException omitted.

// de_StartDataIngestionJobResponse omitted.

// de_StartInferenceSchedulerResponse omitted.

// de_StopInferenceSchedulerResponse omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_UnsupportedTimestamps omitted.

// de_UntagResourceResponse omitted.

// de_ValidationException omitted.

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

const throwDefaultError = withBaseException(__BaseException);
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
