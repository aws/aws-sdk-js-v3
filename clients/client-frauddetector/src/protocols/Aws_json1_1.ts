// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  BatchCreateVariableCommandInput,
  BatchCreateVariableCommandOutput,
} from "../commands/BatchCreateVariableCommand";
import { BatchGetVariableCommandInput, BatchGetVariableCommandOutput } from "../commands/BatchGetVariableCommand";
import {
  CancelBatchImportJobCommandInput,
  CancelBatchImportJobCommandOutput,
} from "../commands/CancelBatchImportJobCommand";
import {
  CancelBatchPredictionJobCommandInput,
  CancelBatchPredictionJobCommandOutput,
} from "../commands/CancelBatchPredictionJobCommand";
import {
  CreateBatchImportJobCommandInput,
  CreateBatchImportJobCommandOutput,
} from "../commands/CreateBatchImportJobCommand";
import {
  CreateBatchPredictionJobCommandInput,
  CreateBatchPredictionJobCommandOutput,
} from "../commands/CreateBatchPredictionJobCommand";
import {
  CreateDetectorVersionCommandInput,
  CreateDetectorVersionCommandOutput,
} from "../commands/CreateDetectorVersionCommand";
import { CreateListCommandInput, CreateListCommandOutput } from "../commands/CreateListCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "../commands/CreateModelCommand";
import { CreateModelVersionCommandInput, CreateModelVersionCommandOutput } from "../commands/CreateModelVersionCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "../commands/CreateRuleCommand";
import { CreateVariableCommandInput, CreateVariableCommandOutput } from "../commands/CreateVariableCommand";
import {
  DeleteBatchImportJobCommandInput,
  DeleteBatchImportJobCommandOutput,
} from "../commands/DeleteBatchImportJobCommand";
import {
  DeleteBatchPredictionJobCommandInput,
  DeleteBatchPredictionJobCommandOutput,
} from "../commands/DeleteBatchPredictionJobCommand";
import { DeleteDetectorCommandInput, DeleteDetectorCommandOutput } from "../commands/DeleteDetectorCommand";
import {
  DeleteDetectorVersionCommandInput,
  DeleteDetectorVersionCommandOutput,
} from "../commands/DeleteDetectorVersionCommand";
import { DeleteEntityTypeCommandInput, DeleteEntityTypeCommandOutput } from "../commands/DeleteEntityTypeCommand";
import { DeleteEventCommandInput, DeleteEventCommandOutput } from "../commands/DeleteEventCommand";
import {
  DeleteEventsByEventTypeCommandInput,
  DeleteEventsByEventTypeCommandOutput,
} from "../commands/DeleteEventsByEventTypeCommand";
import { DeleteEventTypeCommandInput, DeleteEventTypeCommandOutput } from "../commands/DeleteEventTypeCommand";
import {
  DeleteExternalModelCommandInput,
  DeleteExternalModelCommandOutput,
} from "../commands/DeleteExternalModelCommand";
import { DeleteLabelCommandInput, DeleteLabelCommandOutput } from "../commands/DeleteLabelCommand";
import { DeleteListCommandInput, DeleteListCommandOutput } from "../commands/DeleteListCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "../commands/DeleteModelCommand";
import { DeleteModelVersionCommandInput, DeleteModelVersionCommandOutput } from "../commands/DeleteModelVersionCommand";
import { DeleteOutcomeCommandInput, DeleteOutcomeCommandOutput } from "../commands/DeleteOutcomeCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import { DeleteVariableCommandInput, DeleteVariableCommandOutput } from "../commands/DeleteVariableCommand";
import { DescribeDetectorCommandInput, DescribeDetectorCommandOutput } from "../commands/DescribeDetectorCommand";
import {
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput,
} from "../commands/DescribeModelVersionsCommand";
import { GetBatchImportJobsCommandInput, GetBatchImportJobsCommandOutput } from "../commands/GetBatchImportJobsCommand";
import {
  GetBatchPredictionJobsCommandInput,
  GetBatchPredictionJobsCommandOutput,
} from "../commands/GetBatchPredictionJobsCommand";
import {
  GetDeleteEventsByEventTypeStatusCommandInput,
  GetDeleteEventsByEventTypeStatusCommandOutput,
} from "../commands/GetDeleteEventsByEventTypeStatusCommand";
import { GetDetectorsCommandInput, GetDetectorsCommandOutput } from "../commands/GetDetectorsCommand";
import { GetDetectorVersionCommandInput, GetDetectorVersionCommandOutput } from "../commands/GetDetectorVersionCommand";
import { GetEntityTypesCommandInput, GetEntityTypesCommandOutput } from "../commands/GetEntityTypesCommand";
import { GetEventCommandInput, GetEventCommandOutput } from "../commands/GetEventCommand";
import { GetEventPredictionCommandInput, GetEventPredictionCommandOutput } from "../commands/GetEventPredictionCommand";
import {
  GetEventPredictionMetadataCommandInput,
  GetEventPredictionMetadataCommandOutput,
} from "../commands/GetEventPredictionMetadataCommand";
import { GetEventTypesCommandInput, GetEventTypesCommandOutput } from "../commands/GetEventTypesCommand";
import { GetExternalModelsCommandInput, GetExternalModelsCommandOutput } from "../commands/GetExternalModelsCommand";
import {
  GetKMSEncryptionKeyCommandInput,
  GetKMSEncryptionKeyCommandOutput,
} from "../commands/GetKMSEncryptionKeyCommand";
import { GetLabelsCommandInput, GetLabelsCommandOutput } from "../commands/GetLabelsCommand";
import { GetListElementsCommandInput, GetListElementsCommandOutput } from "../commands/GetListElementsCommand";
import { GetListsMetadataCommandInput, GetListsMetadataCommandOutput } from "../commands/GetListsMetadataCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "../commands/GetModelsCommand";
import { GetModelVersionCommandInput, GetModelVersionCommandOutput } from "../commands/GetModelVersionCommand";
import { GetOutcomesCommandInput, GetOutcomesCommandOutput } from "../commands/GetOutcomesCommand";
import { GetRulesCommandInput, GetRulesCommandOutput } from "../commands/GetRulesCommand";
import { GetVariablesCommandInput, GetVariablesCommandOutput } from "../commands/GetVariablesCommand";
import {
  ListEventPredictionsCommandInput,
  ListEventPredictionsCommandOutput,
} from "../commands/ListEventPredictionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutDetectorCommandInput, PutDetectorCommandOutput } from "../commands/PutDetectorCommand";
import { PutEntityTypeCommandInput, PutEntityTypeCommandOutput } from "../commands/PutEntityTypeCommand";
import { PutEventTypeCommandInput, PutEventTypeCommandOutput } from "../commands/PutEventTypeCommand";
import { PutExternalModelCommandInput, PutExternalModelCommandOutput } from "../commands/PutExternalModelCommand";
import {
  PutKMSEncryptionKeyCommandInput,
  PutKMSEncryptionKeyCommandOutput,
} from "../commands/PutKMSEncryptionKeyCommand";
import { PutLabelCommandInput, PutLabelCommandOutput } from "../commands/PutLabelCommand";
import { PutOutcomeCommandInput, PutOutcomeCommandOutput } from "../commands/PutOutcomeCommand";
import { SendEventCommandInput, SendEventCommandOutput } from "../commands/SendEventCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDetectorVersionCommandInput,
  UpdateDetectorVersionCommandOutput,
} from "../commands/UpdateDetectorVersionCommand";
import {
  UpdateDetectorVersionMetadataCommandInput,
  UpdateDetectorVersionMetadataCommandOutput,
} from "../commands/UpdateDetectorVersionMetadataCommand";
import {
  UpdateDetectorVersionStatusCommandInput,
  UpdateDetectorVersionStatusCommandOutput,
} from "../commands/UpdateDetectorVersionStatusCommand";
import { UpdateEventLabelCommandInput, UpdateEventLabelCommandOutput } from "../commands/UpdateEventLabelCommand";
import { UpdateListCommandInput, UpdateListCommandOutput } from "../commands/UpdateListCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "../commands/UpdateModelCommand";
import { UpdateModelVersionCommandInput, UpdateModelVersionCommandOutput } from "../commands/UpdateModelVersionCommand";
import {
  UpdateModelVersionStatusCommandInput,
  UpdateModelVersionStatusCommandOutput,
} from "../commands/UpdateModelVersionStatusCommand";
import { UpdateRuleMetadataCommandInput, UpdateRuleMetadataCommandOutput } from "../commands/UpdateRuleMetadataCommand";
import { UpdateRuleVersionCommandInput, UpdateRuleVersionCommandOutput } from "../commands/UpdateRuleVersionCommand";
import { UpdateVariableCommandInput, UpdateVariableCommandOutput } from "../commands/UpdateVariableCommand";
import { FraudDetectorServiceException as __BaseException } from "../models/FraudDetectorServiceException";
import {
  AccessDeniedException,
  AggregatedLogOddsMetric,
  AggregatedVariablesImpactExplanation,
  AggregatedVariablesImportanceMetrics,
  ATIMetricDataPoint,
  ATIModelPerformance,
  ATITrainingMetricsValue,
  BatchCreateVariableRequest,
  BatchGetVariableRequest,
  CancelBatchImportJobRequest,
  CancelBatchPredictionJobRequest,
  ConflictException,
  CreateBatchImportJobRequest,
  CreateBatchPredictionJobRequest,
  CreateDetectorVersionRequest,
  CreateListRequest,
  CreateModelRequest,
  CreateModelVersionRequest,
  CreateRuleRequest,
  CreateVariableRequest,
  DeleteBatchImportJobRequest,
  DeleteBatchPredictionJobRequest,
  DeleteDetectorRequest,
  DeleteDetectorVersionRequest,
  DeleteEntityTypeRequest,
  DeleteEventRequest,
  DeleteEventsByEventTypeRequest,
  DeleteEventTypeRequest,
  DeleteExternalModelRequest,
  DeleteLabelRequest,
  DeleteListRequest,
  DeleteModelRequest,
  DeleteModelVersionRequest,
  DeleteOutcomeRequest,
  DeleteRuleRequest,
  DeleteVariableRequest,
  DescribeDetectorRequest,
  DescribeModelVersionsRequest,
  DescribeModelVersionsResult,
  Entity,
  EvaluatedModelVersion,
  EventOrchestration,
  ExternalEventsDetail,
  FilterCondition,
  GetBatchImportJobsRequest,
  GetBatchPredictionJobsRequest,
  GetDeleteEventsByEventTypeStatusRequest,
  GetDetectorsRequest,
  GetDetectorVersionRequest,
  GetEntityTypesRequest,
  GetEventPredictionMetadataRequest,
  GetEventPredictionMetadataResult,
  GetEventPredictionRequest,
  GetEventPredictionResult,
  GetEventRequest,
  GetEventTypesRequest,
  GetExternalModelsRequest,
  GetLabelsRequest,
  GetListElementsRequest,
  GetListsMetadataRequest,
  GetModelsRequest,
  GetModelVersionRequest,
  GetOutcomesRequest,
  GetRulesRequest,
  GetVariablesRequest,
  IngestedEventsDetail,
  IngestedEventsTimeWindow,
  InternalServerException,
  LabelSchema,
  ListEventPredictionsRequest,
  ListTagsForResourceRequest,
  LogOddsMetric,
  MetricDataPoint,
  ModelEndpointDataBlob,
  ModelInputConfiguration,
  ModelOutputConfiguration,
  ModelScores,
  ModelVersion,
  ModelVersionDetail,
  ModelVersionEvaluation,
  OFIMetricDataPoint,
  OFIModelPerformance,
  OFITrainingMetricsValue,
  PredictionExplanations,
  PredictionTimeRange,
  PutDetectorRequest,
  PutEntityTypeRequest,
  PutEventTypeRequest,
  PutExternalModelRequest,
  PutKMSEncryptionKeyRequest,
  PutLabelRequest,
  PutOutcomeRequest,
  ResourceNotFoundException,
  ResourceUnavailableException,
  Rule,
  SendEventRequest,
  Tag,
  TagResourceRequest,
  TFIMetricDataPoint,
  TFIModelPerformance,
  TFITrainingMetricsValue,
  ThrottlingException,
  TrainingDataSchema,
  TrainingMetrics,
  TrainingMetricsV2,
  TrainingResult,
  TrainingResultV2,
  UncertaintyRange,
  UntagResourceRequest,
  UpdateDetectorVersionMetadataRequest,
  UpdateDetectorVersionRequest,
  UpdateDetectorVersionStatusRequest,
  UpdateEventLabelRequest,
  UpdateListRequest,
  UpdateModelRequest,
  UpdateModelVersionRequest,
  UpdateModelVersionStatusRequest,
  UpdateRuleMetadataRequest,
  UpdateRuleVersionRequest,
  UpdateVariableRequest,
  ValidationException,
  VariableEntry,
  VariableImpactExplanation,
  VariableImportanceMetrics,
} from "../models/models_0";

/**
 * serializeAws_json1_1BatchCreateVariableCommand
 */
export const se_BatchCreateVariableCommand = async (
  input: BatchCreateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchCreateVariable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetVariableCommand
 */
export const se_BatchGetVariableCommand = async (
  input: BatchGetVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetVariable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelBatchImportJobCommand
 */
export const se_CancelBatchImportJobCommand = async (
  input: CancelBatchImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelBatchImportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelBatchPredictionJobCommand
 */
export const se_CancelBatchPredictionJobCommand = async (
  input: CancelBatchPredictionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelBatchPredictionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBatchImportJobCommand
 */
export const se_CreateBatchImportJobCommand = async (
  input: CreateBatchImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBatchImportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBatchPredictionJobCommand
 */
export const se_CreateBatchPredictionJobCommand = async (
  input: CreateBatchPredictionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBatchPredictionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDetectorVersionCommand
 */
export const se_CreateDetectorVersionCommand = async (
  input: CreateDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDetectorVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateListCommand
 */
export const se_CreateListCommand = async (
  input: CreateListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelCommand
 */
export const se_CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelVersionCommand
 */
export const se_CreateModelVersionCommand = async (
  input: CreateModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRuleCommand
 */
export const se_CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateVariableCommand
 */
export const se_CreateVariableCommand = async (
  input: CreateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVariable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBatchImportJobCommand
 */
export const se_DeleteBatchImportJobCommand = async (
  input: DeleteBatchImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBatchImportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBatchPredictionJobCommand
 */
export const se_DeleteBatchPredictionJobCommand = async (
  input: DeleteBatchPredictionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBatchPredictionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDetectorCommand
 */
export const se_DeleteDetectorCommand = async (
  input: DeleteDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDetector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDetectorVersionCommand
 */
export const se_DeleteDetectorVersionCommand = async (
  input: DeleteDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDetectorVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEntityTypeCommand
 */
export const se_DeleteEntityTypeCommand = async (
  input: DeleteEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEntityType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventCommand
 */
export const se_DeleteEventCommand = async (
  input: DeleteEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEvent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventsByEventTypeCommand
 */
export const se_DeleteEventsByEventTypeCommand = async (
  input: DeleteEventsByEventTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEventsByEventType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventTypeCommand
 */
export const se_DeleteEventTypeCommand = async (
  input: DeleteEventTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEventType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteExternalModelCommand
 */
export const se_DeleteExternalModelCommand = async (
  input: DeleteExternalModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteExternalModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLabelCommand
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
 * serializeAws_json1_1DeleteListCommand
 */
export const se_DeleteListCommand = async (
  input: DeleteListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelCommand
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
 * serializeAws_json1_1DeleteModelVersionCommand
 */
export const se_DeleteModelVersionCommand = async (
  input: DeleteModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteOutcomeCommand
 */
export const se_DeleteOutcomeCommand = async (
  input: DeleteOutcomeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOutcome");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVariableCommand
 */
export const se_DeleteVariableCommand = async (
  input: DeleteVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVariable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDetectorCommand
 */
export const se_DescribeDetectorCommand = async (
  input: DescribeDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDetector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelVersionsCommand
 */
export const se_DescribeModelVersionsCommand = async (
  input: DescribeModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBatchImportJobsCommand
 */
export const se_GetBatchImportJobsCommand = async (
  input: GetBatchImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBatchImportJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBatchPredictionJobsCommand
 */
export const se_GetBatchPredictionJobsCommand = async (
  input: GetBatchPredictionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBatchPredictionJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeleteEventsByEventTypeStatusCommand
 */
export const se_GetDeleteEventsByEventTypeStatusCommand = async (
  input: GetDeleteEventsByEventTypeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeleteEventsByEventTypeStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDetectorsCommand
 */
export const se_GetDetectorsCommand = async (
  input: GetDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDetectors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDetectorVersionCommand
 */
export const se_GetDetectorVersionCommand = async (
  input: GetDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDetectorVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEntityTypesCommand
 */
export const se_GetEntityTypesCommand = async (
  input: GetEntityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEntityTypes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventCommand
 */
export const se_GetEventCommand = async (
  input: GetEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEvent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventPredictionCommand
 */
export const se_GetEventPredictionCommand = async (
  input: GetEventPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEventPrediction");
  let body: any;
  body = JSON.stringify(se_GetEventPredictionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventPredictionMetadataCommand
 */
export const se_GetEventPredictionMetadataCommand = async (
  input: GetEventPredictionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEventPredictionMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventTypesCommand
 */
export const se_GetEventTypesCommand = async (
  input: GetEventTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEventTypes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetExternalModelsCommand
 */
export const se_GetExternalModelsCommand = async (
  input: GetExternalModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetExternalModels");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetKMSEncryptionKeyCommand
 */
export const se_GetKMSEncryptionKeyCommand = async (
  input: GetKMSEncryptionKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetKMSEncryptionKey");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLabelsCommand
 */
export const se_GetLabelsCommand = async (
  input: GetLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLabels");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetListElementsCommand
 */
export const se_GetListElementsCommand = async (
  input: GetListElementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetListElements");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetListsMetadataCommand
 */
export const se_GetListsMetadataCommand = async (
  input: GetListsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetListsMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetModelsCommand
 */
export const se_GetModelsCommand = async (
  input: GetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetModels");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetModelVersionCommand
 */
export const se_GetModelVersionCommand = async (
  input: GetModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetModelVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOutcomesCommand
 */
export const se_GetOutcomesCommand = async (
  input: GetOutcomesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOutcomes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRulesCommand
 */
export const se_GetRulesCommand = async (
  input: GetRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRules");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetVariablesCommand
 */
export const se_GetVariablesCommand = async (
  input: GetVariablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetVariables");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEventPredictionsCommand
 */
export const se_ListEventPredictionsCommand = async (
  input: ListEventPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEventPredictions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
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
 * serializeAws_json1_1PutDetectorCommand
 */
export const se_PutDetectorCommand = async (
  input: PutDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutDetector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutEntityTypeCommand
 */
export const se_PutEntityTypeCommand = async (
  input: PutEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutEntityType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutEventTypeCommand
 */
export const se_PutEventTypeCommand = async (
  input: PutEventTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutEventType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutExternalModelCommand
 */
export const se_PutExternalModelCommand = async (
  input: PutExternalModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutExternalModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutKMSEncryptionKeyCommand
 */
export const se_PutKMSEncryptionKeyCommand = async (
  input: PutKMSEncryptionKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutKMSEncryptionKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutLabelCommand
 */
export const se_PutLabelCommand = async (
  input: PutLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutLabel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutOutcomeCommand
 */
export const se_PutOutcomeCommand = async (
  input: PutOutcomeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutOutcome");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendEventCommand
 */
export const se_SendEventCommand = async (
  input: SendEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendEvent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
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
 * serializeAws_json1_1UntagResourceCommand
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
 * serializeAws_json1_1UpdateDetectorVersionCommand
 */
export const se_UpdateDetectorVersionCommand = async (
  input: UpdateDetectorVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDetectorVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDetectorVersionMetadataCommand
 */
export const se_UpdateDetectorVersionMetadataCommand = async (
  input: UpdateDetectorVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDetectorVersionMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDetectorVersionStatusCommand
 */
export const se_UpdateDetectorVersionStatusCommand = async (
  input: UpdateDetectorVersionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDetectorVersionStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEventLabelCommand
 */
export const se_UpdateEventLabelCommand = async (
  input: UpdateEventLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEventLabel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateListCommand
 */
export const se_UpdateListCommand = async (
  input: UpdateListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateModelCommand
 */
export const se_UpdateModelCommand = async (
  input: UpdateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateModelVersionCommand
 */
export const se_UpdateModelVersionCommand = async (
  input: UpdateModelVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateModelVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateModelVersionStatusCommand
 */
export const se_UpdateModelVersionStatusCommand = async (
  input: UpdateModelVersionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateModelVersionStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRuleMetadataCommand
 */
export const se_UpdateRuleMetadataCommand = async (
  input: UpdateRuleMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRuleMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRuleVersionCommand
 */
export const se_UpdateRuleVersionCommand = async (
  input: UpdateRuleVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRuleVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVariableCommand
 */
export const se_UpdateVariableCommand = async (
  input: UpdateVariableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateVariable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1BatchCreateVariableCommand
 */
export const de_BatchCreateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchCreateVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchCreateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchCreateVariableCommandError
 */
const de_BatchCreateVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateVariableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1BatchGetVariableCommand
 */
export const de_BatchGetVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchGetVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetVariableCommandError
 */
const de_BatchGetVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVariableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CancelBatchImportJobCommand
 */
export const de_CancelBatchImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelBatchImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelBatchImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelBatchImportJobCommandError
 */
const de_CancelBatchImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CancelBatchPredictionJobCommand
 */
export const de_CancelBatchPredictionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchPredictionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelBatchPredictionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelBatchPredictionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelBatchPredictionJobCommandError
 */
const de_CancelBatchPredictionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelBatchPredictionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateBatchImportJobCommand
 */
export const de_CreateBatchImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBatchImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateBatchImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateBatchImportJobCommandError
 */
const de_CreateBatchImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateBatchPredictionJobCommand
 */
export const de_CreateBatchPredictionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBatchPredictionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateBatchPredictionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateBatchPredictionJobCommandError
 */
const de_CreateBatchPredictionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateDetectorVersionCommand
 */
export const de_CreateDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDetectorVersionCommandError
 */
const de_CreateDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateListCommand
 */
export const de_CreateListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateListCommandError
 */
const de_CreateListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateModelCommand
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
 * deserializeAws_json1_1CreateModelCommandError
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
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateModelVersionCommand
 */
export const de_CreateModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelVersionCommandError
 */
const de_CreateModelVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateRuleCommand
 */
export const de_CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateRuleCommandError
 */
const de_CreateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1CreateVariableCommand
 */
export const de_CreateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateVariableCommandError
 */
const de_CreateVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVariableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteBatchImportJobCommand
 */
export const de_DeleteBatchImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBatchImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteBatchImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteBatchImportJobCommandError
 */
const de_DeleteBatchImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteBatchPredictionJobCommand
 */
export const de_DeleteBatchPredictionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBatchPredictionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteBatchPredictionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteBatchPredictionJobCommandError
 */
const de_DeleteBatchPredictionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteDetectorCommand
 */
export const de_DeleteDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDetectorCommandError
 */
const de_DeleteDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteDetectorVersionCommand
 */
export const de_DeleteDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDetectorVersionCommandError
 */
const de_DeleteDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteEntityTypeCommand
 */
export const de_DeleteEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEntityTypeCommandError
 */
const de_DeleteEntityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEntityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteEventCommand
 */
export const de_DeleteEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEventCommandError
 */
const de_DeleteEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteEventsByEventTypeCommand
 */
export const de_DeleteEventsByEventTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventsByEventTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventsByEventTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteEventsByEventTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEventsByEventTypeCommandError
 */
const de_DeleteEventsByEventTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventsByEventTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteEventTypeCommand
 */
export const de_DeleteEventTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteEventTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEventTypeCommandError
 */
const de_DeleteEventTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteExternalModelCommand
 */
export const de_DeleteExternalModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExternalModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteExternalModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteExternalModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteExternalModelCommandError
 */
const de_DeleteExternalModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExternalModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteLabelCommand
 */
export const de_DeleteLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteLabelCommandError
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
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteListCommand
 */
export const de_DeleteListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteListCommandError
 */
const de_DeleteListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteModelCommand
 */
export const de_DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelCommandError
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
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteModelVersionCommand
 */
export const de_DeleteModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelVersionCommandError
 */
const de_DeleteModelVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteOutcomeCommand
 */
export const de_DeleteOutcomeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutcomeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOutcomeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteOutcomeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteOutcomeCommandError
 */
const de_DeleteOutcomeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutcomeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteRuleCommand
 */
export const de_DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteRuleCommandError
 */
const de_DeleteRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DeleteVariableCommand
 */
export const de_DeleteVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteVariableCommandError
 */
const de_DeleteVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVariableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DescribeDetectorCommand
 */
export const de_DescribeDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDetectorCommandError
 */
const de_DescribeDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1DescribeModelVersionsCommand
 */
export const de_DescribeModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeModelVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelVersionsResult(data, context);
  const response: DescribeModelVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelVersionsCommandError
 */
const de_DescribeModelVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetBatchImportJobsCommand
 */
export const de_GetBatchImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBatchImportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetBatchImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetBatchImportJobsCommandError
 */
const de_GetBatchImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetBatchPredictionJobsCommand
 */
export const de_GetBatchPredictionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBatchPredictionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetBatchPredictionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetBatchPredictionJobsCommandError
 */
const de_GetBatchPredictionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetDeleteEventsByEventTypeStatusCommand
 */
export const de_GetDeleteEventsByEventTypeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeleteEventsByEventTypeStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeleteEventsByEventTypeStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDeleteEventsByEventTypeStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDeleteEventsByEventTypeStatusCommandError
 */
const de_GetDeleteEventsByEventTypeStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeleteEventsByEventTypeStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetDetectorsCommand
 */
export const de_GetDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDetectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDetectorsCommandError
 */
const de_GetDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetDetectorVersionCommand
 */
export const de_GetDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDetectorVersionCommandError
 */
const de_GetDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetEntityTypesCommand
 */
export const de_GetEntityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntityTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEntityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetEntityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetEntityTypesCommandError
 */
const de_GetEntityTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntityTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetEventCommand
 */
export const de_GetEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEventCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetEventCommandError
 */
const de_GetEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetEventPredictionCommand
 */
export const de_GetEventPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventPredictionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEventPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEventPredictionResult(data, context);
  const response: GetEventPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetEventPredictionCommandError
 */
const de_GetEventPredictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventPredictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.frauddetector#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetEventPredictionMetadataCommand
 */
export const de_GetEventPredictionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventPredictionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEventPredictionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEventPredictionMetadataResult(data, context);
  const response: GetEventPredictionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetEventPredictionMetadataCommandError
 */
const de_GetEventPredictionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventPredictionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetEventTypesCommand
 */
export const de_GetEventTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEventTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetEventTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetEventTypesCommandError
 */
const de_GetEventTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetExternalModelsCommand
 */
export const de_GetExternalModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetExternalModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetExternalModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetExternalModelsCommandError
 */
const de_GetExternalModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExternalModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetKMSEncryptionKeyCommand
 */
export const de_GetKMSEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKMSEncryptionKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetKMSEncryptionKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetKMSEncryptionKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetKMSEncryptionKeyCommandError
 */
const de_GetKMSEncryptionKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKMSEncryptionKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetLabelsCommand
 */
export const de_GetLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetLabelsCommandError
 */
const de_GetLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetListElementsCommand
 */
export const de_GetListElementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetListElementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetListElementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetListElementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetListElementsCommandError
 */
const de_GetListElementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetListElementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetListsMetadataCommand
 */
export const de_GetListsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetListsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetListsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetListsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetListsMetadataCommandError
 */
const de_GetListsMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetListsMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetModelsCommand
 */
export const de_GetModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetModelsCommandError
 */
const de_GetModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetModelVersionCommand
 */
export const de_GetModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetModelVersionCommandError
 */
const de_GetModelVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetOutcomesCommand
 */
export const de_GetOutcomesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutcomesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOutcomesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetOutcomesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetOutcomesCommandError
 */
const de_GetOutcomesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutcomesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetRulesCommand
 */
export const de_GetRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetRulesCommandError
 */
const de_GetRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1GetVariablesCommand
 */
export const de_GetVariablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetVariablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetVariablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetVariablesCommandError
 */
const de_GetVariablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVariablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1ListEventPredictionsCommand
 */
export const de_ListEventPredictionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventPredictionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEventPredictionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListEventPredictionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEventPredictionsCommandError
 */
const de_ListEventPredictionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventPredictionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutDetectorCommand
 */
export const de_PutDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutDetectorCommandError
 */
const de_PutDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutEntityTypeCommand
 */
export const de_PutEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutEntityTypeCommandError
 */
const de_PutEntityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEntityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutEventTypeCommand
 */
export const de_PutEventTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutEventTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutEventTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutEventTypeCommandError
 */
const de_PutEventTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutExternalModelCommand
 */
export const de_PutExternalModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutExternalModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutExternalModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutExternalModelCommandError
 */
const de_PutExternalModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutExternalModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutKMSEncryptionKeyCommand
 */
export const de_PutKMSEncryptionKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKMSEncryptionKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutKMSEncryptionKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutKMSEncryptionKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutKMSEncryptionKeyCommandError
 */
const de_PutKMSEncryptionKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKMSEncryptionKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutLabelCommand
 */
export const de_PutLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutLabelCommandError
 */
const de_PutLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1PutOutcomeCommand
 */
export const de_PutOutcomeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOutcomeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutOutcomeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutOutcomeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutOutcomeCommandError
 */
const de_PutOutcomeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOutcomeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1SendEventCommand
 */
export const de_SendEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendEventCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SendEventCommandError
 */
const de_SendEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateDetectorVersionCommand
 */
export const de_UpdateDetectorVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDetectorVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDetectorVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDetectorVersionCommandError
 */
const de_UpdateDetectorVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateDetectorVersionMetadataCommand
 */
export const de_UpdateDetectorVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDetectorVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDetectorVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDetectorVersionMetadataCommandError
 */
const de_UpdateDetectorVersionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateDetectorVersionStatusCommand
 */
export const de_UpdateDetectorVersionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDetectorVersionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDetectorVersionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDetectorVersionStatusCommandError
 */
const de_UpdateDetectorVersionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorVersionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateEventLabelCommand
 */
export const de_UpdateEventLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEventLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateEventLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateEventLabelCommandError
 */
const de_UpdateEventLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateListCommand
 */
export const de_UpdateListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateListCommandError
 */
const de_UpdateListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateModelCommand
 */
export const de_UpdateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateModelCommandError
 */
const de_UpdateModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateModelVersionCommand
 */
export const de_UpdateModelVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateModelVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateModelVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateModelVersionCommandError
 */
const de_UpdateModelVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateModelVersionStatusCommand
 */
export const de_UpdateModelVersionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateModelVersionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateModelVersionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateModelVersionStatusCommandError
 */
const de_UpdateModelVersionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelVersionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateRuleMetadataCommand
 */
export const de_UpdateRuleMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRuleMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateRuleMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateRuleMetadataCommandError
 */
const de_UpdateRuleMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateRuleVersionCommand
 */
export const de_UpdateRuleVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRuleVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateRuleVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateRuleVersionCommandError
 */
const de_UpdateRuleVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1UpdateVariableCommand
 */
export const de_UpdateVariableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVariableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVariableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateVariableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateVariableCommandError
 */
const de_UpdateVariableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVariableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.frauddetector#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.frauddetector#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.frauddetector#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.frauddetector#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.frauddetector#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.frauddetector#ValidationException":
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
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
 * deserializeAws_json1_1ConflictExceptionRes
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
 * deserializeAws_json1_1InternalServerExceptionRes
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
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_1ResourceUnavailableExceptionRes
 */
const de_ResourceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceUnavailableException({
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
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
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

// se_BatchCreateVariableRequest omitted.

// se_BatchGetVariableRequest omitted.

// se_CancelBatchImportJobRequest omitted.

// se_CancelBatchPredictionJobRequest omitted.

// se_CreateBatchImportJobRequest omitted.

// se_CreateBatchPredictionJobRequest omitted.

// se_CreateDetectorVersionRequest omitted.

// se_CreateListRequest omitted.

// se_CreateModelRequest omitted.

// se_CreateModelVersionRequest omitted.

// se_CreateRuleRequest omitted.

// se_CreateVariableRequest omitted.

// se_CsvIndexToVariableMap omitted.

// se_DeleteBatchImportJobRequest omitted.

// se_DeleteBatchPredictionJobRequest omitted.

// se_DeleteDetectorRequest omitted.

// se_DeleteDetectorVersionRequest omitted.

// se_DeleteEntityTypeRequest omitted.

// se_DeleteEventRequest omitted.

// se_DeleteEventsByEventTypeRequest omitted.

// se_DeleteEventTypeRequest omitted.

// se_DeleteExternalModelRequest omitted.

// se_DeleteLabelRequest omitted.

// se_DeleteListRequest omitted.

// se_DeleteModelRequest omitted.

// se_DeleteModelVersionRequest omitted.

// se_DeleteOutcomeRequest omitted.

// se_DeleteRuleRequest omitted.

// se_DeleteVariableRequest omitted.

// se_DescribeDetectorRequest omitted.

// se_DescribeModelVersionsRequest omitted.

// se_ElementsList omitted.

// se_Entity omitted.

// se_EventOrchestration omitted.

// se_EventVariableMap omitted.

// se_ExternalEventsDetail omitted.

/**
 * serializeAws_json1_1ExternalModelEndpointDataBlobMap
 */
const se_ExternalModelEndpointDataBlobMap = (
  input: Record<string, ModelEndpointDataBlob>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ModelEndpointDataBlob(value, context);
    return acc;
  }, {});
};

// se_FilterCondition omitted.

// se_GetBatchImportJobsRequest omitted.

// se_GetBatchPredictionJobsRequest omitted.

// se_GetDeleteEventsByEventTypeStatusRequest omitted.

// se_GetDetectorsRequest omitted.

// se_GetDetectorVersionRequest omitted.

// se_GetEntityTypesRequest omitted.

// se_GetEventPredictionMetadataRequest omitted.

/**
 * serializeAws_json1_1GetEventPredictionRequest
 */
const se_GetEventPredictionRequest = (input: GetEventPredictionRequest, context: __SerdeContext): any => {
  return take(input, {
    detectorId: [],
    detectorVersionId: [],
    entities: _json,
    eventId: [],
    eventTimestamp: [],
    eventTypeName: [],
    eventVariables: _json,
    externalModelEndpointDataBlobs: (_) => se_ExternalModelEndpointDataBlobMap(_, context),
  });
};

// se_GetEventRequest omitted.

// se_GetEventTypesRequest omitted.

// se_GetExternalModelsRequest omitted.

// se_GetLabelsRequest omitted.

// se_GetListElementsRequest omitted.

// se_GetListsMetadataRequest omitted.

// se_GetModelsRequest omitted.

// se_GetModelVersionRequest omitted.

// se_GetOutcomesRequest omitted.

// se_GetRulesRequest omitted.

// se_GetVariablesRequest omitted.

// se_IngestedEventsDetail omitted.

// se_IngestedEventsTimeWindow omitted.

// se_JsonKeyToVariableMap omitted.

// se_labelMapper omitted.

// se_LabelSchema omitted.

// se_ListEventPredictionsRequest omitted.

// se_listOfEntities omitted.

// se_ListOfModelVersions omitted.

// se_ListOfStrings omitted.

// se_ListTagsForResourceRequest omitted.

/**
 * serializeAws_json1_1ModelEndpointDataBlob
 */
const se_ModelEndpointDataBlob = (input: ModelEndpointDataBlob, context: __SerdeContext): any => {
  return take(input, {
    byteBuffer: context.base64Encoder,
    contentType: [],
  });
};

// se_ModelInputConfiguration omitted.

// se_ModelOutputConfiguration omitted.

// se_ModelVersion omitted.

// se_NameList omitted.

// se_NonEmptyListOfStrings omitted.

// se_PredictionTimeRange omitted.

// se_PutDetectorRequest omitted.

// se_PutEntityTypeRequest omitted.

// se_PutEventTypeRequest omitted.

// se_PutExternalModelRequest omitted.

// se_PutKMSEncryptionKeyRequest omitted.

// se_PutLabelRequest omitted.

// se_PutOutcomeRequest omitted.

// se_Rule omitted.

// se_RuleList omitted.

// se_SendEventRequest omitted.

// se_Tag omitted.

// se_tagKeyList omitted.

// se_tagList omitted.

// se_TagResourceRequest omitted.

// se_TrainingDataSchema omitted.

// se_UntagResourceRequest omitted.

// se_UpdateDetectorVersionMetadataRequest omitted.

// se_UpdateDetectorVersionRequest omitted.

// se_UpdateDetectorVersionStatusRequest omitted.

// se_UpdateEventLabelRequest omitted.

// se_UpdateListRequest omitted.

// se_UpdateModelRequest omitted.

// se_UpdateModelVersionRequest omitted.

// se_UpdateModelVersionStatusRequest omitted.

// se_UpdateRuleMetadataRequest omitted.

// se_UpdateRuleVersionRequest omitted.

// se_UpdateVariableRequest omitted.

// se_VariableEntry omitted.

// se_VariableEntryList omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_1AggregatedLogOddsMetric
 */
const de_AggregatedLogOddsMetric = (output: any, context: __SerdeContext): AggregatedLogOddsMetric => {
  return take(output, {
    aggregatedVariablesImportance: __limitedParseFloat32,
    variableNames: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1AggregatedVariablesImpactExplanation
 */
const de_AggregatedVariablesImpactExplanation = (
  output: any,
  context: __SerdeContext
): AggregatedVariablesImpactExplanation => {
  return take(output, {
    eventVariableNames: _json,
    logOddsImpact: __limitedParseFloat32,
    relativeImpact: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AggregatedVariablesImportanceMetrics
 */
const de_AggregatedVariablesImportanceMetrics = (
  output: any,
  context: __SerdeContext
): AggregatedVariablesImportanceMetrics => {
  return take(output, {
    logOddsMetrics: (_: any) => de_ListOfAggregatedLogOddsMetrics(_, context),
  }) as any;
};

// de_AllowDenyList omitted.

// de_AllowDenyLists omitted.

/**
 * deserializeAws_json1_1ATIMetricDataPoint
 */
const de_ATIMetricDataPoint = (output: any, context: __SerdeContext): ATIMetricDataPoint => {
  return take(output, {
    adr: __limitedParseFloat32,
    atodr: __limitedParseFloat32,
    cr: __limitedParseFloat32,
    threshold: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1ATIMetricDataPointsList
 */
const de_ATIMetricDataPointsList = (output: any, context: __SerdeContext): ATIMetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ATIMetricDataPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ATIModelPerformance
 */
const de_ATIModelPerformance = (output: any, context: __SerdeContext): ATIModelPerformance => {
  return take(output, {
    asi: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1ATITrainingMetricsValue
 */
const de_ATITrainingMetricsValue = (output: any, context: __SerdeContext): ATITrainingMetricsValue => {
  return take(output, {
    metricDataPoints: (_: any) => de_ATIMetricDataPointsList(_, context),
    modelPerformance: (_: any) => de_ATIModelPerformance(_, context),
  }) as any;
};

// de_BatchCreateVariableError omitted.

// de_BatchCreateVariableErrorList omitted.

// de_BatchCreateVariableResult omitted.

// de_BatchGetVariableError omitted.

// de_BatchGetVariableErrorList omitted.

// de_BatchGetVariableResult omitted.

// de_BatchImport omitted.

// de_BatchImportList omitted.

// de_BatchPrediction omitted.

// de_BatchPredictionList omitted.

// de_CancelBatchImportJobResult omitted.

// de_CancelBatchPredictionJobResult omitted.

// de_ConflictException omitted.

// de_CreateBatchImportJobResult omitted.

// de_CreateBatchPredictionJobResult omitted.

// de_CreateDetectorVersionResult omitted.

// de_CreateListResult omitted.

// de_CreateModelResult omitted.

// de_CreateModelVersionResult omitted.

// de_CreateRuleResult omitted.

// de_CreateVariableResult omitted.

// de_CsvIndexToVariableMap omitted.

// de_DataValidationMetrics omitted.

// de_DeleteBatchImportJobResult omitted.

// de_DeleteBatchPredictionJobResult omitted.

// de_DeleteDetectorResult omitted.

// de_DeleteDetectorVersionResult omitted.

// de_DeleteEntityTypeResult omitted.

// de_DeleteEventResult omitted.

// de_DeleteEventsByEventTypeResult omitted.

// de_DeleteEventTypeResult omitted.

// de_DeleteExternalModelResult omitted.

// de_DeleteLabelResult omitted.

// de_DeleteListResult omitted.

// de_DeleteModelResult omitted.

// de_DeleteModelVersionResult omitted.

// de_DeleteOutcomeResult omitted.

// de_DeleteRuleResult omitted.

// de_DeleteVariableResult omitted.

// de_DescribeDetectorResult omitted.

/**
 * deserializeAws_json1_1DescribeModelVersionsResult
 */
const de_DescribeModelVersionsResult = (output: any, context: __SerdeContext): DescribeModelVersionsResult => {
  return take(output, {
    modelVersionDetails: (_: any) => de_modelVersionDetailList(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_Detector omitted.

// de_DetectorList omitted.

// de_DetectorVersionSummary omitted.

// de_DetectorVersionSummaryList omitted.

// de_ElementsList omitted.

// de_Entity omitted.

// de_EntityType omitted.

// de_entityTypeList omitted.

// de_EvaluatedExternalModel omitted.

/**
 * deserializeAws_json1_1EvaluatedModelVersion
 */
const de_EvaluatedModelVersion = (output: any, context: __SerdeContext): EvaluatedModelVersion => {
  return take(output, {
    evaluations: (_: any) => de_ListOfModelVersionEvaluations(_, context),
    modelId: __expectString,
    modelType: __expectString,
    modelVersion: __expectString,
  }) as any;
};

// de_EvaluatedRule omitted.

// de_EvaluatedRuleList omitted.

// de_Event omitted.

// de_EventAttributeMap omitted.

// de_EventOrchestration omitted.

// de_EventPredictionSummary omitted.

// de_EventType omitted.

// de_eventTypeList omitted.

// de_EventVariableSummary omitted.

// de_ExternalEventsDetail omitted.

// de_ExternalModel omitted.

// de_ExternalModelList omitted.

// de_ExternalModelOutputs omitted.

// de_ExternalModelPredictionMap omitted.

// de_ExternalModelSummary omitted.

// de_FieldValidationMessage omitted.

// de_fieldValidationMessageList omitted.

// de_FileValidationMessage omitted.

// de_fileValidationMessageList omitted.

// de_GetBatchImportJobsResult omitted.

// de_GetBatchPredictionJobsResult omitted.

// de_GetDeleteEventsByEventTypeStatusResult omitted.

// de_GetDetectorsResult omitted.

// de_GetDetectorVersionResult omitted.

// de_GetEntityTypesResult omitted.

/**
 * deserializeAws_json1_1GetEventPredictionMetadataResult
 */
const de_GetEventPredictionMetadataResult = (
  output: any,
  context: __SerdeContext
): GetEventPredictionMetadataResult => {
  return take(output, {
    detectorId: __expectString,
    detectorVersionId: __expectString,
    detectorVersionStatus: __expectString,
    entityId: __expectString,
    entityType: __expectString,
    evaluatedExternalModels: _json,
    evaluatedModelVersions: (_: any) => de_ListOfEvaluatedModelVersions(_, context),
    eventId: __expectString,
    eventTimestamp: __expectString,
    eventTypeName: __expectString,
    eventVariables: _json,
    outcomes: _json,
    predictionTimestamp: __expectString,
    ruleExecutionMode: __expectString,
    rules: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetEventPredictionResult
 */
const de_GetEventPredictionResult = (output: any, context: __SerdeContext): GetEventPredictionResult => {
  return take(output, {
    externalModelOutputs: _json,
    modelScores: (_: any) => de_ListOfModelScores(_, context),
    ruleResults: _json,
  }) as any;
};

// de_GetEventResult omitted.

// de_GetEventTypesResult omitted.

// de_GetExternalModelsResult omitted.

// de_GetKMSEncryptionKeyResult omitted.

// de_GetLabelsResult omitted.

// de_GetListElementsResult omitted.

// de_GetListsMetadataResult omitted.

// de_GetModelsResult omitted.

// de_GetModelVersionResult omitted.

// de_GetOutcomesResult omitted.

// de_GetRulesResult omitted.

// de_GetVariablesResult omitted.

// de_IngestedEventsDetail omitted.

// de_IngestedEventStatistics omitted.

// de_IngestedEventsTimeWindow omitted.

// de_InternalServerException omitted.

// de_JsonKeyToVariableMap omitted.

// de_KMSKey omitted.

// de_Label omitted.

// de_labelList omitted.

// de_labelMapper omitted.

// de_LabelSchema omitted.

// de_ListEventPredictionsResult omitted.

/**
 * deserializeAws_json1_1ListOfAggregatedLogOddsMetrics
 */
const de_ListOfAggregatedLogOddsMetrics = (output: any, context: __SerdeContext): AggregatedLogOddsMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AggregatedLogOddsMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfAggregatedVariablesImpactExplanations
 */
const de_ListOfAggregatedVariablesImpactExplanations = (
  output: any,
  context: __SerdeContext
): AggregatedVariablesImpactExplanation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AggregatedVariablesImpactExplanation(entry, context);
    });
  return retVal;
};

// de_listOfEntities omitted.

// de_ListOfEvaluatedExternalModels omitted.

/**
 * deserializeAws_json1_1ListOfEvaluatedModelVersions
 */
const de_ListOfEvaluatedModelVersions = (output: any, context: __SerdeContext): EvaluatedModelVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EvaluatedModelVersion(entry, context);
    });
  return retVal;
};

// de_ListOfEventPredictionSummaries omitted.

// de_ListOfEventVariableSummaries omitted.

// de_ListOfExternalModelOutputs omitted.

/**
 * deserializeAws_json1_1ListOfLogOddsMetrics
 */
const de_ListOfLogOddsMetrics = (output: any, context: __SerdeContext): LogOddsMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LogOddsMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfModelScores
 */
const de_ListOfModelScores = (output: any, context: __SerdeContext): ModelScores[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelScores(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListOfModelVersionEvaluations
 */
const de_ListOfModelVersionEvaluations = (output: any, context: __SerdeContext): ModelVersionEvaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelVersionEvaluation(entry, context);
    });
  return retVal;
};

// de_ListOfModelVersions omitted.

// de_ListOfRuleResults omitted.

// de_ListOfStrings omitted.

/**
 * deserializeAws_json1_1listOfVariableImpactExplanations
 */
const de_listOfVariableImpactExplanations = (output: any, context: __SerdeContext): VariableImpactExplanation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VariableImpactExplanation(entry, context);
    });
  return retVal;
};

// de_ListTagsForResourceResult omitted.

/**
 * deserializeAws_json1_1LogOddsMetric
 */
const de_LogOddsMetric = (output: any, context: __SerdeContext): LogOddsMetric => {
  return take(output, {
    variableImportance: __limitedParseFloat32,
    variableName: __expectString,
    variableType: __expectString,
  }) as any;
};

// de_MapOfStrings omitted.

/**
 * deserializeAws_json1_1MetricDataPoint
 */
const de_MetricDataPoint = (output: any, context: __SerdeContext): MetricDataPoint => {
  return take(output, {
    fpr: __limitedParseFloat32,
    precision: __limitedParseFloat32,
    threshold: __limitedParseFloat32,
    tpr: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1metricDataPointsList
 */
const de_metricDataPointsList = (output: any, context: __SerdeContext): MetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDataPoint(entry, context);
    });
  return retVal;
};

// de_Model omitted.

// de_ModelInputConfiguration omitted.

// de_modelList omitted.

// de_ModelOutputConfiguration omitted.

/**
 * deserializeAws_json1_1ModelPredictionMap
 */
const de_ModelPredictionMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseFloat32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ModelScores
 */
const de_ModelScores = (output: any, context: __SerdeContext): ModelScores => {
  return take(output, {
    modelVersion: _json,
    scores: (_: any) => de_ModelPredictionMap(_, context),
  }) as any;
};

// de_ModelVersion omitted.

/**
 * deserializeAws_json1_1ModelVersionDetail
 */
const de_ModelVersionDetail = (output: any, context: __SerdeContext): ModelVersionDetail => {
  return take(output, {
    arn: __expectString,
    createdTime: __expectString,
    externalEventsDetail: _json,
    ingestedEventsDetail: _json,
    lastUpdatedTime: __expectString,
    modelId: __expectString,
    modelType: __expectString,
    modelVersionNumber: __expectString,
    status: __expectString,
    trainingDataSchema: _json,
    trainingDataSource: __expectString,
    trainingResult: (_: any) => de_TrainingResult(_, context),
    trainingResultV2: (_: any) => de_TrainingResultV2(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1modelVersionDetailList
 */
const de_modelVersionDetailList = (output: any, context: __SerdeContext): ModelVersionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelVersionDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelVersionEvaluation
 */
const de_ModelVersionEvaluation = (output: any, context: __SerdeContext): ModelVersionEvaluation => {
  return take(output, {
    evaluationScore: __expectString,
    outputVariableName: __expectString,
    predictionExplanations: (_: any) => de_PredictionExplanations(_, context),
  }) as any;
};

// de_NonEmptyListOfStrings omitted.

/**
 * deserializeAws_json1_1OFIMetricDataPoint
 */
const de_OFIMetricDataPoint = (output: any, context: __SerdeContext): OFIMetricDataPoint => {
  return take(output, {
    fpr: __limitedParseFloat32,
    precision: __limitedParseFloat32,
    threshold: __limitedParseFloat32,
    tpr: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1OFIMetricDataPointsList
 */
const de_OFIMetricDataPointsList = (output: any, context: __SerdeContext): OFIMetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OFIMetricDataPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OFIModelPerformance
 */
const de_OFIModelPerformance = (output: any, context: __SerdeContext): OFIModelPerformance => {
  return take(output, {
    auc: __limitedParseFloat32,
    uncertaintyRange: (_: any) => de_UncertaintyRange(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1OFITrainingMetricsValue
 */
const de_OFITrainingMetricsValue = (output: any, context: __SerdeContext): OFITrainingMetricsValue => {
  return take(output, {
    metricDataPoints: (_: any) => de_OFIMetricDataPointsList(_, context),
    modelPerformance: (_: any) => de_OFIModelPerformance(_, context),
  }) as any;
};

// de_Outcome omitted.

// de_OutcomeList omitted.

/**
 * deserializeAws_json1_1PredictionExplanations
 */
const de_PredictionExplanations = (output: any, context: __SerdeContext): PredictionExplanations => {
  return take(output, {
    aggregatedVariablesImpactExplanations: (_: any) => de_ListOfAggregatedVariablesImpactExplanations(_, context),
    variableImpactExplanations: (_: any) => de_listOfVariableImpactExplanations(_, context),
  }) as any;
};

// de_PutDetectorResult omitted.

// de_PutEntityTypeResult omitted.

// de_PutEventTypeResult omitted.

// de_PutExternalModelResult omitted.

// de_PutKMSEncryptionKeyResult omitted.

// de_PutLabelResult omitted.

// de_PutOutcomeResult omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceUnavailableException omitted.

// de_Rule omitted.

// de_RuleDetail omitted.

// de_RuleDetailList omitted.

// de_RuleList omitted.

// de_RuleResult omitted.

// de_SendEventResult omitted.

// de_Tag omitted.

// de_tagList omitted.

// de_TagResourceResult omitted.

/**
 * deserializeAws_json1_1TFIMetricDataPoint
 */
const de_TFIMetricDataPoint = (output: any, context: __SerdeContext): TFIMetricDataPoint => {
  return take(output, {
    fpr: __limitedParseFloat32,
    precision: __limitedParseFloat32,
    threshold: __limitedParseFloat32,
    tpr: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1TFIMetricDataPointsList
 */
const de_TFIMetricDataPointsList = (output: any, context: __SerdeContext): TFIMetricDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TFIMetricDataPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TFIModelPerformance
 */
const de_TFIModelPerformance = (output: any, context: __SerdeContext): TFIModelPerformance => {
  return take(output, {
    auc: __limitedParseFloat32,
    uncertaintyRange: (_: any) => de_UncertaintyRange(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TFITrainingMetricsValue
 */
const de_TFITrainingMetricsValue = (output: any, context: __SerdeContext): TFITrainingMetricsValue => {
  return take(output, {
    metricDataPoints: (_: any) => de_TFIMetricDataPointsList(_, context),
    modelPerformance: (_: any) => de_TFIModelPerformance(_, context),
  }) as any;
};

// de_ThrottlingException omitted.

// de_TrainingDataSchema omitted.

/**
 * deserializeAws_json1_1TrainingMetrics
 */
const de_TrainingMetrics = (output: any, context: __SerdeContext): TrainingMetrics => {
  return take(output, {
    auc: __limitedParseFloat32,
    metricDataPoints: (_: any) => de_metricDataPointsList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TrainingMetricsV2
 */
const de_TrainingMetricsV2 = (output: any, context: __SerdeContext): TrainingMetricsV2 => {
  return take(output, {
    ati: (_: any) => de_ATITrainingMetricsValue(_, context),
    ofi: (_: any) => de_OFITrainingMetricsValue(_, context),
    tfi: (_: any) => de_TFITrainingMetricsValue(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TrainingResult
 */
const de_TrainingResult = (output: any, context: __SerdeContext): TrainingResult => {
  return take(output, {
    dataValidationMetrics: _json,
    trainingMetrics: (_: any) => de_TrainingMetrics(_, context),
    variableImportanceMetrics: (_: any) => de_VariableImportanceMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TrainingResultV2
 */
const de_TrainingResultV2 = (output: any, context: __SerdeContext): TrainingResultV2 => {
  return take(output, {
    aggregatedVariablesImportanceMetrics: (_: any) => de_AggregatedVariablesImportanceMetrics(_, context),
    dataValidationMetrics: _json,
    trainingMetricsV2: (_: any) => de_TrainingMetricsV2(_, context),
    variableImportanceMetrics: (_: any) => de_VariableImportanceMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UncertaintyRange
 */
const de_UncertaintyRange = (output: any, context: __SerdeContext): UncertaintyRange => {
  return take(output, {
    lowerBoundValue: __limitedParseFloat32,
    upperBoundValue: __limitedParseFloat32,
  }) as any;
};

// de_UntagResourceResult omitted.

// de_UpdateDetectorVersionMetadataResult omitted.

// de_UpdateDetectorVersionResult omitted.

// de_UpdateDetectorVersionStatusResult omitted.

// de_UpdateEventLabelResult omitted.

// de_UpdateListResult omitted.

// de_UpdateModelResult omitted.

// de_UpdateModelVersionResult omitted.

// de_UpdateModelVersionStatusResult omitted.

// de_UpdateRuleMetadataResult omitted.

// de_UpdateRuleVersionResult omitted.

// de_UpdateVariableResult omitted.

// de_ValidationException omitted.

// de_Variable omitted.

/**
 * deserializeAws_json1_1VariableImpactExplanation
 */
const de_VariableImpactExplanation = (output: any, context: __SerdeContext): VariableImpactExplanation => {
  return take(output, {
    eventVariableName: __expectString,
    logOddsImpact: __limitedParseFloat32,
    relativeImpact: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1VariableImportanceMetrics
 */
const de_VariableImportanceMetrics = (output: any, context: __SerdeContext): VariableImportanceMetrics => {
  return take(output, {
    logOddsMetrics: (_: any) => de_ListOfLogOddsMetrics(_, context),
  }) as any;
};

// de_VariableList omitted.

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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSHawksNestServiceFacade.${operation}`,
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
